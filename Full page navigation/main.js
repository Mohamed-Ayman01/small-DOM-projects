const menuBtn = document.querySelector(".burger-menu");
const navigationMenu = document.querySelector(".navigation-menu");
const exitNavigationBtn = document.querySelector(".exit-navigation");
const navigationLinks = document.querySelectorAll(".links li a");

menuBtn.addEventListener("click", () => {
  navigationMenu.classList.add("active");
});

exitNavigationBtn.addEventListener("click", () => {
  navigationMenu.classList.remove("active");
})

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", () => {
    navigationMenu.classList.remove("active");
  })
}