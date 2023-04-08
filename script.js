"use strict";
const body = document.querySelector("body");
const hamburger = document.getElementById("hamburg");
const lines = document.querySelectorAll(".line");
const nav = document.getElementById("navbar");
const cartItem = document.getElementById("cart-item");
const cart = document.getElementById("cart");
const cartSection = document.getElementById("cart-section");
const xIcon = document.getElementById("x-icon");
const pageContainer = document.getElementById("page-container");

window.onload = function () {
  setInterval(() => {
    document.querySelector(".wrapper").style.display = "none";
  }, 1000);
};

pageContainer.addEventListener("click", e => {
  if(nav.style.display == "block"){
    nav.style.display = "none";
      lines.forEach((line) => line.classList.toggle("active"));
  }
  if(cartSection.style.display == "block"){
    cartSection.style.display = "none";
  }
});

hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
  if (nav.style.display == "block") {
    nav.style.display = "none";
  pageContainer.style.filter = "blur(0px)";
  } else {
    nav.style.display = "block";
    pageContainer.style.filter = "blur(3px)";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
  } 
});

cart.addEventListener("click", (e) => {
  e.preventDefault();
  if (nav.style.display == "block") {
    nav.style.display = "none";
      lines.forEach((line) => line.classList.toggle("active"));
  }
  cartSection.style.display = "block";
  cartSection.focus();
  pageContainer.style.filter = "blur(3px)";
  body.style.overflow = "hidden";
});

xIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cartSection.style.display = "none";
  pageContainer.style.filter = "blur(0px)";
  body.focus();
  body.style.overflow = "visible";
});

