// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(arrayNames) {
  let phrase = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let counter = 0;
  let highestNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (highestNumber < arrayNumbers[index]) {
      highestNumber = arrayNumbers[index];
      counter = 0;
    }
    if (arrayNumbers[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayNum2 = [];
  for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
    if (arrayNum[index2] % 3 === 0 && arrayNum[index2] % 5 === 0) {
      arrayNum2[index2] = 'fizzBuzz';
    } else if (arrayNum[index2] % 3 === 0) {
      arrayNum2[index2] = 'fizz';
    } else if (arrayNum[index2] % 5 === 0) {
      arrayNum2[index2] = 'buzz';
    } else {
      arrayNum2[index2] = 'bug!';
    }
  }
  return arrayNum2;
}

// Desafio 9
function encode(stringToEncode) {
  stringToEncode = stringToEncode.replace(/a/g, 1);
  stringToEncode = stringToEncode.replace(/e/g, 2);
  stringToEncode = stringToEncode.replace(/i/g, 3);
  stringToEncode = stringToEncode.replace(/o/g, 4);
  stringToEncode = stringToEncode.replace(/u/g, 5);
  return stringToEncode;
}

function decode(stringToDecode) {
  stringToDecode = stringToDecode.replace(/1/g, 'a');
  stringToDecode = stringToDecode.replace(/2/g, 'e');
  stringToDecode = stringToDecode.replace(/3/g, 'i');
  stringToDecode = stringToDecode.replace(/4/g, 'o');
  stringToDecode = stringToDecode.replace(/5/g, 'u');
  return stringToDecode;
}

// Desafio 10
function techList(arrayTechs, name) {
  if (arrayTechs.length === 0) {
    return 'Vazio!'
  }  else {
      arrayTechs = arrayTechs.sort();
      for (let index3 = 0; index3 < arrayTechs.length; index3 += 1) {
        object = {
          tech: arrayTechs[index3],
          name: name
        }
        arrayTechs [index3] = object;
      }
      return arrayTechs;
  }
}

// Desafio 11
let repetitionPhoneNumber = 0;
let errorNumber = false;
function generatePhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let index4 = 0; index4 < arrayPhoneNumber.length; index4 += 1) {
      if (arrayPhoneNumber[index4] < 0 || arrayPhoneNumber[index4] > 9) {
        errorNumber = true;
      }
      for (let index5 = 0; index5 < arrayPhoneNumber.length; index5 +=1) {
        if (arrayPhoneNumber[index4] === arrayPhoneNumber[index5]) {
          repetitionPhoneNumber += 1;
        }
      }
      if (repetitionPhoneNumber < 3) {
        repetitionPhoneNumber = 0;
      }
    }
    if (repetitionPhoneNumber >= 3 || errorNumber !== false) {
      return 'não é possível gerar um número de telefone com esses valores'
    } else {
      let phoneNumber = '('+ arrayPhoneNumber[0] + '' + arrayPhoneNumber[1] + ') ' + arrayPhoneNumber[2] + '' + arrayPhoneNumber[3] + '' + arrayPhoneNumber[4] + '' + arrayPhoneNumber[5] + '' + arrayPhoneNumber[6] + '-' + arrayPhoneNumber[7] + '' + arrayPhoneNumber[8] + '' + arrayPhoneNumber[9] + '' + arrayPhoneNumber[10];
      return phoneNumber
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) && lineC < (lineA + lineB) && lineC < Math.abs(lineA + lineB)) {
    return true
  } else {
    return false
  }
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
