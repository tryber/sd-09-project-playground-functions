// Desafio 1
let firstValue = true;
let secondValue = true;

function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}
console.log(compareTrue(firstValue, secondValue));
//
// Desafio 2
let base1 = 10
let altura = 8
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(base1, altura));

// Desafio 3
let stringExemplo = 'Hello world!';

function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence(stringExemplo));

// Desafio 4
let numeros = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
let reverse = reverseArray(numeros);

function reverseArray(textArray) {
  return textArray.reverse();
}

function concatName(stringArray){
  
  return stringArray.concat();
}
console.log(concatName(reverse));



// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
