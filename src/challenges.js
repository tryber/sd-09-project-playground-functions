// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

//console.log(compareTrue(true, false)); //apagar

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

//console.log(calcArea(4, 18)); //apagar

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let newString = '';
  for (index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      newString = newString + sentence[index];
    } if (sentence[index] === ' ' && newString !== '') {
      arrayStrings.push(newString);
      newString = '';
    }
  }
  if (newString !== '') {
  arrayStrings.push(newString);
  }
  return arrayStrings;
}

console.log(splitSentence(' go  Trybe ')); //apagar

// Desafio 4
function concatName() {

}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz([arrayNumbers]) {
  let novaArray = [];
  for (index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 == 0) {
      novaArray.replace('fizz');
    } else if (arrayNumbers[index] % 5 == 0) {
      console.log('buzz');
    } else if (arrayNumbers[index] % 15 == 0) {
      console.log('fizzBuzz');
    } else {
      console.log('bug!');
    }
  }
  return novaArray;
}
console.log([2, 15, 7, 9, 45]);

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
