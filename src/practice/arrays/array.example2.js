// examples array 2

const myArray = [1, 2, 3, 4, 5, 6];

const array1 = () => {
  return myArray;
};

const myArray2 = [7, 8, 9, 10, 11, 12];

const array2 = () => {
  return myArray2;
};

const union = () => {
  const leyedoMyArray1 = array1();
  const leyedoMyArray2 = array2();
  const uniendo = [...leyedoMyArray1, ...leyedoMyArray2];
  return uniendo;
};

console.log(union());
