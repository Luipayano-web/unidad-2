console.log('Hola');



let nombre = 'Eymi';

if (nombre.length < 5) {
    //codigo a ejecutar si la condicion es verdadera
    console.log('Tu nombre es corto');
} else {
    //codigo a ejecutar si la condicion es falsa
    console.log('Tu nombre no es corto');
}
//RETO: verificar si una persona es mayor de edad
let edad = 17;

if (edad >= 18)  {
    console.log('Mayor de edad');
} else {
    console.log('¡Menor de edad!');
}

//RETO: comparar dos numeros y mostrar cual es el mayor. 

let number1 = 5;
let number2 = 3;

if (number1 > number2) {
console.log(`${number1} es mayor que ${number2}`) 
} else {
    console.log(`${number2} es mayor que ${number1}`);
}

//

let num1 = 6;
let num2 = 6;
console.log(`Primer numero: ${num1}`);
console.log(`Segundo numero: ${num2}`);
if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
} else {
    console.log('Los numeros son iguales');
}
//verificar si una persona es mayor de esad en Peru y E.E.U.U
let age = 18;
let country = 'Peru';
let country2 = 'E.E.U.U'    

//verificar si una persona es mayor de esad en Peru y E.E.U.U
let edad1 = 17;
let estaEnPeru = true;



//Dias de la semana
console.log("Switch Case");
let numDia = 3;
switch(numDia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Dia no valido');
}


