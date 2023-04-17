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
  spaceBetween: 10,
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
