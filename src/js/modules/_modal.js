const modalBtnAll = document?.querySelectorAll('[data-modal]');
const modalsOverlayAll = document?.querySelectorAll('.modals__overlay');
const modalAll = document?.querySelectorAll('.modal');
const modalsBtnCloseAll = document?.querySelectorAll('.modals__btn-close');

modalBtnAll.forEach((modalBtn) => {
	modalBtn.addEventListener('click', (event) => {
		const modalId = event.target.dataset.modal;
		const currentModal = document?.querySelector(`#${modalId}`);
		if (currentModal) {
			currentModal.classList.add('active');
			modalsOverlayAll.forEach((modalOverlay) => {
				modalOverlay.classList.add('active');
			})
			document.querySelector('body').classList.add('no-scroll');
		}
	})
})

modalsOverlayAll.forEach((modalOverlay) => {
	modalOverlay.addEventListener('click', (event) => {
		if (event.target === modalOverlay) { // чтобы была возможность кликнуть по контенту без закрытия, так как родитель закрывает контент
			modalOverlay.classList.remove('active');
			modalAll.forEach((modal) => {
				modal.classList.remove('active');
			})
			document.querySelector('body').classList.remove('no-scroll');
		}
	});
})
modalsBtnCloseAll.forEach((modalBtnClose) => {
	modalBtnClose.addEventListener('click', () => {
		modalsOverlayAll.forEach((modalOverlay) => {
			modalOverlay.classList.remove('active');
		})
		modalAll.forEach((modal) => {
			modal.classList.remove('active');
		})
		document.querySelector('body').classList.remove('no-scroll');
	});
})