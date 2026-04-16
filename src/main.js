import Aos from "aos";

document.addEventListener('DOMContentLoaded', () => {
  //fixNavbar();
  Aos.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Toggle menu
function toggleMenu() {
  menuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  mobileMenuOverlay.classList.toggle('active');
}

// Close menu when clicking overlay
mobileMenuOverlay.addEventListener('click', toggleMenu);


// Close menu when clicking a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
  });
});

// Toggle menu button click
menuBtn.addEventListener('click', toggleMenu);


//Fix navbar on scroll
function fixNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1200) {
      navbar.classList.remove('absolute')
      navbar.classList.add('fixed')
    }else{
      navbar.classList.remove('fixed')
      navbar.classList.add('absolute')
    }
  });
}