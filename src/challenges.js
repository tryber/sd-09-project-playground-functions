// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let arrayIndex = 0;
  for (let index in string) {
    if (string[index] === ' ') {
      arrayIndex += 1;
    } else if (array[arrayIndex] === undefined) {
      array[arrayIndex] = string[index];
    } else {
      array[arrayIndex] += string[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(stringArray) {
  let newString = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let countHigher = 1;
  array.sort();
  let index = array.length - 1;
  while (array[index] === array[index - 1]) {
    countHigher += 1;
    index -= 1;
  }
  return countHigher;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge'
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function chooseFizzBuzz(value) {
  let text = 'bug!';
  let fizz = value % 3 === 0;
  let buzz = value % 5 === 0;
  let fizBuzz = fizz + buzz === 2;
  if (fizz) {
    text = 'fizz';
  }
  if (buzz) {
    text = 'buzz';
  }
  if (fizBuzz) {
    text = 'fizzBuzz';
  }
  return text;
}

function fizzBuzz(array) {
  for (let index in array) {
    array[index] = chooseFizzBuzz(array[index]);
  }
  return array;
}

// Desafio 9
function encode(string) {
  let newString = [];
  for (let index in string) {
    if (string[index] === 'a') {
      newString[index] = '1';
    } else if (string[index] === 'e') {
      newString[index] = '2';
    } else if (string[index] === 'i') {
      newString[index] = '3';
    } else if (string[index] === 'o') {
      newString[index] = '4';
    } else if (string[index] === 'u') {
      newString[index] = '5';
    } else {
      newString[index] = string[index];
    }
  }
  return newString.join('');
}
function decode(string) {
  let newString = [];
  for (let index in string) {
    if (string[index] === '1') {
      newString[index] = 'a';
    } else if (string[index] === '2') {
      newString[index] = 'e';
    } else if (string[index] === '3') {
      newString[index] = 'i';
    } else if (string[index] === '4') {
      newString[index] = 'o';
    } else if (string[index] === '5') {
      newString[index] = 'u';
    } else {
      newString[index] = string[index];
    }
  }
  return newString.join('');
}

// Desafio 10
function techList(arrayTech, name) {
  let newArray = [];
  arrayTech.sort();
  if (arrayTech.length > 0) {
    for (let index in arrayTech) {
      newArray[index] = {
        tech: arrayTech[index],
        name,
      };
    }
    return newArray;
  }
  return 'Vazio!';
}

// Desafio 11
function checkValidNumber(numArray) {
  let check = false;
  for (let index in numArray) {
    if (numArray[index] < 0 || numArray[index] > 9) {
      check = true;
    }
  }
  return check;
}

function checkRepeatedNumbers(arrayTest) {
  let check = false;
  let numArray = arrayTest.slice();
  numArray.sort();
  for (let index = 0; index < numArray.length - 1; index += 1) {
    let countNumbers = 1;
    while (numArray[index] === numArray[index + 1]) {
      countNumbers += 1;
      index += 1;
    }
    if (countNumbers >= 3) {
      check = true;
      break;
    }
  }
  return check;
}

function checkRepeatedAndValidNumbers(numArray) {
  let check = false;
  if (checkValidNumber(numArray)) {
    check = true
  }
  if (checkRepeatedNumbers(numArray)) {
    check = true;
  }
  return check;
}

function phoneNumberCreator(arrayTest) {
  let phoneNumber = ['(', ')', ' ', '-'];
  let DDD = [];
  let firstPart = [];
  let lastPart = [];
  for (let index in arrayTest) {
    if (index < 2) {
      DDD.push(arrayTest[index]);
    } else if (index < 7) {
      firstPart.push(arrayTest[index]);
    } else {
      lastPart.push(arrayTest[index]);
    }
  }
  phoneNumber.splice(1, 0, DDD.join(''));
  phoneNumber.splice(4, 0, firstPart.join(''));
  phoneNumber.splice(10, 0, lastPart.join(''));
  return phoneNumber.join('');
}

function generatePhoneNumber(numArray) {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (checkRepeatedAndValidNumbers(numArray)) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  return (phoneNumberCreator(numArray));
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  /*
  Aviso para a Raquel do futuro e outros leitores: 
  Aqui foi feito o uso das Regular Expressions para capturar todos os números na string.
  /\d+/g siginfica que todos os números arábicos com 1+ dígitos serão coletados e 
  armazenados em outro array. 
  O elemento g que torna possível varrer toda a string ser retornado um array com todos os matches.
  */
  let drinksArray = string.match(/\d+/g);
  let countDrinks = 0;
  for (let index in drinksArray) {
    countDrinks += Number(drinksArray[index]);
  }
  if (countDrinks > 1) {
    return console.log(`${countDrinks} copos de água`);
  }
  return console.log(`${countDrinks} copo de água`);
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
