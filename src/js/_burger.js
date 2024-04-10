window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');
  const dropdownIcon = document.querySelector('.dropdown__icon');
  const dropdownItem = document.querySelector('.dropdown');

  const lockScroll = () => {
    document.body.classList.add('lock');
  };

  const unlockScroll = () => {
    document.body.classList.remove('lock');
  };

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
    lockScroll();
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('burger--active');
    unlockScroll();
  });

  const dropdownTriggers = document.querySelectorAll('.dropdown');

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const dropdownMenu = trigger.nextElementSibling;
      dropdownMenu.classList.toggle('active');
      dropdownIcon.classList.toggle('active');
      dropdownItem.classList.toggle('active');
    });
  });
});
