const btn = document.getElementById("toggleDark");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  this.classList.toggle("ri-moon-fill");
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "light") {
    btn.classList.add("ri-sun-fill");
    setDarkMode();
  } else {
    btn.classList.remove("ri-sun-fill");
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
