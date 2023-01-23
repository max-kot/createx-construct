const menuBtn = document?.querySelector('.menu-btn');
const menuList = document?.querySelector('.menu__list');
const body = document.body;
const menuLinks = document?.querySelectorAll('.menu a');
let lastScroll = 0;

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
	body.classList.toggle('no-scroll');
})

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuBtn.classList.remove('active');
		menuList.classList.remove('active');
		body.classList.remove('no-scroll');
	})
})

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove('scroll-up');
		return;
	}
	// Down
	if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
		body.classList.remove('scroll-up');
		body.classList.add('scroll-down');
	}
	// Up
	if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
		body.classList.remove('scroll-down');
		body.classList.add('scroll-up');
	}

	lastScroll = currentScroll;
});