/* eslint-disable no-unused-vars */
const { auto } = require('@popperjs/core');

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  //   centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// eslint-disable-next-line no-undef
const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

// eslint-disable-next-line no-undef
const projectsSlider = new Swiper('.projects__items', {
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev',
  },
});

// work-slider
// eslint-disable-next-line no-undef
const workSlidesNav = new Swiper('.work-slider-nav', {
  spaceBetween: 20,
  slidesPerView: auto,
  freeMode: true,
  watchSlidesProgress: true,
});

// eslint-disable-next-line no-undef
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
