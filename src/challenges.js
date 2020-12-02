// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(stringToSplit) {
  let splitedArray = [];
  splitedArray = stringToSplit.split(' ');
  return splitedArray;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLastIndex) {
  let string = [];
  string = firstAndLastIndex[firstAndLastIndex.length - 1] + ', ' + firstAndLastIndex[0];
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalScore = (wins * 3) + (ties * 1);
  return totalScore;
}
console.log(footballPoints(3, 1));

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = (cat1 - mouse);
  let cat2Distance = (cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  } 
  return 'os gatos se trombam e o rato foge';
}
console.log(catAndMouse(1, 2, 5));

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
  let fizzBuzzResult = [];
  for (let index in fizzBuzzArray) {
    if ((fizzBuzzArray[index] % 3 === 0) && (fizzBuzzArray[index] % 5 === 0)){
      fizzBuzzResult.push('fizzBuzz');
    } else if (fizzBuzzArray[index] % 3 === 0) {
      fizzBuzzResult.push('fizz');
    } else if (fizzBuzzArray[index] % 5 === 0) {
      fizzBuzzResult.push('buzz');
    } else {
      fizzBuzzResult.push('bug!');
    }
  }
  return fizzBuzzResult;
}   
console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
