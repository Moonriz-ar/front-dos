const isDarkMode = confirm("Queres activar dark mode?");

if (isDarkMode) {
  // color de fondo
  let body = document.querySelector("body");
  body.classList.toggle("background-dark");

  // titulo "la familia de los felinos"
  let title = document.querySelector("h1");
  title.classList.toggle("title-dark");

  // items
  let items = document.querySelectorAll(".item");
  items.forEach((item) => item.classList.toggle("items-dark"));

  // items text
  let itemTitle = document.querySelectorAll("h2");
  let itemText = document.querySelectorAll("p");
  itemTitle.forEach((item) => item.classList.toggle("items-font-dark"));
  itemText.forEach((item) => item.classList.toggle("items-font-dark"));
}
