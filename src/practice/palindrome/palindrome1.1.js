// this is my practice for palindrome feature

const text = "123321";
const amountComplete = text.length;
const half = amountComplete / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[amountComplete - 1 - i]) {
      return false;
    }
    return true;
  }
};

console.log(`Is it a palindrome?: ${palindrome()}`);
