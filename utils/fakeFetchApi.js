export default function fakeFetchApi(user) {
    const users = [
      {
        email: 'billgates@gmail.com',
        senha: 'BillGates-2022'
      },
      {
        email: 'adalovelace@gmail.com',
        senha: 'AdaLoveLace-2022'
      },
      {
        email: 'markzuckerberg@gmail.com',
        senha: 'MarkZuck-2022'
      }
    ];
  
    const { email, senha } = user;
  
    let correctUser = false;
  
    for (let i = 0; i < users.length; i += 1) {
      if (users[i].email === email && users[i].senha === senha) {
        correctUser = true;
        
        break;
      }
    }
  
    if (correctUser) {
      return { message: 'Login realizado com sucesso!', status: 200 };
    }
  
    return { message: 'Credenciais incorretas.', status: 401 };
  
  }