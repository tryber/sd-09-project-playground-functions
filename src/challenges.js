// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let splitedArray = [];
  splitedArray = stringToSplit.split(' ');
  return splitedArray;
}

// Desafio 4
function concatName(firstAndLastIndex) {
  let string = [];
  string = `${firstAndLastIndex[firstAndLastIndex.length - 1]}, ${firstAndLastIndex[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore = (wins * 3) + (ties * 1);
  return totalScore;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = 0;
  let timesHighestNumberAppears = 0;
  for (let index in numbersArray) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }

  for (let index in numbersArray) {
    if (highestNumber === numbersArray[index]) {
      timesHighestNumberAppears += 1;
    }
  }
  return timesHighestNumberAppears;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
  let fizzBuzzResult = [];
  for (let index in fizzBuzzArray) {
    if ((fizzBuzzArray[index] % 3 === 0) && (fizzBuzzArray[index] % 5 === 0)) {
      fizzBuzzResult.push('fizzBuzz');
    } else if (fizzBuzzArray[index] % 3 === 0) {
      fizzBuzzResult.push('fizz');
    } else if (fizzBuzzArray[index] % 5 === 0) {
      fizzBuzzResult.push('buzz');
    } else {
      fizzBuzzResult.push('bug!');
    }
  }
  return fizzBuzzResult;
}

// Desafio 9
function encode(arrayToEncode) {
  let encodedArray = '';
  for (let index = 0; index < arrayToEncode.length; index += 1) {
    switch (arrayToEncode[index]) {
      case 'a':
        encodedArray += '1';
        break;
      case 'e':
        encodedArray += '2';
        break;
      case 'i':
        encodedArray += '3';
        break;
      case 'o':
        encodedArray += '4';
        break;
      case 'u':
        encodedArray += '5';
        break;
      default:
        encodedArray += arrayToEncode[index];
        break;
    }
  }
  return encodedArray;
}

function decode(arrayToEncode) {
  let decodedArray = '';
  for (let index = 0; index < arrayToEncode.length; index += 1) {
    switch (arrayToEncode[index]) {
      case '1':
        decodedArray += 'a';
        break;
      case '2':
        decodedArray += 'e';
        break;
      case '3':
        decodedArray += 'i';
        break;
      case '4':
        decodedArray += 'o';
        break;
      case '5':
        decodedArray += 'u';
        break;
      default:
        decodedArray += arrayToEncode[index];
        break;
    }
  }
  return decodedArray;
}

// Desafio 10
function techList(array, name) {
  let sortArray = array.sort();
  let finalArray = [];

  if (array.length === 0) {
    return 'Vazio!'
  }

  for (let index = 0; index < array.length; index += 1) {
    finalArray.push({
      tech: sortArray[index],
      name,
    });
  }
  return finalArray;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let count = 0;
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {        
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index] === arrayNumber[index2]) {                  
        count += 1;
      }
    }
    if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
  }
  return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    isTriangle = true;
  } return isTriangle;
}

// Desafio 13
function hydrate(drinksString) {
  let regexp = /\d+?/g;
  let extractNumbersFromString = drinksString.match(regexp);
  let sum = 0;

  for (let index = 0; index < extractNumbersFromString.length; index += 1) {
    sum += parseInt(extractNumbersFromString[index], 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
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
