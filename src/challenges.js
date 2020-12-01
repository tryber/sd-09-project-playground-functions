/*
Projeto 2 - Playground Functions!

Tiago Yoneda
https://github.com/tiago-yoneda
*/

// Desafio 1
function compareTrue(bool1, bool2) {
  return ( bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(arraySource) {
  let newArray = arraySource.split(' ');
  return newArray;
}

// Desafio 4
function concatName(arraySource) {
  let newArray = [];
  newArray.push(arraySource[arraySource.length-1],arraySource[0]);
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins+ties);
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
