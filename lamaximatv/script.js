const video = document.getElementById('tvVideo');
const stream = 'https://streaming.lamaximafm.com:2020/hls/lamaximatv/lamaximatv.m3u8';

async function tryAutoplayWithSound(){
  video.muted = false;
  video.volume = 1;
  try { await video.play(); }
  catch (_) {
    // Los navegadores suelen bloquear autoplay con audio. Mantiene la señal iniciada
    // y activa el sonido en la primera interacción del usuario.
    video.muted = true;
    try { await video.play(); } catch (_) {}
  }
}
function enableSound(){
  if (video.muted) { video.muted = false; video.volume = 1; video.play().catch(()=>{}); }
}
['pointerdown','keydown','touchstart'].forEach(evt => window.addEventListener(evt, enableSound, {once:true, passive:true}));

if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = stream;
  video.addEventListener('loadedmetadata', tryAutoplayWithSound, { once: true });
} else if (window.Hls && Hls.isSupported()) {
  const hls = new Hls({ enableWorker: true, lowLatencyMode: true });
  hls.loadSource(stream);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, tryAutoplayWithSound);
}
window.addEventListener('load', tryAutoplayWithSound);
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const target = document.querySelector(a.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
}));
