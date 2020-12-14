// Desafio 1
function compareTrue(today, date) {
  // seu código aqui
  if (today === true && date === true){
    return true;} 
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return( base * heigth ) /2;
}
// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  return phrase.split (" ");
}
// Desafio 4
function concatName(sArray) {
  // seu código aqui
  let backString = sArray[sArray.length - 1] + ',' + sArray[0];
  return backString; 
}
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
