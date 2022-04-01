/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  while (!datosPersona.nombre) {
    datosPersona.nombre = prompt("Como te llamas?");
  }

  while (!datosPersona.edad) {
    try {
      const añoNacimiento = prompt("En qué año naciste?");
      if (Number.isInteger(parseInt(añoNacimiento))) {
        datosPersona.edad = new Date().getFullYear() - añoNacimiento;
      }
    } catch {
      console.log("Usted no ingreso una edad válida");
    }
  }

  while (!datosPersona.ciudad) {
    datosPersona.ciudad = prompt("En qué ciudad vivís?");
  }

  while (!datosPersona.interesPorJs) {
    datosPersona.interesPorJs = confirm("Te interesa Javascript?");
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let ciudad = document.querySelector("#ciudad");
  let interesPorJs = document.querySelector("#javascript");

  nombre.innerText = datosPersona.nombre;
  edad.innerText = datosPersona.edad;
  ciudad.innerText = datosPersona.ciudad;
  datosPersona.interesPorJs
    ? (interesPorJs.innerText = "Sí")
    : (interesPorJs.innerText = "No");
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");

  if (fila.children.length === 0) {
    listado.forEach((materia) => {
      let template = `<article class="caja">
        <img src=${materia.imgUrl} alt=${materia.lenguajes}>
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      </article>`;
      fila.innerHTML += template;
    });
  } else {
    console.log("Ya pediste que aparezcan las materias!");
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyF") {
    const aboutMeText = document.querySelector("#sobre-mi");
    aboutMeText.classList.remove("oculto");
  }
});
