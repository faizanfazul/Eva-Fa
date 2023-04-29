"use strict";
const body = document.querySelector("body");
const hamburger = document.getElementById("hamburg"); // hamburger it self
const lines = document.querySelectorAll(".line"); // hamburger 3 lines
const nav = document.getElementById("navbar"); // navbar
const cartCount = document.getElementById("cart-count"); // Cart counter
const cart = document.getElementById("cart"); // Cart Icon
const cartSection = document.getElementById("cart-section"); // Cart section onclick
const xIcon = document.getElementById("x-icon"); // X icon in the cart section
const pageContainer = document.getElementById("page-container"); // part of page that blur.
const searchContainer = document.getElementById("search-container"); // search container.
const searchButton = document.getElementById("search-icon"); // search container.
const SeInput = document.getElementById("search-input"); // search input.
const SearchResult = document.getElementById("search-results"); // search input.
const menuItems = document.querySelectorAll("nav li a"); // menu stuff in navbar

window.addEventListener("load", (e) => {
  document.querySelector(".loading").style.display = "none";
  body.style.overflow = "visible";
});
// Event listener for the hamburger
hamburger.addEventListener("click", () => {
  if (searchContainer.style.display == "block") {
    closeSearch();
  }
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
  if (searchContainer.style.display == "block") {
    closeSearch();
  }
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
function closeSearch() {
  searchContainer.style.display = "none";
  pageContainer.style.display = "none";
  body.focus();
  body.style.overflow = "visible";
  SeInput.value = "";
  SearchResult.innerHTML = "";
}
searchButton.addEventListener("click", (e) => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    lines.forEach((line) => line.classList.toggle("active"));
  }
  searchContainer.style.display = "block";
  SeInput.focus();
  pageContainer.style.display = "block";
  body.style.overflow = "hidden";
});
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const clickedItem = event.currentTarget.parentNode;
    const clickedItemSubMenu = clickedItem.querySelector("ul");
    const clickedItemArrow = clickedItem.querySelector(".pointing-arrow");
    const clickedItemColor = clickedItem.querySelector("ul li a");
    if (clickedItemSubMenu) {
      if (clickedItemSubMenu.style.display === "block") {
        clickedItemSubMenu.style.display = "none";
      } else {
        clickedItemSubMenu.style.display = "block";
      }
      clickedItemArrow.classList.toggle("active");
      clickedItemColor.classList.toggle("active");
    }
  });
});
