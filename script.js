// Typed.js initialization
const typed = new Typed('.auto-type', {
  strings: ["Web Developer.", "Designer.", "Creator."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// ScrollReveal animations
ScrollReveal().reveal('.section', {
  distance: '50px',
  duration: 800,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 200
});

// Mobile nav toggle (örnek)
const navMenu = document.getElementById('myNavMenu');
document.querySelector('.btn').addEventListener('click', e => {
  navMenu.classList.toggle('active');
});
