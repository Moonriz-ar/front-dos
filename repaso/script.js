const contenedorProductos = document.getElementById("productos");
const contenedorCarrito = document.getElementById("carrito");

const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 1500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 3500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 4500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 5500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 6500,
    img: "https://via.placeholder.com/250",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 7500,
    img: "https://via.placeholder.com/250",
  },
];

const carrito = [];

function agregarAlCarrito(productId) {
  let producto = productos.filter((item) => item.id === productId);
  carrito.push(producto[0]);
  renderizarCarrito();
}

productos.forEach((prod) => {
  // // TEMPLATE STRING
  contenedorProductos.innerHTML += `
        <div>
        <img src=${prod.img} />
        <h3 class="titulo">${prod.nombre}</h3>
        <p class="strong">Precio: $${prod.precio}</p>
        <p>Código: ${prod.id}</p>
        <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
        </div>
    `;
  console.log("iteracion " + prod.id);
});

function renderizarCarrito() {
  carrito.forEach((prod) => {
    // // TEMPLATE STRING
    contenedorCarrito.innerHTML += `
                <div>
                <img src=${prod.img} />
                <h3 class="titulo">${prod.nombre}</h3>
                <p class="strong">Precio: $${prod.precio}</p>
                <p>Código: ${prod.id}</p>
                </div>
            `;
    console.log("iteracion " + prod.id);
  });
}
