const button = document.getElementById('action');
const message = document.getElementById('message');
let clicks = 0;

button?.addEventListener('click', () => {
  clicks += 1;
  message.textContent = `Button clicked ${clicks} time${clicks === 1 ? '' : 's'}.`;
});
