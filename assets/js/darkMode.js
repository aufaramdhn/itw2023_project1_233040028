const btn = document.getElementById("toggleDark");
const currentTheme = localStorage.getItem("theme");
// const changeIcon = document.querySelector()

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  //   this.classList.toggle("ri-sun-line");
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
  // btn.classList.remove("ri-moon-line")
  // btn.classList.add("ri-sun-line")
}

function setDarkMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "dark");
  // btn.classList.remove("ri-sun-line")
  // btn.classList.add("ri-moon-line")
}
