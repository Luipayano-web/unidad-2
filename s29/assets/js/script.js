console.log('Hola');
//Declarar un Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];
//Mostrar el array en consola
console.log(numbers);
//Podemos acceder a los elementos del array por indice y obtener su tamaño.
console.log(`El tamaño de un array es ${numbers.length}`);
console.log(`El primer elemento es ${numbers[0]}`);
console.log(`El último elemento es ${numbers[numbers.length - 1]}`);
//RETO: Crear un arreglo que almacene nombres de frutas
let fruits = ['Pera', 'Sandia', 'Mango', 'Kiwi', 'Uva'];
console.log(fruits);
//Array con diferentes tipos de datos
let diversity = [1, 'Hola', true, null, undefined, {nombre: 'Melisa', edad: 30}, [1, 2, 3]];
console.log(diversity);
//RETO: Muestra los numeros del 0 al 26 de 3 en 3 con Loop for.
for(let i = 0; i < 27; i += 3){
    console.log(i);
}
//RETO: Hacer conteos con negativo, inversos y disminuyendo en Loop for.
for(let i = 10; i >= -10; i -= 1){
    console.log(i);
}
//RETO: Mostrar los elementos del array frutas con Loop for.
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


//RETO: Mostrar los numeros del 15 al 75, de 5 en 5 utilizando bucle while.
//Declaramos el iterador
let iterator = 15;
//Condición
while(iterator <= 75){
    console.log(iterator);
    iterator += 5;
}
//Tarea: consultar a la IA el uso de prompt() en JavaScript
