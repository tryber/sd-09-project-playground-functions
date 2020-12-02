// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split([' ']);
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valueArray) {
  let highestValue = 0;
  let highestValueCount = 0;
  for (let index = 0; index < valueArray.length; index += 1) {
    if (valueArray[index] > highestValue) {
      highestValue = valueArray[index];
      highestValueCount = 1;
    } else if (valueArray[index] === highestValue) {
      highestValueCount += 1;
    }
  }
  return highestValueCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) === (mouse - cat2)) {
    let resultDraw = cat1 - mouse;
    let equalDistance = 'os gatos trombam e o rato foge';
    return equalDistance;
  } else if ((cat1 - mouse) < (mouse - cat2)) {
    let resultCat1 = cat1 - mouse;
    let cat1Wins = 'cat1';
    return cat1Wins;
  } else if ((cat1 - mouse) > (mouse - cat2)) {
    let resultCat2 = cat2 - mouse;
    let cat2Wins = 'cat2';
    return cat2Wins;
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
