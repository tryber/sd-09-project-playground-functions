// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 5));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
let arrayString = ['Valdeci', 'Lucas', 'Jean', 'Paolillo', 'Patricia'];

function concatName(arrayString) {
return `${arrayString[arrayString.length-1]}, ${arrayString[0]}`;
}  
console.log(concatName(arrayString));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsMatchWins = 3;
  let pointsMatchTies = 1;
  wins = wins * pointsMatchWins;
  ties = ties * pointsMatchTies;
  return wins + ties;
}
console.log(footballPoints(5, 5));

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
