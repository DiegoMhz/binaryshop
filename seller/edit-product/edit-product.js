const divProductos = document.querySelector("#productos");
const form = document.querySelector("#form");
const messageEdit = document.querySelector(".mensaje-actualizado");
const btnVolver = document.querySelector("#btn-volver");
// FUNCION PARA TRAER EL ID DEL PRODUCTO
function getProductId() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  return id;
}


btnVolver.addEventListener("click", e =>{
  history.back();
})

function getSession() {
  const userSession = JSON.parse(localStorage.getItem("session"));
  return userSession
}
const userSession = getSession();

function getProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  return products;
}

function insertValuesProduct(product, form) {
  form.title.value = product[0].title;
  form.description.value = product[0].description;
  form.price.value = product[0].price;
}


let arrayProducts = getProducts();

const productId = parseInt(getProductId());
const products = getProducts();
const filterProducts = products.filter((element) => element.id === productId);

insertValuesProduct(filterProducts, form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newProducts = products.filter((product) => product.id !== productId);
  const fileInput = document.getElementById("inputPhoto"); 
  const file = fileInput.files[0]; 

  if (file) {
    const reader = new FileReader();

    reader.onload = function () {
      let productEdit = {
        id: productId,
        title: e.target.title.value,
        description: e.target.description.value,
        price: e.target.price.value,
        img: reader.result,
        sellerNickname: userSession.nickname
      };

      newProducts.push(productEdit);
      localStorage.setItem("products", JSON.stringify(newProducts));
      messageEdit.classList.remove("d-none");
    };

    reader.readAsDataURL(file);
  } else {
    let productEdit = {
      id: productId,
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      img: filterProducts[0].img,
      sellerNickname: userSession.nickname
    };

    newProducts.push(productEdit);
    localStorage.setItem("products", JSON.stringify(newProducts));
    messageEdit.classList.remove("d-none");
  }
});

