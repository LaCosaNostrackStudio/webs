(() => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  const scoreEl = document.getElementById('score');
  const bestEl = document.getElementById('best');
  const livesEl = document.getElementById('lives');
  const menu = document.getElementById('menu');
  const over = document.getElementById('gameOver');
  const finalScore = document.getElementById('finalScore');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');



  function toggleFullscreen(event) {
    var element = document.body;

    if (event instanceof HTMLElement) {
      element = event;
    }

    var isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || false;

    element.requestFullScreen = element.requestFullscreen || element.requestFullScreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen || function () {
      return false;
    };

    document.cancelFullScreen = document.exitFullscreen || document.cancelFullScreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || function () {
      return false;
    };

    if (!isFullscreen) {
      try {
        var result = element.requestFullScreen.call(element);
        if (result && result.catch) result.catch(function () {});
      } catch (e) {}
    }
  }

  let W = 0, H = 0, DPR = 1;
  let running = false, dead = false, t = 0, last = 0;
  let score = 0, best = Number(localStorage.getItem('neonShiftBest') || 0);
  let lives = 0, nextLife = 400;
  let speed = 330;
  let spawnTimer = 0, dotTimer = 0, ringTimer = 1.6, superCoinTimer = 5.5;
  let obstacles = [], dots = [], rings = [], superCoins = [], particles = [], playerShots = [], enemyShots = [];
  let flowPoints = 0, nextBossFlow = 1000, bossLevel = 0, boss = null, shotTimer = 0, enemyShotTimer = 0, shotsPaid = 0;
  let shake = 0, invincible = 0, superMode = 0, superSpawnRowTimer = 0;
  let combo = 1, comboTimer = 0, maxCombo = 5, nearMissChain = 0, nextMilestone = 1000, pulseFlash = 0;
  let audioCtx = null, musicMaster = null, musicTimer = null, musicOn = false, musicStep = 0;

  const player = { side: -1, x:0, y:0, size:34, baseSize:34, targetX:0, glow:0, rot:0, targetRot:0, trail:[] };
  bestEl.textContent = best;
  livesEl.textContent = '0';

  function resize(){
    DPR = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    canvas.width = Math.floor(W*DPR); canvas.height = Math.floor(H*DPR);
    canvas.style.width = W+'px'; canvas.style.height = H+'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
    setPlayerX(true);
  }
  addEventListener('resize', resize); resize();

  function laneX(side){ return side < 0 ? Math.max(42, W*0.14) : Math.min(W-42, W*0.86); }
  function centerX(){ return W * 0.5; }
  function setPlayerX(force=false){ player.targetX = laneX(player.side); if(force) player.x = player.targetX; player.y = H*0.74; player.baseSize = Math.max(30, Math.min(42, W*0.092)); player.size = superMode > 0 ? player.baseSize*2 : player.baseSize; }

  function ensureAudio(){
    audioCtx ||= new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
  }

  function tone(freq, dur, type='triangle', gain=.08, slideTo=null){
    try {
      ensureAudio();
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, audioCtx.currentTime);
      if(slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, audioCtx.currentTime+dur);
      g.gain.setValueAtTime(.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(gain, audioCtx.currentTime+.012);
      g.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime+dur);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(); o.stop(audioCtx.currentTime+dur+.03);
    } catch(e) {}
  }

  function beep(type){
    if(type==='jump') tone(620,.055,'triangle',.075,840);
    if(type==='dot') tone(980,.045,'square',.045,1450);
    if(type==='ring') { tone(420,.08,'sine',.08,880); setTimeout(()=>tone(1120,.09,'triangle',.07,1600),55); }
    if(type==='life') { tone(520,.12,'sine',.09,1040); setTimeout(()=>tone(780,.12,'sine',.09,1560),90); setTimeout(()=>tone(1040,.16,'sine',.1,2080),180); }
    if(type==='shield') tone(180,.22,'sawtooth',.12,80);
    if(type==='hit') tone(110,.24,'sawtooth',.18,50);
    if(type==='shoot') tone(720,.035,'square',.025,1180);
    if(type==='boss') { tone(90,.28,'sawtooth',.16,45); setTimeout(()=>tone(140,.22,'sawtooth',.12,70),120); }
    if(type==='bossDead') { tone(330,.1,'triangle',.11,660); setTimeout(()=>tone(660,.1,'triangle',.12,1320),90); setTimeout(()=>tone(1320,.18,'sine',.13,1980),180); }
    if(type==='super') { tone(220,.12,'sawtooth',.16,440); setTimeout(()=>tone(440,.12,'sawtooth',.16,880),90); setTimeout(()=>tone(880,.18,'square',.13,1760),180); }
    if(type==='combo') { tone(880,.055,'triangle',.055,1320); setTimeout(()=>tone(1320,.055,'triangle',.05,1760),45); }
    if(type==='near') tone(1500,.035,'sine',.035,1900);
    if(type==='milestone') { tone(260,.12,'sine',.08,520); setTimeout(()=>tone(520,.1,'triangle',.08,1040),70); setTimeout(()=>tone(1040,.14,'square',.07,1560),145); }
  }

  function startMusic(){
    try {
      ensureAudio();
      if(musicOn) return;
      musicOn = true;
      musicMaster = audioCtx.createGain();
      musicMaster.gain.value = .0675;
      musicMaster.connect(audioCtx.destination);
      musicStep = 0;
      musicTimer = setInterval(() => {
        if(!running || !musicOn) return;
        const now = audioCtx.currentTime;
        const normalNotes = [146.83, 196.00, 246.94, 293.66, 246.94, 196.00, 174.61, 220.00];
        const rockNotes = [110.00, 146.83, 164.81, 196.00, 220.00, 196.00, 164.81, 146.83];
        const notes = superMode > 0 ? rockNotes : normalNotes;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = superMode > 0 ? 'sawtooth' : (musicStep % 4 === 0 ? 'sawtooth' : 'triangle');
        osc.frequency.setValueAtTime(notes[musicStep % notes.length], now);
        gain.gain.setValueAtTime(.0001, now);
        gain.gain.exponentialRampToValueAtTime(superMode > 0 ? .23 : .16, now+.018);
        gain.gain.exponentialRampToValueAtTime(.0001, now+(superMode > 0 ? .13 : .18));
        osc.connect(gain); gain.connect(musicMaster);
        osc.start(now); osc.stop(now+.22);
        if(superMode > 0 && musicStep % 2 === 0){
          const bass = audioCtx.createOscillator(); const bg = audioCtx.createGain();
          bass.type = 'square'; bass.frequency.setValueAtTime(55, now);
          bg.gain.setValueAtTime(.0001, now); bg.gain.exponentialRampToValueAtTime(.12, now+.01); bg.gain.exponentialRampToValueAtTime(.0001, now+.09);
          bass.connect(bg); bg.connect(musicMaster); bass.start(now); bass.stop(now+.11);
        } else if(musicStep % 2 === 0){
          const hi = audioCtx.createOscillator();
          const hg = audioCtx.createGain();
          hi.type = 'sine'; hi.frequency.setValueAtTime(notes[(musicStep+3)%notes.length]*4, now);
          hg.gain.setValueAtTime(.0001, now); hg.gain.exponentialRampToValueAtTime(.045, now+.01); hg.gain.exponentialRampToValueAtTime(.0001, now+.08);
          hi.connect(hg); hg.connect(musicMaster); hi.start(now); hi.stop(now+.1);
        }
        musicStep++;
      }, superMode > 0 ? 120 : 170);
    } catch(e) {}
  }

  function stopMusic(){
    musicOn = false;
    if(musicTimer) clearInterval(musicTimer);
    musicTimer = null;
    try { if(musicMaster) musicMaster.disconnect(); } catch(e) {}
    musicMaster = null;
  }

  function floatText(text){
    const el = document.createElement('div');
    el.className = 'floatText';
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(), 850);
  }

  function start(){
    toggleFullscreen();
    setTimeout(resize, 250);
    setTimeout(resize, 650);
    running = true; dead = false; t = 0; last = performance.now();
    score = 0; lives = 0; nextLife = 400; speed = 330; spawnTimer = 0; dotTimer = .35; ringTimer = 1.2; invincible = 0;
    flowPoints = 0; nextBossFlow = 1000; bossLevel = 0; boss = null; shotTimer = 0; enemyShotTimer = 0; shotsPaid = 0; superMode = 0; superSpawnRowTimer = 0; superCoinTimer = 8 + Math.random()*6;
    obstacles = []; dots = []; rings = []; superCoins = []; particles = []; playerShots = []; enemyShots = [];
    player.side = -1; setPlayerX(true); player.glow = 0; player.rot = 0; player.targetRot = 0; player.trail = [];
    menu.classList.add('hidden'); over.classList.add('hidden');
    scoreEl.textContent = '0'; livesEl.textContent = '0';
    startMusic(); requestAnimationFrame(loop);
  }

  function gameOver(){
    if(dead) return;
    resetCombo(); nearMissChain = 0;
    if(lives > 0){
      lives--; livesEl.textContent = lives; invincible = 1.8; shake = 12; beep('shield');
      if(navigator.vibrate) navigator.vibrate([70,45,70]);
      floatText('VIDA USADA');
      obstacles = obstacles.filter(o => Math.abs(o.y - player.y) > 150);
      burst(player.x, player.y, '#39ff14', 34);
      return;
    }
    dead = true; running = false; shake = 18; beep('hit'); stopMusic();
    if(navigator.vibrate) navigator.vibrate([120,60,160]);
    if(score > best){ best = score; localStorage.setItem('neonShiftBest', best); bestEl.textContent = best; }
    finalScore.textContent = 'Puntos: '+score;
    setTimeout(()=> over.classList.remove('hidden'), 340);
  }

  function addScore(n, label, useCombo=false){
    let earned = n;
    if(useCombo){
      if(comboTimer > 0) combo = Math.min(maxCombo, combo + .25);
      else combo = 1;
      comboTimer = 1.25;
      earned = Math.max(1, Math.round(n * combo));
      if(combo >= 2 && Math.random() < .35) beep('combo');
    }
    score += earned;
    scoreEl.textContent = score;
    if(label) floatText(combo > 1.3 && useCombo ? label+' x'+combo.toFixed(1) : label);
    while(score >= nextLife){
      lives++;
      livesEl.textContent = lives;
      nextLife += 400;
      beep('life');
      floatText('VIDA +1');
      burst(player.x, player.y, '#39ff14', 42);
    }
    while(score >= nextMilestone){
      nextMilestone += 1000;
      pulseFlash = .55;
      beep('milestone');
      floatText('META +1000');
      burst(centerX(), H*.22, '#ffea00', 80);
    }
  }

  function resetCombo(){
    combo = 1;
    comboTimer = 0;
  }

  function nearMissBonus(o){
    if(o.nearDone || invincible > 0 || superMode > 0) return;
    if(o.y < player.y - 55 || o.y > player.y + 12) return;
    const closeX = Math.abs(o.x - player.x);
    const centerGap = Math.abs(o.x - centerX());
    if(closeX < 92 || centerGap < 68){
      o.nearDone = true;
      nearMissChain++;
      const bonus = Math.min(35, 5 + nearMissChain * 2);
      addScore(bonus, 'CASI +'+bonus, false);
      beep('near');
      burst(player.x, player.y, '#ffffff', 8);
    }
  }

  function input(){
    if(!running){ if(!menu.classList.contains('hidden') || !over.classList.contains('hidden')) start(); return; }
    if(superMode > 0) return;
    player.side *= -1; setPlayerX(); player.glow = 1; player.targetRot += Math.PI * 2 * player.side; beep('jump');
    burst(player.x, player.y, '#00eaff', 10);
  }
  addEventListener('pointerdown', input);
  addEventListener('keydown', e => { if(e.code==='Space' || e.code==='ArrowLeft' || e.code==='ArrowRight') input(); });
  startBtn.addEventListener('pointerdown', function(e){ e.stopPropagation(); start(); });
  restartBtn.addEventListener('pointerdown', function(e){ e.stopPropagation(); start(); });
  startBtn.onclick = function(e){ e.stopPropagation(); };
  restartBtn.onclick = function(e){ e.stopPropagation(); };


  function spawnBoss(){
    if(boss) return;
    bossLevel++;
    const maxHp = Math.ceil(100 * Math.pow(1.2, bossLevel-1));
    const type = bossLevel % 2 === 0 ? 'crusher' : 'blaster';
    boss = {x:centerX(), y:-130, targetY:H*.18, r:type==='crusher'?84:72, hp:maxHp, maxHp, t:0, level:bossLevel, type};
    enemyShotTimer = .24;
    shotTimer = 0;
    beep('boss');
    floatText(type==='crusher' ? 'ROBOT TANQUE' : 'ROBOT BLASTER');
  }

  function firePlayerShot(){
    if(!boss) return;
    const dx = boss.x - player.x, dy = boss.y - player.y;
    const len = Math.hypot(dx,dy) || 1;
    playerShots.push({x:player.x, y:player.y, vx:dx/len*720, vy:dy/len*720, life:1.25, r:4});
    shotsPaid++;
    if(shotsPaid >= 10){
      shotsPaid = 0;
      if(score > 0){ score--; scoreEl.textContent = score; }
    }
    beep('shoot');
  }

  function fireEnemyShot(){
    if(!boss) return;
    const baseSpeed = boss.type === 'crusher' ? 250 : 300;
    const shotSpeed = Math.min(560, baseSpeed + boss.level * 22);
    const extraShots = boss.type === 'crusher' ? 1 : 2 + Math.floor(boss.level / 3);
    const spread = boss.type === 'crusher' ? 0.18 : 0.34;
    const dx = player.x - boss.x, dy = player.y - boss.y;
    const baseAngle = Math.atan2(dy, dx);
    for(let i=0;i<extraShots;i++){
      const offset = (i - (extraShots-1)/2) * spread;
      const a = baseAngle + offset;
      enemyShots.push({x:boss.x, y:boss.y+boss.r*.45, vx:Math.cos(a)*shotSpeed, vy:Math.sin(a)*shotSpeed, life:4.2, r: boss.type === 'crusher' ? 12 : 9});
    }
  }

  function spawnObstacle(){
    const side = Math.random() < .5 ? -1 : 1;
    const kind = Math.floor(Math.random()*4);
    const x = laneX(side);
    const size = 30 + Math.random()*24;
    obstacles.push({x, y:-70, side, kind, size, rot:Math.random()*6.28, pulse:Math.random()*6.28});
  }

  function spawnDotRow(){
    const side = Math.random() < .5 ? -1 : 1;
    const rowType = Math.random();
    const count = rowType < .25 ? 10 : rowType < .65 ? 7 : 5;
    const spacing = Math.max(21, Math.min(30, H * .032));
    const x = laneX(side);
    const y0 = -50;
    for(let i=0;i<count;i++){
      dots.push({x, y:y0 - i*spacing, side, r:7, a:0, value:5, counted:false});
    }
  }

  function spawnRing(){
    rings.push({x:centerX(), y:-80, r:36 + Math.random()*10, a:0, value:10});
  }

  function spawnSuperCoin(){
    const side = Math.random() < .5 ? -1 : 1;
    superCoins.push({x: laneX(side), y:-90, side, r:20, a:0, value:0});
  }

  function activateSuper(){
    superMode = 5;
    invincible = Math.max(invincible, 5.2);
    player.targetX = centerX();
    player.x = centerX();
    player.targetRot += Math.PI * 8;
    superSpawnRowTimer = 0;
    beep('super');
    floatText('SUPER ROBOT');
    burst(player.x, player.y, '#ffea00', 70);
  }

  function spawnSuperCoinRow(){
    const count = 9;
    const spacing = Math.max(22, Math.min(34, H * .036));
    for(let i=0;i<count;i++){
      dots.push({x:centerX(), y:-50 - i*spacing, side:0, r:9, a:0, value:10, counted:false, superRow:true});
    }
  }

  function burst(x,y,color,n){
    for(let i=0;i<n;i++) particles.push({x,y,vx:(Math.random()-.5)*240,vy:(Math.random()-.5)*240,life:.48+Math.random()*.22,color,size:3+Math.random()*4});
  }

  function collideDiamondCircle(px,py,s,cx,cy,r){ return Math.abs(px-cx)+Math.abs(py-cy) < s*.68+r; }
  function collideRect(px,py,s,rx,ry,rw,rh){ return px+s*.42>rx && px-s*.42<rx+rw && py+s*.42>ry && py-s*.42<ry+rh; }
  function ringCrossed(r){ return Math.abs(player.x - r.x) < r.r*1.18 && Math.abs(player.y - r.y) < r.r*1.18; }

  function update(dt){
    t += dt; speed = Math.min(820, speed + dt*9);
    if(comboTimer > 0){ comboTimer -= dt; if(comboTimer <= 0) combo = 1; }
    if(pulseFlash > 0) pulseFlash -= dt;
    if(invincible > 0) invincible -= dt;
    if(superMode > 0){
      superMode -= dt;
      if(superMode <= 0){ superMode = 0; setPlayerX(); floatText('SUPER FIN'); }
      else { player.targetX = centerX(); player.x += (centerX()-player.x)*Math.min(1, dt*16); player.targetRot += dt*10; superSpawnRowTimer -= dt; if(superSpawnRowTimer <= 0){ spawnSuperCoinRow(); superSpawnRowTimer = .42; } }
    }
    player.size = player.baseSize * (superMode > 0 ? 2 : 1);
    if(superMode <= 0) player.x += (player.targetX-player.x)*Math.min(1, dt*18);
    player.rot += (player.targetRot-player.rot)*Math.min(1, dt*12); player.glow = Math.max(0, player.glow-dt*3);
    player.trail.push({x:player.x, y:player.y, size:player.size, rot:player.rot, life:.22});
    player.trail.forEach(p=>p.life-=dt); player.trail = player.trail.filter(p=>p.life>0);
    spawnTimer -= dt; dotTimer -= dt; ringTimer -= dt; superCoinTimer -= dt;
    if(spawnTimer <= 0){ spawnObstacle(); spawnTimer = Math.max(.38, 1.0 - speed/1120) + Math.random()*.38; }
    if(dotTimer <= 0){ spawnDotRow(); dotTimer = .9 + Math.random()*1.05; }
    if(ringTimer <= 0){ spawnRing(); ringTimer = 1.7 + Math.random()*1.4; }
    if(superCoinTimer <= 0){ spawnSuperCoin(); superCoinTimer = 11 + Math.random()*11; }

    obstacles.forEach(o=>{ o.y += speed*dt; o.rot += dt*(1.6 + speed/410); o.pulse += dt*4; nearMissBonus(o); });
    dots.forEach(o=>{ o.y += speed*dt; o.a += dt*8; });
    rings.forEach(o=>{ o.y += speed*dt; o.a += dt*3.2; });
    superCoins.forEach(o=>{ o.y += speed*dt; o.a += dt*5.2; });
    particles.forEach(p=>{ p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=dt; p.vx*=.985; p.vy*=.985; });

    for(const d of dots){
      if(!d.counted && d.y > -45){
        d.counted = true;
        flowPoints += d.value;
        if(flowPoints >= nextBossFlow){ nextBossFlow += 1000; spawnBoss(); }
      }
    }

    if(boss){
      boss.t += dt;
      boss.y += (boss.targetY - boss.y) * Math.min(1, dt*2.2);
      boss.x = centerX() + Math.sin(boss.t*1.4) * Math.min(52, W*.13);
      shotTimer -= dt;
      enemyShotTimer -= dt;
      if(shotTimer <= 0){ firePlayerShot(); shotTimer = .055; }
      if(enemyShotTimer <= 0){ fireEnemyShot(); enemyShotTimer = Math.max(.13, .38 - boss.level*.018); }
    }

    playerShots.forEach(s=>{
      if(boss){
        const dx=boss.x-s.x, dy=boss.y-s.y, len=Math.hypot(dx,dy)||1;
        s.vx += dx/len*1800*dt; s.vy += dy/len*1800*dt;
        const sl=Math.hypot(s.vx,s.vy)||1, max=820; if(sl>max){s.vx=s.vx/sl*max; s.vy=s.vy/sl*max;}
      }
      s.x+=s.vx*dt; s.y+=s.vy*dt; s.life-=dt;
    });
    enemyShots.forEach(s=>{ s.x+=s.vx*dt; s.y+=s.vy*dt; s.life-=dt; });

    obstacles = obstacles.filter(o=>o.y < H+90);
    dots = dots.filter(o=>o.y < H+70 && !o.got);
    rings = rings.filter(o=>o.y < H+110 && !o.got);
    superCoins = superCoins.filter(o=>o.y < H+110 && !o.got);
    particles = particles.filter(p=>p.life>0);
    playerShots = playerShots.filter(s=>s.life>0 && s.x>-80 && s.x<W+80 && s.y>-120 && s.y<H+120);
    enemyShots = enemyShots.filter(s=>s.life>0 && s.x>-80 && s.x<W+80 && s.y>-120 && s.y<H+120);

    for(const o of dots){
      if(collideDiamondCircle(player.x, player.y, player.size, o.x, o.y, o.r)){
        o.got=true; addScore(o.value, null, true); beep('dot'); burst(o.x,o.y,'#ffea00',10);
      }
    }
    for(const r of rings){
      if(ringCrossed(r)){
        r.got=true; addScore(r.value, '+10', true); beep('ring'); burst(r.x,r.y,'#00eaff',30);
      }
    }
    for(const c of superCoins){
      if(collideDiamondCircle(player.x, player.y, player.size, c.x, c.y, c.r+12)){
        c.got = true; activateSuper();
      }
    }
    for(const ps of playerShots){
      if(ps.life <= 0) continue;
      for(const es of enemyShots){
        if(es.life <= 0) continue;
        if(Math.hypot(ps.x-es.x, ps.y-es.y) < ps.r + es.r + 6){
          ps.life = 0; es.life = 0; burst(ps.x, ps.y, '#ffffff', 12); beep('dot'); break;
        }
      }
    }
    if(boss){
      for(const s of playerShots){
        if(s.life > 0 && !s.hit && Math.hypot(s.x-boss.x, s.y-boss.y) < boss.r){
          s.hit = true; s.life = 0; boss.hp--; burst(s.x,s.y,'#00eaff',4);
          if(boss.hp <= 0){
            addScore(300, '+300 BOSS'); beep('bossDead'); burst(boss.x,boss.y,'#ff00ea',90); burst(boss.x,boss.y,'#00eaff',90); boss = null; enemyShots = []; break;
          }
        }
      }
    }
    if(invincible <= 0){
      for(const e of enemyShots){ if(collideDiamondCircle(player.x,player.y,player.size,e.x,e.y,e.r)){ e.life=0; gameOver(); } }
      for(const o of obstacles){
        const s = o.size;
        if(o.kind===0 && collideDiamondCircle(player.x,player.y,player.size,o.x,o.y,s*.45)) gameOver();
        if(o.kind===1 && collideRect(player.x,player.y,player.size,o.x-s*.7,o.y-s*.18,s*1.4,s*.36)) gameOver();
        if(o.kind===2 && collideDiamondCircle(player.x,player.y,player.size,o.x,o.y,s*.52)) gameOver();
        if(o.kind===3 && collideRect(player.x,player.y,player.size,o.x-s*.18,o.y-s*.85,s*.36,s*1.7)) gameOver();
      }
    }
  }

  function bg(){
    const g = ctx.createLinearGradient(0,0,W,H);
    g.addColorStop(0,'#050042'); g.addColorStop(.44,'#1026b8'); g.addColorStop(1,'#23003f');
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);
    ctx.save(); ctx.globalAlpha=.18;
    for(let i=0;i<22;i++){
      const x = (i*97 + t*22) % (W+160) - 80;
      const y = (i*149 + t*45) % (H+180) - 90;
      ctx.fillStyle = i%3===0 ? '#ff00ea' : i%2 ? '#00eaff' : '#7b2cff';
      ctx.fillRect(x,y, 5+(i%4)*5, 5+(i%4)*5);
    }
    ctx.globalAlpha=.22;
    for(let i=0;i<5;i++){ ctx.fillStyle = i%2?'#140082':'#31008f'; ctx.beginPath(); ctx.moveTo((i*.26*W+t*18)%(W+220)-110,H); ctx.lineTo((i*.26*W+90+t*18)%(W+220)-110,H*.16); ctx.lineTo((i*.26*W+190+t*18)%(W+220)-110,H); ctx.fill(); }
    ctx.restore();
    ctx.strokeStyle='rgba(0,234,255,.38)'; ctx.lineWidth=2; ctx.shadowBlur=16; ctx.shadowColor='#00eaff';
    ctx.beginPath(); ctx.moveTo(laneX(-1),0); ctx.lineTo(laneX(-1),H); ctx.moveTo(laneX(1),0); ctx.lineTo(laneX(1),H); ctx.stroke();
    ctx.setLineDash([8,14]); ctx.strokeStyle='rgba(255,0,234,.22)'; ctx.beginPath(); ctx.moveTo(centerX(),0); ctx.lineTo(centerX(),H); ctx.stroke(); ctx.setLineDash([]); ctx.shadowBlur=0;
  }

  function drawPlayer(){
    if(superMode > 0){
      for(const tr of player.trail){
        ctx.save(); ctx.globalAlpha = Math.max(0, tr.life/.22)*.28; ctx.translate(tr.x,tr.y); ctx.rotate(tr.rot);
        ctx.shadowBlur=30; ctx.shadowColor='#ffea00'; ctx.strokeStyle='#ffea00'; ctx.lineWidth=3;
        roundRect(-tr.size*.55,-tr.size*.48,tr.size*1.1,tr.size*.96,10); ctx.stroke(); ctx.restore();
      }
    }
    ctx.save(); ctx.translate(player.x,player.y); ctx.rotate(player.rot);
    const blink = invincible > 0 && Math.floor(t*14)%2===0;
    ctx.globalAlpha = blink ? .45 : 1;
    const s = player.size;
    ctx.shadowBlur=24+player.glow*22; ctx.shadowColor= superMode>0 ? '#ffea00' : (invincible>0 ? '#39ff14' : '#00eaff');
    const grad = ctx.createLinearGradient(-s/2,-s/2,s/2,s/2);
    if(superMode > 0){ grad.addColorStop(0,'#ffffff'); grad.addColorStop(.38,'#ffea00'); grad.addColorStop(.72,'#ff6b00'); grad.addColorStop(1,'#ff00ea'); }
    else { grad.addColorStop(0,'#00eaff'); grad.addColorStop(.5,'#7b2cff'); grad.addColorStop(1,'#ff00ea'); }
    ctx.fillStyle=grad; ctx.strokeStyle='#ffffff'; ctx.lineWidth=3;
    roundRect(-s*.55,-s*.48,s*1.1,s*.96,8); ctx.fill(); ctx.stroke();
    ctx.shadowBlur=10; ctx.shadowColor='#00eaff';
    ctx.fillStyle='#a9ffff';
    ctx.beginPath(); ctx.arc(-s*.22,-s*.12,s*.105,0,Math.PI*2); ctx.arc(s*.22,-s*.12,s*.105,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#06114f'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(-s*.22,-s*.12); ctx.lineTo(-s*.22,-s*.12); ctx.stroke();
    ctx.fillStyle='#06114f'; ctx.fillRect(-s*.31, s*.18, s*.62, s*.1);
    ctx.fillStyle='#39ff14'; ctx.fillRect(-s*.25, s*.2, s*.1, s*.06); ctx.fillRect(-s*.05, s*.2, s*.1, s*.06); ctx.fillRect(s*.15, s*.2, s*.1, s*.06);
    ctx.strokeStyle='#00eaff'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(-s*.35,-s*.5); ctx.lineTo(-s*.5,-s*.72); ctx.moveTo(s*.35,-s*.5); ctx.lineTo(s*.5,-s*.72); ctx.stroke();
    ctx.fillStyle='#ff00ea'; ctx.beginPath(); ctx.arc(-s*.5,-s*.72,3,0,Math.PI*2); ctx.arc(s*.5,-s*.72,3,0,Math.PI*2); ctx.fill();
    ctx.restore();
  }

  function roundRect(x,y,w,h,r){
    ctx.beginPath(); ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y); ctx.quadraticCurveTo(x+w,y,x+w,y+r); ctx.lineTo(x+w,y+h-r); ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h); ctx.lineTo(x+r,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-r); ctx.lineTo(x,y+r); ctx.quadraticCurveTo(x,y,x+r,y); ctx.closePath();
  }

  function drawObstacle(o){
    ctx.save(); ctx.translate(o.x,o.y); ctx.rotate(o.rot); ctx.lineWidth=4; ctx.strokeStyle='#fff'; ctx.shadowBlur=18; ctx.shadowColor=o.kind%2?'#ff00ea':'#00eaff'; ctx.fillStyle=o.kind%2?'rgba(255,0,234,.35)':'rgba(0,234,255,.32)';
    const s=o.size;
    if(o.kind===0){ ctx.beginPath(); ctx.moveTo(0,-s*.7); ctx.lineTo(s*.62,s*.5); ctx.lineTo(-s*.62,s*.5); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    if(o.kind===1){ ctx.fillRect(-s*.75,-s*.2,s*1.5,s*.4); ctx.strokeRect(-s*.75,-s*.2,s*1.5,s*.4); }
    if(o.kind===2){ for(let i=0;i<10;i++){ ctx.rotate(Math.PI/5); ctx.beginPath(); ctx.moveTo(s*.35,0); ctx.lineTo(s*.64,8); ctx.lineTo(s*.64,-8); ctx.closePath(); ctx.fill(); ctx.stroke(); } ctx.beginPath(); ctx.arc(0,0,s*.35,0,Math.PI*2); ctx.stroke(); }
    if(o.kind===3){ ctx.fillRect(-s*.2,-s*.9,s*.4,s*1.8); ctx.strokeRect(-s*.2,-s*.9,s*.4,s*1.8); }
    ctx.restore();
  }

  function drawDot(o){
    ctx.save(); ctx.translate(o.x,o.y); ctx.rotate(o.a);
    ctx.shadowBlur=18; ctx.shadowColor='#ffea00'; ctx.strokeStyle='#fff'; ctx.fillStyle='#ffea00'; ctx.lineWidth=2;
    ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*2); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  function drawRing(o){
    ctx.save(); ctx.translate(o.x,o.y); ctx.rotate(o.a);
    ctx.shadowBlur=28; ctx.shadowColor='#00eaff'; ctx.lineWidth=5;
    ctx.strokeStyle='#00eaff'; ctx.beginPath(); ctx.arc(0,0,o.r,0,Math.PI*2); ctx.stroke();
    ctx.strokeStyle='#ff00ea'; ctx.beginPath(); ctx.arc(0,0,o.r*.68,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.9)'; ctx.font='900 14px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('+10',0,0);
    ctx.restore();
  }

  function drawSuperCoin(o){
    ctx.save(); ctx.translate(o.x,o.y); ctx.rotate(o.a);
    ctx.shadowBlur=32; ctx.shadowColor='#ffea00'; ctx.lineWidth=4;
    const g = ctx.createRadialGradient(0,0,2,0,0,o.r*1.5);
    g.addColorStop(0,'#ffffff'); g.addColorStop(.4,'#ffea00'); g.addColorStop(1,'#ff00ea');
    ctx.fillStyle=g; ctx.strokeStyle='#ffffff';
    ctx.beginPath();
    for(let i=0;i<8;i++){ const a=i*Math.PI/4; const rr=i%2?o.r*.68:o.r*1.28; ctx.lineTo(Math.cos(a)*rr, Math.sin(a)*rr); }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle='#06114f'; ctx.font='900 13px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('S',0,1);
    ctx.restore();
  }


  function drawBoss(){
    if(!boss) return;
    ctx.save(); ctx.translate(boss.x,boss.y);
    const r=boss.r, pulse=1+Math.sin(t*8)*.035;
    ctx.scale(pulse,pulse);
    ctx.shadowBlur=35; ctx.shadowColor='#ff003c';
    const grad=ctx.createRadialGradient(0,-r*.2,r*.2,0,0,r);
    if(boss.type==='crusher'){ grad.addColorStop(0,'#ffea00'); grad.addColorStop(.45,'#ff6b00'); grad.addColorStop(1,'#3b0500'); } else { grad.addColorStop(0,'#ff6bff'); grad.addColorStop(.45,'#7b2cff'); grad.addColorStop(1,'#17002f'); }
    ctx.fillStyle=grad; ctx.strokeStyle='#fff'; ctx.lineWidth=4;
    roundRect(-r,-r*.72,r*2,r*1.44,20); ctx.fill(); ctx.stroke();
    ctx.fillStyle=boss.type==='crusher' ? '#00eaff' : '#ff003c'; ctx.shadowColor=ctx.fillStyle; ctx.shadowBlur=22;
    if(boss.type==='crusher'){ ctx.fillRect(-r*.52,-r*.23,r*.34,r*.22); ctx.fillRect(r*.18,-r*.23,r*.34,r*.22); }
    else { ctx.beginPath(); ctx.arc(-r*.34,-r*.12,r*.16,0,Math.PI*2); ctx.arc(r*.34,-r*.12,r*.16,0,Math.PI*2); ctx.fill(); }
    ctx.strokeStyle='#ffea00'; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(-r*.48,r*.28); ctx.lineTo(r*.48,r*.28); ctx.stroke();
    for(let i=-2;i<=2;i++){ ctx.beginPath(); ctx.moveTo(i*r*.18,r*.18); ctx.lineTo(i*r*.18,r*.38); ctx.stroke(); }
    ctx.strokeStyle='#00eaff'; ctx.lineWidth=3;
    ctx.beginPath(); ctx.moveTo(-r*.55,-r*.72); ctx.lineTo(-r*.78,-r*1.02); ctx.moveTo(r*.55,-r*.72); ctx.lineTo(r*.78,-r*1.02); ctx.stroke();
    ctx.fillStyle='#ff003c'; ctx.beginPath(); ctx.arc(-r*.78,-r*1.02,6,0,Math.PI*2); ctx.arc(r*.78,-r*1.02,6,0,Math.PI*2); ctx.fill();
    ctx.restore();

    const w=Math.min(W*.62,260), h=12, x=(W-w)/2, y=Math.max(86,boss.y+boss.r+18);
    ctx.save(); ctx.shadowBlur=12; ctx.shadowColor='#ff003c'; ctx.fillStyle='rgba(0,0,0,.42)'; ctx.fillRect(x,y,w,h);
    ctx.fillStyle=boss.type==='crusher' ? '#ffea00' : '#ff003c'; ctx.fillRect(x,y,w*(boss.hp/boss.maxHp),h);
    ctx.strokeStyle='rgba(255,255,255,.8)'; ctx.strokeRect(x,y,w,h);
    ctx.fillStyle='#fff'; ctx.font='900 12px Arial'; ctx.textAlign='center'; ctx.fillText((boss.type==='crusher'?'TANQUE':'BLASTER')+' NIVEL '+boss.level, W/2, y-8);
    ctx.restore();
  }

  function drawShots(){
    ctx.save();
    for(const s of playerShots){ ctx.shadowBlur=16; ctx.shadowColor='#00eaff'; ctx.fillStyle='#00eaff'; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); }
    for(const s of enemyShots){ ctx.shadowBlur=18; ctx.shadowColor='#ff003c'; ctx.fillStyle='#ff003c'; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.stroke(); }
    ctx.restore();
  }

  function drawParticles(){
    particles.forEach(p=>{ ctx.globalAlpha=Math.max(0,p.life/.6); ctx.fillStyle=p.color; ctx.shadowBlur=12; ctx.shadowColor=p.color; ctx.fillRect(p.x,p.y,p.size,p.size); ctx.globalAlpha=1; }); ctx.shadowBlur=0;
  }


  function drawBonusUI(){
    ctx.save();
    if(combo > 1.25 && comboTimer > 0){
      const alpha = Math.min(1, comboTimer);
      ctx.globalAlpha = alpha;
      ctx.textAlign = 'center';
      ctx.font = '900 22px Arial';
      ctx.fillStyle = '#ffea00';
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#ffea00';
      ctx.fillText('COMBO x' + combo.toFixed(1), W/2, Math.max(126, H*.13));
    }
    if(pulseFlash > 0){
      ctx.globalAlpha = pulseFlash * .28;
      ctx.fillStyle = '#ffea00';
      ctx.fillRect(0,0,W,H);
    }
    ctx.restore();
  }

  function loop(now){
    const dt = Math.min(.033, (now-last)/1000 || .016); last = now;
    if(running) update(dt);
    ctx.save();
    if(shake>0){ shake-=1; ctx.translate((Math.random()-.5)*shake, (Math.random()-.5)*shake); document.body.classList.add('shake'); setTimeout(()=>document.body.classList.remove('shake'),260); }
    bg(); rings.forEach(drawRing); superCoins.forEach(drawSuperCoin); dots.forEach(drawDot); obstacles.forEach(drawObstacle); drawBoss(); drawShots(); drawParticles(); drawPlayer(); drawBonusUI();
    ctx.restore();
    if(running) requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
