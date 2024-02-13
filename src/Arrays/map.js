/* Apply this method with all type of data
- array
- Object
- String
- Number
 */

import {family} from './data.js';

// practice 1
console.log("*** Practice1: Get any element using arrays to get this data;");
const names = family.map(name => name.firstName); 
console.log(names); 
// <-- Final part -->> 

// practice 2
console.log("*** Practice2: Get just one data;");
family[0].children === 0
  ? console.log(family[0].firstName)
  : console.log("No data to display");
// <-- Final part -->> 

// practice 3
console.log("*** Practice3: Getting the first data on the object;");
const firstData = family[0]; 
console.log(firstData.age);
// <-- Final part -->> 

// practice 4
console.log("*** Practice4: get the higher number;");
const ages = family.map(age => age.age); 
const sort = ages.sort((a, b) => a - b); 
const pop = sort.pop(); 
console.log("The higher number is: ", pop); 
// <-- Final part -->> 

// practice 5
console.log("*** Practice5: get person with higher ege;");
const getObject = family.find(a => a.age === pop); 
console.log(getObject); 
console.log("Person with higher age is: ", getObject.firstName, " with age: ", getObject.age); 
// <-- Final part -->> 

// practice 6
console.log("*** Practice6: get person with less children;");
const arrayChildren = family.map(a => a.children); 
const arrayLessNumber = arrayChildren.sort((a, b) => a - b); 
const lessNumber = arrayLessNumber.shift(); 
const gettingData = family.find(a => a.children === lessNumber); 
console.log("Person with less number of children is: ", gettingData.firstName, " with ", gettingData.children, " children");
// <-- Final part -->> 

// practice 7
// todo check how destructuring works in arrays and objects: 
// <-- Final part -->> 