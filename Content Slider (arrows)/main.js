const goLeftArrow = document.querySelector(".arrow-left");
const goRightArrow = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slide")

let index = 1;
let minIndex = 4;

goLeftArrow.addEventListener("click", () => {
  if (index > slides.length) index = 1;
  
  slides.forEach(slide => {

    if (index <= slides.length - 1) {
      slide.style.transform = `translateX(-${slide.clientWidth * index}px)`;
    } else {
      slide.style.transform = `translateX(${slide.clientWidth * 0}px)`;
    }

  });

  index += 1;
});

goRightArrow.addEventListener("click", () => {
  
  slides.forEach(slide => {

    slide.style.transform = `translateX(${slide.clientWidth * 1}px)`;

  });
});