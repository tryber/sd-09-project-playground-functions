// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let newString = '';
  for (index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      newString = newString + sentence[index];
    }
    if (sentence[index] === ' ' && newString !== '') {
      arrayStrings.push(newString);
      newString = '';
    }
  }
  if (newString !== '') {
    arrayStrings.push(newString);
  }
  return arrayStrings;
}

// Desafio 4
function concatName(stringsArray) {
  let stringDone = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
  return stringDone;
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
function fizzBuzz([arrayNumbers]) {
}
  /*let novaArray = [];
  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 == 0) {
      novaArray.replace('fizz');
    } else if (arrayNumbers[index] % 5 == 0) {
      console.log('buzz');
    } else if (arrayNumbers[index] % 15 == 0) {
      console.log('fizzBuzz');
    } else {
      console.log('bug!');
    }
  */

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
