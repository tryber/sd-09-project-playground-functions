// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");
  return result;
}

// Desafio 4
function concatName(array) {
  return (array[array.length-1]+", "+array[0]); 
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsCounter = 0; 
  for (let i = 0; i < wins; i += 1) {
    winsCounter += 3;
  }
  let result = winsCounter + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  let greaterNumber = 0;
  let counter = 0;
  for (let i in array) {
    if(greaterNumber < array[i]) {
      greaterNumber = array[i];
    }
  }
  for (let i in array) {
      if (array[i] === greaterNumber) {
          counter += 1;
      }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  let result = 'os gatos trombam e o rato foge';
  cat1 = cat1 - mouse;
  cat2 = cat2 - mouse;

  if (cat1 < cat2) {
    result = 'cat1';
  }
  else if (cat2 < cat1) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 15 == 0) {
      array[i] = 'fizzBuzz';
    }
    else if (array[i] % 3 == 0) {
      array[i] = 'fizz';
    }
    else if (array[i] % 5 == 0) {
      array[i] = 'buzz';
    }
    else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      string = string.replace(/a/g, "1");
    }
    else if (string[i] === 'e') {
      string = string.replace(/e/g, "2");
    }
    else if (string[i] === 'i') {
      string = string.replace(/i/g, "3");
    }
    else if (string[i] === 'o') {
      string = string.replace(/o/g, "4");
    }
    else if (string[i] === 'u') {
      string = string.replace(/u/g, "5");
    }
  }
  return string;
}

function decode(string) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      string = string.replace(/1/g, "a");
    }
    else if (string[i] === '2') {
      string = string.replace(/2/g, "e");
    }
    else if (string[i] === '3') {
      string = string.replace(/3/g, "i");
    }
    else if (string[i] === '4') {
      string = string.replace(/4/g, "o");
    }
    else if (string[i] === '5') {
      string = string.replace(/5/g, "u");
    }
  }
  return string;
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
