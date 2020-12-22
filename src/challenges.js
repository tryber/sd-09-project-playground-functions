// Desafio 1
function compareTrue(number1, number2) {
  if (number1 && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')
  return array
}

// Desafio 4
function concatName(array) {
  let first;
  let last;
  first = array[0];
  last = array[array.length - 1];
  return `${last}, ${first}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let quantidade = 0;
  let maior = Math.max(...array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1)
  let distancia2 = Math.abs(mouse - cat2)
    if (distancia1 === distancia2) {
        return 'os gatos trombam e o rato foge';
    } else if (distancia1 < distancia2) {
        return 'cat1';
    } else if (distancia2 < distancia1) {
        return 'cat2';
    }
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
