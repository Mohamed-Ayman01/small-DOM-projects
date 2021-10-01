let btn = document.getElementById("scroll");

window.onscroll = () => {
  if (window.scrollY >= 600) btn.style.right = "20px";
  else btn.style.right = "-50px";
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
