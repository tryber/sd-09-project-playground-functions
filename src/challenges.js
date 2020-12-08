// Desafio 1
function compareTrue(bol, bole) {
  return bol && bole;
}
// exemplo de chamada da função: compareTrue(true, false);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// exemplo de chamada da função: calcArea(10, 4);
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// exemplo de chamada da função: splitSentence("Xablau is life");
// Desafio 4
function concatName(array) {
  let firstLast = [];
  firstLast = (array[array.length - 1] + ', ' + array[0]);
  return firstLast;
}
// exemplo de chamada da função: concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
// Desafio 5
function footballPoints(wins, ties) {
  let pointsForWin = 3;
  let points = (wins * pointsForWin) + ties;
  return points;
}
// exemplo de chamada da função: footballPoints(10, 10);
// Desafio 6
function highestCount(array) {
  let maxNumber = Math.max(...array);
  let repeatCounter = 0;
  let index;
  for (index = 0; index < array.length; index += 1) {
    if (maxNumber === array[index]) {
      repeatCounter += 1;
    }
  }
  return repeatCounter;
}
// exemplo de chamada da função: highestCount([10,11,8,11]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mCat1= Math.abs(mouse - cat1);
  let mCat2= Math.abs(mouse - cat2);
  if (mCat1 < mCat2) {
    return 'cat1';
  } else if (mCat1 > mCat2) {
    return 'cat2';
  }
return 'os gatos trombam e o rato fogem';
}
// exemplo de chamada da função: catAndMouse(10,5,4);
// Desafio 8

// exemplo de chamada da função:  fizzBuzz([10,3,6,5,15]);
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
