function myFunction(message) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}



function Login(user) {
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


var email = document.getElementById("email");
var password = document.getElementById("password");

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