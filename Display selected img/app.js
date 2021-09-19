let imagesArr = document.querySelectorAll("aside img");
let displayedImg = document.querySelector(".display-box img");

imagesArr.forEach((element) => {
  element.addEventListener("click", () => {
    displayedImg.style.cssText = "opacity: 0; transform: translatey(-10px)";
    
    setTimeout(() => {
      displayedImg.src = `${element.src}`;
      displayedImg.style.cssText = "opacity: 1; transform: translatey(0)";
    }, 500);

    imagesArr.forEach((el) => {
      el.classList.remove("active");
    });
    element.classList.add("active");
  });
});
