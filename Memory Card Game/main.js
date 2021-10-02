function getRandomNumber(start, range) {
  let num = Math.floor(Math.random() * range + start);

  while (num > range) num = Math.floor(Math.random() * range + start);

  return num;
}

let imgs = Array.from(document.images);
let resetBtn = document.querySelector(".reset");
let srcList = ["imgs/GOF - Bg.jpg", "imgs/Keloa Bg.jpg", "imgs/Gon Bg.jpg"];

function randomizeImgs() {
  imgs.forEach((img) => img.src = `${srcList[getRandomNumber(0, 3)]}`);
}


resetBtn.onclick = randomizeImgs;

randomizeImgs();