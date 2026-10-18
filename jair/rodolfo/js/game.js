(function () {
  'use strict';
  const C = window.RodolfoCore, $ = id => document.getElementById(id);
  const canvas = $('canvas'), ctx = canvas.getContext('2d', { alpha: false });
  const images = {}, meta = window.RODOLFO_ASSETS;
  let viewWidth = C.W;
  let world = null, phase = 'loading', last = 0, visualTime = 0, menuDistance = 0, best = 0, muted = false, soundReady = false;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { best = Math.max(0, Number(localStorage.getItem('rodolfo.best.v1')) || 0); muted = localStorage.getItem('rodolfo.muted.v1') === '1'; } catch (_) {}
  const audio = {};
  const MUSIC_VOLUME = .3;
  const music = new Audio('assets/audio/rodolfo-el-reno.mp3');
  music.preload = 'auto'; music.loop = true; music.volume = MUSIC_VOLUME;
  let musicContext = null, musicSource = null, musicGain = null, needsMusicGesture = false;
  const audioNames = ['salto', 'regalo', 'lanzamiento', 'choque', 'play', 'boton', 'game-over'];
  for (const name of audioNames) {
    audio[name] = Array.from({ length: name === 'regalo' ? 4 : 2 }, () => {
      const a = new Audio('assets/audio/' + name + '.mp3'); a.preload = 'auto'; a.volume = name === 'lanzamiento' ? .46 : .65; return a;
    });
  }
  function sound(name) {
    if (muted || !soundReady || !audio[name]) return;
    const pool = audio[name], a = pool.find(a => a.paused || a.ended) || pool[0];
    try { a.currentTime = 0; const p = a.play(); if (p && p.catch) p.catch(() => {}); } catch (_) {}
  }
  function unlockAudio() {
    if (soundReady) return; soundReady = true;
    // Begin audio in the user's gesture; later sounds reuse unlocked elements.
    for (const [name, pool] of Object.entries(audio)) for (const [index, a] of pool.entries()) {
      if (name === 'play' && index === 0) continue;
      const volume = a.volume; a.volume = 0;
      try { const p = a.play(); if (p) p.then(() => { a.pause(); a.currentTime = 0; a.volume = volume; }).catch(() => { a.volume = volume; }); } catch (_) { a.volume = volume; }
    }
  }
  function musicIsActive() { return !muted && (phase === 'menu' || phase === 'playing'); }
  function updateMusicPrompt() {
    $('musicPrompt').classList.toggle('hidden', !(phase === 'menu' && needsMusicGesture && !muted));
  }
  function prepareMusicMixer() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    // A gain node also controls volume on mobile browsers that ignore media.volume.
    // Local file mode keeps HTML audio so opaque file origins cannot silence the source.
    if (!musicContext && AudioContext && window.location.protocol !== 'file:') {
      try {
        const context = new AudioContext();
        const gain = context.createGain(); gain.gain.value = MUSIC_VOLUME;
        const source = context.createMediaElementSource(music);
        source.connect(gain); gain.connect(context.destination);
        musicContext = context; musicSource = source; musicGain = gain; music.volume = 1;
      } catch (_) { music.volume = MUSIC_VOLUME; }
    }
    if (musicContext && musicContext.state === 'suspended') {
      const p = musicContext.resume(); if (p && p.catch) p.catch(() => {});
    }
  }
  function playMusic() {
    if (!musicIsActive()) { music.pause(); updateMusicPrompt(); return; }
    try {
      const p = music.play();
      if (p && p.then) p.then(() => {
        if (!musicIsActive()) music.pause();
        else { needsMusicGesture = false; updateMusicPrompt(); }
      }).catch(error => {
        if (musicIsActive() && error.name === 'NotAllowedError') { needsMusicGesture = true; updateMusicPrompt(); }
      });
    } catch (error) {
      if (error.name === 'NotAllowedError') { needsMusicGesture = true; updateMusicPrompt(); }
    }
  }
  function resetMusic() { music.pause(); try { music.currentTime = 0; } catch (_) {} }
  function activateAudio() { unlockAudio(); prepareMusicMixer(); playMusic(); }
  function toggleSound() {
    muted = !muted; if (!muted) { unlockAudio(); prepareMusicMixer(); }
    for (const pool of Object.values(audio)) for (const a of pool) if (muted) a.pause();
    updateSoundButton(); try { localStorage.setItem('rodolfo.muted.v1', muted ? '1' : '0'); } catch (_) {}
    playMusic(); if (!muted) sound('boton');
  }
  function updateSoundButton() {
    $('sound').classList.toggle('muted', muted); $('sound').setAttribute('aria-label', muted ? 'Activar sonido' : 'Desactivar sonido');
    $('sound').setAttribute('aria-pressed', String(!muted));
  }
  function setPhase(next) {
    const previous = phase;
    phase = next;
    $('startScreen').classList.toggle('hidden', next !== 'menu');
    $('pauseScreen').classList.toggle('hidden', next !== 'paused');
    $('overScreen').classList.toggle('hidden', next !== 'over');
    $('hud').classList.toggle('hidden', next === 'menu' || next === 'loading');
    $('pause').classList.toggle('hidden', next !== 'playing');
    $('jumpButton').classList.toggle('hidden', next !== 'playing');
    $('runningHelp').classList.toggle('hidden', next !== 'playing');
    if (next === 'menu') $('play').focus({ preventScroll: true });
    if (next === 'paused') $('resume').focus({ preventScroll: true });
    if (next === 'over') $('replay').focus({ preventScroll: true });
    if (next === 'menu' || (next === 'playing' && previous === 'over')) resetMusic();
    playMusic(); updateMusicPrompt();
  }
  function start() {
    if (phase === 'loading') return;
    unlockAudio(); prepareMusicMixer(); resizeViewport(); world = new C.World(Date.now(), { width: viewWidth }); setPhase('playing'); syncHud(); sound('play');
    $('announcement').textContent = 'Partida iniciada. Tres vidas. Salta los caramelos y recoge los regalos.';
    canvas.focus({ preventScroll: true }); last = performance.now();
  }
  function pause() {
    if (phase !== 'playing') return;
    setPhase('paused'); sound('boton'); $('announcement').textContent = 'Juego en pausa.';
  }
  function resume() { if (phase !== 'paused') return; setPhase('playing'); sound('boton'); canvas.focus({ preventScroll: true }); last = performance.now(); }
  function home() { world = null; setPhase('menu'); sound('boton'); }
  function finish() {
    const oldBest = best; best = Math.max(best, world.score);
    try { localStorage.setItem('rodolfo.best.v1', String(best)); } catch (_) {}
    $('finalScore').textContent = world.score; $('finalGifts').textContent = world.collected; $('finalBest').textContent = best;
    $('overMessage').textContent = world.score > oldBest ? '¡NUEVO RÉCORD!' : world.collected > 0 ? '¡Vamos por más regalos!' : '¡Una más! Santa te espera.';
    setPhase('over'); syncHud(); $('announcement').textContent = 'Fin de partida. ' + world.score + ' puntos. ' + world.collected + ' regalos.';
  }
  function jump() { if (phase === 'playing') { unlockAudio(); world.jump(); } }
  function syncHud() {
    if (!world) return;
    $('score').textContent = world.score; $('gifts').textContent = world.collected; $('best').textContent = Math.max(best, world.score);
    Array.from($('lives').children).forEach((heart, i) => heart.classList.toggle('lost', i >= world.lives));
    $('lives').setAttribute('aria-label', world.lives + ' vidas');
  }
  async function fullscreen() {
    try {
      if (document.fullscreenElement) { await document.exitFullscreen(); return; }
      if ($('game').requestFullscreen) await $('game').requestFullscreen();
      else if ($('game').webkitRequestFullscreen) $('game').webkitRequestFullscreen();
      if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape').catch(() => {});
    } catch (_) { $('announcement').textContent = 'La pantalla completa no está disponible en este navegador.'; }
  }
  $('play').addEventListener('click', start); $('replay').addEventListener('click', start);
  $('pause').addEventListener('click', pause); $('resume').addEventListener('click', resume);
  $('home').addEventListener('click', home); $('overHome').addEventListener('click', home);
  $('sound').addEventListener('click', toggleSound); $('fullscreen').addEventListener('click', fullscreen); $('rotateFull').addEventListener('click', fullscreen);
  $('musicPrompt').addEventListener('click', activateAudio);
  document.addEventListener('pointerdown', activateAudio, { capture: true, passive: true });
  document.addEventListener('keydown', e => { if (!e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey) activateAudio(); }, { capture: true });
  canvas.addEventListener('pointerdown', e => { if (e.button !== undefined && e.button !== 0) return; e.preventDefault(); jump(); });
  $('jumpButton').addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); jump(); });
  window.addEventListener('keydown', e => {
    if (e.repeat || e.ctrlKey || e.altKey || e.metaKey) return;
    if (['Space', 'ArrowUp', 'KeyW', 'Enter'].includes(e.code)) {
      // Focused UI buttons keep their normal Enter/Space activation.
      if (e.target && e.target.tagName === 'BUTTON' && ['Enter', 'Space'].includes(e.code)) return;
      e.preventDefault();
      if (phase === 'playing') jump(); else if (phase === 'menu' || phase === 'over') start(); else if (phase === 'paused') resume();
    } else if (e.code === 'Escape' || e.code === 'KeyP') { e.preventDefault(); if (phase === 'playing') pause(); else if (phase === 'paused') resume(); }
    else if (e.code === 'KeyM') toggleSound(); else if (e.code === 'KeyF') fullscreen();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('blur', pause);
  window.addEventListener('orientationchange', () => { if (window.matchMedia('(orientation: portrait)').matches) pause(); });

  function resizeViewport() {
    const rect = $('game').getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    // Keep the vertical world and a uniform sprite scale; extend the scene horizontally.
    viewWidth = Math.max(800, Math.round(C.H * rect.width / rect.height));
    if (canvas.width !== viewWidth) canvas.width = viewWidth;
    if (canvas.height !== C.H) canvas.height = C.H;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    if (world) world.resize(viewWidth);
  }
  window.addEventListener('resize', resizeViewport);
  document.addEventListener('fullscreenchange', resizeViewport);
  document.addEventListener('webkitfullscreenchange', resizeViewport);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', resizeViewport);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(resizeViewport).observe($('game'));

  function drawTile(image, distance, width, y, height) {
    const first = Math.floor(distance / width), offset = distance - first * width;
    for (let j = -1; j <= Math.ceil(viewWidth / width) + 1; j++) {
      const x = j * width - offset, flip = ((first + j) % 2 + 2) % 2;
      ctx.save(); if (flip) { ctx.translate(x + width, y); ctx.scale(-1, 1); ctx.drawImage(image, 0, 0, width + .5, height); }
      else ctx.drawImage(image, x, y, width + .5, height); ctx.restore();
    }
  }
  function sprite(image, frame, columns, size, x, y) {
    ctx.drawImage(image, (frame % columns) * 512, Math.floor(frame / columns) * 512, 512, 512, x, y, size, size);
  }
  function star(x, y, size, color) {
    ctx.fillStyle = color; ctx.beginPath();
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, r = i % 2 ? size * .35 : size; const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r; if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
    ctx.closePath(); ctx.fill();
  }
  function draw() {
    const d = world ? world.distance : menuDistance, t = world ? world.time : visualTime;
    ctx.save();
    if (world && world.shake > 0 && !reducedMotion) ctx.translate(Math.sin(visualTime * 100) * 3, Math.cos(visualTime * 81) * 2);
    const bgW = C.H * images.background.width / images.background.height;
    drawTile(images.background, d * .25, bgW, 0, C.H);
    const shade = ctx.createLinearGradient(0, 0, 0, C.H); shade.addColorStop(0, '#18144112'); shade.addColorStop(1, '#39225b00'); ctx.fillStyle = shade; ctx.fillRect(0, 0, viewWidth, C.H);
    drawTile(images.platform, d, 980, C.GROUND - 2, C.H - C.GROUND + 3);
    // Low-contrast distant snow, kept behind all playable objects.
    if (!reducedMotion) for (let i = 0; i < 24; i++) {
      const x = ((i * 197.2 - visualTime * (7 + i % 3) - d * .03) % viewWidth + viewWidth) % viewWidth;
      const y = ((i * 83.7 + visualTime * (9 + i % 5)) % 555);
      ctx.globalAlpha = .2 + (i % 3) * .08; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y, 1.2 + i % 2, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (world) {
      for (const g of world.gifts) {
        const bob = g.state === 'float' ? Math.sin(g.age * 5) * 3 : 0;
        ctx.save(); ctx.translate(g.x, g.y + bob); ctx.rotate(Math.sin(g.age * 3) * .07);
        ctx.drawImage(images[['gift-rojo', 'gift-purpura', 'gift-azul'][g.kind]], -30, -30, 60, 60); ctx.restore();
        if (g.state === 'float') { ctx.globalAlpha = .55; star(g.x + 25, g.y - 23 + bob, 4, '#fffbd5'); ctx.globalAlpha = 1; }
      }
      for (const o of world.obstacles) ctx.drawImage(images.candy, o.x, C.GROUND - o.h, o.w, o.h);
    }
    const santaSize = 202, santaX = viewWidth - 230, santaY = C.GROUND - 465 / 512 * santaSize;
    if (world && world.cast >= 0) sprite(images.throw, Math.min(3, Math.floor(world.cast / .14)), 2, santaSize, santaX, santaY);
    else sprite(images.santa, Math.floor(t * 11) % 8, 4, santaSize, santaX, santaY);
    const foot = world ? world.player.foot : C.GROUND;
    const y = foot - 440 / 512 * C.PLAYER_SIZE;
    if (!world || world.player.invincible <= 0 || Math.floor(visualTime * 13) % 2 === 0) {
      if (world && world.player.hit > 0) ctx.drawImage(images.hit, C.PLAYER_X, y, C.PLAYER_SIZE, C.PLAYER_SIZE);
      else if (world && !world.player.grounded) ctx.drawImage(images.jump, C.PLAYER_X, y, C.PLAYER_SIZE, C.PLAYER_SIZE);
      else sprite(images.run, Math.floor(t * 11) % 8, 4, C.PLAYER_SIZE, C.PLAYER_X, y);
    }
    if (world) for (const p of world.particles) { ctx.globalAlpha = Math.min(1, p.life * 3); star(p.x, p.y, p.size, p.color); }
    ctx.globalAlpha = 1; ctx.restore();
  }
  function frame(now) {
    const dt = Math.min(.033, Math.max(0, (now - (last || now)) / 1000)); last = now;
    visualTime += dt;
    if (phase === 'playing' && world) {
      world.step(dt);
      for (const event of world.takeEvents()) { sound(event); if (event === 'choque') $('announcement').textContent = world.lives + ' vidas.'; }
      syncHud(); if (!world.playing) finish();
    } else if (phase === 'menu') menuDistance += dt * 22;
    if (phase !== 'loading') draw(); requestAnimationFrame(frame);
  }
  async function load() {
    let loaded = 0; const names = Object.keys(meta);
    try {
      await Promise.all(names.map(name => new Promise((resolve, reject) => {
        const im = new Image(); im.onload = () => { images[name] = im; loaded++; $('progress').value = loaded / names.length * 100; resolve(); };
        im.onerror = () => reject(new Error('No se pudo cargar ' + meta[name].src)); im.src = meta[name].src;
      })));
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      resizeViewport(); $('loading').classList.add('hidden'); updateSoundButton(); setPhase('menu'); requestAnimationFrame(frame);
    } catch (error) {
      $('loadDetail').textContent = error.message + '. Extrae el ZIP completo y abre index.html.'; $('progress').style.display = 'none';
    }
  }
  window.RodolfoGame = { start, pause, resume, home, getSnapshot: () => ({ phase, score: world ? world.score : 0, lives: world ? world.lives : 3, best, elapsed: world ? world.time : 0, viewport: { width: viewWidth, height: C.H } }) };
  load();
})();
