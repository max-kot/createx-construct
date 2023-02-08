const videoBtnPlay = document?.querySelector('.video-section__btn-play');
const videoBtnMute = document?.querySelector('.video-section__btn-mute');
const videoBlock = document?.querySelector('.video-section__video');
const videoOverlay = document?.querySelector('.video-section__video-overlay');
if(videoBlock){
	const toggleOverlay = (event) => {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden')
		} else {
			videoOverlay.classList.remove('hidden')
		}
	}
	
	videoBtnPlay.addEventListener('click', () => {
	
		if (videoBlock.paused) {
			videoBlock.play();
			videoBtnPlay.innerHTML = '<svg width="26px" height="26px"><use xlink:href="./img/icons/sprite.svg#pause-btn"></use></svg>';
			videoOverlay.onmouseleave = toggleOverlay;
			videoOverlay.onmouseenter = toggleOverlay;
	
		} else {
			videoBlock.pause();
			videoBtnPlay.innerHTML = '<svg width="26px" height="26px"><use xlink:href="./img/icons/sprite.svg#play-btn"></use></svg>';
			videoOverlay.onmouseleave = null;
			videoOverlay.onmouseenter = null;
		}
	
	});
	
	videoBtnMute.addEventListener('click', () => {
		if (videoBlock.hasAttribute('muted')) {
			videoBlock.toggleAttribute('muted');
			videoBlock.muted = false;
			videoBtnMute.innerHTML = '<svg width="14px" height="14px"><use xlink:href="./img/icons/sprite.svg#unmute-btn"></use></svg>';
		} else {
			videoBlock.toggleAttribute('muted');
			videoBlock.muted = true;
			videoBtnMute.innerHTML = '<svg width="14px" height="14px"><use xlink:href="./img/icons/sprite.svg#mute-btn"></use></svg>';
		}
	
	})
	
	videoBlock.addEventListener('ended', () => {
		videoBtnPlay.innerHTML = '<svg width="26px" height="26px"><use xlink:href="./img/icons/sprite.svg#play-btn"></use></svg>';
	})
}
