let allTabs = Array.from(document.querySelectorAll(".tabs li"));
let allDivs = Array.from(document.querySelectorAll(".content"));

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    allTabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    allDivs.forEach((div) => {
      div.classList.remove("show")

      div.getAttribute("data-cont") === tab.classList.item("0")
        ? div.classList.add("show")
        : "";
    });
  });
});
