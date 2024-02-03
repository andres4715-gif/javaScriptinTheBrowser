// practice 1

const myArray1 = [1, 2, 3, 4, 5, 6];
const myArray2 = [7, 8, 9, 10, 11, 12];
const myArray3 = [5, 6, 7, 8]; 


const array1 = () => {
  return myArray1;
};

const array2 = () => {
  return myArray2;
};

const union = () => {
  const leyedoMyArray1 = array1();
  const leyedoMyArray2 = array2();
  const uniendo = [...leyedoMyArray1, ...leyedoMyArray2];
  return uniendo;
};
console.log("Practica 1");
console.log(union());

// ____________________

// practice 2

const laUnion = [...myArray1, ...myArray2, ...myArray3]; 
console.log("Practica 2");
console.log(laUnion); 

// ____________________

// practice 3



// ____________________

