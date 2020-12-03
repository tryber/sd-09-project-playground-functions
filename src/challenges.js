// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeiro = array.shift();
  let ultimo = array[array.length - 1]
  array = ultimo + ', ' + primeiro;
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let contador = 0;
  for (let i in array) {
    if (array[i] === maior) {
      contador += 1;
    }
  }
  return contador
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  else return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      fizzBuzzArray.push('fizz');
    }
    if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      fizzBuzzArray.push('buzz');
    }
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    }
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(frase) {
  let fraseArray = frase.split('');

  for (let i in fraseArray) {
    if (fraseArray[i] === 'a') fraseArray[i] = 1;
    if (fraseArray[i] === 'e') fraseArray[i] = 2;
    if (fraseArray[i] === 'i') fraseArray[i] = 3;
    if (fraseArray[i] === 'o') fraseArray[i] = 4;
    if (fraseArray[i] === 'u') fraseArray[i] = 5;
  }
  return fraseArray.join('');
}

function decode(frase) {
  let fraseArray = frase.split('');

  for (let i in fraseArray) {
    if (fraseArray[i] === '1') fraseArray[i] = 'a';
    if (fraseArray[i] === '2') fraseArray[i] = 'e';
    if (fraseArray[i] === '3') fraseArray[i] = 'i';
    if (fraseArray[i] === '4') fraseArray[i] = 'o';
    if (fraseArray[i] === '5') fraseArray[i] = 'u';
  }
  return fraseArray.join('');
}

// Desafio 10
function techList(arrayTec, name) {
  let tecObj = {
    tech,
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumb) {
  if (arrayNumb.length !== 11) return "Array com tamanho incorreto.";

  else {
    arrayNumb.splice(0, 0, '(');
    arrayNumb.splice(3, 0, ')');
    arrayNumb.splice(4, 0, ' ');
    arrayNumb.splice(10, 0, '-');
  }

  for (let i in arrayNumb) {
    if (arrayNumb[i] < 0 || arrayNumb[i] > 9) return 'não é possível gerar um número de telefone com esses valores';
  }

  let count = 0;
  let numRepeat = 0;
  let numArray = 0;
  for (let index1 in arrayNumb) {
    numArray = arrayNumb[index1];
    for (let index2 in arrayNumb) {
      if (numArray === arrayNumb[index2]) {
        count++;
      }
    }
    if (count > numRepeat) {
      numRepeat = count;
    }
    count = 0;
  }

  if (numRepeat > 2) return 'não é possível gerar um número de telefone com esses valores';

  return arrayNumb.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineC - lineA) && lineC > Math.abs(lineB - lineA)) {
    return true
  } 
  else return false;
}

// Desafio 13
function hydrate(frase) {
  let listaNum = frase.replace(/[^0-9]/g, '');
  let arrayListaNum = listaNum.split('');

  let sum = 0;
  for (let i in arrayListaNum) {
    sum = sum + Number(arrayListaNum[i]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  else return `${sum} copos de água`;
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
