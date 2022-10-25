import fakeFetchApi from "/utils/fakeFetchApi.js";
import "/utils/validations.js";

function handleLogin(user) {
  const { email, password } = user;
  
  if (validateValueEmail(email), validateValuePassword(password)){
    const response = fakeFetchApi(user)
    if (response.status === 200){
      window.location.href= '../app/index.html'
      setTimeout(() => {
        returnAlert(response.message, "success")
      }, 2000);
    }else{
      returnAlert(response.message, "error")
    }
  }else{
    returnAlert("Formato de Credenciais Invalidas !!", "error")
  }
}

$('#submit').on('click', (event) => { 
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  handleLogin({email, password})
});
