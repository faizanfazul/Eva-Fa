"use strict";
const body = document.querySelector("body");
const hamburger = document.getElementById("hamburg"); // hamburger it self
const lines = document.querySelectorAll(".line"); // hamburger 3 lines
const nav = document.getElementById("navbar"); // navbar
const cartItem = document.getElementById("cart-item"); // Cart counter
const cart = document.getElementById("cart"); // Cart Icon
const cartSection = document.getElementById("cart-section"); // Cart section onclick
const xIcon = document.getElementById("x-icon"); // X icon in the cart section
const pageContainer = document.getElementById("page-container"); // part of page that bluer.

window.onload = function () {
  setInterval(() => {
    document.querySelector(".wrapper").style.display = "none";
  }, 1000);
};

pageContainer.addEventListener("click", (e) => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    lines.forEach((line) => line.classList.toggle("active"));
    pageContainer.style.filter = "blur(0px)";
    body.style.overflow = "visible";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
    pageContainer.style.filter = "blur(0px)";
    body.style.overflow = "visible";
  }
});

// Event listener for the hamburger
hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
  if (nav.style.display == "block") {
    nav.style.display = "none";
    body.style.overflow = "visible";
    pageContainer.style.filter = "blur(0px)";
  } else {
    nav.style.display = "block";
    pageContainer.style.filter = "blur(3px)";
    body.style.overflow = "hidden";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
    body.style.overflow = "visible";
  }
});

// Event listener for the cart icon
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
