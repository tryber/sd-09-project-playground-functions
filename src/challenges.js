// Desafio 1
function compareTrue(value1, value2) {
  let compare = value1 && value2;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(arrayNames) {
  let phrase = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let counter = 0;
  let highestNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (highestNumber < arrayNumbers[index]) {
      highestNumber = arrayNumbers[index];
      counter = 0;
    }
    if (arrayNumbers[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([2, 3, 1, 3, 3, 1, 3, 5]));
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
