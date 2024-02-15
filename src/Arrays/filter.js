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
adults.forEach((data, index) => {
    console.log("Adult:",  index + 1, "- ", data.firstName, data.lastName, "with age ", data.age);
});