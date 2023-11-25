// Scroll to target element---------------------------------
$(document).ready(() => {
  $('.nav-item').on('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href').substring(1);
    const $targetSection = $('#' + target);

    if ($targetSection.length) {
      $('html, body').animate({
        scrollTop: $targetSection.offset().top
      }, 1000);
    }
  });
});
// ---------------------------------------------------------

// Sound Button---------------------------------------------
const vidos = document.querySelector('.video')
vidos.volume = 0
const btn = document.getElementById('sound')
const soundOff = document.querySelector('.fa-volume-off')
const soundOn = document.createElement('i')
soundOn.className = "fa-solid fa-volume-high"
soundOn.style.color = "#fff"

btn.addEventListener('click', () => {
	if(vidos.volume > 0) {
		btn.removeChild(soundOn)
		btn.appendChild(soundOff)
		vidos.volume = 0
	}
	else{
		btn.removeChild(soundOff)
		btn.appendChild(soundOn)
		vidos.volume = 1
	}
})
// --------------------------------------------------------

// Swiper--------------------------------------------------
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	parallax: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// --------------------------------------------------------

// Animation on Icons (Footer)-----------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	const socialIcons = document.querySelectorAll('.card-area a');

	socialIcons.forEach(icon => {
			icon.addEventListener('mouseenter', () => {
					icon.classList.add('icon-hover');
			});

			icon.addEventListener('mouseleave', () => {
					icon.classList.remove('icon-hover');
			});
	});
});
// -------------------------------------------------------

// Header Animation at the beginning--------------------------------
var header = document.querySelector('header');

header.style.opacity = 0;
header.style.transform = 'translateY(-60px)';

var delay = 2000;

setTimeout(function () {
  header.style.transition = 'opacity 1s ease-out';
  header.style.opacity = 1;

  header.style.transition = 'transform 1s ease-out';
  header.style.transform = 'translateY(0)';
}, delay);
// -----------------------------------------------------

// Navbar Hides And Shows onScroll--------------------------------------
var previousScrollY = window.currentScrollY
window.addEventListener('scroll', () => {
	const currentScrollY = window.scrollY;
		if (currentScrollY > previousScrollY) {
			gsap.to('header', { duration: .3, y: -50, opacity: 0 });
		} else {
			gsap.to('header', { duration: .3, y: 0, opacity: 1 });
		}
	previousScrollY = currentScrollY;
});
// Navbar Background Transparency onScroll------------------------------------------------------
const navbar = document.querySelector('.navbar');

window.onscroll = () => {
		if (window.scrollY > 500) {
			navbar.classList.remove('bg-transparent');
			navbar.style.backgroundColor = "#000"
		} else if(window.scrollY <= 0) {
			navbar.classList.add('bg-transparent');
		}
}
// ------------------------------------------------------

// Responsive changing Video -> Photo----------------------
// function handleWindowSize() {

// 	if (window.innerWidth < 1400) {
// 			heroImg.style.background = "url(src/McLaren_2018_Novitec_N-Largo_720S_Front_556767_4096x2304.jpg) center no-repeat";
// 			heroImg.style.backgroundSize = "cover";

// 			if (photoContainer.contains(shadow)) {
// 					shadow.style.height = "10vh";
// 			}

// 			const heroTextWrapper = document.createElement('div');
// 			heroTextWrapper.classList.add('container', 'hero-text-wrapper');
// 			const heroText = document.createElement('h1');
// 			heroText.className = "hero-text text-white text-uppercase";
// 			heroText.textContent = "Be Humble.";
// 			heroTextWrapper.insertAdjacentElement('afterbegin', heroText);
// 			photoContainer.insertAdjacentElement('afterbegin', heroTextWrapper);
// 			document.body.removeChild(sound);
// 			photoContainer.replaceChild(heroImg, videoContainer);
// 	} else {
// 			videoContainer.id = 'photo-container';
// 	}
// }

// handleWindowSize();

// window.addEventListener('resize', handleWindowSize);


// Preloader Demo----------------------------------------------
// const content = document.querySelectorAll('img');
// const loaderWrapper = document.querySelector('.loader-wrapper');
// let i = 0;

// document.addEventListener('DOMContentLoaded', () => {
// 	document.body.style.overflow = "hidden"
// 	content.forEach((file, index) => {
//     if (file.id === 'frameTamer') {
//       return;
//     }

//     file.onload = () => {
//       i++;
// 			console.log('loaded', i, 'image')
//       if (i === content.length - 1) {
//         loaderWrapper.style.display = "none";
// 				document.body.style.overflow = "auto"
//       }
//     };
//   });
// });
// -------------------------------------------------------------

// Animation of Preloader---------------------------------------
//   const animationContainer = document.querySelector('.loader-wrapper');
//   const animationData = {
//     container: animationContainer,
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'src/asd.json',
//   };

//   const anim = lottie.loadAnimation(animationData);