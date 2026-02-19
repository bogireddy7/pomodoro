let timer;
let timeLeft;

// DOM Elements
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const userTimeInput = document.getElementById('user-time');

// Initialize timer
function initTimer() {
  const userMinutes = parseInt(userTimeInput.value);
  timeLeft = userMinutes * 60;
  updateDisplay();
}

// Update the display
function updateDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  minutesEl.textContent = m.toString().padStart(2,'0');
  secondsEl.textContent = s.toString().padStart(2,'0');
}

// Start timer
function startTimer() {
  clearInterval(timer);
  if(!timeLeft) initTimer();
  timer = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

// Pause timer
function pauseTimer() {
  clearInterval(timer);
}

// Reset timer
function resetTimer() {
  clearInterval(timer);
  initTimer();
}

// Event listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initial setup
initTimer();
