// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let stringComposta = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] != ' ') {
      stringComposta = stringComposta + string[index];
    } else {
      arrayString.push(stringComposta);
      stringComposta = '';
    }
  }
  arrayString.push(stringComposta);
  return arrayString;
}

// Desafio 4
function concatName(arrayStrings) {
  let arrayNovo = [];
  let item1 = arrayStrings.shift();
  let item2 = arrayStrings[arrayStrings.length - 1]
  arrayNovo.push(item2, item1);
  return arrayNovo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = ((wins * 3) + ties);
  return totalPontos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorRepete = 0;
  let maior = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] > maior) {
      maior = arrayNumeros[index];
      maiorRepete = 1;
    } else if (arrayNumeros[index] === maior) {
      maiorRepete += 1;
    }
  }
  return maiorRepete;
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
