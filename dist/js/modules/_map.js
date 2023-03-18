const mapLinks = document?.querySelectorAll('.map__link');
const mapInfoLists = document?.querySelectorAll('.map__info');
const mapInfoItems = document?.querySelectorAll('.map__info-item');
const mapInfoOverlays = document?.querySelectorAll('.map__info-overlay');

mapLinks.forEach((mapLink) => {
	//el.addEventListener('mouseenter', () => {
	//const itemId = el.getAttribute('href');
	//mapInfoLists.forEach((el) => {
	//	el.classList.toggle('active');
	//})
	//document?.querySelector(`${itemId}`).classList.toggle('active');
	//})

	//el.addEventListener('mouseleave', () => {
	//	const itemId = el.getAttribute('href');
	//	mapInfoLists.forEach((el) => {
	//		el.classList.remove('active');
	//	})
	//	document?.querySelector(`${itemId}`).classList.remove('active');
	//})
	mapLink.addEventListener('click', (e) => {
		e.preventDefault();
		const itemId = mapLink.getAttribute('href');
		mapInfoItems.forEach((mapInfoItem) => {
				mapInfoItem.classList.remove('active')
		})
		mapInfoLists.forEach((mapInfoList) => {
			mapInfoList.classList.toggle('active');
		})
		document?.querySelector(`${itemId}`).classList.add('active');
	});


})

mapInfoOverlays.forEach((mapInfoOverlay) => {
	mapInfoOverlay.addEventListener('click', () => {
		mapInfoItems.forEach((mapInfoItem) => {
				mapInfoItem.classList.remove('active')
		})
		mapInfoLists.forEach((mapInfoList) => {
			mapInfoList.classList.remove('active');
		})
	})
})

mapInfoItems.forEach((mapInfoItem) => {
	// создаём кнопочку закрытия
	const closeBtn = document.createElement('button')
	closeBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.99999 6.58578L14.2929 0.292893C14.6834 -0.0976313 15.3166 -0.0976307 15.7071 0.292894C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 7.99999L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L7.99999 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292894 15.7071C-0.0976307 15.3166 -0.0976313 14.6834 0.292893 14.2929L6.58578 7.99999L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"/></svg>';
	closeBtn.classList.add('map__info-close-btn');
	mapInfoItem.appendChild(closeBtn);

	// вешаем события закрытия окошка
	closeBtn.addEventListener('click', () => {
		closeBtn.parentElement.classList.remove('active');
		mapInfoLists.forEach((mapInfoList) => {
			mapInfoList.classList.toggle('active');
		})
	})
})