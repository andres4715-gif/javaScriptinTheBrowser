/* Apply this method with all type of family
- array
- Object
- String
- Number
 */

import { family } from "../../data/data.js";
import { setting } from "../../data/settings.js";

// practice 1
console.log("*** Practice1: Get any element using arrays to get this family;");
const names = family.map((name) => name.firstName);
console.log(names);
// <-- Final part -->>

// practice 2
console.log("*** Practice2: Get just one family;");
family[0].children === 0
  ? console.log(family[0].firstName)
  : console.log("No family to display");
// <-- Final part -->>

// practice 3
console.log("*** Practice3: Getting the first family on the object;");
const firstFamily = family[0];
console.log(firstFamily.age);
// <-- Final part -->>

// practice 4
console.log("*** Practice4: get the higher number;");
const ages = family.map((age) => age.age);
const sort = ages.sort((a, b) => a - b);
const pop = sort.pop();
console.log("--- The higher number is: ", pop);
// <-- Final part -->>

// practice 5
console.log("*** Practice5: get person with higher ege;");
const getObject = family.find((a) => a.age === pop);
console.log(getObject);
console.log(
  "--- Person with higher age is: ",
  getObject.firstName,
  " with age: ",
  getObject.age
);
// <-- Final part -->>

// practice 6
console.log("*** Practice6: get person with less children;");
const arrayChildren = family.map((a) => a.children);
const arrayLessNumber = arrayChildren.sort((a, b) => a - b);
const lessNumber = arrayLessNumber.shift();
const gettingFamily = family.find((a) => a.children === lessNumber);
console.log(
  "--- Person with less number of children is: ",
  gettingFamily.firstName,
  " with ",
  gettingFamily.children,
  " children"
);
// <-- Final part -->>

// practice 7
console.log("*** Destructuring;");
const getWoman = family.filter((a) => a.gender === "F");
console.log("--- The obtained woman is: ", getWoman);
const { firstName, gender, age } = getWoman[0];
console.log(
  "--- The woman name is, ",
  firstName,
  " with gender: ",
  gender,
  " and ",
  age,
  " years old"
);
// <-- Final part -->>

// practice 8
console.log("*** Practice8: Get the sum of the ages;");
const getAge = family.map((a) => a.age);
console.log(getAge);
const getFamilyAge = getAge.reduce((cct, item) => {
  return (cct = cct + item);
}, 0);
console.log("--- The sum of the ages: ", getFamilyAge);
// <-- Final part -->>

// practice 8
console.log("*** Practice9: Get result for gender;");
const getGender = family.filter((a) => a.gender === "M");
console.log("--- The man of the family are: ", getGender);
const getNamesWithNames = getGender.map((a) => a.firstName);
console.log(getNamesWithNames);
const join = getNamesWithNames.join(", ");
console.log("--- The men of the family are:", join);
// <-- Final part -->>

// settings
const changeStatusEnableSettings = setting => {
  setting.value = "false";
  return setting
}

const filterEnableSetting = setting => {
return setting.value === "true";
}

const changeProperty = setting.filter(filterEnableSetting).map(changeStatusEnableSettings);
console.log(changeProperty);

