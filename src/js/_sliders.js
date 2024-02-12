const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	// centeredSlides: true,
	loop: true,

	navigation: {
		nextEl: '.portfolio-section__next',
		prevEl: '.portfolio-section__prev',
	}
});

const testimonialsSlider = new Swiper('.testimonials__items', {
	slidesPerView: 1,
	loop: true,

	navigation: {
		nextEl: '.testimonials__next',
		prevEl: '.testimonials__prev',
	}
});

const projectsSlider = new Swiper('.projects__items', {
	slidesPerView: 3,
	spaceBetween: 30,
	// centeredSlides: true,
	loop: true,

	navigation: {
		nextEl: '.projects__next',
		prevEl: '.projects__prev',
	}
});
