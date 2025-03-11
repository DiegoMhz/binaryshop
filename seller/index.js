const divProductos = document.querySelector("#products");
const textNoDisponble = document.querySelector("#products h1");

function getSession() {
  const userSession = JSON.parse(localStorage.getItem("session"));
  return userSession
}

function pushProduct(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

function getProducts() {
  return JSON.parse(localStorage.getItem("products"));
}

const userSession = getSession();
const data = getProducts();
const products = data.sort((a,b) => a.id - b.id);
const productsFilter = products.filter(element => element.sellerNickname === userSession.nickname)
if (products.length === 0) {
  textNoDisponble.classList.remove('d-none')
}

productsFilter.forEach((element) => {
  const div = document.createElement("div");
  div.classList = "card";
  const description = element.description.slice(0, 50);
  const img = element.img.split(":")[0] === 'data' ? `${element.img}` : `../assets/images/${element.img}`;
  
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
                 <button class="btn-edit">
                  <a href="./edit-product/?id=${element.id}">Editar</a>
                 </button>
                <button class="btn-deleted">Eliminar</button>
              </div>
            `;

  divProductos.appendChild(div);
});

const card = document.querySelectorAll(".card");

card.forEach(element => {
  element.addEventListener("dblclick", e => {
    console.log(`./edit-product/?${element.id}` );
    window.location.href = `./edit-product/?id=${element.id}`;
  })
})

const deleteBtn = document.querySelectorAll(".btn-deleted");


deleteBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.parentElement.parentElement.parentElement.id;
    deleteProduct(parseInt(id));
    window.location.reload();
  });
});

function deleteProduct(id) {
  const newProducts = products.filter((product) => product.id !== id);
  console.log(newProducts);
  pushProduct(newProducts);
}
