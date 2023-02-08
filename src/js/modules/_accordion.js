const allAccordionBtn = document?.querySelectorAll('.accordion-btn');

allAccordionBtn?.forEach((accordionBtn) => {
	accordionBtn?.addEventListener('click', ()=> {
		accordionBtn.classList.toggle('active');
		accordionBtn.nextElementSibling.classList.toggle('active');
	})
})

