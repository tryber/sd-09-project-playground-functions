// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  } return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(sentence) {
  let arrayOfSentence = [];
  let wordBeingFormed = '';

  for (let index = 0; index <= sentence.length; index += 1) {
    if (sentence[index] === ' ' || sentence[index] === '') {
      arrayOfSentence.push(wordBeingFormed)
      wordBeingFormed = ('')
    } else {
      wordBeingFormed += sentence[index]
    }
  } return arrayOfSentence
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]},  ${array[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumberOfArray;
  let highestNumberCount = 0;
  for (let index = 1; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] >= arrayOfNumbers[index - 1]) {
      highestNumberOfArray = arrayOfNumbers[index]
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === highestNumberOfArray) {
      highestNumberCount ++
    }
  } return highestNumberCount
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
