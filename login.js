const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  console.log(e)

  const emailField = document.getElementById("email");
  let valid = true;

  if (!emailField.value) {
    const nameError = document.getElementById("nameError");
    nameError.classList.add("visible");
    emailField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }
  return valid;
}
