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
function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
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
function techList(techs, name) {
  if (techs === '') {
    return 'Vazio!';
  }
  let techListName = [];
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    let newItem = { tech: techs[index], name };
    techListName.push(newItem);
  }
  return techListName;
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
};
