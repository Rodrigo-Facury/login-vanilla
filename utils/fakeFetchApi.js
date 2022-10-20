export default function fakeFetchApi(user) {
  const users = [
    {
      email: 'billgates@gmail.com',
      password: '1Sou-rico'
    },
    {
      email: 'adalovelace@gmail.com',
      password: '1Digdim-digdim'
    },
    {
      email: 'markzuckerberg@gmail.com',
      password: '1Vou-te-hackeei'
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