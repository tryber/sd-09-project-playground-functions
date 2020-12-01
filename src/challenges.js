// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if(value1 && value2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' '
  let stringSeparated = string.split(separator);
  return stringSeparated;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return arrayStrings[arrayStrings.length -1] +  ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties
  return result
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
