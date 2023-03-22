const hamburger = document.getElementById("hamburger");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  lines.forEach((line) => line.classList.toggle("active"));
});

