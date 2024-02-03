function validatePalin(word) {
  // get the total length of the words
  console.log("The word is: " + word);
  const len = word.length;
  const divideWord = word.length / 2;
  console.log("la mitad del dato ingresado es: " + divideWord);
  alert("The characters number is: " + len);

  // Use for loop to divide the words into 2 half
  for (let i = 0; i < divideWord; i++) {
    // validate the first and last characters are same
    if (myWord[i] !== myWord[len - 1 - i]) {
      alert("It is not a palindrome");
    }
  }
  alert("It is a palindrome");
}

// accept the string or number from the prompt

const myWord = prompt("Enter a string or number: ");

const value = validatePalin(myWord);

console.log(value);
