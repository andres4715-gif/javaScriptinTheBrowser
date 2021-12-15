// Palindrome

/*
const text = prompt("Imput a value, can write letter or numbers: ");
const amount = text.length;
const div = amount / 2;
const functionChecked = checked(text);
console.log(functionChecked);

console.log(amount);

function checked() {
  for (let i = 0; i < div; i++) {
    if (text[i] !== text[amount - 1 - i]) {
      alert("it is not a Palindrome");
    }
  }
  alert("This is a Palindrome");
}


// palindrome re checking remember it:

const imputText = prompt("Please copy a text: ");
const textAmount = imputText.length;
const textAmountDivided = textAmount / 2;

const checkPalindrome = () => {
  for (let i = 0; i < textAmountDivided; i++) {
    if (imputText[i] !== imputText[textAmount - 1 - i]) {
      alert("This is not a palindrome");
    }
  }
  alert("This is a palindrome");
};

checkPalindrome();

*/

// palindrome re checking remember it:

const imputText = prompt("Please add any text: ");
const imputTextAmount = imputText.length;
const imputTextAmountdivided = imputTextAmount / 2;

const checkPalindrome2 = () => {
  for (let i = 0; i < imputTextAmountdivided; i++) {
    if (imputText[i] !== imputText[imputTextAmount - 1 - i]) {
      alert("This is not a palindrome");
      return false;
    }
  }
  alert("This is a palindrome");
  return true;
};

checkPalindrome2();
