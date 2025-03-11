const form = document.querySelector("#form");
let users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
console.log(users);

function validationLogin(nickname, password, rol) {
  return users.filter(
    (user) =>
      user.nickname == nickname && user.password == password && user.rol == rol
  );
}

function session(nickname, rol) {
  const user = {
    nickname: nickname,
    rol: rol,
  };
  localStorage.setItem("session", JSON.stringify(user));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usuario = {
    nickname: e.target.nickname.value,
    password: e.target.password.value,
    rol: e.target.rol.value,
  };
  const nickname = usuario.nickname;
  const password = usuario.password;
  const rol = usuario.rol;
  const userExist = validationLogin(nickname, password, rol);

  if (userExist.length > 0) {
    session(nickname, rol);
    if (userExist[0].rol == "comprador") {
      window.location.pathname = "/buyer";
    } else if (userExist[0].rol == "vendedor") {
      window.location.pathname = "/seller";
    } else if (userExist[0].rol == "admin") {
      window.location.pathname = "/admin";
    }
  } else {
    const invalidMessage = document.querySelector(".p-invalid");
    invalidMessage.classList.remove("d-none");
    setTimeout(() => {
      invalidMessage.classList.add("d-none");
    }, 3000);
  }
});
