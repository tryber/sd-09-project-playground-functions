// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let arrayIndex = 0;
  for (let index in string) {
    if (string[index] === ' ') {
      arrayIndex += 1;
    } else {
      if (array[arrayIndex] === undefined) {
        array[arrayIndex] = string[index];
      } else {
        array[arrayIndex] += string[index];
      }
      
    }
  }
  return array;
}

// Desafio 4
function concatName(stringArray) {
  let newString = stringArray[stringArray.length - 1] + ', ' + stringArray[0];
  return newString;
}

// Desafio 5
function footballPoints(wins , ties) {
  let points = 3 * wins + ties;
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
function catAndMouse(mouse , cat1 , cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge'
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      array[index = 'buzz'];
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
