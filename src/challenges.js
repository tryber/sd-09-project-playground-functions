// Projeto 2

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceArray = sentence.split('');
  let sentenceSplited = [];
  let positionCount = 0;

  for (let index in sentenceArray) {
    if (sentenceArray[index] !== ' ') {
      if (sentenceSplited[positionCount] === undefined) {
        sentenceSplited[positionCount] = '';
      };
      sentenceSplited[positionCount] += sentenceArray[index];
    } else {
      positionCount += 1;
    };
  };
  return sentenceSplited;
}

// Desafio 4
function concatName(nameToConcat) {
  let nameConcatened = '';
  nameConcatened += nameToConcat[nameToConcat.length - 1] + ', ' + nameToConcat[0];

  return nameConcatened;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let biggerNumber = 0;
  let countBuggerNumber = 0;
  
  for (let index in numbers) {
    if (numbers[index] === biggerNumber) {
      countBuggerNumber += 1;
    }
    if(numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
      countBuggerNumber = 1;
    }
  }

  return countBuggerNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'Os gatos trombam e o rato foge.'
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

console.log(compareTrue(true, true));
console.log(calcArea(20, 30));
console.log(splitSentence('go Trybe vamos que vamos'));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(footballPoints(10, 5));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(5, 2, 8));
