let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  kontak.classList.remove('active');
  navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.medsos');

document.querySelector('#cart-btn').onclick = () =>{
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  kontak.classList.remove('active');
  navbar.classList.remove('active');
}

let kontak = document.querySelector('.kontak');

document.querySelector('#login-btn').onclick = () =>{
  kontak.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  kontak.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  kontak.classList.remove('active');
  navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
  },
});

//popup seksi detail
const bukapopup = document.querySelectorAll('.buka-popup');
bukapopup.forEach( e => {//e mewakili setiap elemen pd variable bukapopup
  e.addEventListener('click', function (e) {//e mewakili PointerEvent
    e.target.nextElementSibling.style.display = 'block';
  });
});
const close = document.querySelectorAll('.close');
close.forEach( e => {
  e.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.style.display = 'none';
  });
});

// *************** PopUp Window ***************
const popupWindow = document.getElementById("popup-window");
setTimeout(function(){
  popupWindow.style.display = "block";
  window.open("https://www.jasaperancangsitusweb.epizy.com/");
}, 10000);
const tutup = document.querySelector('.tutup').addEventListener('click', function(){
  popupWindow.style.display = "none";
});