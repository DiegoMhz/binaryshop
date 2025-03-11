const divProductos = document.querySelector("#productos");
const form = document.querySelector("#form");
const messageAdd = document.querySelector("#messageAdd");
const messageError = document.querySelector("#messageError");
const btnVolver = document.querySelector("#btn-volver");

btnVolver.addEventListener("click", (e) => {
  history.back();
});

function getProducts() {
  const products = JSON.parse(localStorage.getItem("products"));
  return products;
}
function clearInputs() {
  form.title.value = "";
  form.description.value = "";
  form.price.value = "";
  form.photo.value = "";
}

function getSession() {
  const userSession = JSON.parse(localStorage.getItem("session"));
  return userSession;
}
const userSession = getSession();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleValue = form.title.value;
  const descriptionValue = form.description.value;
  const priceValue = form.price.value;
  let products = getProducts();
  const maxId =
    products.length > 0 ? products.sort((a, b) => b.id - a.id)[0].id : 0;
  const newId = maxId + 1;
  const fileInput = document.getElementById("inputPhoto");
  const file = fileInput.files[0];
  messageError.classList.add("d-none");
  if (
    titleValue === "" ||
    descriptionValue === "" ||
    priceValue === "" ||
    file === undefined
  ) {
    setTimeout(() => {
      messageError.classList.remove("d-none");
      messageAdd.classList.add("d-none");
    }, 100);
    return;
  }
  const reader = new FileReader();

  reader.onload = function () {
    let productEdit = {
      id: newId,
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      img: reader.result,
      sellerNickname: userSession.nickname,
    };

    products.push(productEdit);
    localStorage.setItem("products", JSON.stringify(products));
    messageAdd.classList.remove("d-none");
  };

  reader.readAsDataURL(file);
  setTimeout(() => {
    clearInputs();
  }, 1000);
});
