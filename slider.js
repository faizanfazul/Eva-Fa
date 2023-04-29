"use strict";
// for main slider
var swiper = new Swiper(".main-swiper", {
  spaceBetween: 10,
  loop: false,
  effect: "creative",
  creativeEffect: {
    perspective: true,
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
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
    295: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
// swiper for showcasing product in
var swiper = new Swiper(".select-images", {
  loop: false,
  lazy: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-slideShow", {
  loop: true,
  lazy: true,
  spaceBetween: 10,
  zoomContainerClass: "swiper-zoom-container",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  zoom: {
    maxRatio: 10,
    minRatio: 1,
    toggle: true,
  },
});
