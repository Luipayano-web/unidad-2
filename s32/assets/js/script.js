console.log("Hola mundo");
/* POO - Programación Orientada a Objetos en JS
Clase -> Molde para crear objetos
-Atributos -> Características (propiedades) representadas por variables
-Métodos -> Comportamientos representados por funciones
Objeto -> Instancia de una clase, se le asignan valores a los atributos y se pueden invocar los métodos
Instanciar -> Crear un objeto a partir de una clase
SINTAXIS 
class NombreClase {
  constructor(param1, param2) {
    this.atributo1 = param1;
    this.atributo2 = param2;
}}
  metodo1() {
    // Código del método
  }
    1. Palabra reservada class
    2. Nombre de la clase (inicia con mayúscula por convención)
    3. Método constructor (se ejecuta al instanciar la clase)
    4. this -> Hace referencia a la instancia actual de la clase
    5. Métodos (funciones dentro de la clase)
    6. Dentro del metodo constructor se definen los atributos de la clase
    this -> significa "esta", es una palabra reservada y se usa para referirse a los atributos y métodos de la clase
*/

class Person {
  #cellphone;
  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }

  //Agregamos los metodos necesarios
  sayHello() {
    console.log("Hola desde el método");
  }

  //Usando los atributos
  introduce() {
    console.log(
      `Hola, mi nombre es ${this.firstName}
       ${this.lastName}, 
       tengo ${this.age} años, 
       mido ${this.height} metros y peso ${this.weight} kg. 
       Uno de mis pasatiempos es ${this.hobbies[0]}.`
    );
  }
  showCellphone() {
    return this.#cellphone;
  }
}
//Instanciamos la clase (creamos un objeto)
let person1 = new Person(
  "Luisa",
  "Payano",
  17,
  1.67,
  62,
  ["Leer", "Preparar postres", "Aprender idiomas"],
  "8291234567"
);
//Muestras el objeto en consola
console.log(person1);
//Accede a un atributo del objeto
console.log(person1.height);
console.log(person1.hobbies);
console.log("METODOS");
person1.sayHello();
person1.introduce();
console.log("ENCAPSULAMIENTO");
console.log(person1.showCellphone());
console.log("HERENCIA");
//Clase hija a partir de Person
class Chef extends Person {
  //agregar mas atributos:
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    //Primero pasas los atributos a la clase padre con super
    super(firstName, lastName, age, height, weight, hobbies, cellphone);
    // Luego de super se agregan los nuevos atributos
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }
  //Podemos sobrescribir métodos de la clase padre
  introduce() {
    console.log(
      `Hola, me llamo ${this.firstName}
       ${this.lastName} y soy chef en ${this.restaurant}.`
    );
  }

  cook() {
    console.log(
      `El chef ${this.firstName} está cocinando su especialidad: 
      ${this.favoriteFood}`
    );
  }
}
//Instanciamos un objeto de Chef
let chef1 = new Chef(
  "Carlos",
  "Gómez",
  30,
  1.75,
  80,
  ["Cocinar", "Viajar", "Leer"],
  "8299876543",
  "La italiana",
  "Lasaña"
);
console.log(chef1.firstName);
chef1.sayHello();
chef1.cook();
// Atributos y Metodos de chef que no funcionan en person
/* POLIMORFISMO
- Sobrescritura de métodos: Una clase hija puede redefinir un método de la clase padre
- Sobrecarga de métodos: No es nativamente soportada en JS, pero se puede simular con parámetros opcionales
*/
chef1.introduce(); // Llama al método sobrescrito en Chef
person1.introduce(); // Llama al método original en Person
