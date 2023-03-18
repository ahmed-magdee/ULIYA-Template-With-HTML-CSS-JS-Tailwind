let toggleMenu = document.querySelector(".toggle-menu")
let header = document.querySelector("header")
let divToggle = document.querySelector(".toggle")

toggleMenu.onclick = function() {
  header.classList.toggle("open")
}
