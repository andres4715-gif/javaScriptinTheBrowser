// Palindrome

// 1 initial text
// read the first text forward
// read the first text backware
// compare this text

const initialText = "ABCCBA";
const itextNumber = initialText.length;
const half = itextNumber / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (initialText[i] !== initialText[itextNumber - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome());
