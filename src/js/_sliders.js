const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	// centeredSlides: true,

	loop: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.portfolio-section__next',
	  prevEl: '.portfolio-section__prev',
	}
  });

const testimonialsSlider = new Swiper('.testimonials__items', {
	slidesPerView: 1,
	// spaceBetween: 30,
	// centeredSlides: true,

	loop: true,

	// Navigation arrows
	navigation: {
	  nextEl: '.testimonials__next',
	  prevEl: '.testimonials__prev',
	}
  });
