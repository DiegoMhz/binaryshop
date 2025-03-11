const products = [
  {
    id: 1,
    title: "Laptop Gamer",
    description:
      "Laptop de alto rendimiento con procesador Intel i7 y tarjeta gráfica RTX 3060.",
    img: "laptop.jpg",
    price: 1200,
    sellerNickname: "dancabello"
  },
  {
    id: 2,
    title: "Smartphone Pro",
    description:
      "Pantalla OLED de 6.5 pulgadas, cámara de 108MP y batería de larga duración.",
    img: "telefono.webp",
    price: 899,
    sellerNickname: "dancabello"
  },
  {
    id: 3,
    title: "Auriculares Inalámbricos",
    description:
      "Cancelación de ruido activa, sonido envolvente y batería de 40 horas.",
    img: "audifonos.jpeg",
    price: 150,
    sellerNickname: "dancabello"
  },
  {
    id: 4,
    title: "Reloj Inteligente",
    description: "Monitoreo de salud, GPS integrado y resistencia al agua.",
    img: "reloj.webp",
    price: 250,
    sellerNickname: "dancabello"
  },
  {
    id: 5,
    title: "Teclado Mecánico RGB",
    description:
      "Switches mecánicos, iluminación RGB personalizable y diseño ergonómico.",
    img: "teclado.webp",
    price: 120,
    sellerNickname: "dancabello"
  },
  {
    id: 6,
    title: "Silla Gamer",
    description: "Diseño ergonómico con soporte lumbar y ajuste de altura.",
    img: "sillaGamer.jpg",
    price: 300,
    sellerNickname: "dancabello"
  },
];

const users = [
  {
    name: "comprador",
    lastName: "comprador",
    address: "coche",
    nickname: "seller456",
    password: "Intro123",
    rol: "comprador",
  },
  {
    name: "vendedor",
    lastName: "vendedor",
    address: "coche",
    nickname: "dancabello",
    password: "J5*asdRD.s",
    rol: "vendedor",
  },
  {
    name: "admin",
    lastName: "admin",
    address: "coche",
    nickname: "root",
    password: "dochouse",
    rol: "admin",
  },
];

function pushProduct(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

function pushUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}
pushProduct(products);
pushUsers(users);
window.location.href = "../signup";
