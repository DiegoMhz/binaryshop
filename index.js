// const products = [
//   {
//     id: 1,
//     title: "Laptop Gamer",
//     description:
//       "Laptop de alto rendimiento con procesador Intel i7 y tarjeta gráfica RTX 3060.",
//     img: "laptop.jpg",
//     price: 1200,
//     sellerNickname: "dancabello"
//   },
//   {
//     id: 2,
//     title: "Smartphone Pro",
//     description:
//       "Pantalla OLED de 6.5 pulgadas, cámara de 108MP y batería de larga duración.",
//     img: "telefono.webp",
//     price: 899,
//     sellerNickname: "dancabello"
//   },
//   {
//     id: 3,
//     title: "Auriculares Inalámbricos",
//     description:
//       "Cancelación de ruido activa, sonido envolvente y batería de 40 horas.",
//     img: "audifonos.jpeg",
//     price: 150,
//     sellerNickname: "dancabello"
//   },
//   {
//     id: 4,
//     title: "Reloj Inteligente",
//     description: "Monitoreo de salud, GPS integrado y resistencia al agua.",
//     img: "reloj.webp",
//     price: 250,
//     sellerNickname: "dancabello"
//   },
//   {
//     id: 5,
//     title: "Teclado Mecánico RGB",
//     description:
//       "Switches mecánicos, iluminación RGB personalizable y diseño ergonómico.",
//     img: "teclado.webp",
//     price: 120,
//     sellerNickname: "dancabello"
//   },
//   {
//     id: 6,
//     title: "Silla Gamer",
//     description: "Diseño ergonómico con soporte lumbar y ajuste de altura.",
//     img: "sillaGamer.jpg",
//     price: 300,
//     sellerNickname: "dancabello"
//   },
// ];

// const usersArray = [
//   {
//     name: "comprador",
//     lastName: "comprador",
//     address: "coche",
//     nickname: "seller456",
//     password: "Intro123",
//     rol: "comprador",
//   },
//   {
//     name: "vendedor",
//     lastName: "vendedor",
//     address: "coche",
//     nickname: "dancabello",
//     password: "J5*asdRD.s",
//     rol: "vendedor",
//   },
//   {
//     name: "admin",
//     lastName: "admin",
//     address: "coche",
//     nickname: "root",
//     password: "dochouse",
//     rol: "admin",
//   },
// ];

// function pushProduct(product) {
//   localStorage.setItem("products", JSON.stringify(product));
// }

// function pushUsers(users) {
//   localStorage.setItem("users", JSON.stringify(users));
// }
// pushProduct(products);
// pushUsers(usersArray);




// const form = document.querySelector("#form");
// let users = localStorage.getItem("users")
//   ? JSON.parse(localStorage.getItem("users"))
//   : [];

// // INPUTS
// const inputName = document.querySelector("#inputName");
// const inputLastName = document.querySelector("#inputLastName");
// const inputAddress = document.querySelector("#inputAddress");
// const inputNickname = document.querySelector("#inputNickname");
// const inputPassword = document.querySelector("#inputPassword");
// const inputConfirmPassword = document.querySelector("#inputConfirmPassword");
// const inputRol = document.querySelector("#selectRol");
// const btnRegistro = document.querySelector("#btnRegistro");
// // REGEX
// REGEX_NAME = /^[a-zA-Z0-9 ]{3,40}$/;
// REGEX_NICKNAME = /^[a-zA-Z0-9]{3,13}$/;
// REGEX_PASSWORD = /^(?=.*[a-z]).{8,}$/;

// // VALIDACIONES
// let nameValidated = false;
// let lastNameValidated = false;
// let nicknameValidated = false;
// let passwordValidated = false;
// let confirmPasswordValidated = false;
// let addressValidated = false;
// let rolValidated = false;

// // MENSAJE ERROR
// const errorMessage = document.querySelector("#errorMessage");

// // FUNCION PARA CREAR USUARIO
// function createUser(user) {
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));
//   console.log("Usuario Creado");
// }

// // FUNCION PARA VALIDAR QUE EL NICKNAME NO EXISTA
// function validationNickname(nickname, rol) {
//   return users.some((user) => user.nickname == nickname && user.rol == rol);
// }
// // FUNCION PARA VALIDAR TODOS LOS INPUTS
// function validate(validation, input) {
//   if (
//     !nameValidated ||
//     !lastNameValidated ||
//     !nicknameValidated ||
//     !passwordValidated ||
//     !confirmPasswordValidated ||
//     !addressValidated ||
//     !rolValidated
//   ) {
//     btnRegistro.disabled = true
//   }
//   else{
//     btnRegistro.disabled = false
//   }

//   if (!validation && input.value !== "") {
//     input.classList.add("invalid");
//     input.classList.remove("validated");
//   } else if (validation && input.value !== "") {
//     input.classList.remove("invalid");
//     input.classList.add("validated");
//   }
// }

// inputName.addEventListener("input", (e) => {
//   nameValidated = REGEX_NAME.test(e.target.value);
//   validate(nameValidated, inputName);
// });

// inputLastName.addEventListener("input", (e) => {
//   lastNameValidated = REGEX_NAME.test(e.target.value);
//   validate(lastNameValidated, inputLastName);
// });

// inputAddress.addEventListener("input", (e) => {
//   addressValidated = REGEX_NAME.test(e.target.value);
//   validate(addressValidated, inputAddress);
// });

// inputPassword.addEventListener("input", (e) => {
//   passwordValidated = REGEX_PASSWORD.test(e.target.value);
//   confirmPasswordValidated = e.target.value === inputConfirmPassword.value;
//   validate(confirmPasswordValidated, inputConfirmPassword);
//   validate(passwordValidated, inputPassword);
// });

// inputConfirmPassword.addEventListener("input", (e) => {
//   confirmPasswordValidated = inputPassword.value === e.target.value;
//   validate(confirmPasswordValidated, inputConfirmPassword);
// });

// inputRol.addEventListener("input", (e) => {
//   rolValidated = e.target.value !== "";
//   validate(rolValidated, inputRol);
// });

// inputNickname.addEventListener("input", (e) => {
//   nicknameValidated = REGEX_NICKNAME.test(e.target.value);
//   validate(nicknameValidated, inputNickname);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const usuario = {
//     name: e.target.name.value,
//     lastName: e.target.lastName.value,
//     nickname: e.target.nickname.value,
//     address: e.target.address.value,
//     password: e.target.password.value,
//     rol: e.target.rol.value,
//   };

//   if (validationNickname(usuario.nickname, usuario.rol)) {
//     errorMessage.classList.add("error");
//     errorMessage.innerText = `El nickname ${usuario.nickname} ya esta en uso para un ${usuario.rol}, ingresa otro! o cambia el rol`;
//     setTimeout(() => {
//       errorMessage.classList.remove("error-message");
//       errorMessage.innerText = ``;
//     }, 5000);
//   } else {
//     errorMessage.classList.add("success");
//     errorMessage.innerText = `El usuario ${usuario.rol} con el nickname ${usuario.nickname} se ha creado con exito!`;
//     setTimeout(() => {
//       errorMessage.innerText = ``;
//       errorMessage.classList.remove("success");
//     }, 5000);
//     createUser(usuario);
//   }
// });


// btnRegistro.disabled = true;

