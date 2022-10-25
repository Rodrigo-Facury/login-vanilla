function fakeFetchApi(user) {
  const users = [
    {
      email: 'billgates@gmail.com',
      password: 'sou-Rico'
    },
    {
      email: 'adalovelace@gmail.com',
      password: 'digdim-digdim'
    },
    {
      email: 'markzuckerberg@gmail.com',
      password: 'vou-te-hackeei'
    }
  ];

  const { email, password } = user;

  let correctUser = false;

  for (let i = 0; i < users.length; i += 1) {
    if (users[i].email === email && users[i].password === password) {
      correctUser = true;

      break;
    }
  }

  if (correctUser) {
    return { message: 'login feito com sucesso!', status: 200 };
  }

  return { message: 'usuário e/ou senha incorretos.', status: 401 };

}

const succesfulLogin = () => {
  document.location.href = '/app'
}

const failedLogin = (message) => {
  const errorMessageElement = document.getElementById('errorMessage');

  errorMessageElement.textContent = message
  errorMessageElement.style.display = 'block'

  setTimeout(() => errorMessageElement.style.display = 'none', 2000)
}

export const login = (user) => {
  const response = fakeFetchApi(user)
  response.status === 200 ? succesfulLogin() : failedLogin(response.message)
}
