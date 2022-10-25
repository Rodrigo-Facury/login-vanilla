import fakeFetchApi from './utils/fakeFetchApi.js';

let email, password;
let emailValido, senhaValida;


document.addEventListener('DOMContentLoaded', function() {
    let emailField = document.querySelector('#email');
    let senhaField = document.querySelector('#senha');
    let emailErro = document.querySelector('#email+.error');
    let senhaErro = document.querySelector('#senha+.error');
    let form = document.querySelector('#form');
    let formResponse = document.querySelector('.form-response');
    let botaoLogin = document.querySelector('#form button[type="submit"]');
    let formMessageTimeout;

    botaoLogin.disabled = true;

    const handleChange = e => {
        const inputAlterado = e.target.id;
        const valorDoInput = e.target.value;

        if(inputAlterado === 'email') {
            email = valorDoInput;
            emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(email);

            emailErro.style.display = emailValido ? 'none' : 'block';
            console.log(inputAlterado)
            emailValido ? e.target.classList.remove('invalid') : e.target.classList.add('invalid');

        } else if(inputAlterado === 'senha') {
            password = valorDoInput;
            senhaValida = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!-?|$%^&+=]).*$/.test(password);

            senhaErro.style.display = senhaValida ? 'none' : 'block';
            senhaValida ? e.target.classList.remove('invalid') : e.target.classList.add('invalid');
        }

        // se o email ou senha forem inválidos, desativar botão de login
        botaoLogin.disabled = !(emailValido && senhaValida);
    }


    const handleLogin = e => {
        e.preventDefault();
        const apiResponse = fakeFetchApi({ email, password });
        if(apiResponse.status === 200) {
            location.href= './Sucesso/logado.html'

        } else {
            formResponse.style.display = 'block';
            formResponse.innerText = apiResponse.message;
            botaoLogin.disabled = true;

            clearTimeout(formMessageTimeout);
            formMessageTimeout = setTimeout(() => {
                formResponse.style.display = 'none';
            }, 2000);
        }
    }




    emailField.addEventListener('input', handleChange)
    senhaField.addEventListener('input', handleChange)
    form.addEventListener('submit', handleLogin)
})
