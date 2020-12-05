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
  return `${array[array.length - 1]}, ${array[0]}`
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
  } else if (distanciaCat1Mouse > distanciaCat2Mouse) {
    return 'cat2'
  } return 'os gatos trombam e o rato foge'
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
function encode(stringToEncode) {
  let encodedString = '';
  for (let index = 0; index < stringToEncode.length; index += 1) {
    if (stringToEncode[index] === 'a') {
      encodedString += 1
    } else if (stringToEncode[index] === 'e') {
      encodedString += 2
    } else if (stringToEncode[index] === 'i') {
      encodedString += 3
    } else if (stringToEncode[index] === 'o') {
      encodedString += 4
    } else if (stringToEncode[index] === 'u') {
      encodedString += 5
    } else {
      encodedString += stringToEncode[index]
    }
  } return encodedString
}

function decode(stringToDecode) {
  let decodedString = '';
  for (let index = 0; index < stringToDecode.length; index += 1) {
    if (stringToDecode[index] === '1') {
      decodedString += 'a'
    } else if (stringToDecode[index] === '2') {
      decodedString += 'e'
    } else if (stringToDecode[index] === '3') {
      decodedString += 'i'
    } else if (stringToDecode[index] === '4') {
      decodedString += 'o'
    } else if (stringToDecode[index] === '5') {
      decodedString += 'u'
    } else {
      decodedString += stringToDecode[index]
    }
  } return decodedString
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
