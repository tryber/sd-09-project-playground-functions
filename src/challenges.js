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
  const lastValue = `${value[value.length - 1]},`
  newArray.push(lastValue)
  const firstValue = `${value[0]}`
  newArray.push(firstValue)
  return newArray.join(' ')
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(valueArray) {
  const maxValue = valueArray.sort()[valueArray.length - 1]
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
  const mouseCat1Distance = Math.abs(cat1 - mouse)
  const mouseCat2Distance = Math.abs(cat2 - mouse)
  if (mouseCat1Distance < mouseCat2Distance) {
    return 'cat1'
  } else if (mouseCat2Distance < mouseCat1Distance) {
    return 'cat2'
  } else if (mouseCat1Distance === mouseCat2Distance) {
    return 'os gatos trombam e o rato foge'
  }
  return 'fails'
}

function selectFizzBuzz(value) {
  if (value % 3 === 0 && value % 5 !== 0) {
    return 'fizz'
  } else if (value % 5 === 0 && value % 3 !== 0) {
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

function parse(value) {
  if (value === 'a') {
    return 1
  } else if (value === 'e') {
    return 2
  } else if (value === 'i') {
     return 3
  } else if (value === 'o') {
    return 4
  } else if (value === 'u') {
    return 5
  }
  return value
}

function unparse(value) {
  if (value === '1') {
    return 'a'
  } else if (value === '2') {
    return 'e'
  } else if (value === '3') {
    return 'i'
  } else if (value === '4') {
    return 'o'
  } else if (value === '5') {
    return 'u'
  }
  return value
}



// Desafio 9
function encode(value) {
  let valueArr = value.split('')
  for (let i = 0; i < valueArr.length; i += 1) {
    valueArr[i] = parse(valueArr[i])
  }
  return valueArr.join('')
}
function decode(value) {
  let valueArrDecode = value.split('')
  for (let i = 0; i < valueArrDecode.length; i += 1) {
    valueArrDecode[i] = unparse(valueArrDecode[i])
  }
  return valueArrDecode.join('')
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
