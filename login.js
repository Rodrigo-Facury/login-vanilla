function values(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const loginButton = document.getElementById("login")
    
    const user = {username, password}
    console.log(user)
}

window.addEventListener("keyup", values)

// window.onload = function handleChange() {
//      loginButton.addEventListener('keyup', values)
// }

window.onload = function handleLogin() {

}
