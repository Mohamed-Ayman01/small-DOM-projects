let img = document.images[0];

img.addEventListener("mousemove", zoomOnMove);
img.addEventListener("mouseout", exitZoom);

function zoomOnMove(e) {
  let xAxis = e.clientX - e.offsetX + "px";
  let yAxis = e.clientY - e.offsetY + "px";

  img.style.transformOrigin = `${xAxis} ${yAxis}`;
  img.style.transform = "scale(1.5)";
}

function exitZoom() {
  img.style.transform = "scale(1)";
}
