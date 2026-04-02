const menuBtn = document.getElementById("nav_button");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  menuBtn.classList.toggle("hide-button");
});
const close = document.getElementById("closemenu");
close.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  menuBtn.classList.toggle("hide-button");
});

const menuLinks = document.querySelectorAll(".header__link a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    menuBtn.classList.toggle("hide-button");
  });
});
