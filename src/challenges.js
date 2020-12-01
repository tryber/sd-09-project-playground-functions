// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if ((param1 === true) && (param2 === true)) {
    return true;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);

}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let subPalavras = [];
  let subWord = '';
  for (let index = 0; index <= str.length; index += 1) {
    if ((str[index] !== ' ') && (index <= str.length - 1)) {
      subWord += str[index];
    } else {
      subPalavras.push(subWord);
      subWord = '';
    }
  }
  return subPalavras;

}

// Desafio 4
function concatName() {
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
