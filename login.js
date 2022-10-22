import fakeFetchApi from "./utils/fakeFetchApi.js";

var email;
var password;
var loginButton = document.getElementById("login");

function handleChange() {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  if (email) {
    if (!validateEmail()) {
      generateNotification(
        "Formato de email inválido",
        "notification-invalid-email",
        false,
      );
    } else {
      clearNotification("notification-invalid-email");
    }
  }

  if (password) {
    if (!validatePassword()) {
      generateNotification(
        "A senha deve conter no mínimo 8 caracteres letras maiúsculas, minúsculas e pelo menos 1 caracter especial",
        "notification-invalid-password",
        false,
      );
    } else {
      clearNotification("notification-invalid-password");
    }
  }
  console.log(email, password);
}

function handleLogin() {
  const responseFakeApi = fakeFetchApi({
    email: email,
    password: password,
  });
  if (responseFakeApi.status === 200) {
    window.location.href = "/app";
  } else {
    generateNotification(responseFakeApi.message, "notification-error", true);
  }
}

function generateNotification(message, nameElement, delay = true) {
  document.getElementById(nameElement).innerText = message;
  if (delay) {
    setTimeout(clearNotification, 2 * 1000, nameElement);
  }
}

function clearNotification(nameElement) {
  document.getElementById(nameElement).innerHTML = null;
}

function validatePassword() {
  var regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}/;

  if (regexPassword.test(password)) {
    console.log(password.length >= 8 && regexPassword.test(password));
    return true;
  } else {
    console.log(password.length >= 8 && regexPassword.test(password));
    return false;
  }
}

function validateEmail() {
  var regerxEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (regerxEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("keyup", handleChange);
loginButton.addEventListener("click", handleLogin);
