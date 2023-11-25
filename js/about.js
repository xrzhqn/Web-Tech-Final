// Navbar Hides And Shows onScroll--------------------------------------------------------------------
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
// ---------------------------------------------------------------------------------------------------

// Navbar Background Transparency onScroll------------------------------------------------------------
const navbar = document.querySelector('.navbar');

window.onscroll = () => {
		if (window.scrollY > 500) {
			navbar.classList.remove('bg-transparent');
			navbar.style.backgroundColor = "#000"
		} else if(window.scrollY <= 0) {
			navbar.classList.add('bg-transparent');
		}
}
// ----------------------------------------------------------------------------------------------------

// Dynamic image and Text(ABOUT US) bounded with scroll------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var zoomContainer = document.getElementById("hero-container");
  var zoomImage = document.getElementById("about-hero-img");
	var heroText = document.getElementById('about-us-text')
  window.addEventListener("scroll", function () {
    var scrollPercentage = window.scrollY / ((document.body.scrollHeight - window.innerHeight) * 2);
    var scale = 1.2 - scrollPercentage;
		var heroScale = 1 - scrollPercentage * 2;
    zoomImage.style.transform = "scale(" + scale + ")";
    heroText.style.transform = "scale(" + heroScale + ")";

  });
});
// ----------------------------------------------------------------------------------------------------

// Scroll bound with horizontal text
const carsSlogan = document.getElementById('cars-slogan');
const designSlogan = document.getElementById('design-slogan');
const matterSlogan = document.getElementById('matter-slogan');

window.addEventListener('scroll', () => {
  var scrollPosition = window.scrollY * 0.2;
  carsSlogan.style.transform = "translateX(" + scrollPosition + "px)";
  designSlogan.style.transform = "translateX(" + (scrollPosition * -1) + "px)";
  matterSlogan.style.transform = "translateX(" + scrollPosition + "px)";
});


// Accordion

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

let first = document.getElementById('dynamic');
let delayFactor = 0.8; // Задержка фактора, можно настроить под свои нужды
let scrolledPixels = 0;

window.addEventListener('scroll', () => {
  let second = document.getElementById('dynamic2');

  if (isElementInViewport(first)) {
    scrolledPixels = window.scrollY - (first.offsetTop * delayFactor);

    first.style.transform = "translateY(" + (scrolledPixels * 0.1) + "px)";
    second.style.transform = "translateY(" + (scrolledPixels * 0.1) + "px)";
  }
});