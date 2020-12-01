
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  let area = ( base * altura )/ 2;
  return area
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
let contagemWins = 0;
let contagemTies = 0;
let valorTotal = 0;
function footballPoints(wins, ties) {
  for (cont = 0; cont < wins; cont += 1) {
    contagemWins += 3
  }
  for (index = 0; index < ties; index += 1) {
    contagemTies += 1
  }
  valorTotal = contagemWins + contagemTies;
  return valorTotal
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
