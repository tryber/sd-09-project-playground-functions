// PROJECT 2 - playground functions

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// let ana = true
// let luiza = false
// console.log(compareTrue(ana, luiza));
// --------------------------------------------------------------------

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// console.log(calcArea(5,4));
// --------------------------------------------------------------------

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Outro jeito de resolver o desafio 3: 
function splitSentence(string) {
  let stringArray = [];
  let temporary = '';
  for (let key in string){
    if (string[key] === ' ') {
      stringArray.push(temporary);
      temporary = '';
    } else {
      temporary += string[key]; 
    }
  }
  stringArray.push(temporary);
  return stringArray;
}

// console.log(splitSentence('Go Trybe'));
// --------------------------------------------------------------------

// Desafio 4
function concatName(stringArray) {
  let concatenatedName = (`${stringArray[stringArray.length - 1]},  ${stringArray[0]}.`);
  return concatenatedName;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// --------------------------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 0;
  totalPoints += wins * 3;
  totalPoints += ties;
  return totalPoints;
}

// console.log(footballPoints(5, 3));
// --------------------------------------------------------------------

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
