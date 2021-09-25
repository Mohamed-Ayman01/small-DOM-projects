let p = document.querySelector(".box p");
let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium officia quas";

let index = 0;

function writer() {
  if (index >= 87) index = 0;

  index += 1;

  p.innerHTML = text.slice(0, index);
}

setInterval(() => writer(), 300);
