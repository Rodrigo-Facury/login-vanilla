import fakeFetchApi from "./utils/fakeFetchApi.js";

var email;
var password;


function handleChange() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email) {
        if (!isValidEmail()) {
            addErrorMsg("Email invalido", "emailError", false)
        }
        else{
            cleanErrorMsg("emailError")
        }
    }

    if (password) {
        if (!isValidPassword()) {
            addErrorMsg("Senha invalida", "passwordError", false)
        }
        else {
            cleanErrorMsg("passwordError")
            handleLogin() 
        }
    }

}

function handleLogin() {
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
    var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
    if (password.length >= 8 && regex.test(password)) {
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
