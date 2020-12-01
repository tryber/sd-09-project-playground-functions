// Desafio 1
function compareTrue(value1, value2) {
  let resultado = ' ';
  if (value1 === true && value2 === true) {
    resultado = true
  } else {
    resultado = false
  }
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      arraySentence.push(sentence[index])
    }
  }
  // seu código aqui
  return arraySentence
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arrayNomes) {
  let nomes = [];
  for (let index = arrayNomes.length - 1; index >= 0; index -= 1) {
    if (arrayNomes[index] === arrayNomes[arrayNomes.length - 1]) {
      nomes.push(arrayNomes[index])
    } else if (arrayNomes[index] === arrayNomes[0]) {
      nomes.push(arrayNomes[index])
    }
  }
  return nomes;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties
  return points;
}

let vitorias = 3;
let empates = 1;
console.log(footballPoints(vitorias, empates))

// Desafio 6

function highestCount(array) {
  let biggestNumber = 0;
  let numberOfRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > biggestNumber) {
      biggestNumber = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      numberOfRepeat += 1
    }
  }
  return numberOfRepeat;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 3, 3]))

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
