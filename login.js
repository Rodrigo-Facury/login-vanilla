import fakeFetchApi from "./utils/fakeFetchApi.js"
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const buttonSubmit = document.getElementById('button');
const spanMessage = document.getElementById('message');

window.onload = () => {
    const objectLoginState = {
        email: '',
        password: ''
    }

    const validObject = {
        email: false,
        password: false
    }

    const handleChange = (event) => {
        objectLoginState[event.target.name] = event.target.value;
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if (validInput() === true) {
            const message = fakeFetchApi(objectLoginState);
            validLogin(message);
        }
    }

    const validInput = () => {
        validObject.email = false;
        validObject.password = false;
       
        if (objectLoginState.email === '') {
            setErrorForm(inputEmail, "O campo não pode estar vázio");
        } else if (!isEmail(objectLoginState.email)) {
            setErrorForm(inputEmail, "Formato Incorreto de email");
        } else {
            validObject.email = true;
            setSuccessForm(inputEmail);
        }
        if (objectLoginState.password === '') {
            setErrorForm(inputPassword, "O campo não pode estar vázio");
        } else if (objectLoginState.password.length < 8) {
            setErrorForm(inputPassword, "O tamanho minimo para uma senha é de 8 caracteres");
        } else if (!isPasswordValid(objectLoginState.password)) {
            setErrorForm(inputPassword, "Formato incorreto de senha, é necessario letras maiusculas"
            + " e minusculas e um caractere especial");
        } else {
            validObject.password = true;
            setSuccessForm(inputPassword);
        }

        if (validObject.email === true && validObject.password === true) {
            return true;
        }
        return false;
    }

    const validLogin = (message) => {
        if (message.status === 200) {
            window.location.href = "/app";
        } else if (message.status === 401) {
            spanMessage.innerHTML = message.message;
            setErrorForm(inputEmail, "");
            setErrorForm(inputPassword, "");
            setTimeout(() => {
                spanMessage.innerHTML = "";
            }, 2000);    
        }
    }

    const setSuccessForm = (input) => {
        const inputControll = input.parentElement;
        const spanMessage = inputControll.querySelector('span');

        spanMessage.innerHTML = "";
        inputControll.className = "text-field";
    }

    const setErrorForm = (input, message) => {
        const inputControll = input.parentElement;
        const spanMessage = inputControll.querySelector('span');

        spanMessage.innerHTML = message;
        inputControll.className = "text-field error";
    }

    inputEmail.addEventListener('keyup', handleChange);
    inputPassword.addEventListener('keyup', handleChange);
    buttonSubmit.addEventListener('click', handleLogin);
};

const isEmail = (input) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}

const isPasswordValid = (input) => {
    return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/.test(input);
}
