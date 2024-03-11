window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav');
  const menuItem = document.querySelectorAll('.nav__item');
  const hamburger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger--active');
    menu.classList.toggle('nav--active');
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('burger--active');
      menu.classList.toggle('nav--active');
    });
  });
});
