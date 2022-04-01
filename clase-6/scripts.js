const listadoFelinos = [
  {
    title: "El tigre",
    imgUrl: "./imagenes/tiger.jpg",
    description:
      "El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.",
  },
  {
    title: "El leon",
    imgUrl: "./imagenes/leon.jpg",
    description:
      "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India",
  },
  {
    title: "El leopardo",
    imgUrl: "./imagenes/leopardo.jpg",
    description:
      "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).",
  },
  {
    title: "La pantera negra",
    imgUrl: "./imagenes/pantera-negra.jpg",
    description:
      "La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.",
  },
  {
    title: "El jaguar",
    imgUrl: "./imagenes/jaguar.jpg",
    description:
      "El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).",
  },
  {
    title: "El guepardo",
    imgUrl: "./imagenes/chita.jpg",
    description:
      "El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.",
  },
];

// funcion generador de gatitos

const generadorGatitos = (array) => {
  let contenedor = document.querySelector(".contenedor");

  array.forEach((gatito) => {
    let item = document.createElement("div");
    let imagen = document.createElement("img");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    item.classList.add("item");
    imagen.setAttribute("src", gatito.imgUrl);

    // meter texto a h2
    let titulo = document.createTextNode(gatito.title);
    h2.appendChild(titulo);

    // meter texto a p
    let descripcion = document.createTextNode(gatito.description);
    p.appendChild(descripcion);

    item.append(imagen, h2, p);
    contenedor.appendChild(item);
  });
};

// se inicializa el generador de gatitos
generadorGatitos(listadoFelinos);

// dark mode
const tema = confirm("Desea aplicar el tema oscuro?");

if (tema) {
  document.querySelector("body").classList.add("dark");
}
