// Desafio 1
function compareTrue(value1, value2) {
  let result = false;
  if (value1 === true && value2 === true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.length - 1] + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(values) {
  let highValue;

  function filterValue(highValueArray) {
    return highValueArray === highValue;
  }
  let sortValues = values.sort();
  highValue = sortValues[sortValues.length - 1];
  let selectValues = sortValues.filter(filterValue, sortValues[sortValues.length - 1]);
  return selectValues.length;
}

// Desafio 7
function calcPosition(pos1, pos2) {
  return Math.abs(pos1 - pos2);
}

function catAndMouse(mouse, cat1, cat2) {
  let returnString;
  if (calcPosition(mouse, cat1) <  calcPosition(mouse, cat2)) {
    returnString = 'cat1';
  }
  else if (calcPosition(mouse, cat1) >  calcPosition(mouse, cat2)) {
    returnString = 'cat2';
  }
  else {
    returnString = 'os gatos trombam e o rato foge';
  }
  return returnString
}

// Desafio 8
function fizzBuzz(inputArray) {
  let outputArray = [];
  for (let index = 0; index < inputArray.length; index += 1) {
    outputArray.push('bug!');
    if (inputArray[index] % 15 === 0) {
      outputArray[index] = ('fizzBuzz');
    }
    else if (inputArray[index] % 3 === 0) {
      outputArray[index] = ('fizz')
    }
    else if (inputArray[index] % 5 === 0) {
      outputArray[index] = ('buzz');
    }
  }
  return outputArray;
}

// Desafio 9
function encode(encodeString) {
  let outputString = '';
  for (let index = 0; index < encodeString.length; index += 1) {
    switch (encodeString[index]) {
      case 'a':
        outputString += '1';
        break;
      case 'e':
        outputString += '2';
        break;
      case 'i':
        outputString += '3';
        break;
      case 'o':
        outputString += '4';
        break;
      case 'u':
        outputString += '5';
        break;
      default:
        outputString += encodeString[index];
    }
  }
  return outputString;
}

function decode(decodeString) {
  let outputString = '';
  for (let index = 0; index < decodeString.length; index += 1) {
    switch (decodeString[index]) {
      case '1':
        outputString += 'a';
        break;
      case '2':
        outputString += 'e';
        break;
      case '3':
        outputString += 'i';
        break;
      case '4':
        outputString += 'o';
        break;
      case '5':
        outputString += 'u';
        break;
      default:
        outputString += decodeString[index];
    }
  }
  return outputString;
}

// Desafio 10
function techList(baseArray, name) {
  let outputArray = [];
  baseArray = baseArray.sort();
  for (let index = 0; index < baseArray.length; index += 1) {
    let baseObject = {
      tech: '',
      name: ''
    };
    baseObject.tech = baseArray[index];
    baseObject.name = name;
    outputArray.push (baseObject);
  }
  return outputArray;
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
