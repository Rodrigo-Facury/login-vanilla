function handleLogin(){
  alert("logado com ódio")
}

function handleChange(){
  if(checarEmail() && checarSenha()){
    handleLogin(

    )
  }
}
function checarEmail(){
  if( document.forms[0].email.value=="" 
     || document.forms[0].email.value.indexOf('@')==-1 
       || document.forms[0].email.value.indexOf('.')==-1 )
    {
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
    return false;
  }
}
