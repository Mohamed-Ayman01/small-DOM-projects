let content = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium sequi autem?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quis at cum officia similique a cumque error ab?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis totam eos ab modi, necessitatibus obcaecati ea enim suscipit possimus.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, animi.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt debitis explicabo consectetur saepe laudantium fuga. Voluptatum veritatis sint amet minima quas quidem esse, aperiam quisquam.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quod rerum repellendus ratione optio nobis tenetur deleniti corrupti deserunt. Similique neque modi at cumque doloremque, nihil dicta nulla dolores sapiente placeat.",
];

let getRandomInteger = (start, range) => {
  let random = Math.floor(Math.random() * range + start);

  while (random > range) random = Math.floor(Math.random() * range + start);

  return random;
};

let randomizeBtn = document.getElementById("randomize");
let contentBox = document.querySelector(".box p");

randomizeBtn.addEventListener('click', () => contentBox.innerHTML = content[getRandomInteger(0, 6)])


