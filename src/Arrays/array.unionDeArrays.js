// Uniendo varios arrays:

const array1 = [1, 2, 3];

const myArray1 = () => {
  return array1;
};

const array2 = [4, 5, 6];

const myArray2 = () => {
  return array2;
};

const unionDeArrays = () => {
  const uno = myArray1();
  const dos = myArray2();

  const union = [...uno, ...dos];
  return union;
};

let checkingData = unionDeArrays();
console.log(checkingData);
