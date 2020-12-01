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
  let stringNova = '';
  let item1 = arrayStrings.shift();
  let item2 = arrayStrings[arrayStrings.length - 1]
  stringNova = (item2 + ', ' + item1);
  return stringNova;
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
    } else if (mod3 === 0 && mod5 !== 0) {
      fbb.push('fizz');
    } else if (mod3 !== 0 && mod5 === 0) {
      fbb.push('buzz');
    } else {
      fbb.push('bug!');
    }
  }
  return fbb
}

// Desafio 9
function encode(stringEncode) {
  let result = '';
  for (let index = 0; index < stringEncode.length; index += 1) {
    switch (stringEncode[index]) {
      case 'a':
        result += 1;
        break;
      case 'e':
        result += 2;
        break;
      case 'i':
        result += 3;
        break;
      case 'o':
        result += 4;
        break;
      case 'u':
        result += 5;
        break;
      default:
        result += stringEncode[index];
    }
  }
  return result;
}
function decode(stringDecode) {
  let result = '';
  for (let index = 0; index < stringDecode.length; index += 1) {
    switch (stringDecode[index]) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += stringDecode[index];
    }
  }
  return result;
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
