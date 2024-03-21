// eslint-disable-next-line no-undef, no-unused-vars
const scroll = new SmoothScroll('.to-top');
const scrollUp = document.querySelector('.to-top');

// onScroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    scrollUp.classList.add('to-top--active');
  } else {
    scrollUp.classList.remove('to-top--active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
