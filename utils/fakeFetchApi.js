export default function fakeFetchApi(user) {
  const users = [
    {
      email: 'billgates@gmail.com',
      password: 'Sou-rico'
    },
    {
      email: 'adalovelace@gmail.com',
      password: 'Digdim-digdim'
    },
    {
      email: 'markzuckerberg@gmail.com',
      password: 'Vou-te-hackeei'
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
    return { message: 'LOGIN EFETUADO COM SUCESSO!', status: 200 };
  }

  return { message: 'USUÁRIO E/OU SENHA INCORRETOS!', status: 401 }; 

}