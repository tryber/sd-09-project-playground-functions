// Desafio 1
function compareTrue(bol1, bol2) {
  // seu código aqui
  if (bol1 && bol2) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringArray = []
  stringArray = string.split(' ')
  return stringArray
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  let firstItem = stringArray.shift()
  let lastItem = stringArray.pop()
  let stringConcat = `${lastItem}, ${firstItem}`
  return stringConcat
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties
  return points
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = 0
  let quantidade = 0

  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) {
      maior = array[index]
      quantidade = 1
    } else if (array[index] === maior) {
      quantidade += 1
    }
  }
  return quantidade
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

highestCount()

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
