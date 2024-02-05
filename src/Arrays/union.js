/* Apply this method with all type of data
- array
- Object
- String
- Number
 */

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
console.log("\nPractica 1\n");
console.log(union());
// <-- Final part -->> 

// practice 2
const laUnion = [...myArray1, ...myArray2, ...myArray3]; 
console.log("\nPractica 2\n");
console.log(laUnion); 
// <-- Final part -->> 

// practice 3
// <-- Final part -->> 

