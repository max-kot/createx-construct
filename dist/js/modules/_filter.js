const filterTabs = document?.querySelectorAll('[data-filter-tab]');
const filterList = document?.querySelectorAll('[data-filter-item]');

filterTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		// get inner attribute
		let tabId = tab.dataset.filterTab;

		// add class 'active'
		filterTabs.forEach((tab) => {
			tab.classList.remove('active');
		})
		tab.classList.add('active');

		filterList.forEach((item) => {
			// get inner attribute
			let itemId = item.dataset.filterItem;
			
			item.classList.remove('active');
			if(itemId.includes(tabId)) {
				item.classList.add('active')
			}
		})
	})
})