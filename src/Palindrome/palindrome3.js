// TODO check a palindrome feature

const data = "ABCuiu";
const dataLength = data.length;
const half = dataLength / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (data[i] !== data[dataLength - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(palindrome());
