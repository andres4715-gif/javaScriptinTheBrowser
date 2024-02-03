// TODO Checking palindrome feature

const inputText = prompt("Please copy any text:");

const checkAmount = (text) => {
  const amount = text.length;
  return amount;
};

const half = (text) => {
  const gettingHalfValue = text.length / 2;
  return gettingHalfValue;
};

const palindrome = (text) => {
  const half1 = half(text);
  const totalAmount = checkAmount(text);
  for (let i = 0; i < half1; i++) {
    if (text[i] !== text[totalAmount - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(palindrome(inputText));
