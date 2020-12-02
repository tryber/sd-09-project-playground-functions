 // Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === true && valor2 === false) {
    return true;
  } else {
    return false;
  }
}   console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
      return ((base * heigth) / 2);
} 
        console.log(calcArea(10, 5));

// Desafio 3
let array = 'vai que vai';
function splitSentence(string) {
let divisor = string.split(' ');
console.log(divisor);
  return string;
} 
  console.log(splitSentence(array));

//Desafio 4

let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName() {
let firstName = nomes[0];
let lastName = nomes[nomes.length - 1];
let finalResult = lastName + ', ' + firstName;
  return finalResult;
}
        console.log(concatName());

// Desafio 5
function footballPoints() {
  // seu código aqui
}undefined

// Desafio 6
function highestCount() {
  // seu código aqui
}  /*/*/

// Desafio 7
function catAndMouse() {
  // seu código a*/qui
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
