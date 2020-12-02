// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let triangle = [];
  triangle = ((base * height) / 2);
  return triangle;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(split) {
  let string = split;
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

//Desafio 4
function concatName(arraySTR) { 
  let firstName = arraySTR[0];
  let  lastName = arraySTR[arraySTR.length -1];
  concat = lastName + ', ' + firstName;  
  return concat
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}
console.log(footballPoints(10, 5));

// Desafio 6
function greatestValue(arrayNumbers) {
  let greatest = 0
  for (let element of arrayNumbers) {
    if (element > greatest) {
      greatest = element
    }
  }
  return greatest
}

function highestCount(arrayNumbers) {
  let greatestNumber = greatestValue(arrayNumbers)
  let greatestCounter = 0
  for (let element of arrayNumbers) {
    if (element === greatestNumber) {
      greatestCounter += 1
    }
  }
  return greatestCounter
}

console.log(highestCount([9, 1, 2, 3, 5, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let moveCat1 = Math.abs(mouse - cat1)
  let moveCat2 = Math.abs(mouse - cat2)

  if (moveCat1 === moveCat2) {
    return 'os gatos trombam e o rato foge'
  } else if (moveCat1 > moveCat2) {
    return 'cat2'
  } else {
    return 'cat1'
}
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = []
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
