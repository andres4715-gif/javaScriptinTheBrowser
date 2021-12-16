/*
// haciendo sumas con un array

let suma = 0;
const myArray = [5.1, 2.4, 3.8, 3.9];
const sumando = () => {
  for (let iterator of myArray) {
    suma += iterator;
  }
  return suma;
};

function sumandoLaRespuesta(suma1) {
  suma1 = sumando();
  console.log(suma1);
  if (suma1 >= 1) {
    alert("es mayor que 1");
  } else {
    alert("el resultado es 0 y no se puede continuar");
  }
}

sumandoLaRespuesta(myArray);



// que es un objeto:
const fecha = new Date();
const modeloCarro = fecha.getFullYear() - 2013;

const myObjeto = {
  nombre: "Andres",
  apellido: "Rios",
  propiedades: {
    carro: "mazda3",
    antiguedadDelCarro: modeloCarro,
    apartamento: "Itagui Ditaires",
  },
};

const llamarMyObjeto = () => {
  console.log(myObjeto);
};

llamarMyObjeto();

// otra forma de crear un objeto:

const checked = (marca) => {
  let myNewArray = [];
  var myCar = new Object();
  (myCar.make = "Ford"),
    (myCar.model = marca),
    (myCar.year = 2011),
    (myCar.old = fecha.getFullYear() - myCar.year),
    (myCar.rand = Math.random()),
    console.log(myCar);

  myNewArray.push(myCar.model, myCar.year);
  console.log(myNewArray);

  return myNewArray;
};

checked("chevrolet");


// El objeto Array

let arr = ["Andres", "liliana", "Daniel", "Katherine"];

console.log(arr);

let obj = {};
obj.prop = ["Andres", "liliana", "Daniel", "Katherine", "mama"];

for (let iterador in obj.prop);
console.log(obj.prop);

let dataInformation = {
  nombre: "Andres",
  edad: 34,
  sexo: "masculino",
};

for (let statement in dataInformation) {
  console.log(`${statement}: ${dataInformation[statement]}`);
}



// si se tiene un array de objetos

const array = [
  { id: 1, username: "Andres", apellido: "Rios" },
  { id: 2, username: "Liliana", apellido: "Rios" },
  { id: 3, username: "Daniel", apellido: "Rios" },
  { id: 4, username: "Katerine", apellido: "Avila" },
  { id: 5, username: "Luz", apellido: "Montoya" },
];

const ids = (idArray) => {
  const checkId = array.filter((x) => x.id > idArray);
  console.log(checkId);
  return checkId;
};

const checkNumber = () => {
  const hola2 = ids(3);
  if (hola2[0].apellido === "Avila" && hola2[0].id === 4) {
    return true;
  } else {
    return false;
  }
};
const printing = () => {
  const checkFinalResult = checkNumber();
  let suma;
  if (checkFinalResult === true) {
    suma = 3 - 2;
  } else {
    suma = 3 - 4;
  }
  console.log(suma);
  return suma;
};

printing();

*/
