// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// let area = calcArea(4, 7)
// console.log(area)

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`
}
// console.log(concatName(['Long', 'live', 'trybers']))

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins *= 3) + ties
  return score
}
// console.log(footballPoints(5, 4))

// Desafio 6
function highestCount(recive) {
  // seu código aqui
  let highest = -1;
  let count = 0;
  for (let index in recive) {
    if (recive[index] > highest) {
      highest = recive[index];
      return highest
    }
  }
  for (let index in recive) {
    if (recive[index] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numberRecept) {
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
