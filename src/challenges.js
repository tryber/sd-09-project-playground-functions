// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let newString = '';
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      newString += sentence[index];
    }
    if (sentence[index] === ' ' && newString !== '') {
      arrayStrings.push(newString);
      newString = '';
    }
  }
  if (newString !== '') {
    arrayStrings.push(newString);
  }
  return arrayStrings;
}

// Desafio 4
function concatName(stringsArray) {
  let stringDone = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
  return stringDone;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTeam = 0;
  if (wins >= 1) {
    pointsTeam += 3 * wins;
  }
  if (ties >= 1) {
    pointsTeam += 1 * ties;
  }
  return pointsTeam;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let qttyHighestRepeats = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
    for (index = 0; index < arrayNumbers.length; index += 1) {
      if (highestNumber === arrayNumbers[index]) {
        qttyHighestRepeats += 1;
      }
    }
  }
  return qttyHighestRepeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCatGets = '';

  if (cat1 === mouse && cat1 !== cat2) {
    firstCatGets = 'cat1';
  } else if (cat2 === mouse && cat2 !== cat1) {
    firstCatGets = 'cat2';
  } else {
    firstCatGets = 'os gatos trombam e o rato foge'
  }
  return firstCatGets;
}

// Desafio 8
function fizzBuzz() {}

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
