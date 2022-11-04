const burgerBtn = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__link');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
  menu.classList.toggle('header__list_open');
  burgerBtn.classList.toggle('header__burger-btn_active');
  overlay.classList.toggle('overlay_open');
}

function closeMenu() {
  menu.classList.remove('header__list_open');
  burgerBtn.classList.remove('header__burger-btn_active');
  overlay.classList.remove('overlay_open');
}

burgerBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));
overlay.addEventListener('click', closeMenu);

export {};