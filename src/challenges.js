// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(value) {
  return value.split(' ')
}

// Desafio 4
function concatName(value) {
  const newArray = []
  newArray.append(value[value.length - 1])
  newArray.append(value[0])
  return newArray.join(' ')
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(valueArray) {
  const maxValue = valueArray.sort()
  let count = 0
  for (let i = 0; i < valueArray.length; i += 1) {
    if (valueArray[i] === maxValue) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1'
  } else if ((cat2 - mouse) < (cat1 - mouse)) {
    return 'cat2'
  } else if ((mouse - cat1) === (mouse - cat2)) {
    return 'os gatos trombam e o rato foge'
  }
  return 'fails'
}

function selectFizzBuzz(value) {
  if (value % 3 === 0) {
    return 'fizz'
  } else if (value % 5 === 0) {
      return 'buzz'
  } else if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz'
  }
  return 'bug!'
}

// Desafio 8
function fizzBuzz(valueArray) {
  const resultArray = []
  for (let i = 0; i < valueArray.length; i += 1) {
    resultArray.push(selectFizzBuzz(valueArray[i]))
  }
  return resultArray
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
