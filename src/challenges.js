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
  return catAndMouse
}

// Desafio 8
function fizzBuzz(array) {
  for (let x in array) {
    if (array[x] % 3 === 0 && array[x] % 5 === 0) {
      array[x] = 'fizzBuzz';
    } else if (array[x] % 3 === 0) {
      array[x] = 'fizz';
    } else if (array[x] % 5 === 0) {
      array[x] = 'buzz';
    } else {
      array[x] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let cripted = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      cripted += '1';
    } else if (string[i] === 'e') {
      cripted += '2';
    } else if (string[i] === 'i') {
      cripted += '3';
    } else if (string[i] === 'o') {
      cripted += '4';
    } else if (string[i] === 'u') {
      cripted += '5';
    } else {
      cripted += string[i];
    }
  }
  return cripted;
}
function decode(string) {
  let uncripted = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      uncripted += 'a';
    } else if (string[i] === '2') {
      uncripted += 'e';
    } else if (string[i] === '3') {
      uncripted += 'i';
    } else if (string[i] === '4') {
      uncripted += 'o';
    } else if (string[i] === '5') {
      uncripted += 'u';
    } else {
      uncripted += string[i];
    }
  }
  return uncripted;
}

// Desafio 10
function techList()
// Faça aqui

// Desafio 11
// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  if (ladoA < (ladoB + ladoC) && ladoA > Math.abs(ladoB - ladoC) || ladoB < (ladoA + ladoC) && ladoB > Math.abs(ladoA - ladoC) || ladoC < (ladoB + ladoA) && ladoC > Math.abs(ladoB - ladoA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let cups = string.replace(/\D/g, ''); // replace all leading non-digits with nothing
  let countW = 0;
  for (let i = 0; i < cups.length; i += 1) {
    countW += Number(cups[i]);
  }
  if (countW === 1) {
    return `${countW} copo de água`;
  }
  return `${countW} copos de água`;
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
