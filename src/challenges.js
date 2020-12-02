// Desafio 1
function compareTrue( value1 , value2 ) {
  if ( value1 === true && value2 === true ) {
      return true;
}
      return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}
console.log(calcArea(4, 5));

// Desafio 3
function splitSentence(stringArray) {
  for (var index = 0; index < stringArray.length; index += 1){
      var splitText = stringArray.split(" ")
      return splitText;
  }
}
console.log(splitSentence('Go trybe'));


// Desafio 4
function concatName() {
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}
console.log(footballPoints(6, 6))

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
