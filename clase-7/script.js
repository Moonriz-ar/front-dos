const imagenes = document.querySelectorAll("img");
const links = document.querySelectorAll(".rutas-img");
const urlImagenes = [];

imagenes.forEach((img, index) => {
  let url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  img.src = url;
  urlImagenes.push(url);
});

links.forEach((a, index) => {
  a.setAttribute("target", "_blank");
  a.setAttribute("href", urlImagenes[index]);
});

/* ETAPA 3
- Nodo padre: <div class="contenedor">
- Nodo hijo repetitivo:        <a class="rutas-img"
          ><img class="imagen" alt="imagen-1" id="imagen-1"
        /></a>
- Explicación:

*/

// const imagenes = document.querySelectorAll("img");
// const urlImagenes = [];

// imagenes.forEach((_, index) => {
//   const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
//   urlImagenes.push(url);

// });

// console.log(urlImagenes);

// urlImagenes.forEach((url, index) => {
//   const nodoImagen = document.querySelector(`#imagen-${index + 1}`);
//   nodoImagen.src = url;
// });

// let nuevoP=document.createElement("p");

// nuevoP.innerText="Hola!";

// document.body.appendChild(nuevoP)
