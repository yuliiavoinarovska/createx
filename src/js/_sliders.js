const { auto } = require('@popperjs/core');

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

const projectsSlider = new Swiper('.projects__items', {
  slidesPerView: 3,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev',
  },
});

const workSlidesNav = new Swiper('.work-slider-nav', {
  spaceBetween: 20,
  slidesPerView: 10,
  freeMode: true,
  watchSlidesProgress: true,
});

const workSlider = new Swiper('.work-slider', {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: '.work-slider__next',
    prevEl: '.work-slider__prev',
  },
  thumbs: {
    swiper: workSlidesNav,
  },
});
