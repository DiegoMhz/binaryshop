const divProductos = document.querySelector("#products");
const divUsers = document.querySelector("#users");
const textNoDisponble = document.querySelector("#products h1");
const btnVerUsuarios = document.querySelector("#btn-ver-usuarios");
const btnVerProductos = document.querySelector("#btn-ver-productos");
const sectionProductos = document.querySelector("#section-products");
const sectionUsuarios = document.querySelector("#section-users");
const sectionTitle  = document.querySelector("#section-title");
console.log(sectionTitle);

btnVerUsuarios.addEventListener('click', e => {
  sectionProductos.classList.add("d-none");
  sectionUsuarios.classList.remove("d-none");
  sectionTitle.innerText = "Usuarios"
})


btnVerProductos.addEventListener('click', e => {
  sectionUsuarios.classList.add("d-none");
  sectionProductos.classList.remove("d-none");
    sectionTitle.innerText = "Productos"
})

function pushProduct(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

function pushUser(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getProducts() {
  return JSON.parse(localStorage.getItem("products"));
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

const dataProducts = getProducts();
const dataUsers = getUsers();
const users = dataUsers.filter((element) => element.rol !== "admin");
const products = dataProducts.sort((a, b) => a.id - b.id);
if (products.length === 0) {
  textNoDisponble.classList.remove("d-none");
}

products.forEach((element) => {
  const div = document.createElement("div");
  div.classList = "card";
  const description = element.description.slice(0, 50);
  const img = element.img.split(":")[0] === 'data' ? `${element.img}` : `/assets/images/${element.img}`;

  div.id = `${element.id}`;
  div.innerHTML = `
            <img
              class="card-img"
              height="120"
              width="120"
              src="${img}"
              alt="Producto"
            />
            <div class="card-body">
              <h3 class="card-title">${element.title}</h3>
              <p class="card-description">
                ${description}...
              </p>
              <p class="card-price">${element.price}$</p>
              <div>
                <button class="btn-deleted">Eliminar</button>
              </div>
            `;

  divProductos.appendChild(div);
});

users.forEach((element) => {
  const div = document.createElement("div");
  div.classList = "card-user";

  div.id = `${element.nickname}-${element.rol}`;
  div.innerHTML = `
            <div class="card-body">
              <h3 class="card-title">${element.nickname} ${element.rol}</h3>
              <p class="card-name">Nombre: ${element.name} ${element.lastName}</p>
              <p class="card-address">Direccion: ${element.address}</p>
              <p class="card-rol">Rol: ${element.rol}</p>
              <button class="btn-deleted-user">Eliminar</button>
            </div>
            `;

  divUsers.appendChild(div);
});


const deleteBtn = document.querySelectorAll(".btn-deleted");
const deleteBtnUser = document.querySelectorAll(".btn-deleted-user");

deleteBtnUser.forEach(btn =>
  btn.addEventListener("click", e => {  
    const id = e.target.parentElement.parentElement.id;
    const nickname = id.split("-")[0];
    const rol = id.split("-")[1];
    deleteUser(nickname, rol);
    window.location.reload();
  })
)

deleteBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.parentElement.parentElement.parentElement.id;
    const cardSelect = e.target.parentElement.parentElement.parentElement;
    cardSelect.classList.add("d-none")
    deleteProduct(parseInt(id));
  });
});

function deleteProduct(id) {
  const newProducts = products.filter((product) => product.id !== id);
  console.log(newProducts);
  pushProduct(newProducts);
}

function deleteUser(nickname, rol) {
  const newUsers = users.filter((user) => user.nickname !== nickname && user.rol !== rol);
  pushUser(newUsers);
}




