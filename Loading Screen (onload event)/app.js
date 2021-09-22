let loadingScreen = document.querySelector(".load");

window.addEventListener("load", hideLoading);

function hideLoading() {
  loadingScreen.style.cssText = "opacity: 0;";
  setTimeout(() => (loadingScreen.style.cssText = "display: none;"), 800);

  document.body.style.overflow = "auto";
}
