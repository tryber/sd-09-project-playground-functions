// Desafio 1
function compareTrue(today, date) {
  // seu código aqui
  if (today === true && date === true){
    return true;} 
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return( base * heigth ) /2;
}
// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  return phrase.split (" ");
}
// Desafio 4
function concatName(sArray) {
  // seu código aqui
  let backString = sArray[sArray.length - 1] + ',' + sArray[0];
  return backString; 
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if(wins === true){
    for (let index = 0; index <= wins.length; index = index + 1){
      
      let contWins = contWins + index;
      let pointsWins = 3;
      let totalPointsWins = (contWins * pointsWins);
      index = index + 1;
    }
  }
  if(ties === true){
    for (index2 = 0; index2 <= ties.length; index2 +=1){
      let contTies = contTies + index2
      let pointsTies = 1;
      let totalPointsTies = (contTies * pointsTies);
      index2 = index2 + 1;
    } 
  }
  return (totalPointsWins + totalPointsTies);
}
// Desafio 6
function highestCount(number) {
  // seu código aqui
  let arrayNumber = number;
  let numberof;
  for (let index = 0; index < number.length; index +=1){
    for (let comparaIndex = 0; comparaIndex < arrayNumber; comparaIndex +=1){
      if (number[index] >= arrayNumber[comparaIndex]){
        numberof = numberof + 1;
      }
    }
  }
}

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
