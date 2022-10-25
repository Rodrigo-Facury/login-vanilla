import { login } from './utils/index.js'

window.onload = () => {
  console.log("hello")
  const submitButton = document.getElementById("submitButton")
  submitButton.addEventListener("click", onFormSubmission)
}

const onFormSubmission = (event) => {
  event.preventDefault()

  const form = document.getElementById("loginForm")
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  const email = document.getElementById("emailForm").value
  const password = document.getElementById("passwordForm").value
  login({ email, password })
}
