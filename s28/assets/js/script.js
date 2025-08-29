console.log("¡Hola!");
//RETO: funcion que imprima los numeros del 1 al 10
function showNumbers() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

showNumbers();

console.log("PARAMETROS")

function addTwoNumbers(a,b) {
    console.log(`Primer parametro: ${a}`);
    console.log(`Segundo parametro: ${b}`);
    let result = a + b;
    console.log(`El resultado de ${a} + ${b} es ${result}`);
}
addTwoNumbers(3,5);
addTwoNumbers(10,15);

function divideTwoNumbers(c,d) {
    console.log(`Primer parametro: ${c}`);
    console.log(`Segundo parametro: ${d}`);
    let result = c / d;
    console.log(`El resultado de ${c} / ${d} es ${result}`);
}
divideTwoNumbers(10,2);

//devuelva
function greet(targetName) {
    let message = `Hola ${targetName}, ¿qué tal estás?`
    //Retorno de un DATO
    return message;
}
let name = "Luisa";
//Llamada a la funcion, al retornar un valos podemos almacenarlo
let greetMessage = greet(name);
//Y luego usamos un dato almacenado
console.log(greetMessage);
//Llamada directa
console.log(greet(name));