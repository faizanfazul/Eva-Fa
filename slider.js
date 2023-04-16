"use strict";
// for main slider
var swiper = new Swiper(".main-swiper", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  effect: "coverflow",
  lazy: true,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
    checkInView: true,
  },
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
// for New arrival products slider
var swiper = new Swiper(".new-arrival-swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
});
