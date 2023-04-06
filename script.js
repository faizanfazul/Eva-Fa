"use strict";
const hamburger = document.getElementById("hamburg");
const lines = document.querySelectorAll(".line");
const nav = document.getElementById("navbar");
const cartItem = document.getElementById("cart-item");
const cart = document.getElementById("cart");
const cartSection = document.getElementById("cart-section");
const xIcon = document.getElementById("x-icon");

window.onload = function () {
  setInterval(() => {
    document.querySelector(".wrapper").style.display = "none";
  }, 1000);
};

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

