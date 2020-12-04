// Desafio 1 feito
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let auxiliarString = '';
  let arrayString = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      auxiliarString += string[index];
    } else if (string[index] === ' ') {
      arrayString.push(auxiliarString);
      auxiliarString = '';
      }
    if (index === (string.length - 1)) {
      arrayString.push(auxiliarString);
      }
  }
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let indexOfLastWord = arrayString.length - 1;
  let lastString = arrayString[indexOfLastWord];
  return lastString + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = 0;
  score = (3 * wins) + (1 * ties);
  return score;
}
function excludeRepetitions(numbers) {
  let auxiliarArray = [];
  let conditionAdd = true;
  auxiliarArray.push(numbers[0]);
  for (let index = 0; index < numbers.length; index += 1) {
    for (let indexAux = 0; indexAux < auxiliarArray.length; indexAux += 1) {
      if (numbers[index] === auxiliarArray[indexAux]) {
        conditionAdd = false;
      }
    }
    if (conditionAdd === true) {
      auxiliarArray.push(numbers[index]);
    }
    conditionAdd = true;
  }
  return auxiliarArray;
}
function foundBigger(vector) {
  let bigger = 0;
  let indexBigger = 0;
  bigger = vector[0];
  for (let index = 0; index < vector.length; index += 1){
    if (vector[index] > bigger) {
      bigger = vector[index];
    }
  }
  return bigger;
}
// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let numbersNoRepeated = [];
  numbersNoRepeated = excludeRepetitions(numbers);
  let count = [];
  let counter = 0;
  for (let index = 0; index < numbersNoRepeated.length; index +=1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbersNoRepeated[index] === numbers[index2]) {
        counter += 1;
      }
   }
    count.push(counter);
    counter = 0;
  }
  return foundBigger(count);
}
// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let distanceCat1 = 0;
  let distanceCat2 = 0;
  distanceCat1 = cat1 - mouse;
  distanceCat1 = Math.abs(distanceCat1);
  distanceCat2 = cat2 - mouse;
  distanceCat2 = Math.abs(distanceCat2);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
    return 'cat1';
}
function fizz(number) {
  if (number % 3 === 0){
    return true;
  }
  return false;
}
function buzz (number) {
  if (number % 5 === 0){
    return true;
  }
  return false;
}
// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
      if (buzz(numbers[index]) === true && fizz(numbers[index]) === true) {
          arrayFizzBuzz.push('fizzBuzz');
      } else if (buzz(numbers[index]) === true) {
        arrayFizzBuzz.push('buzz');
      } else if (fizz(numbers[index]) === true) {
        arrayFizzBuzz.push('fizz');
      } else {
        arrayFizzBuzz.push('bug!');
      }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringToEncode) {
  // seu código aqui
  let encodedString = '';
  for (let index = 0; index < stringToEncode.length; index += 1 ) {
    if (stringToEncode[index] === 'a') {
         encodedString += '1';
    } else if (stringToEncode[index] === 'e') {
         encodedString += '2';
    } else if (stringToEncode[index] === 'i') {
          encodedString += '3';
    } else if(stringToEncode[index] === 'o') {
          encodedString += '4';
    } else if (stringToEncode[index] === 'u') {
          encodedString += '5';   
  } else {
    encodedString += stringToEncode[index];
  }
}
  return encodedString;
}
function decode(stringToDecode) {
  // seu código aqui
  let decodedString = '';
  for (let index = 0; index < stringToDecode.length; index += 1 ) {
    if (stringToDecode[index] === '1') {
         decodedString += 'a';
    } else if (stringToDecode[index] === '2') {
         decodedString += 'e';
    } else if (stringToDecode[index] === '3') {
         decodedString += 'i';
    } else if(stringToDecode[index] === '4') {
         decodedString += 'o';
    } else if (stringToDecode[index] === '5') {
         decodedString += 'u';   
  } else {
    decodedString += stringToDecode[index];
  }
}
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
let distance = - 2;
distance = Math.abs(distance);
console.log(distance);
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
