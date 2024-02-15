/* Apply this method with all type of data
- array
- Object
- String
- Number
 */

import { savings } from "../../data/object.js";

// practice 1
console.log("*** filter1;");
const adults = savings.brothers.filter((a) => a.age > 18);
console.log(adults);
const check = savings.status === "Active" ? true:false;
console.log("Availability service:", check); 
adults.forEach(a => {
    console.log("- Name:", a.firstName, a.lastName, "with age ", a.age);
});

// otra forma de tener los datos y en esta parte se crea un nuevo array con datos 
// enviar a un servidor o algo. 

const results = [];
adults.forEach((adult) => {
    const result = {
        name: adult.firstName + " " + adult.lastName,
        age: adult.age
    };
    results.push(result);
});
console.log(results)
// <-- Final part -->>