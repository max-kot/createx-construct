if (document.querySelectorAll('.dropdown')) {
	//! Полифил для forEach для работы dropDown в IE
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = function (callback, thisArg) {
			thisArg = thisArg || window;
			for (var i = 0; i < this.length; i++) {
				callback.call(thisArg, this[i], i, this);
			}
		};
	}

	document.querySelectorAll('.dropdown').forEach((dropdown) => {
		const dropdownBtn = dropdown.querySelector('.dropdown__btn');
		const dropdownList = dropdown.querySelector('.dropdown__list');
		const dropdownItemAll = dropdown.querySelectorAll('.dropdown__list-item');
		const dropdownInput = dropdown.querySelector('.dropdown__input');

		dropdownBtn.addEventListener('click', () => {
			dropdownList.classList.toggle('dropdown__list--active');
			dropdownBtn.classList.toggle('dropdown__btn--active');
		})

		dropdownItemAll.forEach((dropdownItem) => {
			dropdownItem.addEventListener('click', (e) => {
				dropdownBtn.classList.remove('dropdown__btn--active');
				dropdownBtn.innerText = e.target.innerText;
				dropdownBtn.focus();
				dropdownInput.value = e.target.dataset.value; // вводит в input
				e.stopPropagation(); // чтобы не закрывался элемент по клику на документ
			})
		})

		// клик снаружи дропдауна закрывает список
		document.addEventListener('click', (e) => {
			if (e.target !== dropdownBtn) {
				dropdownList.classList.remove('dropdown__list--active');
				dropdownBtn.classList.remove('dropdown__btn--active');
			}
		})
		// клик по клавишам закрывает список
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Tab' || e.key === 'Escape') {
				dropdownList.classList.remove('dropdown__list--active');
				dropdownBtn.classList.remove('dropdown__btn--active');
			}
		})
	})
}

