var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  // Size list target
  const sizes = document.querySelectorAll('.list-inline-item')

  sizes.forEach( size => {
    size.addEventListener('click', (e) => {
      
      sizes.forEach(element => {
        element.classList.remove('active');
      });
      
      const currentSize = e.currentTarget
      currentSize.classList.add('active')

    })
  })
// Quantity
const leaveMeAlone = document.getElementById('minus-btn');
const IncreaseMeThere = document.getElementById('plus-btn');
const quantityField = document.getElementById('quantity');

leaveMeAlone.onclick = () => {
  quantityField.value = parseInt(quantityField.value) - 1;
};

IncreaseMeThere.onclick = () => {
  quantityField.value = parseInt(quantityField.value) + 1;
};
