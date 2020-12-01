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
    return 'Os gatos trombam e o rato foge'
  } else if (diffCat1 > diffCat2) {
    return 'cat2'
  } else {
    return 'cat1'
  }
}
// console.log(catAndMouse(-4, -5, -6))

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for(element of array) {
    if (element % 3 && element % 5) {
      return 'fizzBuzz'
    } else if (

    )
  }
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
