// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(30, 20));

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = (string.split(' '));
  return array
}
console.log(splitSentence('Vamos nessa'));

// Desafio 4
function concatName(array) {
  let firstAndLast = '';
  for (let index = 0; index <= array.length; index += 1) {
    firstAndLast = array[index - 1] + ' ' + array[0];
  }
  return firstAndLast;
}
console.log(concatName(['Roberta', 'Julia', 'João', 'Maria', 'Marcos']));

// Desafio 5
function footballPoints(wins, ties) {
  let gameWins = wins * 3;
  let gameTies = ties * 1;
  let totalOfPoints = gameWins + gameTies;
  return totalOfPoints;
}
console.log(footballPoints(5, 5));

// Desafio 6
function highestCount(array) {
  let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] === bigger) {
      number += 1;
    }
  }
 return number;
}
let array = [9, 1, 2, 3, 9, 10, 5, 7]
console.log(highestCount(array));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = '';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result += 'fizzBuzz ';
    } else if (arrayNumbers[index] % 5 === 0) {
      result += 'buzz ';
    } else if (arrayNumbers[index] % 3 === 0) {
      result += 'fizz ';
    } else {
      result += 'bug! ';
    }
  }
  return result;
}
// let arrayNumbers = [2, 15, 7, 9, 45]
// console.log(fizzBuzz(arrayNumbers))

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
