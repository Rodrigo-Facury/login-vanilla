import fakeFetchApi from "./utils/fakeFetchApi.js"

window.onload = () =>{
    document.getElementById("email").addEventListener("keyup",handleChange);
    document.getElementById("senha").addEventListener("keyup",handleChange);
    document.getElementById("login").addEventListener("click", handleLogin);
}   
const userInfos = {
    email: "",
    password: "",
};

function validateEmail(email) {
    var filter = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    console.log('checa email');
    return String(email).search(filter) != -1;
}

function validatePassword(password) {
    var filter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    console.log('checa senha')
    return String(password).search(filter) != -1;
}

function validadeFilds(){
    let valid = true;

    if(!validateEmail(userInfos.email)){
        document.getElementById("message").innerHTML += 'Campo de E-mail em Formato Invalido <br>';
        document.getElementById("email").classList.add("wrongForm");
        valid = false;
    }
    if(!validatePassword(userInfos.password)){
        document.getElementById("message").innerHTML += 'Campo de Senha em Formato Invalido <br>';
        document.getElementById("senha").classList.add("wrongForm");
        valid = false;
    }
    return valid;   
}

function handleChange(){
    userInfos.email = document.getElementById("email").value;
    userInfos.password = document.getElementById("senha").value;
}

function handleLogin(){
    if(validadeFilds()){
        showMessage();
        if(fakeFetchApi(userInfos).status === 200){
            window.location.href = '/app';
        }
    }
    setTimeout(hideMessage,2000); 
    
}

function showMessage(){
    document.getElementById("message").innerHTML += (fakeFetchApi(userInfos).message);
    setTimeout(hideMessage,2000);
}

function hideMessage(){
    document.getElementById("message").innerHTML = '';
    document.getElementById("email").classList.remove("wrongForm");
    document.getElementById("senha").classList.remove("wrongForm");
}