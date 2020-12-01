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
    if (string[index] !== ' ') {
      stringComposta += string[index];
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
function catAndMouse(mouse, cat1, cat2) {
  let varCat1 = (cat1 - mouse);
  let varCat2 = (cat2 - mouse);
  let quemPega;
  varCat1 = Math.abs(varCat1);
  varCat2 = Math.abs(varCat2);
  if (varCat1 < varCat2) {
    quemPega = 'cat1';
  } else if (varCat1 === varCat2) {
    quemPega = 'os gatos trombam e o rato foge';
  } else {
    quemPega = 'cat2'
  }
  return quemPega;
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let fbb = [];
  let mod3 = 0;
  let mod5 = 0;
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    mod3 = arrayDeNumeros[index] % 3;
    mod5 = arrayDeNumeros[index] % 5;
    if (mod3 === 0 && mod5 === 0) {
      fbb.push('fizzBuzz');
    } else if (mod3 === 0 && mod5 !== 0){
      fbb.push('fizz');
    } else if (mod3 !== 0 && mod5 === 0){
      fbb.push('buzz');
    } else {
      fbb.push('bug!');
    }
  }
  return fbb
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
