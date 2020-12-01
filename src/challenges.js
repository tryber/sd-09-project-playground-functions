// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arrayPalavras = [];
  let palavra = '';

  for (let index = 0; index <= frase.length; index += 1) {
    if (frase[index] !== ' ' && index !== frase.length) {
      palavra += frase[index];
    } else {
      arrayPalavras.push(palavra);
      palavra = '';
    }
  }
  return arrayPalavras;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestNumber(array) {
  let highestN = array[0];
  for (let number in array) {
    if (array[number] > highestN) {
      highestN = array[number];
    }
  }
  return highestN;
}

function highestCount(array) {
  let count = 0;
  for (let number in array) {
    if (array[number] === highestNumber(array)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Position < cat2Position) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let number of array) {
    if (number % 3 !== 0 && number % 5 !== 0) {
      fizzBuzzArray.push('bug!');
    } else if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (number % 3 === 0){
      fizzBuzzArray.push('fizz');
    } else {
      fizzBuzzArray.push('buzz');
    }
  }
  return fizzBuzzArray;
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
};
