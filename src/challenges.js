// Desafio 1
function compareTrue(value1, value2) {
  value1 = true;
  value2 = true;
  
  return value1 && value2  
}

// Desafio 2
function calcArea(base, height) {
  let quadrilateralArea = base * height;
  let triangleArea = quadrilateralArea / 2;
  
  return triangleArea
}

// Desafio 3
function splitSentence(anyStringLiteral) {
  let arrayStrings = anyStringLiteral.split(" ");

  return arrayStrings
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastFirstValues = arrayOfStrings[arrayOfStrings.length - 1] + ", " + arrayOfStrings[0];
  
  return lastFirstValues
}

// Desafio 5
function footballPoints(wins, ties) {
  
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
