// practice 1: 
const array = [1, 2, 3, 4]; 
const array2 = [10, 20, 30, 40]; 

console.log("*** Practice1 Map() - No Mutable:");
const newArrayAfterMap = array.map((ele) => ele + 2);
console.log("--- Map Result:", newArrayAfterMap); 
// <-- Final part -->> 

// practice 2
console.log('*** Practice2 Filter() - No Mutable:'); 
const newArrayFilterResult = array.filter(e => e > 2); 
console.log("--- Filter result: ", newArrayFilterResult);
// <-- Final part -->> 

// practice 3
console.log('*** Practice3 Union():');
const newArrayUnion = [...array, ...array2]; 
console.log("--- Union: ", newArrayUnion);
// <-- Final part -->> 

// practice 4
console.log('*** Practice4 Push() - Mutable:');
array.push(5, 6, 7, 8); 
console.log("--- The new array after adding the new element is: ", array); 
console.log("--- New original array: ", array); 
// <-- Final part -->> 

// practice 5
console.log('*** Practice4 Pop() - Mutable:');
const getLastPositionValue = array.pop();
console.log("--- The last data on the array is: ", getLastPositionValue); 
console.log("The new original array after apply Pop Method is: " , array); 
// <-- Final part -->> 

// practice 6
console.log('*** Practice4 Shift() - Mutable;');
const getTheFirstValueOnTheArray = array.shift(); 
console.log("--- The first value on the array is: ", getTheFirstValueOnTheArray); 
console.log("The new original array after apply Pop Method is: " , array); 
// <-- Final part -->> 

// practice 7
// <-- Final part -->> 

// practice 8
// <-- Final part -->> 

// practice 9
// <-- Final part -->> 

// practice 10
// <-- Final part -->> 
