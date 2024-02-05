/* Apply this method with all type of data
- array
- Object
- String
- Number
 */


console.log("--- Practicing push");
const myArray = [1, 2, 3];
myArray.push(5, 7, 8);

console.log(myArray);

console.log("--- Practicing pop");
const myArrayPop = [1, 2, 3];
const usingPop = myArrayPop.pop();
console.log("The removed data is: " + usingPop);

console.log("--- Practicing shift");
const myArrayShift = [1, 2, 3];
const usingShift = myArray.shift();
console.log("The removed data is: " + usingShift);

console.log("--- Practicing unShift");
const myArrayUnshift = [1, 2, 3];
myArrayUnshift.unshift(34, 56);
console.log(myArrayUnshift);

console.log("--- Practicing find");
const myArrayFind = [1, 2, 3, 4, 5, 6];
const find = myArrayFind.find((num) => num > 2);
console.log(find);

console.log("--- Practicing slice");
const myArraySlice = [1, 2, 3, 4, 5, 6];
const newSliceData = myArraySlice.slice(2, 4);
console.log("--- slice: " + newSliceData);

console.log("--- Practicing map");
const myArrayMap = [1, 2, 3, 4, 5, 6];
const mapResult = myArrayMap.map((number) => number * 2);
console.log("map: " + mapResult);

console.log("--- Practicing reverse");
const myArrayReverse = [1, 2, 3, 4, 5, 6];
const checking = myArrayReverse.reverse();
console.log(checking);

console.log("--- Practicing reverse");
const myArrayConcat1 = [1, 2, 3, 4, 5, 6];
const myArrayConcat2 = [7, 8, 9];
const newArrayConcat = myArrayConcat1.concat(myArrayConcat2);
console.log("new concat: " + newArrayConcat);
