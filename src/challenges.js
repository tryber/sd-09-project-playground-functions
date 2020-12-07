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
  return (stringSplitted);
}

// Desafio 4
function concatName(stringArray) {
  let concatenadedString = '';
  concatenadedString += stringArray[stringArray.length - 1];
  concatenadedString += ', ';
  concatenadedString += stringArray[0];
  return (concatenadedString);
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
  return (highestRepeat);
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
  return (result);
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
  return (fizzBuzzArray);
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
  return (codedString);
}

// Desafio 9
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

// Desafio 10
function techList(techNames, name) {
  techNames.sort();
  let techListArray = [];
  if (techNames.length !== 0) {
    for (let indexTechNames = 0; indexTechNames < techNames.length; indexTechNames += 1) {
      let techObject = {
        tech: techNames[indexTechNames],
        name: name,
      };
      techListArray.push(techObject);
    }
  } else {
    techListArray = 'Vazio!';
  }
  return (techListArray);
}

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

// Desafio 11
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

// Desafio 12
function triangleCheck() {
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
