import fakeFetchApi from "./utils/fakeFetchApi.js"

var loginButton = document.getElementById("login")

function handleChange() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    const user = {
        email, 
        password
    }

    const responseFakeApi = fakeFetchApi(user)

    //if(!validateEmailAndPassword(user.email, user.password)){
    //   generateNotification("e-mail e senha em formatos inválidos")
    //}

    if(responseFakeApi.status === 200){
        window.location.href = "/app"
    }else{
        generateNotification(responseFakeApi.message)
    }
}


function handleLogin() {
    //loginButton.addEventListener("click", handleChange)
    handleChange()
}

function generateNotification(message) {
    document.getElementById("notification-error").innerText = message
    setTimeout(clearNotification, 2 * 1000)
}

function clearNotification() {
    document.getElementById("notification-error").innerHTML = null
}

function validateEmailAndPassword(email, password){

    var regexPassword = /(?=.[a-z])(?=.[A-Z])(?=.*\W)/
    var regerxEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (password.length >= 8 && regexPassword.test(password) && regerxEmail.test(email)) {
        return true
    }
    return false
}

handleLogin()