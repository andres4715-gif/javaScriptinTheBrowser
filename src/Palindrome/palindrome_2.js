// Palindrome

const text = "anddng";
const amountText = text.length;
const half = amountText / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[amountText - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome());
