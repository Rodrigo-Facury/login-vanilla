function myFunction(message) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function validateValueEmail(email) {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(email);
};

function validateValuePassword(password) {
    let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return regexPassword.test(password);
};

function returnAlert(message, type) {
    $('#alert_message').show();

document.getElementById('alert_message').innerHTML = `
    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
    <div class="alert ${type}">
    <span class="alertClose">X</span>
    <span class="alertText">${message}
    <br class="clear"/></span>
    </div> 
`;

setTimeout(() => {
    $('#alert_message').hide();
}, 2000);
}

function Login(user) {
    console.log(user);
    const users = [
        {
            email: 'Ducilio@uniamerica.com',
            password: '123456'
        }];

    const { email, password } = user;

    let Usuario = false;

    for (let i = 0; i < users.length; i += 1) {
        if (users[i].email === email && users[i].password === password) {
            Usuario = true;
            break;
        }
    }

    if (Usuario) {
        return { message: 'login feito com sucesso!', status: 200 };
    }

    if (Usuario == false) {
        return { message: 'usuário e/ou senha incorretos.', status: 401 };
    }
    if (user.email == "" || user.password == "") {
        return { message: 'Preencha todos os campos.', status: 401 };
    }
}

function enviardados(){
    if(document.emailform.email.value == 'email' || document.emailform.password.value == ""){
        myFunction("Preencha todos os campos.");
        return false;
    }
    if(document.passwordform.password.value.length < 6){
        myFunction("A senha deve conter no mínimo 6 caracteres.");
        return false;
    }
    else{
        myFunction("Login feito com sucesso!");
        return true;
    }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (validateValueEmail(email), validateValuePassword(password)){
        Login({email, password});
    }else{
        returnAlert('Email ou senha inválidos', 'error');
    }
});




email.addEventLister('focus', () => {
    email.style.borderColor = "blue";
});
email.addEventLister('blur', () => {
    email.style.borderColor = "#ccc";
});

password.addEventLister('focus', () => {
    password.style.borderColor = "blue";
});
password.addEventLister('blur', () => {
    password.style.borderColor = "#ccc";
});