// Desafio 1
function compareTrue (bol, bole) {
  let compare = bol && bole;
  return compare;
}
// exemplo de chamada da função: compareTrue(true, false);
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
}
// exemplo de chamada da função: calcArea(10, 4);
// Desafio 3
function splitSentence(string) {
  let palavras = string.split(" ");
  return palavras;
}
// exemplo de chamada da função: splitSentence("Xablau is life");
// Desafio 4
function concatName(array) {
  let empty= [];
  firstLast = empty.concat(array[array.length - 1] + ', ' + array[0]);
  return(firstLast);
  }
 // exemplo de chamada da função: concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
// Desafio 5
function footballPoints(wins, ties) {
 let points = (wins *3 ) + ties;
 return points;
}
// exemplo de chamada da função: footballPoints(10, 10);
// Desafio 6
function highestCount(array) {
  let maxNumber = Math.max(...array);
  let repeatCounter = 0;
for (index=0; index < array.length ; index +=1){
  if (maxNumber === array[index]) {
      repeatCounter = repeatCounter + 1;
}
}
 return repeatCounter;
}
// exemplo de chamada da função: highestCount([10,11,8,11]);
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
