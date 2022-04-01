/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implementar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.forms[0];
const boton = document.querySelector("#enviar");
const inputComentario = document.querySelector("#comentario");
const divComentarios = document.querySelector(".comentarios");
const botonBorrar = document.querySelector("#borrar");

// arracamos con el listado de comentarios pero tambien chequeamos si existen otros en local
let listadoComentarios =
  JSON.parse(localStorage.getItem("comentariosAlmacenados")) || [];
// pintamos los comentarios en pantalla
renderizarComentarios(listadoComentarios);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (inputComentario.value) {
    // guardamos el ultimo para que vaya arriba del todo
    listadoComentarios.unshift(inputComentario.value);

    // limpiar la caja de comentarios
    divComentarios.innerHTML = "";
    // pintamos los comentarios en pantalla
    renderizarComentarios(listadoComentarios);
    guardarEnLocal();

    // limpiamos el formulario
    formulario.reset();
  }
});

botonBorrar.addEventListener("click", () => {
  localStorage.clear();
  listadoComentarios = [];
  console.log(listadoComentarios);
  renderizarComentarios(listadoComentarios);
});

/* -------------------------------- FUNCIONES ------------------------------- */
function renderizarComentarios(listado) {
  if (listado.length === 0) {
    divComentarios.innerHTML = "";
  } else {
    listado.forEach((elemento) => {
      divComentarios.innerHTML += `<p>${elemento}</p>`;
    });
  }
}

function guardarEnLocal() {
  localStorage.setItem(
    "comentariosAlmacenados",
    JSON.stringify(listadoComentarios)
  );
}
