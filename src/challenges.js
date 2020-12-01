// Challenge 1 - This function receives two booleans
// and returns true if both are true and false if not.
// By Pablo P Fernandes
function compareTrue(boolOne, boolTwo) {
  if (boolOne && boolTwo) {
    return true;
  }
  return false;
}

// Challenge Two - Triangle area
function calcArea(base, height) {
  return (base * height) / 2;
}

// Challenge Three - Split a sentence into an array
function splitSentence(sentence) {
  let words = [];
  let wordCharacters = '';
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === ' ' && index !== 0) {
      words.push(wordCharacters);
    } else {
      wordCharacters += sentence[index];
    }
  }
  return words;
}

// Challenge Four - Concatenation of strings
function concatName(stringArray) {
  let stringConcat = '';
  stringConcat = stringArray[Array.length - 1];
  stringConcat += ', ';
  stringConcat += stringArray[0];
  return stringConcat;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
