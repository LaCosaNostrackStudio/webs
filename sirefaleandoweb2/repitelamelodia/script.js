const notes = [
  { name: "DO", frequency: 261.63, image: "assets/key_do.png" },
  { name: "RE", frequency: 293.66, image: "assets/key_re.png" },
  { name: "MI", frequency: 329.63, image: "assets/key_mi.png" },
  { name: "FA", frequency: 349.23, image: "assets/key_fa.png" },
  { name: "SOL", frequency: 392.0, image: "assets/key_sol.png" },
  { name: "LA", frequency: 440.0, image: "assets/key_la.png" },
  { name: "SI", frequency: 493.88, image: "assets/key_si.png" },
];

const keyboard = document.getElementById("keyboard");
const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");
const levelText = document.getElementById("levelText");
const bestRecordText = document.getElementById("bestRecord");
const message = document.getElementById("message");
const thumb = document.getElementById("thumb");
const wrong = document.getElementById("wrong");

let audioContext;
let sequence = [];
let playerIndex = 0;
let level = 0;
let acceptingInput = false;
let bestRecord = Number(localStorage.getItem("sirefaleando_best_record") || 0);

bestRecordText.textContent = bestRecord;
document.body.className = "start";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

notes.forEach((note, index) => {
  const button = document.createElement("button");
  button.className = "key-btn locked";
  button.setAttribute("aria-label", note.name);
  button.innerHTML = `<img src="${note.image}" alt="${note.name}">`;
  button.addEventListener("pointerdown", () => handlePlayerPress(index));
  keyboard.appendChild(button);
});

const keyButtons = [...document.querySelectorAll(".key-btn")];

function initAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
}

function playPianoNote(frequency, duration = 0.42) {
  initAudio();
  const now = audioContext.currentTime;
  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const tone = audioContext.createBiquadFilter();

  osc1.type = "sine";
  osc2.type = "triangle";
  osc1.frequency.value = frequency;
  osc2.frequency.value = frequency * 2;
  tone.type = "lowpass";
  tone.frequency.setValueAtTime(1500, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.55, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.16);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc1.connect(tone);
  osc2.connect(tone);
  tone.connect(gain);
  gain.connect(audioContext.destination);

  osc1.start(now);
  osc2.start(now);
  osc1.stop(now + duration + 0.03);
  osc2.stop(now + duration + 0.03);
}

async function pressKey(index, showLetter = true) {
  const key = keyButtons[index];
  const note = notes[index];
  key.classList.add("active");
  if (showLetter) showMessage(note.name);
  playPianoNote(note.frequency);
  await sleep(280);
  key.classList.remove("active");
  await sleep(100);
}

function showMessage(text) {
  message.textContent = text;
  message.classList.remove("show");
  void message.offsetWidth;
  message.classList.add("show");
  clearTimeout(showMessage.timer);
  showMessage.timer = setTimeout(() => message.classList.remove("show"), 650);
}

function updateLevelText() { levelText.textContent = `LEVEL ${level}`; }
function setLocked(locked) { keyButtons.forEach(btn => btn.classList.toggle("locked", locked)); }
function addRandomNote() { sequence.push(Math.floor(Math.random() * notes.length)); }
function getSpeed() { return Math.max(280, 760 - level * 32); }

async function startGame() {
  initAudio();
  level = 0;
  sequence = [];
  playerIndex = 0;
  acceptingInput = false;
  hideFeedback();
  document.body.className = "playing";
  await nextLevel();
}

async function nextLevel() {
  level += 1;
  updateLevelText();
  addRandomNote();
  playerIndex = 0;
  acceptingInput = false;
  setLocked(true);
  await sleep(650);
  await playSequence();
  acceptingInput = true;
  setLocked(false);
}

async function playSequence() {
  const delay = getSpeed();
  for (const index of sequence) {
    await pressKey(index, true);
    await sleep(delay);
  }
}

async function handlePlayerPress(index) {
  if (!acceptingInput) return;
  acceptingInput = false;
  await pressKey(index, true);
  if (index !== sequence[playerIndex]) {
    await failGame();
    return;
  }
  playerIndex += 1;
  if (playerIndex === sequence.length) await successRound();
  else acceptingInput = true;
}

async function successRound() {
  setLocked(true);
  acceptingInput = false;
  if (level > bestRecord) {
    bestRecord = level;
    localStorage.setItem("sirefaleando_best_record", String(bestRecord));
    bestRecordText.textContent = bestRecord;
  }
  thumb.classList.remove("hidden");
  await sleep(1000);
  thumb.classList.add("hidden");
  await nextLevel();
}

async function failGame() {
  setLocked(true);
  acceptingInput = false;
  wrong.classList.remove("hidden");
  await sleep(1400);
  wrong.classList.add("hidden");
  resetToStart();
}

function resetToStart() {
  sequence = [];
  playerIndex = 0;
  level = 0;
  acceptingInput = false;
  updateLevelText();
  setLocked(true);
  hideFeedback();
  document.body.className = "start";
}

function hideFeedback() {
  thumb.classList.add("hidden");
  wrong.classList.add("hidden");
  message.classList.remove("show");
}

playBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetToStart);

window.addEventListener("keydown", (event) => {
  const keyMap = ["1", "2", "3", "4", "5", "6", "7"];
  const index = keyMap.indexOf(event.key);
  if (index !== -1) handlePlayerPress(index);
  if (event.key === "Enter" && document.body.classList.contains("start")) startGame();
});

updateLevelText();
setLocked(true);
