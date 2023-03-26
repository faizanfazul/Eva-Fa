"use strict";
const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll(".line");
const nav = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
