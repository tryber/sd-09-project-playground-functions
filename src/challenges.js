// PROJECT 2 - playground functions

// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// let ana = true
// let luiza = false
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
  for (let fizzKey in numArray) {
    if (numArray[fizzKey] % 3 === 0 && numArray[fizzKey] % 5 === 0) {
      resultArray.push('fizzbuzz');
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

// Desafio 9
function encode(string) {
  function aTo1(string) {
    for (let index in string) {
      if (string[index] === 'a') {
        string[index] = 1;
      }
    }
    return string;
  }
  function eTo2(string) {
    for (let index in string) {
      if (string[index] === 'e') {
        string[index] = 2;
      }
    }
    return string;
  }
  function iTo3(string) {
    for (let index in string) {
      if (string[index] === 'i') {
        string[index] = 3;
      }
    }
    return string;
  }
  function oTo4(string) {
    for (let index in string) {
      if (string[index] === 'o') {
        string[index] = 4;
      }
    }
    return string;
  }
  function uTo5(string) {
    for (let index in string) {
      if (string[index] === 'u') {
        string[index] = 5;
      }
    }
    return string;
  }
  return aTo1(eTo2(iTo3(oTo4(uTo5(string)))));
}

// console.log(encode('hi there!'));


function decode() {
  // seu código aqui
}

// Desafio 10
function techList(arrayTech, name) {
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
