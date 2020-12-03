// Desafio 1
function compareTrue(values1, values2) {
  // seu código aqui
  if (values1 === true && values2 === true) {
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let newSentence = [];

  for (let index = 0; index < phrase.length; index+=1) {
    if (phrase[index] !== ' '){
      newSentence = newSentence + phrase[index]
    } else if (phrase[index] === ' '){
      newSentence.push(' ');
    }
  }
  return newSentence;
}
// console.log(splitSentence('Vamos com tudo!'));

// Desafio 4
function concatName(nameList) {
  // seu código aqui
  return (nameList[nameList.length-1]+', '+nameList[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(setOfNumbers) {
  // seu código aqui
  let timeCounter = 0;

  for (let index = 0; index < setOfNumbers.length; index+=1) {
    setOfNumbers(index);
    for (let index2 = 0; index2 < setOfNumbers.length; index2+=1) {
      if (setOfNumbers[index] >= setOfNumbers[index2]) {
        timeCounter = timeCounter + 1;
      }
    }
    return timeCounter
}
//console.log(highestCount[9, 1, 2, 3, 9, 5, 7]);

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
