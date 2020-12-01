// BORA PARA MAIS UM PROJETO!!
// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 && boolean2 === true){
    return true;
  } else {
    return false;
  }
} compareTrue(true,true)

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
} calcArea(4,8)

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
let arrayFrase = frase.split(" ")
return arrayFrase
} splitSentence('go Trybe')

// Desafio 4
function concatName(arrayString = []) {
  // seu código aqui
 return (arrayString[arrayString.length - 1] + ',', arrayString[0])
} concatName(['ovos', 'leite', 'pizza'])

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui\
  wins = wins * 3
  return totalPontos = wins + ties
} footballPoints(4,3)


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
