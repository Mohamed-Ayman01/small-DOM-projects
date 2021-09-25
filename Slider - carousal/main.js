let toggleBtn = document.querySelector(".switch");

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle("dark");
  document.body.classList.contains("dark")
    ? toggleBtn.innerHTML = "Light Mode"
    : toggleBtn.innerHTML = "Dark Mode"
})