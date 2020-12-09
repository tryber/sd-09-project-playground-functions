// Desafio 1
function compareTrue(bool1, bool2) {
  let check = false;
  if (bool1 && bool2) {
    check = true;
  }
  return check;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}


// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let result = '';
  result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(namesArray) {
  // seu código aqui
  let keepNames = [];
  let formater = '';
  keepNames.push(namesArray[namesArray.length - 1]);
  keepNames.push(namesArray[0]);
  formater = keepNames.join(', ');
  return formater;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let countWins = 0;
  let countTies = 0;
  let totalPoints = 0;
  for(let calcWins = 0; calcWins < wins; calcWins += 1){
     countWins+= 3;
  }
  for(let calcTies = 0; calcTies < ties; calcTies += 1){
      countTies += 1;
  }
  totalPoints = countWins + countTies;
  return totalPoints;
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
