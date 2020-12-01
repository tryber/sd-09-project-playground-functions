// Desafio 1
function compareTrue(boolean1 , boolean2) {
  if (boolean1 && boolean2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base , height) {
  let result = (base * height) / 2
  return console.log(result)
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" " , )
  return console.log(array)
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins , ties) {
  let result = (wins *3) + ties
  console.log(result)
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
