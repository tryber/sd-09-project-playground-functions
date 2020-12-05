//  Projeto II

// Desafio 1
function compareTrue(value1, value2) {
  return ((value1 === true) && (value2 === true));
}
// console.log(compareTrue(false,false));


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(100, 50));


// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('Go Trybe'));


// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// console.log(footballPoints(2, 1));


// Desafio 6
function verifyHighestCount(number, highest, count) {
  if (number > highest) {
    highest = number;
    count = 1;
  } else if (number === highest) {
    count += 1;
  }
  return [highest, count];
}
function highestCount(numbersArray) {
  let highestNumber = 0;
  let highestNumberRepeat = 0;
  let result = [];

  for (let index = 0; index < numbersArray.length; index += 1) {
    result = verifyHighestCount(numbersArray[index], highestNumber, highestNumberRepeat);
    highestNumber = result[0];
    highestNumberRepeat = result[1];
  }

  return highestNumberRepeat;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function subtrNumber(number1, number2) {
  return (number1 < number2) ? number2 - number1 : number1 - number2;
}
function compareCatAndMouse(diff1, diff2) {
  let phrase = '';

  if (diff1 < diff2) {
    phrase = 'cat1';
  }

  if (diff1 > diff2) {
    phrase = 'cat2';
  }

  if (phrase === '') {
    phrase = 'os gatos trombam e o rato foge';
  }
  return phrase;
}
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = subtrNumber(mouse, cat1);
  let diffCat2 = subtrNumber(mouse, cat2);

  return compareCatAndMouse(diffCat1, diffCat2);
}
// console.log(catAndMouse(1, 0, 2));


// Desafio 8
function divideBy(number) {
  let word = '';
  let mod5 = number % 5;
  let mod3 = number % 3;

  if (mod3 === 0) {
    word += 'fizz';
  }

  if (mod5 === 0) {
    word += 'buzz';
  }

  return word;
}
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = divideBy(arrayNumbers[index]);

    if (arrayNumbers[index] === '') {
      arrayNumbers[index] = 'bug!';
    }

    if (arrayNumbers[index] === 'fizzbuzz') {
      arrayNumbers[index] = arrayNumbers[index].replace('b', 'B');
    }
  }
  return arrayNumbers;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function compareLetter(letter, objectChar) {
  let newLetter = '';

  for (let indexObject in objectChar) {
    if (letter === indexObject) {
      newLetter = objectChar[indexObject];
    }
  }
  return newLetter;
}

function switchLetter(phrase, objectChar) {
  let newPhrase = '';

  for (let index = 0; index < phrase.length; index += 1) {
    let newLetter = '';

    newLetter = compareLetter(phrase[index], objectChar);
    newPhrase += (newLetter !== '') ? newLetter : phrase[index];
  }

  return newPhrase;
}

function encode(phrase) {
  let objectEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return switchLetter(phrase, objectEncode);
}
// console.log(encode('hi there!'));

function decode(phrase) {
  let objectDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return switchLetter(phrase, objectDecode);
}
// console.log(decode('H4w 1r2 y45 t4d1y?'));


// Desafio 10
function techList(tech, name) {
  let objectTech = [];

  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index],
      name,
    });
  }

  if (objectTech.length === 0) {
    return 'Vazio!';
  }
  return objectTech;
}
// console.log(techList([], 'Nathália'));


// Desafio 11
function differentSize(sizePhone) {
  if (sizePhone !== 11) {
    return 'Array com tamanho incorreto.';
  }
  return '';
}
function differentNumber(number) {
  if ((number < 0) || (number > 9)) {
    return true;
  }
  return false;
}
function mostRepeated(array, number) {
  let count = 0;

  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (number === array[indexCount]) {
      count += 1;
    }
  }
  return count;
}
function errorNumberAndCount(number, array) {
  let error = differentSize(array.length);
  let phrase = '';

  if (error !== '') {
    phrase = error;
  }
  if (differentNumber(number) || (mostRepeated(array, number) >= 3)) {
    phrase = 'não é possível gerar um número de telefone com esses valores';
  }
  return phrase;
}
function includeChar(number, index) {
  let phone = '';

  if (index === 0) {
    phone += '(';
  }
  if (index === 2) {
    phone += ') ';
  }
  if (index === 7) {
    phone += '-';
  }
  phone += number;

  return phone;
}
function generatePhoneNumber(arrayPhone) {
  let phone = '';
  let error = '';

  for (let index = 0; index < arrayPhone.length; index += 1) {
    error = errorNumberAndCount(arrayPhone[index], arrayPhone);
    if (error !== '') {
      return error;
    }

    phone += includeChar(arrayPhone[index], index);
  }
  return phone;
}
console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, -2, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([0, 1, 6]));
console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10]));
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));
console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]));
console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));


// Desafio 12
function verifyTriangle(N1, N2, N3) {
  let verify = false;

  if ((N1 < Math.abs(N2 + N3)) && (N1 > Math.abs(N2 - N3))) {
    verify = true;
  }
  return verify;
}
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let verifyA = verifyTriangle(lineA, lineB, lineC);
  let verifyB = verifyTriangle(lineB, lineC, lineA);
  let verifyC = verifyTriangle(lineC, lineA, lineB);

  if (verifyA && verifyB && verifyC) {
    result = true;
  }

  return result;
}
// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(drinks) {
  let sum = 0;

  drinks = (drinks.match(/\d/g));
  for (let index = 0; index < drinks.length; index += 1) {
    const newLocal = drinks[index];
    sum += parseInt(newLocal, 10);
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }

  return `${sum} copos de água`;
}
// console.log(hydrate('1 cachaça, 5 cervejas e 3 copo de vinho'));


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
