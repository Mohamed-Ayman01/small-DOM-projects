const paragraphs = document.querySelectorAll(".boxes .box .number");

paragraphs.forEach((el) => {
  let maxValue = el.dataset.number;

  function increaseValue() {
    el.innerHTML = +el.innerHTML + 1;

    if (Number(el.innerHTML) >= maxValue) {
      clearInterval(handler);
    }
  }

  let handler = setInterval(increaseValue, 30);
});
