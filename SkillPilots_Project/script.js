const modal = document.getElementById('stepsModal');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}
function openModal() { modal.hidden = false; document.getElementById('closeModal').focus(); }
function closeModal() { modal.hidden = true; document.getElementById('openSteps').focus(); }

document.getElementById('openSteps').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('reviewSteps').addEventListener('click', () => {
  closeModal();
  showToast('Steps marked as reviewed!');
});
document.getElementById('submitProject').addEventListener('click', () => {
  showToast('Demo action: project submission is not connected to a server.');
});
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
