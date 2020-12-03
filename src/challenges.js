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
function catAndMouse() {
  // seu código aqui
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
function encode(inputString) {
}

function decode(inputString) {
  let outputString = '';
  for (let index = 0; index < inputString.length; index += 1) {
    switch (inputString[index]){
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
        outputString += inputString[index];
    }
  return outputString;
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
