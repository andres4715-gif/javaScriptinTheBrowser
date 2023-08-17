/*

// comprobar si existe un dato en un array

let index2;
const myArray = ["Andres", "Sebastian", "Carlos"];

function checkNames() {
  myArray.push("noa");
  console.log("The array is: ", myArray.length);
  index2 = myArray.find((element) => element === "Andres");
  if (index2 === "Andres") {
    console.log("this is the name that I need");
  }
}

checkNames();

const groceries = [
  { productName: "apples", quantity: 4 },
  { productName: "oranges", quantity: 6 },
  { productName: "banana", quantity: 7 },
];

function checkInventoryFruits(fruit) {
  var hola = groceries.find((element) => element.productName === fruit);
  console.log(hola);

  if (hola.quantity > 5) {
    console.log(`no es necesario solicitar ${hola.productName}`);
  } else {
    console.log(
      `Se debe solicitar ${hola.productName} el inventario es: ${hola.quantity}`
    );
  }
}

checkInventoryFruits("apples");

*/

// Array.prototype.includes()

// Array.prototype.at()

const array1 = [5, 12, 8, 130, 44];

console.log(`la edad del niño de la casa del vecino es: ${array1[1]}`);
console.log(`la edad del niño de la casa del vecino es: ${array1.at(-3)}`);

const cart = ["apple", "banana", "pear"];
const data1 = "Andres";

function returnLast(data) {
  return data.at(-2);
}

console.log(returnLast(data1));
