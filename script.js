//validation form

var buttonLogIn = document.querySelector("button");
var inputLogin = document.querySelector("input[type=text]");
var inputPassword = document.querySelector("input[type=password]");

var formIsValid = function() {
  if (inputLogin.value === "" || inputPassword.value === "") {
    buttonLogIn.setAttribute("disabled", "disabled");
  } else {
    buttonLogIn.removeAttribute("disabled");
  }
};

window.onload = formIsValid;
inputLogin.oninput = formIsValid;
inputPassword.oninput = formIsValid;

//localStorage

var storage = localStorage.getItem("login");

if (storage) {
  inputLogin.value = storage;
  inputPassword.focus();
} else {
  inputLogin.focus();
}

buttonLogIn.addEventListener("click", function() {
  localStorage.setItem("login", inputLogin.value);
});
