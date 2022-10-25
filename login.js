import fakeFetchApi from "./utils/fakeFetchApi.js";

function loginSubmit(event){
    validation();
    let email = document.getElementById("input_email");
    let password = document.getElementById("input_password");
    event.preventDefault();

    const user ={
        email: email.value,
        password: password.value
    }
    const {message, status} = fakeFetchApi(user);

    if (status === 401){
        email.focus();
        
        document.getElementById('alrt').innerHTML="<b>"+message+"</b>"; 
        setTimeout(function() {document.getElementById('alrt').innerHTML='';},2000);
		
    } else {
        window.location.href = "http://127.0.0.1:5500/login-vanilla/app.html";
    }
}

function validation(){
    
	var input_email = document.querySelector("#input_email");
	var input_password = document.querySelector("#input_password");
	var error_msg = document.querySelector(".error_msg");
    let email = document.getElementById("input_email");
    let password = document.getElementById("input_password");

    console.log(email.value, password.value);

	if(input_password.value.length <= 8 ){
		error_msg.style.display = "inline-block";
		input_email.style.border = "1px solid #f74040";
		input_password.style.border = "1px solid #f74040";
		return false;
	}
	else{
		return true;
	}
	
}
var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 3){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})
form.addEventListener('submit', loginSubmit);