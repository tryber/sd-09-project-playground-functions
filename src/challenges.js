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
  for (let index = 0; index < arrNumber.length; index += 1) {
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
function encode(stri) {
  // seu código aqui
  let voltaStr = '';
  let str = stri;
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case 'a':
        voltaStr += 1;
        break;
      case 'e':
        voltaStr += 2;
        break;
      case 'i':
        voltaStr += 3;
        break;
      case 'o':
        voltaStr += 4;
        break;
      case 'u':
        voltaStr += 5;
        break;
      default:
        voltaStr += str[index];
        break;
    }
  }
  return voltaStr
}

function decode(stri) {
  // seu código aqui
  let voltaStr = '';
  let str = stri;
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case '1':
        voltaStr += 'a';
        break;
      case '2':
        voltaStr += 'e';
        break;
      case '3':
        voltaStr += 'i';
        break;
      case '4':
        voltaStr += 'o';
        break;
      case '5':
        voltaStr += 'u';
        break;
      default:
        voltaStr += str[index];
        break;
    }
  }
  return voltaStr
}


// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let obj = [];
  let array = arr.sort();
  if (arr.length < 1) {
    return 'Vazio!'
  }
  for (let index = 0; index < arr.length; index += 1) {
    let x = { tech: array[index], name };
    obj.push(x);
  }
  return obj;
}

// Desafio 11
function criateNumber(number) {
  let numero = '';
  for (let index = 0; index < number.length; index += 1) {
    switch (index) {
      case 0:
        numero += `(${number[index]}`;
        break;
      case 1:
        numero += `${number[index]}) `;
        break;
      case 6:
        numero += `${number[index]}-`
        break;
      default:
        numero += `${number[index]}`
    }
  }
  return numero;
}


function verifyNumber(number) {
  let isRight90 = false;
  if (number.length !== 11) {
    isRight90 = true;
  }
  return isRight90;
}

function comparNumber(number, index, volta) {
  let cont = 0;
  for (let index2 of number) {
    if (index === index2) {
      cont += 1;
    }
    if (cont >= 3) {
      volta = true;
    }
  }
  return volta
}

function quantidyNumber(number) {
  let volta = false;
  for (let index of number) {
    volta = comparNumber(number, index, volta);
    if (index < 0 || index > 9) {
      volta = true;
    }
  }
  return volta;
}


function generatePhoneNumber(number) {
  // seu código aqui
  let show = '';
  if (quantidyNumber(number)) {
    show = 'não é possível gerar um número de telefone com esses valores';
  }
  if (verifyNumber(number)) {
    show = 'Array com tamanho incorreto.'
  }
  if (show === '') {
    show = criateNumber(number);
  }
  return show;
}

// Desafio 12
function checkSoma(param1, param2, param3) {
  let soma3 = param1 + param2;
  let soma2 = param3 + param1;
  let soma1 = param2 + param3;
  let can = false;
  if ((param3 < soma3) && (param2 < soma2) && (param1 < soma1)) {
    can = true;
  }
  return can
}

function checkDif(param1, param2, param3) {
  let soma3 = Math.abs(param1 - param2);
  let soma2 = Math.abs(param3 - param1);
  let soma1 = Math.abs(param2 - param3);
  let can = false;
  if ((param3 > soma3) && (param2 > soma2) && (param1 > soma1)) {
    can = true;
  }
  return can
}

function triangleCheck(sideA, sideB, sideC) {
  // seu código aqui
  let can = false;
  if ((checkSoma(sideA, sideB, sideC)) && (checkDif(sideA, sideB, sideC))) {
    can = true;
  }
  return can;
}


// Desafio 13
function hydrate(alcool) {
  // seu código aqui
  let water = '';
  let injectAlcool = alcool.match(/\d+/g);
  let someAlcool = 0;
  for (let index of injectAlcool) {
    someAlcool += parseInt(index);
  }
  water = `${someAlcool} copos de água`;
  if (someAlcool === 1) {
    water = `${someAlcool} copo de água`;
  }
  return water;
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
