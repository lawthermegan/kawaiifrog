let count = 0;
const munchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2301/2301-preview.mp3');

function catchFly() {
  const frog = document.getElementById('frog');
  const tongue = document.getElementById('tongue');
  const counter = document.getElementById('counter');
  const fly = document.getElementById('fly');

  // Prevent double clicking
  if (frog.classList.contains('jump')) return;

  // Play sound
  munchSound.play();

  // Animations
  frog.classList.add('jump');
  tongue.classList.add('shoot');
  fly.style.display = 'none';

  // Update Score
  count++;
  counter.innerText = "Flies Eaten: " + count;

  // Reset after 300ms
  setTimeout(() => {
    frog.classList.remove('jump');
    tongue.classList.remove('shoot');
    fly.style.display = 'block';
  }, 300);
}
