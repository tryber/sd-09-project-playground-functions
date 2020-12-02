// Daniel
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}

// Desafio 3
function splitSentence(stringToSplit) {
  let stringSplitted = [];
  let stringToBePushed = '';
  for (const iterator of stringToSplit) {
    if (iterator === ' ') {
      stringSplitted.push(stringToBePushed);
      stringToBePushed = '';
    } else {
      stringToBePushed += iterator;
    }
  }
  if (stringToBePushed !== '') {
    stringSplitted.push(stringToBePushed);
  }
  return stringSplitted;
}

// Desafio 4
function concatName(stringArray) {
  let concatenadedString = '';
  concatenadedString += stringArray[stringArray.length - 1];
  concatenadedString += ', ';
  concatenadedString += stringArray[0];
  return concatenadedString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(valuesArray) {
  let highestNumber = valuesArray[0];
  let highestRepeat = 1;
  for (let indexOfValues = 1; indexOfValues < valuesArray.length; indexOfValues += 1) {
    if (valuesArray[indexOfValues] > highestNumber) {
      highestNumber = valuesArray[indexOfValues];
      highestRepeat = 0;
    }
    if (valuesArray[indexOfValues] === highestNumber) {
      highestRepeat += 1;
    }
  }
  return highestRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance = Math.abs(cat1 - mouse) - Math.abs(cat2 - mouse);
  let result = '';

  if (distance < 0) {
    result = 'cat1';
  }
  if (distance > 0) {
    result = 'cat2';
  }
  if (distance === 0) {
    result = 'os gatos trombam e o rato foge'
  }
  return (result);
}

function fizzOrBuzz(number) {
  let result;
  if (number % 3 === 0) {
    result = 'fizz';
  }
  if (number % 5 === 0) {
    result = 'buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let indexNumbers = 0; indexNumbers < numbersArray.length; indexNumbers += 1) {
    fizzBuzzArray[indexNumbers] = fizzOrBuzz(numbersArray[indexNumbers]);
    if (fizzBuzzArray[indexNumbers] === undefined) {
      fizzBuzzArray[indexNumbers] = 'bug!';
    }
  }
  return fizzBuzzArray;
}

function code(stringToCode, toBeReplaced, replaceBy) {
  let codedString = '';
  for (let stringIndex = 0; stringIndex < stringToCode.length; stringIndex += 1) {
    if (stringToCode[stringIndex] === toBeReplaced) {
      codedString += replaceBy;
    } else {
      codedString += stringToCode[stringIndex];
    }
  }
  return codedString;
}

// Desafio 9
function encode(stringToEncode) {
  let encodedString = stringToEncode;

  encodedString = code(encodedString, 'a', '1');
  encodedString = code(encodedString, 'e', '2');
  encodedString = code(encodedString, 'i', '3');
  encodedString = code(encodedString, 'o', '4');
  encodedString = code(encodedString, 'u', '5');

  return encodedString;
}
function decode(stringToDecode) {
  let decodedString = stringToDecode;

  decodedString = code(decodedString, '1', 'a');
  decodedString = code(decodedString, '2', 'e');
  decodedString = code(decodedString, '3', 'i');
  decodedString = code(decodedString, '4', 'o');
  decodedString = code(decodedString, '5', 'u');

  return decodedString;
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
