// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true
  }
  return false
}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  base = Number(base)
  height = Number(height)
  return (base * height) / 2
}
// console.log(calcArea(5, 98))

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ')
}
// console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(myArray) {
  // seu código aqui
  let firstElement = myArray[0]
  let lastElement = myArray[myArray.length - 1]
  return `${lastElement}, ${firstElement}`
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // win = 3 & tie = 1
  let totalPoints = Number()
  totalPoints = (wins * 3) + ties
  return totalPoints
}
// console.log(footballPoints(3, 2))

// Desafio 6
function numberCounter(array) {
  const repetitionArray = []
  for (let element of array) {
    let counter = 0
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1) {
      if (element === array[arrayIndex]) {
        counter += 1
      }
    }
    repetitionArray.push(counter)
  }
  return repetitionArray
}

function highestCount(array) {
  // seu código aqui
  const repetitionArray = numberCounter(array)
  let greatest = 0
  for (let element of repetitionArray) {
    if (element > greatest) {
      greatest = element
    }
  }

  // return array[repetitionArray.indexOf(greatest)]
  // Retorna o elemento que mais se repete no array

  return greatest
}
// console.log(highestCount([9, 3, 3, 3, 9, 9, 9]))

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let diffCat1 = Math.abs(mouse - cat1)
  let diffCat2 = Math.abs(mouse - cat2)

  if (diffCat1 === diffCat2) {
    return 'os gatos trombam e o rato foge'
  } else if (diffCat1 > diffCat2) {
    return 'cat2'
  }
  return 'cat1'
}
// console.log(catAndMouse(-4, -5, -6))

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  const myArray = []
  for (let element of array) {
    if (element % 3 === 0 && element % 5 === 0) {
      myArray.push('fizzBuzz')
    } else if (element % 3 === 0) {
      myArray.push('fizz')
    } else if (element % 5 === 0) {
      myArray.push('buzz')
    } else {
      myArray.push('bug!')
    }
  }
  return myArray
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(str) {
  // seu código aqui
  let encodingString = ''
  for (let element of str) {
    if (element === 'a') {
      encodingString += '1'
    } else if (element === 'e') {
      encodingString += '2'
    } else if (element === 'i') {
      encodingString += '3'
    } else if (element === 'o') {
      encodingString += '4'
    } else if (element === 'u') {
      encodingString += '5'
    } else {
      encodingString += element
    }
  }
  return encodingString
}
// console.log(encode('hi there!'))

function decode(str) {
  // seu código aqui
  let decodingString = ''
  for (let element of str) {
    if (element === '1') {
      decodingString += 'a'
    } else if (element === '2') {
      decodingString += 'e'
    } else if (element === '3') {
      decodingString += 'i'
    } else if (element === '4') {
      decodingString += 'o'
    } else if (element === '5') {
      decodingString += 'u'
    } else {
      decodingString += element
    }
  }
  return decodingString
}
// console.log(decode('h3 th2r2!'))

// Desafio 10
function techList(array, name) {
  // seu código aqui
  array = array.sort()
  let myArray = []
  for (let element of array) {
    let object = {}
    object.tech = element
    object.name = name
    myArray.push(object)
  }
  return myArray
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Neves'))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let isTriangle = false
  if (lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC) {
    isTriangle = true
    return isTriangle
  } else if (lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC) {
    isTriangle = true
    return isTriangle
  } else if (lineC > Math.abs(lineA - lineB) && lineC < lineA + lineB) {
    isTriangle = true
    return isTriangle
  }
  return isTriangle
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let waterGlasess = str.split(/\D/g).join('')
  let sum = 0
  for (let items of waterGlasess) {
    sum += Number(items)
  }
  return `${sum} copo(s) de água`
}
// console.log(hydrate('1 cachaça, 5 cervejas e 9 copo de vinho'))

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
