const radio = document.querySelector('#radio');
const controls = [...document.querySelectorAll('.play-control')];
const statusText = document.querySelector('#status');
const songTitle = document.querySelector('#songTitle');
const cover = document.querySelector('#cover');
const miniWave = document.querySelector('#miniWave');
const volume = document.querySelector('#volume');
const STREAM_URL = 'https://streaming.lamaximafm.com:8010/stream';
let stoppedByUser = false;

document.querySelector('#frequency').innerHTML = Array.from({length: 42}, (_, i) => `<i style="animation-delay:${(i % 9) * -.11}s"></i>`).join('');
miniWave.innerHTML = '<i></i>'.repeat(12);
radio.volume = Number(volume.value);

function updatePlayer(playing) {
  controls.forEach((button, index) => {
    const icon = button.querySelector('span');
    icon.className = playing ? 'pause-icon' : 'play-icon';
    button.setAttribute('aria-label', playing ? 'Detener transmisión' : 'Escuchar Mami FM');
    const label = button.querySelector('em');
    if (label) label.textContent = playing ? 'SONANDO AHORA' : 'ESCUCHAR EN VIVO';
  });
  miniWave.classList.toggle('active', playing);
  statusText.textContent = playing
    ? 'La señal que te pone a bailar'
    : (stoppedByUser ? 'Transmisión detenida' : 'Toca cualquier parte para escuchar');
}

async function startAudio(force = false) {
  if (stoppedByUser && !force) return false;
  if (!radio.getAttribute('src')) {
    radio.setAttribute('src', STREAM_URL);
    radio.load();
  }
  try {
    await radio.play();
    stoppedByUser = false;
    updatePlayer(true);
    removeUnlockListeners();
    return true;
  } catch (_) {
    updatePlayer(false);
    return false;
  }
}

function stopStreaming() {
  stoppedByUser = true;
  radio.pause();
  radio.removeAttribute('src');
  radio.load();
  updatePlayer(false);
  statusText.textContent = 'Transmisión detenida';
}

controls.forEach(button => button.addEventListener('click', async event => {
  event.stopPropagation();
  if (radio.paused || !radio.getAttribute('src')) await startAudio(true); else stopStreaming();
}));
volume.addEventListener('input', () => { radio.volume = Number(volume.value); });
radio.addEventListener('playing', () => updatePlayer(true));
radio.addEventListener('pause', () => updatePlayer(false));
radio.addEventListener('canplay', () => { if (radio.paused) statusText.textContent = 'Toca cualquier parte para escuchar'; });

function unlockAudio() {
  if (!stoppedByUser && radio.paused) void startAudio();
}

function removeUnlockListeners() {
  document.removeEventListener('touchstart', unlockAudio, true);
  document.removeEventListener('pointerdown', unlockAudio, true);
  document.removeEventListener('click', unlockAudio, true);
  document.removeEventListener('keydown', unlockAudio, true);
}

document.addEventListener('touchstart', unlockAudio, {capture:true, passive:true});
document.addEventListener('pointerdown', unlockAudio, {capture:true, passive:true});
document.addEventListener('click', unlockAudio, true);
document.addEventListener('keydown', unlockAudio, true);
startAudio();

const INFO_URL = 'https://streaming.lamaximafm.com/AudioPlayer/mami-fm/playerInfo';
const COVER_URL = 'https://streaming.lamaximafm.com/AudioPlayer/mami-fm/albumCover';
let currentSong = '';

async function updateNowPlaying() {
  try {
    const infoResponse = await fetch(INFO_URL, {cache: 'no-store'});
    if (!infoResponse.ok) throw new Error('No se pudo consultar la canción');
    const info = await infoResponse.json();
    const nextSong = (info.nowplaying || '').trim();
    if (!nextSong) return;
    songTitle.textContent = nextSong;
    songTitle.title = nextSong;
    if (nextSong !== currentSong) {
      currentSong = nextSong;
      try {
        const coverResponse = await fetch(COVER_URL, {cache: 'no-store'});
        const coverData = await coverResponse.json();
        cover.src = coverData.coverImage || 'assets/logo-mami-fm.png';
      } catch (_) {
        cover.src = 'assets/logo-mami-fm.png';
      }
    }
  } catch (_) {
    if (!currentSong) songTitle.textContent = 'Mami FM';
  }
}

cover.addEventListener('error', () => { cover.src = 'assets/logo-mami-fm.png'; });
updateNowPlaying();
setInterval(updateNowPlaying, 10000);
