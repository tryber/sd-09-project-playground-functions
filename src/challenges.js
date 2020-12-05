// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");
  return result;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1]+", "+array[0]); 
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsCounter = 0; 
  for (let i = 0; i < wins; i += 1) {
    winsCounter += 3;
  }
  let result = winsCounter + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let greaterNumber = 0;
    let counter = 0;
    for (let i in array) {
      if(greaterNumber < array[i]) {
        greaterNumber = array[i];
      }
    }
    for (let i in array) {
        if (array[i] === greaterNumber) {
            counter += 1;
        }
    }
    return counter;
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
