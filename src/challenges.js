/* Projeto desenvolvido por Igor Marcos Riegel (igmriegel - github) #VQV :D */

// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
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
function splitSentence(string) {
  let myArray = [];
  let myNewString = '';
  for (let letter in string) {
    if (string[letter] === ' ') {
      myArray.push(myNewString);
      myNewString = '';
    } else if (Number(letter) === Number(string.length - 1)) {
      myNewString += string[letter];
      myArray.push(myNewString);
    } else {
      myNewString += string[letter];
    }
  }
  return myArray;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[(array.length - 1)];
  let primeiroItem = array[0];
  let separador = ', ';
  let stringPronta = (ultimoItem + separador + primeiroItem);
  return stringPronta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = Math.max(...array);
  let occurrence = 0;
  for (let index in array) {
    if (array[index] === biggestNumber) {
      occurrence += 1;
    }
  }
  return occurrence;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
