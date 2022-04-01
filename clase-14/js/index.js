// variables globales
const form = document.querySelector("form");
const busqueda = document.querySelector("#busqueda");
const listadoBusquedas = document.querySelector("#busquedas-realizadas");

let busquedasRealizadas = JSON.parse(sessionStorage.getItem("historial"));

if (busquedasRealizadas) {
  renderizarBusquedas(busquedasRealizadas);
} else {
  busquedasRealizadas = [];
}
console.log(busquedasRealizadas);
console.log(JSON.stringify(busquedasRealizadas));

//frenamos la accion por defecto del formulario
//disparamos la logica
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let busquedaActual = captarData(); // termometro
  busquedasRealizadas.push(busquedaActual);

  //almaceamos las busquedas en localStorage
  sessionStorage.setItem("historial", JSON.stringify(busquedasRealizadas)); // [termonetro]
  //ejecutamos la busqueda
  realizarBusqueda(busquedaActual);
});

//tomamos los datos ingresados en el buscador
//limpiamos el texto
function captarData() {
  let buscado = busqueda.value.trim();
  return buscado;
}

//renderizar busquedas almacenadas
function renderizarBusquedas(listado) {
  listado.forEach((element) => {
    let p = document.createElement("p");
    let texto = document.createTextNode(element);
    p.appendChild(texto);
    listadoBusquedas.appendChild(p);
  });
}

//Redireccionamos la location a google con la url parseada
function realizarBusqueda(texto) {
  location.replace(`https://www.google.com/search?q=${texto}`);
}
