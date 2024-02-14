import { myJSON } from "../../data/json.js";

// Using MAP: 
console.log("--- USING MAP: ");
const working = myJSON;
const abilities = working.abilities;
const map = abilities.map((a) => a.ability.name);
console.log(map);

// Using forEach: 
console.log("--- USING FOREACH: ");
let myNewArray = [];
const checkForEach = abilities.forEach((a) => myNewArray.push(a.ability.name));
console.log(myNewArray); 
