export default function fakeFetchApi(user) {
  const users = [
    {//email e senha no formato correto
      email: 'billgates@gmail.com',
      password: 'Eduardo123%@#'
    },
    { /*
        email no formato incorreto
        senha no formato correto
      */
      email: 'formatoincorreto',
      password: 'Eduardo123%@#'
    },
    {
      /*
        email no formato correto
        senha no formato incorreto
      */
      email: 'markzuckerberg@gmail.com',
      password: 'formatoincorreto'
    },
    {
      /*
        email no formato incorreto
        senha no formato incorreto
      */
      email: 'formatoincorreto',
      password: 'formatoincorreto'
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