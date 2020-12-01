// #VQV turma 09!
// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 === true && value2 === true;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
// Used the split method contained in the documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstAndLast = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestNumber(numberList) {
  let highest = 0;
    for (let index in numberList) {
      if (highest < numberList[index]) {
        highest = numberList[index];
    }
  }
  return highest;
}

function highestCount(numberList) {
  let countMode = 0;
  let highest = highestNumber(numberList);
  for (let index in numberList) {
    if (highest === numberList[index]) {
      countMode += 1;
    }
  }
  return countMode;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let message = '';
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;
  if (cat1Distance < cat2Distance) {
    message = 'cat1';
  } else if (cat1Distance > cat2Distance) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
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
