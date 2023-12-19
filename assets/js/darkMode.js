const btn = document.getElementById("toggleDark");
const currentTheme = localStorage.getItem("theme");
// const changeIcon = document.querySelector()

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  this.classList.toggle("ri-moon-foggy-fill");
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "light") {
    setDarkMode();
  } else {
    setLightMode();
  }
}

function setLightMode() {
  document.body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");
}

function setDarkMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "dark");
}
