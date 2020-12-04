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

  for (let index = 0; index < array.length; index += 1) {
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz'
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz'
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz'
    } else {
      array[index] = 'bug!'
    }
  }
  return array
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
