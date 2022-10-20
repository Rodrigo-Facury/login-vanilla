import fakeFetchApi from "./utils/fakeFetchApi.js";


/*
    -pega os valores dos input do formulario
    -evita que a pagina seja recarregada
    -teste se os valroes chegaram
*/
function loginSubmit(event) {
    let email = document.getElementById('email').value
    let password = document.getElementById('senha').value
    event.preventDefault();

    const usuario = {
        email,
        password
    }

    const {message, status} = fakeFetchApi(usuario)
    if (status === 401) {
        escreveMensagem(message)
    }
}

function escreveMensagem(message) {
    let $mensagem = document.querySelector('.mensagem-error')

    let HTMLnovo = '<h2> '+ message + '</h2>'

    $mensagem.insertAdjacentHTML('afterbegin', HTMLnovo)
}


/*
    quando um evento do tipo submit é chamada a funcao loginSubmit
*/
form.addEventListener('submit', loginSubmit);