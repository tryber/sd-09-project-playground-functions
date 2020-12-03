// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(stringToSplit) {
  let splitedArray = [];
  splitedArray = stringToSplit.split(' ');
  return splitedArray;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLastIndex) {
  let string = [];
  string = `${firstAndLastIndex[firstAndLastIndex.length - 1]}, ${firstAndLastIndex[0]}`;
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore = (wins * 3) + (ties * 1);
  return totalScore;
}
console.log(footballPoints(3, 1));

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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
console.log(catAndMouse(1, 0, 2));

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
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(arrayToEncode) {
  let encodedArray = [];
  for (let index = 0; index < arrayToEncode.length; index += 1) {
    switch (arrayToEncode[index]) {
      case 'a':
        encodedArray.push(arrayToEncode.replace(/a/gi, '1'));
        break;
      case 'e':
        encodedArray.push(arrayToEncode.replace(/e/gi, '2'));
        break;
      case 'i':
        encodedArray.push(arrayToEncode.replace(/i/gi, '3'));
        break;
      case 'o':
        encodedArray.push(arrayToEncode.replace(/o/gi, '4'));
        break;
      case 'u':
        encodedArray.push(arrayToEncode.replace(/u/gi, '5'));
        break;
      default:
        break;
    }
  }
  return encodedArray.join('');
}
console.log(encode('hi there'));

function decode() {

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
