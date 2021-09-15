let cursor = document.querySelector(".cursor");
let box = document.querySelector(".box");

window.onmousemove = (event) => {
  cursor.style.top = event.pageY + "px" 
  cursor.style.left = event.pageX + "px"
}

box.onmouseenter = () => {
  cursor.classList.add("hover");
}
box.onmouseleave = () => {
  cursor.classList.remove("hover")
}