import fakeFetchApi from "./utils/fakeFetchApi.js"

var btnLogin = document.getElementById("btnLogin")

function handleChange() {
    const email = document.getElementById("email").value
    const password = document.getElementById("senha").value

    if(email){
        if(!validaEmail()){
            criarNotificaticao("Formato inválido", "notification-invalid-email", false)
        }else{
            limparNotification("notification-invalid-email")
        }
    }

    if(password){
        if(!validaSenha()){
            criarNotificaticao("A senha deve conter mais de 1 caracteres, letras minusculas e maiusculas e 1 caracter", "notification-invalid-password", false)
        }else{
            limparNotificaticao("notification-invalid-password")
        }
    }
    console.log(email, password)
}

function handleLogin() {
    const responseFakeApi = fakeFetchApi({
        "email": email,
        "password": password
    })
    if(responseFakeApi.status === 200){
        window.location.href = "/app"
    }else{
        criarNotificaticao(responseFakeApi.message, "notification-error", true)
    }
}

function criarNotificaticao(message, nameElement, delay=true) {
    document.getElementById(nameElement).innerText = message
    if(delay){
        setTimeout(clearNotification, 2 * 1000, nameElement)
    }
}

function limparNotificaticao(nameElement) {
    document.getElementById(nameElement).innerHTML = null
}

function validaSenha(){

    var regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}/

    if (regexPassword.test(password)) {
        console.log(password.length >= 8 && regexPassword.test(password))
        return true
    }else{
        console.log(password.length >= 8 && regexPassword.test(password))
        return false
    }
}

function validaEmail(){

    var regerxEmail =  /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (regerxEmail.test(email)) {
        return true
    }else{
        return false
    }
}

window.addEventListener('keyup', handleChange)
btnLogin.addEventListener('click', handleLogin)


