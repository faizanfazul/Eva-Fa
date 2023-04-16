"use strict";
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

// for main slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  // effect:"coverflow",
  lazy:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
