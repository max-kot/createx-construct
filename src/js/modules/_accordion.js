const allBtnAccordion = document?.querySelectorAll('.footer-nav__title');
const allListAccordion = document?.querySelectorAll('.footer-nav__list');

allListAccordion.forEach((listAccordion) => {
	listAccordion.classList.toggle('hidden')
})
allBtnAccordion.forEach((btnAccordion) => {
	btnAccordion.addEventListener('click', () => {
		btnAccordion.classList.toggle('active');
		btnAccordion.nextElementSibling.classList.toggle('hidden')
	})
})

