import fakeFetchApi from "./utils/fakeFetchApi.js";
window.onload = () => {
    let user = {
        email : "",
        password : "",   
    }
     var email =document.getElementById('email')
     var password = document.getElementById('password')
     var loginBtn = document.getElementById('login')

    function mudaValor(value){
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;
        user.email = email
        user.password = password
    }


    function login(event){
        console.log(user.email)
        let res = fakeFetchApi(user);
        console.log(res)
    }

    email.addEventListener("keyup", mudaValor)
    password.addEventListener("keyup", mudaValor)
    loginBtn.addEventListener("click", login)
}