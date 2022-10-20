// import fakeFetchApi from "./utils/fakeFetchApi";

// async function handleLogin(){
//   try{
//   fakeFetchApi(document.forms[0].email.value,  document.forms[0].password.value)
// }catch(error){
//   console.log('Fudeu')
// }}

function handleChange(){
  if(checarEmail() && checarSenha()){
    console.log("Logando")
    handleLogin()
  }
}

function checarEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
    {
      var input = document.getElementById('email');
      input.style.cssText =
      'border: 1px solid red';

      var error = document.getElementById('errorEmail');
      error.style.cssText =
      'display: block';

       return false;
       
    }else{ 
      return true;
  }
}
function checarSenha(){ 
  var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if(document.forms[0].password.value.match(passw)){ 
    return true;
  }else{ 

    var input = document.getElementById('password');
      input.style.cssText =
      'border: 1px solid red';

      var error = document.getElementById('errorPassword');
      error.style.cssText =
      'display: block';

    return false;
  }
}
