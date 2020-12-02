// PROJECT STARTED! #VQV

// Desafio 1
let result = true;
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  } return result;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 5));

// Desafio 3
let arraySentence = [];
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLast) {
  let challengeResult = `${firstAndLast[firstAndLast.length - 1]}, ${firstAndLast[0]}`;
  return challengeResult;
}
console.log(concatName(['Fernanda', 'Cajueiro', 'Machado']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties)
  return points;
}
console.log(footballPoints(2, 1));

// Desafio 6
/*
function highestCount(array) {
  let maiorNumero = array[0]
  let count = 0

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index]
    }
  }

  for ()
}
*/

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  } 
  return 'os gatos se trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0) {
      return 'fizz';
    } else if (numbersArray[index] % 5 === 0) {
      return 'buzz';
    } else if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      return 'fizzBuzz';
    }
  } return 'bug!';
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
