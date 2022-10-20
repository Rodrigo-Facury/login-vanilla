import fakeFetchApi from "./utils/fakeFetchApi.js";

var email;
var password;
var loginButton = document.getElementById("loginButton")


function handleChange() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email) {
        if (!isValidEmail()) {
            addErrorMsg("Formato de email invalido", "emailError", false)
        }
        else{
            cleanErrorMsg("emailError")
        }
    }

    if (password) {
        if (!isValidPassword()) {
            addErrorMsg("Senha invalida (deve conter letras maisuculas, minusculas e pelo menos um character especial)", "passwordError", false)
        }
        else {
            cleanErrorMsg("passwordError")
        }
    }

}

function handleLogin() {
    if (isValidEmail() && isValidPassword()) { 
        var result = fakeFetchApi({
            "email": email,
            "password": password
        })
    
        if (result.status == 200) {
            window.location.href = "/app"
        }
        else {
            addErrorMsg(result.message, "mainLoginError")
        }
    }
}

function addErrorMsg(msg, tagId, useTimeout=true) {
    document.getElementById(tagId).innerText = msg;
    if (useTimeout) {
        setTimeout(cleanErrorMsg, 2 * 1000, tagId)
    }
}

function cleanErrorMsg(tagId) {
    document.getElementById(tagId).innerHTML = null;
}

function isValidPassword() {
    var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}/
    if (regex.test(password)) {
        return true
    }
    return false
}

function isValidEmail() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(email)) {
        return true
    }
    return false
}



window.addEventListener('keyup', handleChange)
loginButton.addEventListener('click', handleLogin)
