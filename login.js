
import fakeFetchApi from "/utils/fakeFetchApi.js";

const user = {email:'', password:''}

const email = document.getElementById("email")
email.addEventListener("keyup", emailKeyUp )

const password = document.getElementById("password")
password.addEventListener("keyup", passwordKeyUp )

function emailKeyUp(event){
    user.email = event.target.value;
}

function passwordKeyUp(event){
    user.password = event.target.value;
}

const submitLogin = document.getElementById("submit")
submitLogin.addEventListener("click", submited)


function clear(){
    setTimeout( () => {
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        password.style.color = "black";
        email.style.color = "black";
    }, 5000);
}


function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (filter.test(email.value)) {
        console.log('email valido');
        return true;
    } else
        email.focus();
        email.style.color = "red";

        clear();

        alert("email invalido");
    return false;
}


function checkPass() {

    var password = document.getElementById('password');
    var filter = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (filter.test(password.value)) {
        console.log('formato valido');
        return true;
    } else
        password.focus();
        password.style.color = "red";

    clear();


    alert("formato de senha invalido, a-z, A-Z, 0-9, !@#$*, +8char");
    return false;
}

function submited(){
    checkEmail(email);
    checkPass(password);
    console.log(fakeFetchApi(user));
}

