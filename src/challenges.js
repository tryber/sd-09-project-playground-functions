// Project Playground Functions
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = 0;
  area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = '';
  result = string.split('   ');
  return result;
}

// Desafio 4
function concatName(arrayStrings) {
  let first = '';
  let last = '';
  first = arrayStrings[0];
  last = arrayStrings[arrayStrings.length - 1];
  return [last , first];
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0
  result = (wins * 3) + (ties * 1);
  return result
}

// Desafio 6
function highestCount(numbers) {
  let maxnumber = 0;
  let contnumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maxnumber < numbers[index]) {
      maxnumber = numbers[index];
      contnumber = 1;
    } else if (maxnumber === numbers[index]) {
      contnumber += 1;
    }
  }
  return contnumber
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
    let distaCat1 = 0
    let distaCat2 = 0
    if (mouse > cat1) {
      distaCat1 = mouse - cat1;
    } else {
      distaCat1 = cat1 - mouse;
    }
    if (mouse > cat2) {
      distaCat2 = mouse - cat2;
    } else {
      distaCat2 = cat2 - mouse;
    }
    if (distaCat1 < distaCat2) {
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
