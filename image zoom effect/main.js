let img = document.images[0];
let box = document.querySelector(".box");

box.addEventListener("mousemove", zoomOnMove);
box.addEventListener("mouseout", exitZoom);

function zoomOnMove(e) {
  let xAxis = e.pageX - e.target.offsetLeft;
  let yAxis = e.pageY - e.target.offsetTop;

  img.style.transformOrigin = `${xAxis}px ${yAxis}px`;
  img.style.transform = "scale(2)";
}

function exitZoom() {
  img.style.transform = "scale(1)";
  img.style.transformOrigin = "center center";
}
