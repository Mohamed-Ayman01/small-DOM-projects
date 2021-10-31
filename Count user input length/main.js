const input = document.getElementById("text");
const line = document.querySelector(".line");
let maxChars = 14;

input.addEventListener("input", () => {
  let valueLength = input.value.length;

  line.style.width = `${(valueLength * 100) / maxChars}%`;
});