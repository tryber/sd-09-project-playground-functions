// Desafio iniciado por Maximilian Kaden

// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    console.log('Retornou true')
    return true
  }
  return false
}

compareTrue(true, true)

// Desafio 2
function calcArea(base, height) {
  console.log(`Area do triangulo é ${(base * height) / 2}`)
  return (base * height) / 2
  // seu código aqui
}

calcArea(5, 4)

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties)
  return points
}

// Desafio 6
function getHigherNumber(numbers) {
  let higherNumberFromNow = 0
  for (let index in numbers) {
    if (numbers[index] > higherNumberFromNow) {
      higherNumberFromNow = numbers[index]
    }
  }
  return higherNumberFromNow
}

function getTimesHigherNumber(numbers, numberToCount) {
  let timesHigherNumberFromNow = 0
  for (let index in numbers) {
    if (numbers[index] === numberToCount) {
      timesHigherNumberFromNow += 1
    }
  }
  return timesHigherNumberFromNow
}

function highestCount(numbers) {
  let higherNumber = getHigherNumber(numbers)
  let timesHigherNumber = getTimesHigherNumber(numbers, higherNumber)
  console.log(`O maior numero foi ${higherNumber} e ele aparece ${timesHigherNumber} vezes`)
  return timesHigherNumber
}

// Desafio 7
function distanceCalculator(cat, mouse) {
  let distance = cat - mouse
  if (distance < 0) {
    distance *= -1
  }
  return distance
}
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1ToMouse = distanceCalculator(cat1, mouse)
  let distanceCat2ToMouse = distanceCalculator(cat2, mouse)
  if (distanceCat2ToMouse > distanceCat1ToMouse) {
    console.log('cat1')
    return 'cat1'
  } else if (distanceCat2ToMouse === distanceCat1ToMouse) {
    return 'os gatos trombam e o rato foge'
  }
  console.log('cat2')
  return 'cat2'
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayToReturn = []
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 != 0) {
      arrayToReturn.push('fizz')
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 != 0) {
      arrayToReturn.push('buzz')
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 === 0) {
      arrayToReturn.push('fizzBuzz')
    } else if (numbers[index] % 5 != 0 && numbers[index] % 3 != 0) {
      arrayToReturn.push('bug!')
    }
  }
  console.log(arrayToReturn)
  return arrayToReturn
}

fizzBuzz([9,8,15,3,6])

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
