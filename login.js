function showSnackbar(message) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerHTML = message;
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2000);
}

function ShowPassword() {
  var password = document.getElementById("password-input");
  var label = document.getElementById("checkbox-label");
  if (password.type === "password") {
    password.type = "text";
    label.innerHTML = "esconder senha";
  } else {
    password.type = "password";
    label.innerHTML = "mostrar senha";
  }
}

function fakeFetchApi(user) {
  try {
    const users = [
      {
        email: "billgates@gmail.com",
        password: "sou-rico",
      },
      {
        email: "adalovelace@gmail.com",
        password: "digdim-digdim",
      },
      {
        email: "markzuckerberg@gmail.com",
        password: "vou-te-hackeei",
      },
    ];

    const { email, password } = user;

    let correctUser = false;

    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === email && users[i].password === password) {
        correctUser = true;

        break;
      }
    }

    if (correctUser) {
      return { message: "login feito com sucesso!", status: 200 };
    }

    return { message: "usuário e/ou senha incorretos.", status: 401 };
  } catch (err) {
    console.log(err);
    return { message: "usuário e/ou senha incorretos.", status: 401 };
  }
}

function Login(ev) {
  ev.preventDefault();
  try {
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    let user = {
      email: email,
      password: password,
    };

    if (!email) {
      showSnackbar("Email requerido");
    } else if (!String(email).includes("@")) {
      showSnackbar("Email inserido incorretamente");
      var passwordErrorLabel = (document.getElementById(
        "error-password"
      ).display = "flex");
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 2000);
      passwordErrorLabel;
    } else if (!password || String(password) === "") {
      showSnackbar("Senha requerido");
    } else if (!password || String(password) === "") {
      showSnackbar("Senha requerido");
    } else {
      const result = fakeFetchApi(user);
      if (result.status === 401) {
        showSnackbar("Email e/ou senha incorretos !!!");
      } else {
        showSnackbar("Login feito com sucesso !");
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
      }
    }
  } catch (err) {
    console.log(err);
    showSnackbar("Occorreu um erro ao fazer login");
  }
}
