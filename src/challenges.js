// PROJECT 2 - playground functions

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// let ana = true;
// let luiza = false;
// console.log(compareTrue(ana, luiza));
// --------------------------------------------------------------------

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// console.log(calcArea(5,4));
// --------------------------------------------------------------------

// Desafio 3
function splitSentence(string) {
  let stringArray = [];
  let temporary = '';
  for (let key in string) {
    if (string[key] === ' ') {
      stringArray.push(temporary);
      temporary = '';
    } else {
      temporary += string[key];
    }
  }
  stringArray.push(temporary);
  return stringArray;
}

/*
Outro jeito de resolver o desafio 3:
function splitSentence(string) {
  let stringArray = string.split(' ');
  return stringArray;
}
*/

// console.log(splitSentence('Go Trybe'));
// --------------------------------------------------------------------

// Desafio 4
function concatName(stringArray) {
  let concatenatedName = (`${stringArray[stringArray.length - 1]}, ${stringArray[0]}`);
  return concatenatedName;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// --------------------------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 0;
  totalPoints += wins * 3;
  totalPoints += ties;
  return totalPoints;
}

// console.log(footballPoints(5, 3));
// --------------------------------------------------------------------

// Desafio 6
function highestCount(numArray) {
  let counter = 0;
  let highestNum = 0;
  for (let key in numArray) {
    if (numArray[key] > highestNum) {
      highestNum = numArray[key]
    }
  }
  for (let key2 in numArray) {
    if (numArray[key2] === highestNum) {
      counter += 1;
    }
  }
  return counter;
}

// console.log(highestCount([9, 1, 10, 9, 9, 2, 3, 9, 5, 7]));
// --------------------------------------------------------------------

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  if (cat1Dist < 0) {
    cat1Dist *= -1;
  }
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat2Dist < 0) {
    cat2Dist *= -1;
  }

  if (cat1Dist < cat2Dist) {
      return 'cat1';
  } else if (cat1Dist === cat2Dist) {
      return 'os gatos trombam e o rato foge';
  } else {
      return 'cat2';
  }
}

// console.log(catAndMouse(1, -4, -9));
// --------------------------------------------------------------------

// Desafio 8
function fizzBuzz(numArray) {
  let resultArray = [];
  for (let fizzKey = 0; fizzKey < numArray.length; fizzKey += 1) {
    if (numArray[fizzKey] % 3 === 0 && numArray[fizzKey] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (numArray[fizzKey] % 3 === 0) {
      resultArray.push('fizz');
    } else if (numArray[fizzKey] % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// --------------------------------------------------------------------

/*
OBSERVAÇÃO SOBRE FOR IN:
for (const key in object) {
  if (object.hasOwnProperty(key)) {
    const element = object[key];

  }
}
*/

// FUNÇÕES AUXILIARES PARA DESAFIO 9:
function aTo1(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      newString += '1';
    } else {
      newString += string[index];
    }
  }
  return newString;
}
function eTo2(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'e') {
      newString += '2';
    } else {
      newString += string[index];
    }
  }
  return newString;
}
function iTo3(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'i') {
      newString += '3';
    } else {
      newString += string[index];
    }
  }
  return newString;
}
function oTo4(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'o') {
      newString += '4';
    } else {
      newString += string[index];
    }
  }
  return newString;
}
function uTo5(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'u') {
      newString += '5';
    } else {
      newString += string[index];
    }
  }
  return newString;
}

// Desafio 9
function encode(string) {
  return test(test(test(test(test(string, 'a', '1'), 'e', '2'), 'i', '3'), 'o', '4'), 'u', '5');
// return aTo1(eTo2(iTo3(oTo4(uTo5(string)))));
}
// console.log(encode('hiaeiou there!'));

function test(string, param1, param2) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === param1) {
      newString += param2;
    } else {
      newString += string[index];
    }
  }
  return newString;
}

// console.log(test('h111112345oi', '1', 'a'));

function decode(numString) {
  return test(test(test(test(test(numString, '1', 'a'), '2', 'e'), '3', 'i'), '4', 'o'), '5', 'u');
}

// console.log(decode('h111112345oi'));

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
