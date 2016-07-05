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

//GETrequest

var sendRequest = function() {
  var formData = new FormData();
  var xhr = new XMLHttpRequest();

  formData.append("login", "1234");

  xhr.onerror = function() {
    alert("Что-то пошло не так!");
  };

  xhr.timeout = 3 * 60 * 1000;
  xhr.ontimeout = function() {
    alert("Проверьте подключение!");
  };

  xhr.onreadystatechange = function(evt) {
    if (xhr.readyState == 4) {
      if(xhr.status == 200) {
        var response = evt.target.response;
        var responseObj = JSON.parse(response);
        if ("token" in responseObj) {
          alert(responseObj["token"]);
        } else {
          alert("Неверный логин/пароль!");
        }
      }
    }
  };


  xhr.open("GET", "login.json", true);
  xhr.send();
};

buttonLogIn.addEventListener("click", function() {
  localStorage.setItem("login", inputLogin.value);
  sendRequest();
});
