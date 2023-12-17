const menuToggle = document.querySelector(".menu-toggle input");
const navBar = document.querySelector(".navbar");
// const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  navBar.classList.toggle("slide");
});
