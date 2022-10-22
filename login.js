const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  //Exigência de username
  if (usernameValue === "") {
    setErrorFor(username, "O username é obrigatório.");
  } else if (usernameValue.length < 3 || usernameValue.length > 25) {
    setErrorFor(username, "Username deve ter entre 3 a 25 caractéres.");
  } else {
    setSuccessFor(username);
  }

  //Exigência de email
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  //Exigência de senha
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  //Exigência de confrimação de senha
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  //Confirmação de sucesso do formulario
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log(`Usuario: ${usernameValue};`);
    console.log(`Email: ${emailValue};`);
    console.log(`Senha: ${passwordValue};`);
    console.log(`Senha Confirmada: ${passwordValue};`);
  } else {
    document.querySelector("#login").disabled = true;
  }
}

function toggleButton() {
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  window.alert("Olá " + username + ", bem vindo ao Save Peach");

  if (username && email && password) {
    document.querySelector("#login").disabled = false;
    return;
  }

  document.querySelector("#login").disabled = true;
}

document.getElementById("campo").value = "";

document.getElementById("button").disabled = true;

document.getElementById("username").addEventListener(
  "username",

  function () {
    //busca conteúdo do input
    var conteudo = document.getElementById("username").value;

    //valida conteudo do input
    if (conteudo !== null && conteudo !== "") {
      //habilita o botão
      document.getElementById("button").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("button").disabled = true;
    }
  },
);

document.getElementById("username").addEventListener(
  "username",

  function () {
    //busca conteúdo do input
    var conteudo = document.getElementById("username").value;

    //valida conteudo do input
    if (conteudo !== null && conteudo !== "") {
      //habilita o botão
      document.getElementById("button").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("button").disabled = true;
    }
  },
);

document.getElementById("username").addEventListener(
  "username",

  function () {
    //busca conteúdo do input
    var conteudo = document.getElementById("username").value;

    //valida conteudo do input
    if (conteudo !== null && conteudo !== "") {
      //habilita o botão
      document.getElementById("button").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("button").disabled = true;
    }
  },
);

document.getElementById("username").addEventListener(
  "username",

  function () {
    //busca conteúdo do input
    var conteudo = document.getElementById("username").value;

    //valida conteudo do input
    if (conteudo !== null && conteudo !== "") {
      //habilita o botão
      document.getElementById("button").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("button").disabled = true;
    }
  },
);

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}
