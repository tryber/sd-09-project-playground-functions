// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true
  } else {
    return false 
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area 
}

// Desafio 3
function splitSentence(string) {
    let stringSplit = string.split(' ')
    return stringSplit
}

// Desafio 4
function concatName(array) {
  let newString =`${array[array.length - 1]}, ${array[0]}`
    return newString
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3
  let pontosEmpates = ties * 1
  let pontosTotais = pontosVitorias + pontosEmpates
  return pontosTotais
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
