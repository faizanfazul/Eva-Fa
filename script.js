"use strict";
const hamburger = document.getElementById("hambur");
const lines = document.querySelectorAll(".line");
const nav = document.getElementById("navbar");
const cartItem = document.getElementById("cart-item");
const cart = document.getElementById("cart");
const cartSection = document.getElementById("cart-section");
const xIcon = document.getElementById("x-icon");

hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
  } 
});

cart.addEventListener("click", (e) => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
      lines.forEach((line) => line.classList.toggle("active"));
  }
  cartSection.style.display = "block"
});

xIcon.addEventListener("click", (e) => {
  cartSection.style.display = "none";
});


window.addEventListener("load", (e) => {
  e.preventDefault();
  const element = document.querySelector("html");
  element.classList.add("show");
});
