const divProductos = document.querySelector("#products");
const textNoDisponble = document.querySelector("#products h1");
const cart = document.querySelector("#cart");
const cartContent = document.querySelector("#cart-content");
const sectioCartProducts = document.querySelector(".cart-products");
const textCountCart = document.querySelector(".cart-header strong");
const textTotalCart = document.querySelector(".cart-footer p");

cart.addEventListener("click", (e) => {
  cartContent.classList.toggle("cart-activated");
});


function cartCount() {
  const textNumber = document.querySelector(".count-number");
  const count = sectioCartProducts.children.length;
  textCountCart.innerText = `Carrito de compra(${count})`;
  textNumber.innerText = `${count}`;
}

function cartTotalBuy() {
  let suma = 0;
  const prices = document.querySelectorAll(".cart-price");
  prices.forEach((element) => {
    const price = parseInt(element.innerText.split("$")[0]);
    suma = suma + price;
  });

  textTotalCart.innerText = `Total: ${suma}$`;
}

function cartDeleted() {
  const btnCartDeleted = document.querySelectorAll(".btn-cart-deleted");
  btnCartDeleted.forEach((element) => {
    element.addEventListener("click", (e) => {
      const productCart = element.parentElement.parentElement;
      productCart.remove();
      cartCount();
      cartTotalBuy();
    });
  });
}

function pushProduct(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

function getProducts() {
  return JSON.parse(localStorage.getItem("products"));
}

const data = getProducts();
const products = data.sort((a, b) => a.id - b.id);
if (products.length === 0) {
  textNoDisponble.classList.remove("d-none");
}

products.forEach((element) => {
  const div = document.createElement("div");
  div.classList = "card";
  const description = element.description.slice(0, 50);
  const img =
    element.img.split(":")[0] === "data"
      ? `${element.img}`
      : `../assets/images/${element.img}`;

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
                 <button class="btn-add-cart">
                  Agregar al carrito
                 </button>
                <button class="btn-buy">Comprar</button>
              </div>
            `;

  divProductos.appendChild(div);
});

const btnAddCart = document.querySelectorAll(".btn-add-cart");

btnAddCart.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = btn.parentElement.parentElement.parentElement.id;

    const productoFiltrado = data.filter(
      (element) => element.id === parseInt(id)
    );
    const producto = productoFiltrado[0];
    const { description, img, title, price } = producto;
    const imgValidate =
      img.split(":")[0] === "data" ? `${img}` : `../assets/images/${img}`;

    const div = document.createElement("div");
    div.classList = "card-product-cart";
    div.innerHTML = `<div class="div-cart-img">
            <div class="btn-cart-deleted">
              <img src="../assets/images/iconoDelete.jpg" alt="">
            </div>
              <img
                class="cart-img"
                src="${imgValidate}"
                alt=""
              />
            </div>
            <div class="div-cart-info">
              <p class="cart-description">
                ${description}
              </p>
              <p class="cart-price">${price}$</p>
            </div>
            `;

    sectioCartProducts.appendChild(div);

    cartCount();
    cartTotalBuy();
    cartDeleted();
  });
});

cartTotalBuy();
cartCount();
