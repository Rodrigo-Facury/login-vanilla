export default function fakeFetchApi(user) {
  const users = [
    {
      email: "billgates@gmail.com",
      password: "sou-rico",
    },
    {
      email: "adalovelace@gmail.com",
      password: "digdim-digdim",
    },
    {
      email: "markzuckerberg@gmail.com",
      password: "vou-te-hackeei",
    },
    {
      email: "abel@falco.gg",
      password: "Senha123@",
    },
  ];

  const negado = document.getElementById("negado");
  negado.addEventListener("click", negado);

  const permitido = document.getElementById("permitido");
  permitido.addEventListener("click", permitido);

  const { email, password } = user;

  let correctUser = false;

  for (let i = 0; i < users.length; i += 1) {
    if (users[i].email === email && users[i].password === password) {
      correctUser = true;

      break;
    }
  }

  if (correctUser) {
    permitido.style.display = "block";
    negado.style.display = "none";

    setTimeout(() => {
      window.location.href = "../app/index.html";
    }, 2000);

    return { message: "login feito com sucesso!", status: 200 };
  }
  negado.style.display = "block";
  permitido.style.display = "none";

  setTimeout(() => {
    const negadoHide = document.getElementById("negado");
    negadoHide.style.display = "none";
  }, 2000);

  return { message: "usuário e/ou senha incorretos.", status: 401 };
}
