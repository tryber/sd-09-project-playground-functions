// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let aux = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (!array[aux]) {
      array[aux] = '';
    }
    if (string[index] === ' ') {
      aux += 1;
      array[aux] = '';
      index += 1;
    }
    array[aux] += string[index];
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let commaPlusSpace = ', '
  let string = lastIndex + commaPlusSpace + firstIndex;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let repeatCount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      repeatCount += 1;
    }
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      repeatCount = 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closestCat = '';
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    closestCat = 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    closestCat = 'cat2';
  }
  if (cat1Distance < cat2Distance) {
    closestCat = 'cat1';
  }
  return closestCat;
}

// Desafio 8
function fizzBuzz(array) {
  let object = {
    1: 'bug!',
    3: 'fizz',
    5: 'buzz',
    15: 'fizzBuzz',
  };
  let fizzBuzzArray = [];
  for (let index = 0; index < array.length; index += 1) {
    for (let key in object) {
      if (array[index] % key === 0) {
        fizzBuzzArray[index] = object[key];
      }
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let aux = [];
  for (let index = 0; index < string.length; index += 1) {
    aux[index] = string[index];
    for (let key in object) {
      if (string[index] === key) {
        aux[index] = object[key];
      }
    }
  }
  return aux.join('');
}
function decode(string) {
  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let aux = [];
  for (let index = 0; index < string.length; index += 1) {
    aux[index] = string[index];
    for (let key in object) {
      if (string[index] === object[key].toString()) {
        aux[index] = key;
      }
    }
  }
  return aux.join('');
}

// Desafio 10
function techList() {
}

// Desafio 11
function generatePhoneNumber(array) {
  let display = {
    errorMessageOne: 'Array com tamanho incorreto.',
    errorMessageTwo: 'não é possível gerar um número de telefone com esses valores',
    phoneNumber: '(aa) aaaaa-aaaa',
    phoneNumberArray: [],
    phoneIndex: 0,
    repeatCount: 0,
    displayMessage: '',
  };
  for (let index = 0; index < display.phoneNumber.length; index += 1) {
    display.phoneNumberArray[index] = display.phoneNumber[index];
    if (display.phoneNumber[index] === 'a') {
      display.phoneNumberArray[index] = array[display.phoneIndex];
      display.phoneIndex += 1;
    }
  }
  display.displayMessage = display.phoneNumberArray.join('');
  for (let index = 0; index < array.length; index += 1) {
    display.repeatCount = 0;
    for (let repeatIndex = 0; repeatIndex < array.length; repeatIndex += 1) {
      if (array[repeatIndex] === array[index]) {
        display.repeatCount += 1;
      }
      if (array[index] < 0 || array[index] > 9 || display.repeatCount > 2) {
        display.displayMessage = display.errorMessageTwo;
      }
    }
  }
  if (array.length !== 11) {
    display.displayMessage = display.errorMessageOne;
  }
  return display.displayMessage;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineArray = [lineA, lineB, lineC];
  let highestLine = lineArray[0];
  let smallestLine = lineArray[0];
  let linesSum = lineA + lineB + lineC;
  let triangle = true;
  for (let index = 0; index < lineArray.length; index += 1) {
    if (lineArray[index] > highestLine) {
      highestLine = lineArray[index];
    }
    if (lineArray[index] < highestLine) {
      smallestLine = lineArray[index];
    }
  }
  for (let index = 0; index < lineArray.length; index += 1) {
    let middleLine = linesSum - highestLine;
    if (
      highestLine > (linesSum - highestLine) ||
      smallestLine < Math.abs(highestLine - middleLine)
      ) {
      triangle = false;
    }
  }
  return triangle;
}

// Desafio 13
function hydrate(string) {
  let regexp = /\d+?/g;
  let numberMatch = string.match(regexp);
  let waterCups = 0;
  let returnPhrase = '';
  for (let index = 0; index < numberMatch.length; index += 1) {
    waterCups += parseInt(numberMatch[index]);
  }
  if (waterCups === 0)
    returnPhrase =  '1 copo de água';
  if (numberMatch.length > 0)
  returnPhrase = waterCups + ' copos de água';
  return returnPhrase;
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
