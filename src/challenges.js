// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean === true && secondBoolean === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let text = string.split(' ');
  return text;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  function ordenaNum(a, b) {
    return a - b;
}
  array.sort(ordenaNum);
  return array


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
