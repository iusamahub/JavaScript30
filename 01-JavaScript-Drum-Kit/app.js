function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  key.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0; // allow fast play
  audio.play();
}

function removeSound(e) {
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  key.classList.remove('playing');
}

window.addEventListener('keydown', playSound, false);
window.addEventListener('keyup', removeSound, false);
