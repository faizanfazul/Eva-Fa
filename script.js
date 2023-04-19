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

window.addEventListener("load", (e) => {
  setTimeout(() => {
    document.querySelector(".wrapper").style.display = "none";
    body.style.overflow = "visible";
  }, 1000);
});
// Event listener for the hamburger
hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
  if (nav.style.display == "block") {
    nav.style.display = "none";
    body.style.overflow = "visible";
    pageContainer.style.display = "none";
  } else {
    nav.focus();
    body.style.overflow = "hidden";
    pageContainer.style.display = "block";
    nav.style.display = "block";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
    body.style.overflow = "hidden";
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
  pageContainer.style.display = "block";
  body.style.overflow = "hidden";
});
xIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cartSection.style.display = "none";
  pageContainer.style.display = "none";
  body.focus();
  body.style.overflow = "visible";
});
pageContainer.addEventListener("click", (e) => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    lines.forEach((line) => line.classList.toggle("active"));
    pageContainer.style.display = "none";
    body.style.overflow = "visible";
  }
  if (cartSection.style.display == "block") {
    cartSection.style.display = "none";
    pageContainer.style.display = "none";
    body.style.overflow = "visible";
  }
});
