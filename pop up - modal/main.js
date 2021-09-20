const button = document.querySelector(".box button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const exitBtn = document.querySelector(".exit");
const transTime = 500;

button.addEventListener("click", showModalBox);
exitBtn.addEventListener("click", hideModalBox);
overlay.addEventListener("click", hideModalBox);

function showModalBox() {
  modal.classList.add("active");
  overlay.classList.add("active");

  setTimeout(() => {
    modal.style.cssText = "opacity: 1; transform: translate(-50%, -50%);";
    overlay.style.cssText = "opacity: 1;";
  }, 100);
}

function hideModalBox() {
  modal.style.cssText = "opacity: 0;";
  overlay.style.cssText = "opacity: 0;";

  setTimeout(() => {
    modal.classList.remove("active");

    overlay.classList.remove("active");
  }, transTime);
}
