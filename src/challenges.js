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
function highestCount(highestCountArray) {
  let biggestNumber = 0;
  for (let biggestNumber in highestCoun) {
    if ()
  }

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) > (cat2 - mouse)) {
    let getsTheMouse = 'cat2';
    return getsTheMouse;
    console.log(getsTheMouse);
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    let getsTheMouse = 'cat1';
    return getsTheMouse;
    console.log(getsTheMouse);
  } else {
    return 'os gatos se trombam e o gato foge';
    console.log('os gatos trombam e o rato foge');
  }
  
}
console.log(catAndMouse(1, -2, -2));

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
