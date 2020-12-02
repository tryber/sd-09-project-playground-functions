// Desafio 1 feito
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let auxiliarString = '';
  let arrayString = [];
  for (let index = 0; index < string.length; index+=1) {
    if (string[index] !== ' '){
      auxiliarString += string[index];
    } else if (string[index] === ' ') {
            arrayString.push(auxiliarString);
            auxiliarString = '';
          }
    if (index === (string.length -1)) {
              arrayString.push(auxiliarString);
           }
  }
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
let indexOfLastWord = arrayString.length - 1;
  let lastString = arrayString[indexOfLastWord];
  return lastString + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = 0;
  score = (3 * wins ) + (1 * ties);
  return score;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  // seu código aqui
  if(cat1 === cat2){
    return 'os gatos trombam e o rato foge';
  }
  if(cat1 > cat2){
      return 'cat1';
  } else {
      return 'cat2';
  }
  
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
