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
  let checkingElement = 0;
  let highestNumber = 0;
  let highestNumberIndex;
  let numberOfOcorrence = 0;
  for (let element in array) { //for pra correr os elementos do array
    checkingElement = array[element];
    for (let index in array ) { //for pra checar a quantidade de occorrencias
      if (checkingElement > highestNumber) {
        highestNumber = checkingElement;
        highestNumberIndex = element
        numberOfOcorrence = 0;
      }
      if (array[index] === checkingElement && array[index] === highestNumber && index !== highestNumberIndex) {
        numberOfOcorrence += 1;
      }
    }
  }
  return numberOfOcorrence;
}
console.log(highestCount([13, 9, 1, 2, 3, 9, 5, 7, 9, 10, 12,]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
