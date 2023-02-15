import "../../../node_modules/swiper/swiper-bundle.js";

const heroSlider = new Swiper('.hero-slider', {
	loop: true,
	autoHeight: true,
	autoplay: true,
	speed: 800,

	pagination: {
		el: '.hero-slider__pagination',
		clickable: true,
		renderBullet: function (index, className) {
			if (index < 9) {
				return `<span class="${className}">0${index + 1}</span>`
			}
			return `<span class="${className}">${index + 1}</span>`
		},
	},

	navigation: {
		nextEl: '.hero-slider__btn-next',
		prevEl: '.hero-slider__btn-prev',
	},

	breakpoints: {
		769: {
			autoplay: true,
			speed: 800,
			navigation: {
				enabled: true,
			}
		}
	}
});

const projectSlider = new Swiper('.project-slider', {
	loop: true,
	spaceBetween: 30,
	slidesPerView: 1,
	navigation: {
		nextEl: '.project-slider__btn-next',
		prevEl: '.project-slider__btn-prev',
	},

	breakpoints: {
		1025: {
			slidesPerView: 3,
		},

		769: {
			slidesPerView: 2,
		},

		551: {
			slidesPerView: 2,
		},
	}
})

const reviewSlider = new Swiper('.reviews-slider', {
	loop: true,
	slidesPerView: 1,
	//autoHeight: true,
	autoplay: true,
	speed: 800,
	navigation: {
		nextEl: '.reviews-slider__btn-next',
		prevEl: '.reviews-slider__btn-prev',
	},
})