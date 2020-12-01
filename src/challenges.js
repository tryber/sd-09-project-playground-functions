// PROJECT STARTED! #VQV

// Desafio 1
let result = true;
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  } return result;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 5));

// Desafio 3
let arraySentence = [];
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLast) {
  let result = [];
  result = firstAndLast[firstAndLast.length - 1] + ', ' + firstAndLast[0];
  return result;
}
console.log(concatName(['Fernanda', 'Cajueiro', 'Machado']));

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
