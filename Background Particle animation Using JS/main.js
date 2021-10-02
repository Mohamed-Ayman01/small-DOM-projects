function getRandomInteger(start, range) {
  let num = Math.floor(Math.random() * range + start);

  while (num > range) num = Math.floor(Math.random * range + start);

  return num;
}

let particles = document.querySelectorAll(".particle");

function randomizeParticles() {
  particles.forEach((span) => span.style.transform = `translate(${getRandomInteger(0, window.innerWidth)}px,${getRandomInteger(0, window.innerHeight)}px)`);
}

setInterval(randomizeParticles, 1500);
