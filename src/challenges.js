// → Projeto Playground Functions!

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  return valueOne && valueTwo
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
function codeBase(phrase) {
  let objectReference = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  objectReference.arrayPhrase = phrase.split('');
  return objectReference;
}
function encode(phrase) {
  let baseCopy;
  baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in baseCopy) {
      baseCopy.arrayPhrase[index] = baseCopy[baseCopy.arrayPhrase[index]];
    }
  }
  return baseCopy.arrayPhrase.join('');
}

function decode(phrase) {
  let baseCopy;
  baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in (Object.keys(baseCopy))) {
      baseCopy.arrayPhrase[index] = Object.keys(baseCopy)
        .slice(baseCopy.arrayPhrase[index] - 1, baseCopy.arrayPhrase[index]);
    }
  }
  return baseCopy.arrayPhrase.join('');
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
function verifyPhoneNumbersLength(arrayNums) {
  let lowerNum = Math.min(...arrayNums);
  let highterNum = Math.max(...arrayNums);
  let response = null;
  let errorMsg = {
    0: 'não é possível gerar um número de telefone com esses valores',
    1: 'Array com tamanho incorreto.',
  }
  if (lowerNum < 0 || highterNum > 9) {
    response = errorMsg[0];
  }
  if (arrayNums.length !== 11) {
    response = errorMsg[1];
  }
  return response;
}

function verifyPhoneNumbersCounterCalculator(arrayNums, number) {
  let counter = 0;
  for (let i in arrayNums) {
    if (arrayNums[i] === number) {
      counter += 1;
    }
  }
  return counter;
}

function verifyPhoneNumbersRepeat(arrayNums) {
  for (let index = 0; index < arrayNums.length; index += 1) {
    let valueCounter = verifyPhoneNumbersCounterCalculator(arrayNums, arrayNums[index]);
    if (valueCounter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return null;
}

function generatePhoneNumber(arrayNums) {
  let responseVerifier = verifyPhoneNumbersLength(arrayNums);
  let responseVerifier2 = verifyPhoneNumbersRepeat(arrayNums);
  let baseNumberVerifiers = {
    verifier1: responseVerifier,
    verifier2: responseVerifier2,
  }
  for (let index in baseNumberVerifiers) {
    if (baseNumberVerifiers[index] !== null) {
      return baseNumberVerifiers[index];
    }
  }
  // after verification then create the phone number
  arrayNums.splice(0, 0, '(');
  arrayNums.splice(3, 0, ')', ' ');
  arrayNums.splice(10, 0, '-');
  let numberCreated = arrayNums.join('');
  return numberCreated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)));
}

// Desafio 13
function hydrateVerifier(arrayDrink) {
  let sumNumbers = 0;
  for (let index = 0; index < arrayDrink.length; index += 1) {
    if (Number(arrayDrink[index])) {
      sumNumbers += Number(arrayDrink[index]);
    }
  }
  return sumNumbers;
}

function hydrate(stringDrinks) {
  let arrayString = stringDrinks.split(' ');
  let glassOfWater = hydrateVerifier(arrayString);
  let drinkWater = `${glassOfWater} copos de água`;
  if (glassOfWater === 1) {
    drinkWater = `${glassOfWater} copo de água`;
  }
  return drinkWater;
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
