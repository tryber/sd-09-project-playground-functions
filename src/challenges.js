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
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(3, 5));

// Desafio 3
let arraySentence = [];
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLast) {
  let challengeResult = `${firstAndLast[firstAndLast.length - 1]}, ${firstAndLast[0]}`;
  return challengeResult;
}
// console.log(concatName(['Fernanda', 'Cajueiro', 'Machado']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties)
  return points;
}
// console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(numbersArray) {
  let maiorNumero = numbersArray[0]
  let count = 0

  for (let index in numbersArray) {
    if (numbersArray[index] > maiorNumero) {
      maiorNumero = numbersArray[index];
    }
  }

  for (let index in numbersArray) {
    if (maiorNumero === numbersArray[index]) {
      count += 1;
    }
  } return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzResult = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzResult.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      fizzBuzzResult.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      fizzBuzzResult.push('buzz');
    } else {
      fizzBuzzResult.push('bug!');
    }
  } return fizzBuzzResult;
}
// console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(testString) {
  let newString = '';
  for (let index = 0; index < testString.length; index += 1) {
    if (testString[index] === 'a') {
      newString += '1';
    } else if (testString[index] === 'e') {
      newString += '2';
    } else if (testString[index] === 'i') {
      newString += '3';
    } else if (testString[index] === 'o') {
      newString += '4';
    } else if (testString[index] === 'u') {
      newString += '5';
    } else {
      newString += testString[index];
    }
  } return newString;
}
console.log(encode('hi there!'));

function decode(testString) {
  let newString = '';
  for (let index = 0; index < testString.length; index += 1) {
    if (testString[index] === '1') {
      newString += 'a';
    } else if (testString[index] === '2') {
      newString += 'e';
    } else if (testString[index] === '3') {
      newString += 'i';
    } else if (testString[index] === '4') {
      newString += 'o';
    } else if (testString[index] === '5') {
      newString += 'u';
    } else {
      newString += testString[index];
    }
  } return newString;
}
console.log(decode('h3 th2r2!'));

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
