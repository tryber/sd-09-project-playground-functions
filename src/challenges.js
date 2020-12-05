// Desafio 1

function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
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
function highestCount(param) {
  let major = 0;
  let countMajor = 0;
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] > major) {
      major = param[index]
      countMajor = 1
    } else if (param[index] === major) {
      countMajor += 1
    }
  }
  return countMajor
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distaceCatOne = Math.abs(mouse - cat1);
  let distaceCatTwo = Math.abs(mouse - cat2);
  if (distaceCatOne < distaceCatTwo) {
    return 'cat1'
  } else if (distaceCatTwo < distaceCatOne) {
    return 'cat2'
  } else {
    return 'Os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(arr) {
  let result = []
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      result.push('fizzBuzz')
    } else if (arr[index] % 3 === 0) {
      result.push('fizz')
    } else if (arr[index] % 5 === 0) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  }
  return result
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
