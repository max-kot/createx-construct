/*
* Несколько анимированных кругов ==> работает смена значений всех
*/
let allProgressBar = document?.querySelectorAll('.circle-progress');
allProgressBar.forEach((progressBar) => {
	// Обводка
	let progressStroke = parseInt(progressBar?.dataset.stroke); // ширина обводки
	progressBar.style.setProperty('--strokeWidth', `${progressStroke}px`)

	// Фон
	let progressBgColor = progressBar?.dataset.bgcolor; // ширина обводки
	progressBar.style.setProperty('--bgColor', `${progressBgColor != undefined ? progressBgColor : '#fff'}`)

	let valueContainer = progressBar?.querySelector('.circle-progress__value'); //! сработало благодяря замени с документа на progressBar

	let progressValue = 0;
	let progressEndValue = progressBar.dataset.end;
	let step = parseInt(progressBar.dataset.step);
	let progressFullValue = progressBar.dataset.full;
	let speed = parseInt(progressBar.dataset.speed);
	let accentColor = progressBar.dataset.accent;
	let color = progressBar.dataset.color;

	if (progressBar.hasAttribute('data-percent')) {
		if (progressBar.hasAttribute('data-no-animation')) {
			progressValue = progressEndValue;
			valueContainer.textContent = `${progressValue}%`;
			progressBar.style.background = `conic-gradient(
					${accentColor} ${progressValue * (360 / 100)}deg,
					${color} ${progressValue * (360 / 100)}deg)`;
		} else {
			let progress = setInterval(() => {
				progressValue += 1;
				valueContainer.textContent = `${progressValue}%`;
				progressBar.style.background = `conic-gradient(
					${accentColor} ${progressValue * (360 / 100)}deg,
					${color} ${progressValue * (360 / 100)}deg)`;

				if (progressValue == progressEndValue) {
					clearInterval(progress);
				}
			}, speed);
		}


	}

	if (progressBar.hasAttribute('data-value')) {
		let progressValuePercent = 0;
		let progressEndValuePercent = Math.floor(progressEndValue * 100 / progressFullValue);
		let stepPercent = Math.floor(step * 100 / progressFullValue);

		if (progressBar.hasAttribute('data-no-animation')) {
			progressValuePercent = progressEndValuePercent;
			progressValue = progressEndValue;
			valueContainer.textContent = `${progressValue}`;
			progressBar.style.background = `conic-gradient(
				${accentColor} ${progressValuePercent * (360 / 100)}deg,
				${color} ${progressValuePercent * (360 / 100)}deg)`;
		} else {
			let progress = setInterval(() => {
				progressValuePercent += stepPercent;
				if (progressValue === parseInt(progressEndValue)) {
					// * так как шаги зависили от % значение отображались не указанные а расчитаные по шагам, поэтому мы обнуляем шаги
					progressValue += 0;
				} else {
					progressValue += step;
				}
				valueContainer.textContent = `${progressValue}`;
				progressBar.style.background = `conic-gradient(
						${accentColor} ${progressValuePercent * (360 / 100)}deg,
						${color} ${progressValuePercent * (360 / 100)}deg)`;

				if (progressValuePercent >= progressEndValuePercent) {
					clearInterval(progress);
				}
			}, speed);
		}
	}

})



/*
* Один круг анимированный
let progressBar = document?.querySelector('.circle-progress');
let valueContainer = document?.querySelector('.circle-progress__value');

//console.log(progressBar, valueContainer)

let progressValue = 0;
let progressEndValue = progressBar.dataset.end;
let step = parseInt(progressBar.dataset.step);
let progressFullValue = progressBar.dataset.full;
let speed = parseInt(progressBar.dataset.speed);
let accentColor = progressBar.dataset.accent;
let color = progressBar.dataset.color;

if (progressBar.hasAttribute('data-percent')) {
	let progress = setInterval(() => {
		progressValue += 1;
		valueContainer.textContent = `${progressValue}%`;
		progressBar.style.background = `conic-gradient(
					${accentColor} ${progressValue * (360 / 100)}deg,
					${color} ${progressValue * (360 / 100)}deg)`;
		if (progressValue == progressEndValue) {
			clearInterval(progress);
		}
	}, speed);

}

if (progressBar.hasAttribute('data-value')) {
	let progressValuePercent = 0;
	let progressEndValuePercent = progressEndValue * 100 / progressFullValue;
	let stepPercent = step * 100 / progressFullValue;
	let progress = setInterval(() => {
		progressValue += step;
		progressValuePercent += stepPercent;
		valueContainer.textContent = `${progressValue}`;
		progressBar.style.background = `conic-gradient(
					${accentColor} ${progressValuePercent * (360 / 100)}deg,
					${color} ${progressValuePercent * (360 / 100)}deg)`;

		if (progressValuePercent === progressEndValuePercent) {
			clearInterval(progress);
		}
	}, speed);
}
*/


