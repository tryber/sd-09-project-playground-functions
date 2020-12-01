//Bruno Brolesi

// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return (strings[strings.length - 1] + ', ' + strings[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumberIndex = 0;
  let counter = 0;

  for (let i in numberArray) {
    if (numberArray[highestNumberIndex] < numberArray[i]) {
      highestNumberIndex = i;
      counter = 1;
    } else if (numberArray[highestNumberIndex] == numberArray[i]) {
      counter++;
    }
  }

  return counter;
}

console.log(highestCount([5, 9, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanceMouseCat1 = Math.abs(mouse - cat1);
  distanceMouseCat2 = Math.abs(mouse - cat2);

  if (distanceMouseCat1 < distanceMouseCat2) {
    return ('cat1');
  } else if (distanceMouseCat1 > distanceMouseCat2) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  let strings = [];

  for (let i in numberArray) {
    number = numberArray[i];

    if (number % 3 === 0 && number % 5 === 0) {
      strings.push('fizzBuzz');
    } else if (number % 3 === 0) {
      strings.push('fizz');
    } else if (number % 5 === 0) {
      strings.push('buzz');
    } else {
      strings.push('bug!');
    }
  }

  return strings;
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
