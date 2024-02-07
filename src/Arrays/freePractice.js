// practice 1: 
const array = [1, 2, 3, 4]; 
const array2 = [10, 20, 30, 40]; 
const array3 = [1, 56, 67, 87, 4, 3]
const array4 = [5, 5, 7]

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
console.log('*** Practice5 Pop() - Mutable:');
const getLastPositionValue = array.pop();
console.log("--- The last data on the array is: ", getLastPositionValue); 
console.log("The new original array after apply Pop Method is: " , array); 
// <-- Final part -->> 

// practice 6
console.log('*** Practice6 Shift() - Mutable;');
const getTheFirstValueOnTheArray = array.shift(); 
console.log("--- The first value on the array is: ", getTheFirstValueOnTheArray); 
console.log("The new original array after apply Pop Method is: " , array); 
// <-- Final part -->> 

// practice 7
console.log('*** Practice7 find() - No Mutable;');
const getTheFirstElement = array3.find(findE => findE > 3); 
console.log("--- The first element on the array after applying find() is: " , getTheFirstElement); 
// <-- Final part -->> 

// practice 8
console.log('*** Practice8 some() - No Mutable;');
const getTrueOrFalse = array2.some(someEle => someEle > 50);
console.log('--- The array contains the element true or false: ', getTrueOrFalse);  
// <-- Final part -->> 

// practice 9
console.log('*** Practice9 every() - No Mutable;');
const checkEvery = array4.every(findEvery => findEvery + 2 === 7); 
console.log("--- Every element on the array has the same result: ", checkEvery); 
// <-- Final part -->> 

// practice 10
console.log('*** Practice10 sort() - string - Mutable;');
const fruits = ["Apple", "Orange", "Melon", "Banana"]; 
fruits.sort(); 
console.log("--- The sorted fruits: ", fruits); 
// <-- Final part -->> 

// practice 11
console.log('*** Practice11 sort() - numbers - Mutable;');
const arr = [40, 1, 15, 200, 2];
arr.sort((a, b) => a - b);
console.log("--- Sorted number by function: ", arr);
// <-- Final part -->> 

// practice 12
console.log('*** Practice12 backward sort() - numbers - Mutable;');
const myArray2 = [1, 4, 200, 3000]; 
const result2 = myArray2.sort((a, b) => b - a); 
console.log("--- The backward sort array is:", result2); 
// <-- Final part -->> 

// practice 13
console.log('*** Practice13 includes()- No Mutable;');
const content = [1, 3, 5, 67, 76, 9]; 
const myResponse = content.includes("Andres"); 
const myResponse2 = content.includes(9); 
console.log("--- The array includes the element?: ", myResponse, " and include de second data?: ", myResponse2);
// <-- Final part -->> 

// practice 14
// <-- Final part -->> 

// practice 15
// <-- Final part -->> 

// practice 16
// <-- Final part -->> 

// practice 17
// <-- Final part -->> 

// practice 18
// <-- Final part -->> 

// practice 19
// <-- Final part -->> 

// practice 20
// <-- Final part -->> 

