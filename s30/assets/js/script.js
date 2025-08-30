console.log("Hola, esta es la sesión 30");
//Crea un objeto de persona
let person = {
    name: "Luisa",
    age: 17,
    nationality: "Peruana",
    birthDate: "10-03-2008",
    hobbies: ["leer", "aprender idiomas", "preparar postres"],
    cellphone: "987654321",
}
console.log(person);
//RETO
console.log(person.name);
console.log(person["age"]);
console.log(person.nationality);
console.log(person["birthDate"]);
console.log(person.hobbies [0]);
console.log(person.hobbies [1]);
console.log(person.hobbies [2]);
console.log(person["cellphone"]); 

//Actualiza el valor de un objeto  
console.log("Actualiza el valor de un objeto");
person.cellphone = "123456789";
console.log(person.cellphone);
//Agrega un nuevo atributo
console.log("Agrega un nuevo atributo");
person.email = "luan.pam@gmail.com";
console.log(person.email);
//JSon
let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  };
  console.log(heroes);
  //RETO: accediendo al objeto postrar los siguientes valores: 
  // -Damage resistance
  // -Eternal Flame
  // -Inferno
  console.log(heroes.members[1].powers[1]);
  console.log(heroes.members[2].name);
  console.log(heroes.members[2].powers[2]);