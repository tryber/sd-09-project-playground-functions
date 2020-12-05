// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// let area = calcArea(4, 7)
// console.log(area)

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`
}
// console.log(concatName(['Long', 'live', 'trybers']))

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins *= 3) + ties
  return score
}
// console.log(footballPoints(5, 4))

// Desafio 6
function highestCount(recive) {
  // seu código aqui
  let highest = 0;
  let count = 0;
  for (let index = 0; index < recive.length; index += 1) {
    if (recive[index] > highest) {
      highest = recive[index];
    }

  }
  for (let index2 = 0; index2 < recive.length; index2 += 1) {
    if (recive[index2] === highest) {
      count += 1;
    }
  }
  return count
}
// console.log(highestCount([0, 0, 0, 0, 0, 0, 0]))
// console.log(count)

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const distanceCat1 = Math.abs(cat1 - mouse)
  const distanceCat2 = Math.abs(cat2 - mouse)
  if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2'
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'fail'
}
// console.log(catAndMouse(20, 20, 20))

// Desafio 8

function fizzBuzz(arrayFizz) {
  // seu código aqui
  if (arrayFizz % 3 === 0) {
    return 'fizz'
  } else if (arrayFizz % 5 === 0) {
    return 'buzz'
  } else if (arrayFizz % 3 === 0 && arrayFizz % 5 === 0) {
    return 'fizzBuzz'
  } else if (arrayFizz % 3 !== 0 && arrayFizz % 5 !== 0) {
    return 'bug!'
  }
}
// console.log(fizzBuzz([2, 15, 7, 9, 45])

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
