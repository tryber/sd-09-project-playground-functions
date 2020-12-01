//  Projeto II

// Desafio 1
function compareTrue(value1, value2) {
  return ((value1 === true) && (value2 === true));
}
// console.log(compareTrue(false,false));


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(100, 50));


// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('Go Trybe'));


// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// console.log(footballPoints(2, 1));


// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = 0;
  let highestNumberRepeat = 0;

  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
      highestNumberRepeat = 1;
    } else if (numbersArray[index] === highestNumber) {
      highestNumberRepeat += 1;
    }
  }

  return highestNumberRepeat;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let phrase = '';

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    phrase = 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    phrase = 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    phrase = 'os gatos trombam e o rato foge';
  }

  return phrase;
}
// console.log(catAndMouse(1, 0, 2));


// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
