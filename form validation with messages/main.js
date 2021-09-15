let form = document.forms[0];

// Username 
let nameDiv = document.querySelector(".name");
let userName = document.getElementById("username");
let nameWarn = document.querySelector(".name .warning");

// Email
let emailDiv = document.querySelector(".email");
let email = document.getElementById("email");
let emailWarn = document.querySelector(".email .warning");

// password
let passDiv = document.querySelector(".pass");
let pass = document.getElementById("password");
let passWarn = document.querySelector(".pass .warning");


let labels = document.getElementsByTagName("label");
let submitBtn = document.querySelector("[type='submit']");

let allInputs =  [userName, email, pass]

let labelOnFocus = "top: -.75rem; font-size: .50rem; color: #ddd; background-color: var(--sec-clr);";

allInputs.forEach(el => {
  el.onfocus = _ => {
    el.type === "text"
    ? labels[0].style = labelOnFocus
    : el.type === "email"
    ? labels[1].style = labelOnFocus
    : el.type === "password"
    ? labels[2].style = labelOnFocus
    : ""
  }
})

form.onsubmit = (event) => {
  let userValid = false;
  let emailValid = false;
  let passValid = false;

  if (userName.value !== "" && userName.value.length <= 12 && !userName.value.includes("/") && !userName.value.includes(".") && !userName.value.includes('"')) {
    userValid = true;
  }

  if (email.value !== "" && email.value.includes("@")) {
    emailValid = true;
  } 
  
  if (pass.value !== "" && pass.value.length >= 12) {
    passValid = true;
  }

  if (userValid === false || emailValid === false || passValid === false) {
    event.preventDefault();
  } 

  // Warnings
  if (userValid === false) {
    nameWarn.classList.add("showen");
  } else {
    nameWarn.classList.remove("showen");
  }

  if (emailValid === false) {
    emailWarn.classList.add("showen");
  } else {
    emailWarn.classList.remove("showen");
  } 

  if (passValid === false) {
    passWarn.classList.add("showen")
  } else {
    passWarn.classList.remove("showen")
  }
} 
