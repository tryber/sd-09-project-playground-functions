// Aluno: Emanoel Cristhian, turma 09.

// Desafio 1
function compareTrue(comp1, comp2) {
  if (comp1 && comp2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let stringSplited = string.split(' ');
  return stringSplited;
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = 3;
  let tiesPoints = 1;
  return (wins * winsPoints) + (ties * tiesPoints);
}

// Desafio 6
function highestCount(arrayNumber) {
  let bigNumber = arrayNumber[0];
  let countNumber = 1;
  for (let index = 1; index < arrayNumber.length; index += 1) {
    if (bigNumber < arrayNumber[index]) {
      bigNumber = arrayNumber[index];
      countNumber = 1;
    } else if (bigNumber === arrayNumber[index]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
catAndMouse(0, 2, 3)

// Desafio 8
function checkFizzBuzz(fizz, buzz) {
  if (fizz === 0 && buzz === 0) {
    return true;
  }
  return false;
}

function checkFizz(fizz) {
  if (fizz === 0) {
    return true;
  }
  return false;
}

function checkBuzz(buzz) {
  if (buzz === 0) {
    return true;
  }
  return false;
}

function makeAnswer(fizz, buzz) {
  let answer;

  if (checkFizzBuzz(fizz, buzz)) {
    answer = 'fizzBuzz';
  } else if (checkFizz(fizz)) {
    answer = 'fizz';
  } else if (checkBuzz(buzz)) {
    answer = 'buzz';
  } else {
    answer = 'bug!';
  }
  return answer;
}

function fizzBuzz(array) {
  let arrayAnswer = [];

  for (let index = 0; index < array.length; index += 1) {
    let fizz = array[index] % 3;
    let buzz = array[index] % 5;

    arrayAnswer.push(makeAnswer(fizz, buzz));
  }
  return arrayAnswer;
}
// Desafio 9
let arrayOfLetter = ['a', 'e', 'i', 'o', 'u'];
let arrayOfNumber = ['1', '2', '3', '4', '5']

function auxCode(code, array1, array2) {
  let arrayLetters = code.split('');
  let arrayCode = array1;
  let arayToCode = array2;

  for (let index = 0; index < arrayLetters.length; index += 1) {
    switch (arrayLetters[index]) {
      case arrayCode[0]:
        arrayLetters[index] = arayToCode[0];
        break;
      case arrayCode[1]:
        arrayLetters[index] = arayToCode[1];
        break;
      case arrayCode[2]:
        arrayLetters[index] = arayToCode[2];
        break;
      case arrayCode[3]:
        arrayLetters[index] = arayToCode[3];
        break;
      case arrayCode[4]:
        arrayLetters[index] = arayToCode[4];
        break;
      default:
        break;
    }
  }
  return arrayLetters.join('');
}

function encode(code) {
  return auxCode(code, arrayOfLetter, arrayOfNumber);
}

function decode(code) {
  return auxCode(code, arrayOfNumber, arrayOfLetter)
}

// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  let objtArray = [];
  let arrayTechSort = arrayTech.sort();

  for (let index = 0; index < arrayTechSort.length; index += 1) {
    let objt = {
      tech: arrayTechSort[index],
      name,
    }
    objtArray.push(objt);
  }
  return objtArray;
}


// Desafio 11
function checkDuplicate(array, element) {
  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === element) {
      count += 1;
    }
  }
  return count;
}

function isValid(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      return false;
    }
    if (array[index] > 9) {
      return false;
    }
  }
  return true;
}

function isSafeToPass(array) {
  if (!isValid(array)) {
    return 2;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (checkDuplicate(array, array[index]) > 2) {
      return 2;
    }
  }
  return 3;
}

function checkLength(array) {
  if (array.length > 11 || array.length < 11) {
    return 1;
  }
  return 'ok';
}

function generatePhoneNumber(arrayNumber) {
  if (checkLength(arrayNumber) === 1) {
    return 'Array com tamanho incorreto.';
  }

  if (isSafeToPass(arrayNumber) === 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  if (isSafeToPass(arrayNumber) === 3) {
    return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
  }
  return 'Não rolou nada!';
}

// Desafio 12
function checkLineLow(lineA, lineB, lineC) {
  let resultLineLow;
  let sum = [lineB + lineC, lineA + lineC, lineB + lineA];

  if (lineA < sum[0] && lineB < sum[1] && lineC < sum[2]) {
    resultLineLow = true;
  }
  return resultLineLow;
}

function checkLinehigh(lineA, lineB, lineC) {
  let resultLineHigh;
  let subtraction = [Math.abs(lineB - lineC), Math.abs(lineA - lineC), Math.abs(lineB - lineA)];

  if (lineA > subtraction[0] && lineB > subtraction[1] && lineC > subtraction[2]) {
    resultLineHigh = true;
  }
  return resultLineHigh;
}

function triangleCheck(lineA, lineB, lineC) {
  if (checkLineLow(lineA, lineB, lineC)) {
    if (checkLinehigh(lineA, lineB, lineC)) {
      return true;
    }
  }
  return false;
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
