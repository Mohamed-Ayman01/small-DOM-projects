let btns = document.querySelectorAll("li button:not(.all)");
let addAllBtn = document.querySelector(".all");
let imgBoxes = document.querySelectorAll(".box");

addAllBtn.addEventListener("click", showAllBoxes);

btns.forEach((el) => el.addEventListener("click", filterImgs));

function filterImgs() {
  imgBoxes.forEach((el) => {
    el.style.display = "none";

    if (el.getAttribute("data-filter") == this.className)
      el.style.display = "block";
  });
}

function showAllBoxes() {
  imgBoxes.forEach((el) => {
    el.style.cssText = "display: block";
  });
}

imgBoxes.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    el.firstElementChild.style.cssText = `transform: scale(2); transform-origin: ${x}px ${y}px`;
  });

  el.addEventListener("mouseout", () => {
    el.firstChild.style.cssText =
      "transform: scale(1); transform-origin: center center";
  });
});
