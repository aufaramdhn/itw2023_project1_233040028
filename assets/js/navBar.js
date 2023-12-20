const menuToggle = document.querySelector(".menu-toggle input");
const navBar = document.querySelector(".navbar");
// const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
  navBar.classList.toggle("slide");
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar ul li a");
  const mobileNav = document.querySelector(".navbar");
  const checkbox = document.getElementById("nav-toggle");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("slide");
      checkbox.checked = false;
    });
  });

  window.addEventListener("scroll", function () {
    // Change the class of the navbar link when scrolling
    navLinks.forEach((link) => {
      const sectionId = link.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        link.classList.add("scrolled");
      } else {
        link.classList.remove("scrolled");
      }
    });
  });
});
