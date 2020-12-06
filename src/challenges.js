// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
  // seu código aqui
}

// Desafio 3
function splitSentence(pharases) {
  let pharaseSlice = pharases.split('');
  let words = [''];
  let counter = 0;
  for (let index = 0; index < pharaseSlice.length; index += 1) {
    if (pharaseSlice[index] !== ' ') {
      words[counter] += pharaseSlice[index];
    } else {
      counter += 1;
      words.push('');
    }
  }
  return words;
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  let finalValue = names;
  let firstLast = finalValue[finalValue.length - 1] + ', ' + names[0];
  return firstLast;
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
