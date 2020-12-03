// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const arrayString = string.split(" ");
  return arrayString;
}
console.log(splitSentence("Tree Of Savior"));
// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];
  return `${lastName}, ${firstName}`;
}
console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  let winner = wins * 3;
  let tied = ties * 1;
  let points = winner + tied;
  return points;
}
console.log(footballPoints(1, 1));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let contNumber = 0;
  let contRepeat = 0;
  let indexNumberRepeat = 0;
  for (let index in numbers) {
    let verifyNumber = numbers[index];
    for (let index2 in numbers) {
      if (verifyNumber === numbers[index2]) {
        contRepeat++;
      }
    }
    if (contNumber > contRepeat) {
      contRepeat = contNumber;
      indexNumberRepeat = index;
    }
  }
  return numbers[indexNumberRepeat];
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
};
