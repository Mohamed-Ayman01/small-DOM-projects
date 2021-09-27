let form = document.forms[0];
let inputsArr = Array.from(form.children);

inputsArr.forEach((input) => {
  input.addEventListener("input", () => input.value !== "" && !input.value.includes(" ") ? input.nextElementSibling.focus() : "");
});
