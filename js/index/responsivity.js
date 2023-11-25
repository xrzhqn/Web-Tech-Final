const videoContainer = document.getElementById('video-container');
// const photoContainer = document.getElementById('photo-container');
const sound = document.getElementById('sound');
const shadow = document.querySelector('.shadow');
// Create an Img to switch with Video
const heroImg = document.createElement('img');
heroImg.style.background = "url(src/McLaren_2018_Novitec_N-Largo_720S_Front_556767_4096x2304.jpg) center no-repeat";
heroImg.style.backgroundSize = "cover";
// Creatr a wrapper for Hero section Text
			const heroTextWrapper = document.createElement('div');
			heroTextWrapper.classList.add('container', 'hero-text-wrapper');
// Hero section text
			const heroText = document.createElement('h1');
			heroText.className = "hero-text text-white text-uppercase";
			heroText.textContent = "Be Humble.";
			heroTextWrapper.insertAdjacentElement('afterbegin', heroText);

const breakPointXL = window.matchMedia('(max-width: 1299px)');
breakPointXL.addListener(() => {
	if (breakPointXL.matches) {
		console.log('ширина меньше 1300')
		videoContainer.id = 'photo-container'
		if(videoContainer.contains(shadow)) {
			shadow.style.height = "10vh";
		}
		videoContainer.insertAdjacentElement('afterbegin', heroTextWrapper);
		document.body.removeChild(sound);
		videoContainer.replaceChild(heroImg, vidos);

	}else {
		console.log('ширирна больше 1300')
		videoContainer.id = 'video-container'
		videoContainer.replaceChild(vidos, heroImg);
		document.body.appendChild(sound);
		videoContainer.removeChild(heroTextWrapper)
		vidos.play()
	}
})

