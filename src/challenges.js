// Iniciando o segundo projeto VAMOS COM TUDO!!!

function maxNumber(array) {
  let number = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (number < array[i]) {
      number = array[i];
    }
  }
  return number;
}

function distanceBetweenTwoPoins(position1, position2) {
  let distance = 0;
  if (position1 < position2) {
    distance = position2 - position1;
  } else {
    distance = position1 - position2;
  }
  return distance;
}

function isDivisibleBy(dividend, divider) {
  if (dividend % divider === 0) {
    return true;
  }
  return false;
}

// Desafio 1 OK
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 && boolean2) {
    return true;
  }
  return false;
}

// Desafio 2 OK
function calcArea(base, height) {
  let rectangleArea = base * height;
  let triangleArea = rectangleArea / 2;
  return triangleArea;
}

// Desafio 3 OK
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4 OK
function concatName(array) {
  let last = array[array.length - 1];
  let fist = array[0];
  let novoArray = `${last}, ${fist}`;
  return novoArray;
}

// Desafio 5 OK
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  return pointsWins + ties;
}

// Desafio 6 OK
function highestCount(arrayNum) {
  let maxNumb = maxNumber(arrayNum);
  let cont = 0;
  for (let i in arrayNum) {
    if (maxNumb === arrayNum[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7 OK
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = distanceBetweenTwoPoins(mouse, cat1);
  let distance2 = distanceBetweenTwoPoins(mouse, cat2);
  if (distance1 > distance2) {
    return 'cat2';
  } else if (distance2 > distance1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 OK
function fizzBuzz(array) {
  let answers = [];
  for (let i in array) {
    if (isDivisibleBy(array[i], 3) && isDivisibleBy(array[i], 5)) {
      answers.push('fizzBuzz');
    } else if (isDivisibleBy(array[i], 3)) {
      answers.push('fizz');
    } else if (isDivisibleBy(array[i], 5)) {
      answers.push('buzz');
    } else {
      answers.push('bug!');
    }
  }
  return answers;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  let encodeArray = [];
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < array.length; i += 1) {
    switch(array[i]) {
      case vowels[0]:
        encodeArray.push(1);
        break;
      case vowels[1]:
        encodeArray.push(2);
        break;
      case vowels[2]:
        encodeArray.push(3);
        break;
      case vowels[3]:
        encodeArray.push(4);
        break;
      case vowels[4]:
        encodeArray.push(5);
        break;
      default:
        encodeArray.push(array[i]);
    }
  }
  let encodeString = encodeArray.join('');
  return encodeString;
}

function decode(string) {
  let array = string.split('');
  let decodeArray = [];
  let vowels = ['1', '2', '3', '4', '5']
  for (let i = 0; i < array.length; i += 1) {
    switch(array[i]) {
      case vowels[0]:
        decodeArray.push('a');
        break;
      case vowels[1]:
        decodeArray.push('e');
        break;
      case vowels[2]:
        decodeArray.push('i');
        break;
      case vowels[3]:
        decodeArray.push('o');
        break;
      case vowels[4]:
        decodeArray.push('u');
        break;
      default:
        decodeArray.push(array[i]);
    }
  }
  let encodeString = decodeArray.join('');
  return encodeString;
}

console.log(decode("h3 th2r2!"))


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
