// #VQV

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maxRepeat = 0;
  let bigger = Math.max.apply(null, array);
  for (let number of array) {
    if (number === bigger) {
      maxRepeat += 1;
    }
  }
  return maxRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzStrings = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    switch (true) {
      case ((numbersArray[index] % 5 === 0 && numbersArray[index] % 3 === 0)):
        fizzBuzzStrings.push('fizzBuzz');
        break;
      case ((numbersArray[index] % 5 === 0)):
        fizzBuzzStrings.push('buzz');
        break;
      case ((numbersArray[index] % 3 === 0)):
        fizzBuzzStrings.push('fizz');
        break;
      default:
        fizzBuzzStrings.push('bug!');
        break;
    }
  }
  return fizzBuzzStrings;
}

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

// Desafio 10
function techList(techsArray, personName) {
  let techProperty = '';
  let techsObjectsArray = [];
  techsArray.sort();
  if (techsArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techsArray.length; index += 1) {
    techProperty = techsArray[index];
    let techObject = {
      tech: techProperty,
      name: personName,
    };
    techsObjectsArray.push(techObject);
  }
  return techsObjectsArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)));
}

// Desafio 13
function hydrate(commandString) {
  let waterDebits = commandString.match(/\d+/g);
  let numbersArray = Array.from(waterDebits);
  let sumWaterCups = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    sumWaterCups += parseInt(numbersArray[index], 10);
  }
  if (sumWaterCups > 1) {
    let waterDebitMessage = `${sumWaterCups} + ' copos de água'`;
    return waterDebitMessage;
  }
  let waterDebitMessage = `${sumWaterCups} + ' copo de água'`;
  return waterDebitMessage;
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
};
