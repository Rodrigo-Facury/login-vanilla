const senha = document.getElementById('senha')
const email = document.getElementById('email')
const form = document.getElementById('form')
import fakeFetchApi from "./utils/fakeFetchApi.js"

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

senha.onchange = checkInputs();
email.onchange = checkInputs();


function checkInputs() {

    const senhaValue = senha.value.trim()
    const emailValue = email.value.trim()

    const regex = /[.*+?^${}()|[\]\\]/g
    const letrasMaiusculas = /[A-Z]/
    const letrasMinusculas = /[a-z]/

    if (senhaValue === '') {

        setErrorFor(senha, 'Preencha a senha')
    }
    else if (senhaValue.length < 8) {
        setErrorFor(senha, 'Senha deve ter mais que 8 caracteres')
    }
    else if (regex.test(senhaValue) == false) {
        setErrorFor(senha, 'Senha deve ter pelo menos um caractere especial')
    }
    else if (letrasMaiusculas.test(senhaValue) == false) {
        setErrorFor(senha, 'Senha deve ter pelo menos uma letra Maiuscula')
    }
    else if (letrasMinusculas.test(senhaValue) == false) {
        setErrorFor(senha, 'Senha deve ter pelo menos uma letra Minuscula')
    }
    else {

        setSuccessFor(senha)
    }
    if (emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
}

function handleLogin() {
    const responseFakeApi = fakeFetchApi({
        email: email,
        senha: password,
    })
    if (responseFakeApi.status === 200) {
        window.location.href = "/app"
    } else {
        generateNotification(responseFakeApi.message, "notification-error", true)
    }
}
function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small')

    small.innerText = message

    formGroup.className = 'form-group error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-group success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

window.addEventListener("keyup", checkInputs)
submitButton.addEventListener("click", handleLogin)