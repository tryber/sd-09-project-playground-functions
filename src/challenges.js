// Iniciando Projeto #02

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array.shift();
  let lastIndex = array.pop();
  return `${lastIndex}, ${firstIndex}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}
console.log(footballPoints(2,2));

// Desafio 6
function highestCount(numbers) {
  let countNumber = 0;
  let countRepeated = 0;
  let indexOfRepeatedNumber = 0;

  for (let index in numbers) {
    let checkNumber = numbers[index];

    for(let index2 in numbers) {
      if (checkNumber === numbers[index2]) {
        countNumber += 1;
      }
    }
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
      indexOfRepeatedNumber = index;
    }
    countNumber = 0;
  }
  return numbers[indexOfRepeatedNumber];
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
