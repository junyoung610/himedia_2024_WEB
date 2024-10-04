const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mobileMenu = document.querySelector(".mobile-menu");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
