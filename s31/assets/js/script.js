console.log("Hola desde script.js");
let nombre = "Luisa";
let edad = 17;
console.log("Mi nombre es " + nombre);
let fruits = ["Manzana", "Banana", "Cereza"];
//Codigo gigante ordenado con alt z
/*
Depurar -> Identificar errores en el codigo -> Arreglar un formulario que no envia datos.
Optimizar -> Mejorar el rendimiento, eficiencia o legibilidad del codigo -> Usar texto.legth en vez de un bucle o reducir el tiempo de carga de una pagina web.
Refactorizar -> Reestructurar el codigo sin cambiar su funcionalidad -> Cambiar nombres de variables para que sean mas descriptivas o dividir funciones largas en funciones mas pequeñas.

//prompt() Permite ingresar dartos por el navegador y almacenarlos en una variable o usarlos directamente.
let name = prompt("Ingresa tu nombre");
console.log(`Buenas noches, ${name} `);

// Para comvertir a number, envolvemos prompt en 
 -parseInt() para enteros 
 -parseFloat() para decimales.
let num1 = parseInt(prompt("Ingresa un numero"));
let num2 = parseFloat(prompt("Ingresa otro numero"));
console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log("RETO"); */

//Pedir al usuario un numero entero e indicar si el numero es par o no
let numUser = parseInt(prompt("Ingresa un numero entero"));
if (numUser % 2 === 0) {
  console.log(` ${numUser} es par`);
} else {
  console.log(` ${numUser} es impar`);
}
