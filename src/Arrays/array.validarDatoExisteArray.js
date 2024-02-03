let index2;
const myArray = ["Andres", "Sebastian", "Carlos"];

const checkNames = () => {
  myArray.push("noa");
  console.log("The array is: ", myArray.length);
  index2 = myArray.find((element) => element === "Sebastian");
  if (index2 === "Sebastian") {
    console.log("this is the name that I need");
  }
};

checkNames();
