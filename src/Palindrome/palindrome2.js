// que nececito para hacer un palindrome

// 1. un texto de entrada
// 2. necesito partir ese texto en dos mitades
// 3. necesito saber cual es la cantidad de letras en el array
// 4. necesito saber como se lee normal y de para atras
// 5. necesito comparar el texto
// 6. true or false as a answer.

const text = "123321";
const ta = text.length;
const half = ta / 2;

const palindrome = () => {
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[ta - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrome());
