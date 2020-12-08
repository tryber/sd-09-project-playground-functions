// Daniel
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}
// endof Desafio 1

// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}
// endof Desafio 2

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
  return (stringSplitted);
}
// endof Desafio 3

// Desafio 4
function concatName(stringArray) {
  let concatenadedString = '';
  concatenadedString += stringArray[stringArray.length - 1];
  concatenadedString += ', ';
  concatenadedString += stringArray[0];
  return (concatenadedString);
}
// endof Desafio 4

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// endof Desafio 5

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
  return (highestRepeat);
}
// endof Desafio 6

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
// endof Desafio 7

// Desafio 8
function fizzOrBuzz(number) {
  let result = 'bug!';
  if (number % 3 === 0) {
    result = 'fizz';
  }
  if (number % 5 === 0) {
    result = 'buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  }
  return (result);
}

function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let indexNumbers = 0; indexNumbers < numbersArray.length; indexNumbers += 1) {
    fizzBuzzArray[indexNumbers] = fizzOrBuzz(numbersArray[indexNumbers]);
  }
  return (fizzBuzzArray);
}
// endof Desafio 8

// Desafio 9
function code(stringToCode, toBeReplaced, replaceBy) {
  let codedString = '';
  for (let stringIndex = 0; stringIndex < stringToCode.length; stringIndex += 1) {
    if (stringToCode[stringIndex] === toBeReplaced) {
      codedString += replaceBy;
    } else {
      codedString += stringToCode[stringIndex];
    }
  }
  return (codedString);
}

function encode(stringToEncode) {
  stringToEncode = code(stringToEncode, 'e', '2');
  stringToEncode = code(stringToEncode, 'u', '5');
  stringToEncode = code(stringToEncode, 'i', '3');
  stringToEncode = code(stringToEncode, 'a', '1');
  stringToEncode = code(stringToEncode, 'o', '4');

  return (stringToEncode);
}

function decode(stringToDecode) {
  stringToDecode = code(stringToDecode, '1', 'a');
  stringToDecode = code(stringToDecode, '4', 'o');
  stringToDecode = code(stringToDecode, '2', 'e');
  stringToDecode = code(stringToDecode, '5', 'u');
  stringToDecode = code(stringToDecode, '3', 'i');

  return (stringToDecode);
}
// endof Desafio 9

// Desafio 10
function techList(techNames, name) {
  techNames.sort();
  let techListArray = [];
  if (techNames.length !== 0) {
    for (let indexTechNames = 0; indexTechNames < techNames.length; indexTechNames += 1) {
      let techObject = {
        tech: techNames[indexTechNames],
        name,
      };
      techListArray.push(techObject);
    }
  } else {
    techListArray = 'Vazio!';
  }
  return (techListArray);
}
// endof Desafio 10

// Desafio 11
function numberInterval(arrayNumbers) {
  let isValid = true;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0) {
      isValid = false;
    }
    if (arrayNumbers[index] > 9) {
      isValid = false;
    }
  }
  return (isValid);
}

function countNumbers(arrayNumbers) {
  let isValid = true;
  for (let index1 = 0; index1 < arrayNumbers.length; index1 += 1) {
    let count = 1;
    for (let index2 = index1 + 1; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index1] === arrayNumbers[index2]) {
        count += 1;
      }
      if (count >= 3) {
        isValid = false;
      }
    }
  }
  return (isValid);
}

function generatePhoneNumber(arrayNumbers) {
  let phoneNumber = '';
  if (!numberInterval(arrayNumbers) || !countNumbers(arrayNumbers)) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  }
  if (arrayNumbers.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  }
  if (!phoneNumber) {
    phoneNumber = `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
  }
  return (phoneNumber);
}
// endof Desafio 11

// Desafio 12
function checkSides(lineA, lineB, lineC) {
  let isValid = true;
  if (lineA > lineB + lineC) {
    isValid = false;
  }
  if (lineB > lineA + lineC) {
    isValid = false;
  }
  if (lineC > lineA + lineB) {
    isValid = false;
  }
  return (isValid);
}

function checkAbsDiff(lineA, lineB, lineC) {
  let isValid = true;
  if (lineA < Math.abs(lineB - lineC)) {
    isValid = false;
  }
  if (lineA < Math.abs(lineC - lineB)) {
    isValid = false;
  }
  return (isValid);
}

function triangleCheck(lineA, lineB, lineC) {
  let isValid = false;
  isValid = checkSides(lineA, lineB, lineC);
  isValid = checkAbsDiff(lineA, lineB, lineC);
  isValid = checkAbsDiff(lineB, lineA, lineC);
  isValid = checkAbsDiff(lineC, lineA, lineB);
  return isValid;
}
// endof Desafio 12

// Desafio 13
function hydrate(drinksString) {
  let numbers = drinksString.match(/\d/g);
  let sum = 0;
  let glasses = ' copos de água';
  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 10);
  }
  if (sum === 1) {
    glasses = ' copo de água';
  }
  let glassesOfWater = sum.toString();
  glassesOfWater += glasses;
  return (glassesOfWater);
}
// endof Desafio 13

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
