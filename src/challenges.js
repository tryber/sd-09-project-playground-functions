// #VQV turma 09!
// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 === true && value2 === true;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
// Used the split method contained in the documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstAndLast = nameList[nameList.length - 1] + ', ' + nameList[0];
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = wins * 3 + ties;
  return score;
}

// Desafio 6
function highestNumber(numberList) {
  let highest = 0;
  for (let index in numberList) {
  highest = highest < numberList[index] ? numberList[index] : highest;
  }
  return highest; 
}

function highestCount(numberList) {
  let countMode = 0;
  let highest = highestNumber(numberList);
  for (let index in numberList) {
    countMode = highest == numberList[index] ? countMode += 1 : countMode;
  }
  return countMode;
}
console.log(highestCount([9, 1, 9, 3, 9, 5, 7]))

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
