// Desafio 1
  // seu código aqui
function compareTrue(values1, values2) {
  if (values1 === true && values2 === true) {
    return true;
} 
  return false;
}
  console.log(compareTrue(true, true))

// Desafio 2
// seu código aqui
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}
console.log(calcArea(10, 2))

// Desafio 3
let array = 'go trybe'
function splitSentence(string) {
  let divisor = string.split(' ');
  console.log(divisor);
  return string;
}
console.log(splitSentence(array));

// Desafio 4
function concatName(arrayDeStrings) {
  let lastFirst = arrayDeStrings.pop()
  return lastFirst + ', ' + arrayDeStrings[0]
}
let arrayDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(arrayDeNomes))

// Desafio 5
// concluido
function footballPoints(wins, ties) {
  pontos = (wins * 3) + ties 
  return pontos
} 
console.log(footballPoints(5,2))

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
