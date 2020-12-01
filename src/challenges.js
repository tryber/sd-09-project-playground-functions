// Project 2

// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue === true) && (secondValue === true)) {
    return true
 }
 else {
   return false
 }
}

// Desafio 2
function calcArea(value1, value2) {
  return value1 * value2/2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
}

// Desafio 4
function concatName(name) {
  container = name.split(' ').reverse()
  for(i = 0; i < container.length; i++) {
      if (i == 0) {
           y += container[i]+', '
      }
      else if (i == container.length -1) {
          y += container[i]
      }
  }
  return y
}

// Desafio 5
function footballPoints() {
  let winspoints = wins *3;
  let tiespoints = ties;
  let totalPoints;
   return totalPoints = winspoints + tiespoints;
}

// Desafio 6
function highestCount(numbers) {

var contador = 0;
var comparador;

    comparador = numbers[0];
  for (i = 0; i < n.length; i++) {
    if (comparador < n[i]) {
        comparador = n[i]
    }
    for (i = 0; i < n.length; i++) {
        if (comparador == n[i]) {
            contador++
        }
    }
}
return contador
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
