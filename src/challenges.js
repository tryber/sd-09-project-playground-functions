// Desafio 1
function compareTrue(booleanOne ,booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false ,false));

// Desafio 2
function calcArea(base ,height) {
  let area = ((base * height) / 2);
  return area;
}

console.log(calcArea(10 ,5));

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let str = array[array.length - 1] + ', ' + array[0];
  return str;
}

let arrayNames = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arrayNames));

// Desafio 5
function footballPoints(wins ,ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

console.log(footballPoints(5 ,3));

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
