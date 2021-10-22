let skilsSection = document.querySelector(".skills");
let skillBars = document.querySelectorAll(".skill-box .bar");
let progressSpans = document.querySelectorAll(".skill-box .bar span.progress");

window.onscroll = function (e) {
  if (window.scrollY >= 605 && window.scrollY <= 1600) {
    progressSpans.forEach(el => {
      let progressCount = el.dataset.prog;

      el.style.width = `${progressCount}`;
    });
  } else {
    progressSpans.forEach(el => {
      el.style.width = `0%`;
    });
  }
}
