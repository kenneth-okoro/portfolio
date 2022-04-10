const icon = document.getElementById('icon');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

icon.addEventListener('click', toggleMode);

function toggleMode() {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    icon.src = './images/moon.png';
  } else {
    icon.src = './images/sun.png';
  }
}

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
