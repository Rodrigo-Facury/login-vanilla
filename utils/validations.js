function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function validatePassword(password) {
  return password.match(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  );
};

function validateValueEmail(email) {
  let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regexEmail.test(email);
};

function validateValuePassword(password) {
  let regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return regexPassword.test(password);
};

function validateEmailInput() {
  const $small = $('#small_email');
  const email_input = $('#email');
  const email = email_input.val();
  $small.text('');

  if (validateEmail(email)) {
    $small.text('Este E-mail é válido');
    $small.css('color', 'green');
    email_input.css("border", "green solid 1px");
  } else {
    $small.text('Este E-mail ainda não é valido');
    $small.css('color', 'red');
    email_input.css("border", "red solid 1px");
  }
  return false;
}

function validatePasswordInput() {
  const $small = $('#small_pass');
  const password_input = $('#password');
  const password = password_input.val();
  $small.text('');

  if (validatePassword(password)) {
    $small.text('Esta Senha é válida');
    $small.css('color', 'green');
    password_input.css("border", "green solid 1px");
  } else {
    $small.text('Exemple: a-z, A-Z, 0-9, !@#$*, Mais de 8 Caracteres.');
    $small.css('color', 'red');
    password_input.css("border", "red solid 1px");
  }
  return false;
}

function viewPassword() {
  const checkbox = document.getElementById('visiblePassword');
  if (checkbox.checked){
    document.getElementById('password').type = 'text'
  }else{
    document.getElementById('password').type = 'password'
  }
}

function returnAlert(message, type) {
  $('#alert_geral').show();

  document.getElementById('alert_geral').innerHTML = `
    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
    <div class="alert ${type}">
      <span class="alertClose">X</span>
      <span class="alertText">${message}
      <br class="clear"/></span>
    </div> 
  `;

  setTimeout(() => {
    $('#alert_geral').hide();
  }, 2000);
}