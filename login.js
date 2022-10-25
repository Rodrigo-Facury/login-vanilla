import fakeFetchApi from "./utils/fakeFetchApi.js"

var email
var senha
var btn = document.getElementById("btn")

function handleChange() {
    debugger;
    email = document.getElementById("email").value
    senha = document.getElementById("senha").value

    if(email){
        if(!validaEmail()){
            mostraMensagem("O Formato do email está incorreto", "mensagem-invalida-email", false)
        }else{
            limpaMensagem("mensagem-invalida-email")
        }
    }

    if(senha){
        if(!validaSenha()){
            mostraMensagem("A senha deve conter no mínimo 8 caracteres letras maiúsculas, minúsculas e pelo menos 1 caracter especial", "mensagem-invalida-senha", false)
        }else{
            limpaMensagem("mensagem-invalida-senha")
        }
    }
    console.log(email, senha)
}

function handleLogin() {
    debugger;
    const respostaApi = fakeFetchApi({
        "email": email,
        "senha": senha
    })
    if(respostaApi.status === 200){
        window.location.href = "./utils/app.html"
    }else{
        mostraMensagem(respostaApi.message, "mensagem-erro", true)
    }
}

function mostraMensagem(mensagem, elemento, delay=true) {
    debugger;
    document.getElementById(elemento).innerText = mensagem
    if(delay){
        setTimeout(limpaMensagem, 2 * 1000, elemento)
    }
}

function limpaMensagem(nameElement) {
    document.getElementById(nameElement).innerHTML = null
}

function validaSenha(){
    debugger;
    var padraoSenha = /(?=.*[a-z])(?=.*[A-Z])(?=.*\W){8,}/

    if (padraoSenha.test(senha)) {
        console.log(senha.length >= 8 && padraoSenha.test(senha))
        return true
    }else{
        console.log(senha.length >= 8 && padraoSenha.test(senha))
        return false
    }
}

function validaEmail(){
    debugger;
    var padraoEmail =  /^[^\s@]+@[^\s@]+.[^\s@]+$/;

    if (padraoEmail.test(email)) {
        return true
    }else{
        return false
    }
}

window.addEventListener('keyup', handleChange)
btn.addEventListener('click', handleLogin)