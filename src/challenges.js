// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  let result = []
  result = frase.split(' ')
  return result
}

// Desafio 4
function concatName(name) {
  return name[name.length - 1] + ", " + name[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(highestCount) {
  let highestrepeat = -999999999
  for (let index = 0; index < highestCount.length; index += 1) {
    repeat = 0
    for (let position = 0; position < highestCount.length; position += 1) {
      if (highestCount[index] == highestCount[position]) {
        repeat += 1
      }
    }
    if (repeat > highestrepeat) {
      highestrepeat = repeat
    }
  }
  return highestrepeat
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
