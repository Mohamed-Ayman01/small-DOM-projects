const section = document.querySelector("section");
// Color Input 1
const colorOne = document.getElementById("color");
const colorOneSize = document.getElementById("color-size");

// Color Input 2
const colorTwo = document.getElementById("color2");
const colorTwoSize = document.getElementById("color2-size");

// Gradient Type / Rotation / Size Inputs 
const gradtype = document.getElementById("select");
const gradRotate = document.getElementById("rotate");

// Output text Area And Copy Button
const textArea = document.getElementById("output");
const copyBtn = document.getElementById("copy");
const tooltip = document.querySelector(".tooltip");

const inputs = [colorOne, colorOneSize, colorTwo, colorTwoSize, gradtype, gradRotate];

inputs.forEach((el) => {
  el.oninput = () => {
    let linearBg = `linear-gradient(${gradRotate.value !== "" ? gradRotate.value + "deg" : "to left"}, ${colorOne.value} ${colorOneSize.value !== "" ? colorOneSize.value + "%" : ""}, ${colorTwo.value} ${colorTwoSize.value !== "" ? colorTwoSize.value + "%" : ""})`;
    let radialBg = `radial-gradient(${gradRotate.value !== "" ? gradRotate.value + "px" : "200px"}, ${colorOne.value},${colorTwo.value})`;

    if (gradtype.value === "linear") {
      document.body.style = `background-image: ${linearBg}; background-attachment: fixed;`;
      textArea.textContent = linearBg;
      section.classList.remove("move");
    } else {
      document.body.style = `background-image: ${radialBg}; background-attachment: fixed;`;
      textArea.textContent = radialBg;
      section.classList.add("move");
    }
  };
});

copyBtn.addEventListener('click', copyCode);
copyBtn.addEventListener("mouseleave", () => tooltip.classList.remove("show"))

function copyCode() {
  textArea.select();
  document.execCommand("copy");
  tooltip.classList.add("show")
}

