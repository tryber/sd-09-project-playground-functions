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
  for (let calcWins = 0; calcWins < wins; calcWins += 1) {
    countWins += 3;
  }
  for (let calcTies = 0; calcTies < ties; calcTies += 1) {
    countTies += 1;
  }
  totalPoints = countWins + countTies;
  return totalPoints;
}

// Desafio 6
function countEqualsNumbers(numbers) {
  let equalsCount = 0;
  for (let pos = 0; pos < numbers.length; pos += 1) {
    if (numbers[0] === numbers[pos]) {
      equalsCount += 1;
    }
  }
  return equalsCount;
}
function highestCount(numbers) {
  // seu código aqui
  numbers.sort(function (a, b) { return b - a });
  let result = countEqualsNumbers(numbers);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge'
  }
  let result = cat1Position > cat2Position ? 'cat1' : 'cat2';
  return result;
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
