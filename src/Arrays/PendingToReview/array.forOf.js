// for of
function forOf() {
  let sum = 0;
  let numbers2 = [10, 20, 30];

  for (let i of numbers2) {
    sum += i;
  }
  return sum;
}

console.log(`The addition result is: ${forOf()}`);
