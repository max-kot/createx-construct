import "../../../node_modules/swiper/swiper-bundle.js";

const swiper = new Swiper('.hero-slider', {
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