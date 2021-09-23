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

// Array Of Inputs
const inputs = [colorOne, colorOneSize, colorTwo, colorTwoSize, gradtype, gradRotate];

// Lopping on the inputs and catching chnages by onInput event to update style / Output Box 
inputs.forEach((el) => {
  el.oninput = () => {
    let linearBg = `background-image: linear-gradient(${gradRotate.value !== "" ? gradRotate.value + "deg" : "to left"}, ${colorOne.value} ${colorOneSize.value !== "" ? colorOneSize.value + "%" : ""}, ${colorTwo.value} ${colorTwoSize.value !== "" ? colorTwoSize.value + "%" : ""});
background-attachment: fixed;`;
    let radialBg = `background-image: radial-gradient(${gradRotate.value !== "" ? gradRotate.value + "px" : "200px"}, ${colorOne.value},${colorTwo.value});
background-attachment: fixed;`;

    if (gradtype.value === "linear") {
      document.body.style = `${linearBg};`;
      textArea.textContent = linearBg;
      section.classList.remove("move");
    } else {
      document.body.style = `${radialBg};`;
      textArea.textContent = radialBg;
      section.classList.add("move");
    }
  };
});

copyBtn.addEventListener('click', copyCode);
copyBtn.addEventListener("mouseleave", () => setTimeout(() => tooltip.classList.remove("show"), 500) )

function copyCode() {
  textArea.select();
  document.execCommand("copy");
  tooltip.classList.add("show")
}

