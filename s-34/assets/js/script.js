console.log("Hello, World!");
let fruits = ["Apple", "Pear", "Pineapple"];
console.log(fruits);

//push("x") - add x to the end of the array
fruits.push("Orange");
//We verify that the element was added
console.log(fruits);

//pop() - removes the last element of the array
fruits.pop();
//We verify that the element was removed
console.log(fruits);

//unshift("x") - adds x to the beginning of the array
fruits.unshift("Strawberry");
console.log(fruits);

//shift() - removes the first element of the array
fruits.shift();
console.log(fruits);

//includes("x") - returns true if x is in the array, false otherwise
console.log(fruits.includes("Pineapple"));
console.log(fruits.includes("Banana"));

//indexOf("x") - returns the index of x in the array, -1 if not found
console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Pineapple"));

//join("x") - joins all elements of the array into a string, separated by x
let fruitsString = fruits.join(", ");
console.log(fruitsString);
console.log(fruits.join(" - "));
console.log(fruits.join(" / "));
console.log(fruits.join(" | "));
console.log(fruits.join(">>"));
console.log(fruits.join("<<"));
console.log(fruits.join("."));

let randomArray = ["Hello", true, 18, 24, { name: "John" }, [8, 14, 17]];
console.log(randomArray.join());

//original array
fruits = ["Apple", "Pear", "Pineapple", "Mango", "Peach", "Strawberry"];
console.log("arreglo original");
console.log(fruits);

//slice(start, end) - returns a new array with elements from start to end (not including end)
let slicedFruits = fruits.slice(3);
console.log(slicedFruits);
console.log(fruits.slice(1, 4));

//splice(start, deleteCount, item1, item2, ...)
console.log("SPLICE");
fruits.splice(1, 3, "Banana", "Grapes", "Watermelon");
console.log(fruits);

console.log("-----------------");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
//map(function
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Numero ${x}`);
console.log(numsToString);

//filter(function -> return boolean)
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

//reduce((accumulator, current)
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log("-----------------");
console.log("Objeto Math");

console.log("Math.round()");
//Math.round(x) - rounds x to the nearest integer
console.log(Math.round(14.3)); // 14
console.log(Math.round(14.7)); // 15

//Math.ceil(x) - rounds x up to the nearest integer
console.log("Math.ceil()");
console.log(Math.ceil(14.3)); // 15
console.log(Math.ceil(14.7)); // 15

//Math.floor(x) - rounds x down to the nearest integer
console.log("Math.floor()");
console.log(Math.floor(14.3)); // 14
console.log(Math.floor(14.7)); // 14
