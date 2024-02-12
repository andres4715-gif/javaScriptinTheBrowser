/* Apply this method with all type of data
- array
- Object
- String
- Number
 */

const data = [
    {
        firstName: "Andres",
        lastName: "Rios", 
        age: 42, 
        children: 0, 
        phone: 9898787654, 
    }, 
    {
        firstName: "Daniel",
        lastName: "Rios", 
        age: 36, 
        children: 2, 
        phone: 123123123, 
    }, 
    {
        firstName: "Liliana",
        lastName: "Rios", 
        age: 48, 
        children: 1, 
        phone: 123456786, 
    }
]

// practice 1
console.log("*** Practice1: Get any element using arrays to get this data;");
const names = data.map(name => name.firstName); 
console.log(names); 
// <-- Final part -->> 

// practice 2
console.log("*** Practice2: Get just one data;");
data[0].children === 0
  ? console.log(data[0].firstName)
  : console.log("No data to display");
// <-- Final part -->> 

// practice 3
console.log("*** Practice3: Getting the first data on the object;");
const firstData = data[0]; 
console.log(firstData.age);
// <-- Final part -->> 

// practice 4
console.log("*** Practice4: get the higher number;");
const ages = data.map(age => age.age); 
const sort = ages.sort((a, b) => a - b); 
const pop = sort.pop(); 
console.log("The higher number is: ", pop); 
// <-- Final part -->> 

// practice 5
console.log("*** Practice5: get person with higher ege;");
const getObject = data.find(a => a.age === pop); 
console.log(getObject); 
console.log("Person with higher age is: ", getObject.firstName, " with age: ", getObject.age); 
// <-- Final part -->> 

// practice 5
console.log("*** Practice6: get person with less children;");
const arrayChildren = data.map(a => a.children); 
const arrayLessNumber = arrayChildren.sort((a, b) => a - b); 
const lessNumber = arrayLessNumber.shift(); 
const gettingData = data.find(a => a.children === lessNumber); 
console.log("Person with less number of children is: ", gettingData.firstName, " with ", gettingData.children, " children");
// <-- Final part -->> 