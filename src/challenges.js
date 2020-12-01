// Iniciando o segundo projeto VAMOS COM TUDO!!!

function maxNumber(array) {
  let number = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (number < array[i]) {
      number = array[i];
    }
  }
  return number;
}

// Desafio 1 OK
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2 OK
function calcArea(base, height) {
  let rectangleArea = base * height;
  let triangleArea = rectangleArea / 2;
  return triangleArea;
}

// Desafio 3 OK
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let last = array[array.length - 1];
  let fist = array[0];
  let novoArray = `${last}, ${fist}`;
  return novoArray;
}

// Desafio 5  OK
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  return pointsWins + ties;
}

// Desafio 6  OK
function highestCount(arrayNum) {
  let maxNumb = maxNumber(arrayNum);
  let cont = 0;
  for (let i in arrayNum) {
    if (maxNumb === arrayNum[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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

