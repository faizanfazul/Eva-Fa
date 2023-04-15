"use strict";
const progressCircle = document.querySelector(".autoplay-progress svg"),progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {spaceBetween: 10,loop: !0,centeredSlides: !0,effect: "coverflow",lazy: !0,autoplay: { delay: 3e3,disableOnInteraction: !1 },pagination: { el: ".swiper-pagination", clickable: !0 },navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },});
