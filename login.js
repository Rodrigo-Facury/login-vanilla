import fakeFetchApi from '/utils/fakeFetchApi.js'

window.onload = () => {
    const messageElement = document.getElementById("error-message");
    const emailInput = document.getElementById("email")
    const passwordInput = document.getElementById("password")
    const submitButton = document.getElementById("submit-login")

    const loginObject = {
        email: '',
        password: ''
    }

    function validateEmail(email) {
        var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
        return String(email).search(filter) != -1;
    }

    function validatePassword(password) {
        var filter = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%\-*#?&]{8,}$/;
        return String(password).search(filter) != -1;
    }


    function validateFields() {
        let valid = true
        
        emailInput.classList.remove("error")
        passwordInput.classList.remove("error")

        if (!validateEmail(loginObject.email)) {
            showInputError(emailInput, "O e-mail informado é inválido!")
            valid = false
        }
        if (!validatePassword(loginObject.password)) {
            showInputError(passwordInput, "A senha informada é inválida!")
            valid = false
        }
        return valid
    }

    const handleKeyUp = (event) => {
        const { target } = event
        const { id, value } = target
        
        loginObject[id] = value
        console.log(loginObject)
    }

    const handleHideErrorMessage = () => {
        messageElement.hidden = true
        messageElement.innerHTML = ""
    }

    const showInputError = (input, message) => {
        input.classList.add("error")
        showErrorMessage(message)
    }

    const showErrorMessage = (message) => {
        messageElement.hidden = false
        messageElement.innerHTML += `<p>${message}</p>`
        setTimeout(handleHideErrorMessage, 2000)
    }

    const handleSubmit = () => {
        if (validateFields()) {
            const result = fakeFetchApi(loginObject)
            if (result.status == 200) {
                window.location.href = "/app"
            } else {
                showErrorMessage(result.message)
            }
        }
    }

    emailInput.addEventListener('keyup', handleKeyUp)
    passwordInput.addEventListener('keyup', handleKeyUp)
    submitButton.addEventListener('click', handleSubmit)
}