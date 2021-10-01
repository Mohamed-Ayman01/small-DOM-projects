let counter = document.querySelector(".counter");
let btn = document.querySelector(".btn");

let handler = setInterval(countDown, 1000);

function countDown() {
  counter.innerHTML -= 1;
  if (+counter.innerHTML === 0) {
    clearInterval(handler);
    btn.style.setProperty("opacity", "1");
    btn.style.setProperty("pointer-events", "all");
  }
}

btn.onclick = () => {
  window.location.assign("./js-img2.png")
}