// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringArray = [];
  let wordSeparator = 0;
  stringArray[wordSeparator] = '';

  for (let i = 0; i < string.length; i += 1) {
    stringArray[wordSeparator] += string[i];
    if (string[i] === ' ') {
      wordSeparator += 1;
      stringArray[wordSeparator] = '';
    }
  }

  return stringArray;
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (higherNumber < array[i]) {
      higherNumber = array[i];
      count = 1;
    } else if (higherNumber === array[i]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1);
  cat2 = Math.abs(cat2);
  mouse = Math.abs(mouse);

  if ((cat1 - mouse) === (cat2 - mouse)) {
    return 'os gatos trombam e o rato foge'
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
