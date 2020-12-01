// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let phraseString = phrase;
  let result = phraseString.split(' ');

  return result;
}

// Desafio 4
function concatName(array) {
  // seu código aquig
  let saveArray = array;
  let result = saveArray.split(' ');

  return (result[0], result[(result.length - 1)]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalNumber = ((wins * 3) + ties);

  return totalNumber;
}

// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let number1 = arrayNumber[0];
  let number2 = 0;
  let result = 0;
  for (let count = 0; count < arrayNumber.length; count += 1) {
    number2 = arrayNumber[count];
    if (number2 > number1) {
      number1 = number2;
    }
  }
  for (count = 0; count < arrayNumber.length; count += 1) {
    if (number1 === arrayNumber[count]) {
      result += 1;
    }
  }
  return result;
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
