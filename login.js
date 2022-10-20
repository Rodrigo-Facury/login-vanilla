import fakeFetchApi from "./utils/fakeFetchApi.js";


var email = '';
var password = '';


function handleChange() {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    console.log(email, password, handleLogin())
}

function handleLogin() {
    return fakeFetchApi({
        "email": email,
        "password": password
    })
}



window.addEventListener('keyup', handleChange)
