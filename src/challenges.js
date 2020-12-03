// VAMO NESSA É APENAS O COMEÇO!!!
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(meuNome) {
  return meuNome.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  let concatenando = arrayString[arrayString.length - 1];
  concatenando += ", " + arrayString[0];
  return concatenando;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins *= 3) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 1;
  arrayNumbers.sort();
  let index = arrayNumbers.length - 1;
  while (arrayNumbers[index] === arrayNumbers[index - 1]) {
    count += 1;
    index -= 1;
  }
  return count;
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
};
console.log(compareTrue(true, false));
console.log(calcArea(30, 20));
console.log(splitSentence("Gabriel Castro"));
console.log(concatName(["xurubita", "lucas", "thiago", "white"]));
console.log(footballPoints(4, 2));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
