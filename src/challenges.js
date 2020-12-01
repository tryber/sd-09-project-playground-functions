/*
Projeto 2 - Playground Functions!

Tiago Yoneda
https://github.com/tiago-yoneda
*/

// Desafio 1
function compareTrue(bool1, bool2) {
  return ( bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(arraySource) {
  let newArray = arraySource.split(' ');
  return newArray;
}

// Desafio 4
function concatName(arraySource) {
  let newArray = [];
  newArray.push(arraySource[arraySource.length-1],arraySource[0]);
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins+ties);
}

// funcao auxiliar para 6
function findHigher(array){
  let auxNum = 0;
  for ( let item of array){
    if (item >= auxNum){
      auxNum = item;
    }
  }
  return auxNum;
}

// Desafio 6
function highestCount(array) {
  let highest = findHigher(array);
  let counter = 0;
  for ( let item of array){
    if (highest === item){
      counter +=1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse-cat1);
  let dist2 = Math.abs(mouse-cat2);

  if ( dist1 === dist2){
    return "os gatos trombam e o rato foge";
  }
  else if (dist1 < dist2){
    return "cat1";
  }
  else {
    return "cat2";
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
