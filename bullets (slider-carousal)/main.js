let displayedImage = document.querySelector(".displayed-image");
let bullets = document.querySelectorAll(".bullets-box .bullet");

let index = 0;

function iterateOnImages() {
  index += 1;

  if (index >= bullets.length) index = 0;

  bullets.forEach((el) => el.classList.remove("active"));
  bullets[index].classList.add("active");

  displayedImage.style.cssText = "opacity: 0;";
  
  setTimeout(() => {
    displayedImage.src = `./imgs/${bullets[index].dataset.path}`;
  }, 300);
  
  setTimeout(() => {
    displayedImage.style.cssText = "opacity: 1;";
  }, 350);
}

setInterval(iterateOnImages, 5000);

bullets.forEach((span) => {
  span.addEventListener("click", function () {
    index = Array.from(bullets).indexOf(span);
    
    bullets.forEach((el) => el.classList.remove("active"));
    span.classList.add("active");
    
    displayedImage.style.cssText = "opacity: 0;";
    setTimeout(() => {
      displayedImage.src = `./imgs/${this.dataset.path}`;
    }, 300);
    
    setTimeout(() => {
      displayedImage.style.cssText = "opacity: 1;";
    }, 350);
  });
});
