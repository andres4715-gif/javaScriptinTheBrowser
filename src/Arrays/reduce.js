// checking. 

import { family } from "../../data/data.js";

const names = family.map(a => a.firstName); 
console.log(names);

const moreMoney = family.map(a => {
    a.savings += 20;
    return a;  
})
console.log(moreMoney);
