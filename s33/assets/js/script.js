console.log("Hola, mundo!");
//getElementById("nombre-id")-> Trae un elemento por su id "nombre-id"
let mainTitle = document.getElementById("main-title");
//Mostramos el elemento en consola
console.log(mainTitle);
//Mostrar contenido de mainTitle
console.log(mainTitle.innerText);
//Actualizar contenido dinamicamente
mainTitle.innerHTML = "Titulo cambiado :P";
//Mostramos el contenido actualizado
console.log(mainTitle.innerText);
//getElementsByClassName("nombre-clase")-> Trae todos los elementos que tengan la clase "nombre-clase"
let mainTexts = document.getElementsByClassName("main-text");
//Mostramos los elementos en consola
console.log(mainTexts); //Es un array
//Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText);
//Modificamos el contenido del elemento
mainTexts[0].innerText = "Texto cambiado :D";
//Mostramos el contenido actualizado
console.log(mainTexts[0].innerText);
//getElemenstByTagName("etiqueta")-> Trae todos los elementos que tengan la etiqueta "etiqueta"
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles); //Es un array
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);

console.log("Selectores por CSS");
//querySelector("selector") ->  Devuelve elemento que coincida con el selector
let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);
//querySelectorAll("selector") ->  Devuelve arreglo de elementos que coincidan con el selector
let queryMainText = document.querySelectorAll(".main-text");
console.log(queryMainText);

//EVENTOS
console.log("Eventos");
//Seleccionar un elemento y le agrego un evento. No es necesario almacenar el elemento en alguna
document.getElementById("main-button").addEventListener("click", function () {
  //Codigo a ejecutar cuando suceda el evento
  console.log("Diste click en el boton");

  let mainButton = document.getElementById("main-button");

  //Cambiar estilos
  let currentBackground = document.body.style.backgroundColor;

  //Cambiando color con condicionales
  if (currentBackground != "lightblue") {
    document.body.style.backgroundColor = "lightblue";
    mainButton.style.color = "blue";
  } else {
    document.body.style.backgroundColor = "white";
    mainButton.style.color = "black";
  }

  //Obtener valor ingresando en un input
  //1.Seleccionamos el input
  let mainInput = document.querySelector("#main-input").value;
  console.log(`valor del input: ${mainInput}`);

  //Mostramos el valor en el contenido de un elemento
  let greetParagraph = document.querySelector("#greet-paragraph");

  if (mainInput == "" || mainInput.length === 0) {
    greetParagraph.innerText = "NO INGRESASTE UN NOMBRE";
  } else {
    greetParagraph.innerText = `Buenas noches ${mainInput}`;
  }
});

// Evento de click en otro boton
// Selecionamos el boton
let togglerButton = document.querySelector("#toggler");
// Fijamos el contenido
togglerButton.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText = document.querySelector("#hidden-text");
// Lo ocultamos directamente
hiddenText.style.display = "none";

// Agregamos el event listener
togglerButton.addEventListener("click", function () {
  let currentTextDisplay = hiddenText.style.display;

  // Si el boton esta oculto
  if (currentTextDisplay == "none") {
    // Lo muestro
    hiddenText.style.display = "block";
    togglerButton.innerText = "OCULTAR";
  } else {
    // Si no esta oculto, lo oculto
    hiddenText.style.display = "none";
    togglerButton.innerText = "MOSTRAR";
  }
});

// FORMA CORRECTA DE CAMBIAR ESTILOS, USANDO CLASES
let togglerButton2 = document.querySelector("#toggler-2");
// Fijamos el contenido
togglerButton2.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText2 = document.querySelector("#hidden-text-2");

// Agregamos el event listener
togglerButton2.addEventListener("click", function () {
  if (hiddenText2.classList.contains("hide-text")) {
    hiddenText2.classList.remove("hide-text");
    togglerButton2.innerText = "OCULTAR";
  } else {
    console.log("ELSE");
    hiddenText2.classList.add("hide-text");
    togglerButton2.innerText = "MOSTRAR";
  }
});
