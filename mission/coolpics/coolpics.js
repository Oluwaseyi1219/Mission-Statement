// Placeholder for menu functionality

document.getElementById('menu-button').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
}); 