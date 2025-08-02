// Script untuk toggle dark/light mode
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

if (toggleBtn) {
  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      toggleBtn.textContent = 'Dark Mode';
      toggleBtn.classList.add('light');
    } else {
      toggleBtn.textContent = 'Light Mode';
      toggleBtn.classList.remove('light');
    }
  });
}
