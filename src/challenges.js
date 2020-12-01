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
function concatName(arrs) {
  // seu código aqui
  let concatenado = arrs[arrs.length - 1];
  concatenado += `, ${arrs[0]}`;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function descobreMaior(arr) {
  let high = -1;
  for (let index in arr) {
    if (arr[index] > high) {
      high = arr[index];
    }
  }
  return high;
}
function highestCount(arr) {
  // seu código aqui
  let high = descobreMaior(arr);
  let count = 0;
  for (let index in arr) {
    if (arr[index] === high) {
      count += 1;
    }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let difCat1 = Math.abs(mouse - cat1);
  let difCat2 = Math.abs(mouse - cat2);
  let batida = '';
  switch (true) {
    case difCat1 < difCat2:
      return 'cat1';
    case difCat2 < difCat1:
      return 'cat2';
    default:
      batida = 'os gatos trombam e o rato foge';
  }
  return batida;
}

// Desafio 8
function fizzBuzz(arrNumber) {
  // seu código aqui
  let arrFizz = [];
  for (let index in arrNumber) {
    switch (true) {
      case ((arrNumber[index] % 5 === 0) && (arrNumber[index] % 3 === 0)):
        arrFizz.push('fizzBuzz');
        break;
      case ((arrNumber[index] % 5 === 0) && (arrNumber[index] % 3 !== 0)):
        arrFizz.push('buzz');
        break;
      case ((arrNumber[index] % 5 !== 0) && (arrNumber[index] % 3 === 0)):
        arrFizz.push('fizz');
        break;
      default:
        arrFizz.push('bug!');
    }
  }
  return arrFizz;
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
