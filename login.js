import fakeFetchApi from "./utils/fakeFetchApi.js";


/*
    -pega os valores dos input do formulario
    -evita que a pagina seja recarregada
    -teste se os valroes chegaram
*/
function loginSubmit(event) {
    let email = document.getElementById('email')
    let password = document.getElementById('senha')
    event.preventDefault();

    const usuario = {
        email: email.value,
        password: password.value
    }

    if(validacaoInputs(email, password)) {
        return
    }

    const {message, status} = fakeFetchApi(usuario)

    if (status === 401) {
        escreveMensagem(message)
        email.value = ''
        password.value = ''
        email.focus()
    } else {
        window.location.href = "http://127.0.0.1:5500/app.html";
    }
}

function validacaoInputs(email, password) {
    let invalido = false
    if ((validacaoEmail(email))) {
        console.log('email no formato valido')
    } else {
        alert('email no formato incorreto')
        email.style.cssText = 'background-color: #ff8b9276;'
        mudaCorInputTemporariamente(email)
        invalido = true
    }

    if(validacaoPassword(password)) {
        console.log('password no formato correto')
    } else {
        alert('senha no formado incorreto')
        password.style.cssText = 'background-color: #ff8b9276;'
        mudaCorInputTemporariamente(password)
        invalido = true
    }

    if (invalido) {
        email.value = ''
        password.value = ''
    }
    return invalido
}

/*
    tem por objetivo verificar se o email está no formado correto, retornando o resultado desta
    validação como true ou false
*/
function validacaoEmail(field) {
    let usuario = field.value.substring(0, field.value.indexOf("@"));
    let dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);


    return (usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && (dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)
}

function validacaoPassword(password) {
    /*
        -maior ou igual a oito caracteres
        -ter letras maisculas e minusculas
        -ter caracteres especiais 
    */
    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/; 
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    console.log('tamanho correto: ' + password.value.length >= 8)
    console.log('possui letras maiusculas: ' + letrasMaiusculas.test(password.value))
    console.log('possui letras minusculas: ' + letrasMinusculas.test(password.value))
    console.log('possui numeros: ' + numeros.test(password.value))
    console.log('possui caracteres especiais: ' + caracteresEspeciais.test(password.value))

    return password.value.length >= 8 && letrasMaiusculas.test(password.value) && letrasMinusculas.test(password.value)
    && numeros.test(password.value) && caracteresEspeciais.test(password.value)
}

function mudaCorInputTemporariamente(input) {
    setTimeout(()=>{
        input.style.cssText = 'background-color: #ffffff;'
    }, 2500)
}


/*
    escreve uma mensagem temporaria de erro na div com id "mensagem-erro"
*/
function escreveMensagem(message) {
    let element = document.getElementById('mensagem-erro')
    element.innerHTML = '<h1>' + message + '<h1>'
    setTimeout(()=>{
        element.style.cssText = 'visibility: hidden;'
    }, 2500)
}


/*
    quando um evento do tipo submit é chamada a funcao loginSubmit
*/
form.addEventListener('submit', loginSubmit);