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
    if (sentence[index] === ' ' || index === sentence.length) {
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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = cat1 - mouse;
  let distanciaCat2Mouse = cat2 - mouse;
  if (distanciaCat1Mouse < distanciaCat2Mouse) {
    return 'cat1'
  } else if (distanciaCat1Mouse == distanciaCat2Mouse) {
    return 'Os 2 gatos estão equidistantes do rato'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let arrayOfStrings = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings.push('fizzBuzz');
    } else if (arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings.push('buzz')
    } else if (arrayOfNumbers[index] % 3 === 0) {
      arrayOfStrings.push('fizz')
    } else {
      arrayOfStrings.push('bug!')
    }
  } return arrayOfStrings
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
