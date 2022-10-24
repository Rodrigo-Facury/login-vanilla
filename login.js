import fakeFetchApi from "./utils/fakeFetchApi.js";

var getEmail;
var getPassword;
var login = document.getElementById("login")

//Validates
function validatingPassword() {
    var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}/
    if (regex.test(getPassword)) {
        return true
    }
    return false
}

function validatingEmail() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(getEmail)) {
        return true
    }
    return false
}

//handleChange
function handleChange() {
    getEmail = document.getElementById("email").value;
    getPassword = document.getElementById("password").value;

    if (getEmail) {
        if (!validatingEmail()) {
            tempErrorMessage("O Formato de email não corresponde as normas atendidas, Verifique ele corretamente", "emailIncorrect", false)
        }
        else{
            cleanMessage("emailIncorrect")
        }
    }

    if (getPassword) {
        if (!validatingPassword()) {
            tempErrorMessage("A senha não corresponde as normas atendidas, Verifique se esta senha possui LETRAS MAIUSCULAS e MINUSCULAS, CARACTERES ESPECIAIS", "passwordIncorrect", false)
        }
        else {
            cleanMessage("passwordIncorrect")
        }
    }

}

//handleLogin
function handleLogin() {
    if (validatingEmail() && validatingPassword()) { 
        var result = fakeFetchApi({
            "email": getEmail,
            "password": getPassword
        })
    
        if (result.status == 200) {
            window.location.href = "/app"
        }
        else {
            tempErrorMessage(result.message, "incorrectLogin")
        }
    }
}

// Messages
function tempErrorMessage(msg, tagId, useTimeout=true) {
    document.getElementById(tagId).innerText = msg;
    if (useTimeout) {
        setTimeout(cleanMessage, 2 * 1000, tagId)
    }
    return useTimeout
}

function cleanMessage(tagId) {
    document.getElementById(tagId).innerHTML = null;
}




window.addEventListener('keyup', handleChange)
login.addEventListener('click', handleLogin)