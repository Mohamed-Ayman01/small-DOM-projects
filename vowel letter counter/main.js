let input = document.getElementById("vowel");
let p = document.querySelector(".container p");
let vowelLetters = ["a", "e", "i", "u", "o"];

input.addEventListener("input", countVowels);

function countVowels() {
  let valArr = this.value.split("");
  let count = 0;
  
  for (let i = 0; i < vowelLetters.length; i++) {
    valArr.map((el) => {
      if (el.toLowerCase() === vowelLetters[i]) count += 1;
      return;
    });
  }

  p.innerHTML = `${count} Vowel Letters`;
}
