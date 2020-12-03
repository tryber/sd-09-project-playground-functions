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

function concatName(stringArray){
  let reverse = stringArray.reverse();
  let concaterna = reverse.concat();
  return concaterna;
}
console.log(concatName(numeros));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empate = ties * 1

  return vitorias + empate;
}

// Desafio 6
let repetidos = [1, 9, 9, 8, 7, 5, 8, 9, 4, 9]
function highestCount(arrayNum) {
 let contador = 0
 let maiorNum = Math.max.apply(null, arrayNum);
 for (index = 0; index < arrayNum.length; index += 1) {
   if (maiorNum === arrayNum[index]) {
      contador +=1
     
    }
  }
 return contador;
}
console.log(highestCount(repetidos));

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let positionCat1 = cat1 - mouse;
  let positionCat2 = cat2 - mouse;
  let resultado = ''

  if (positionCat1 < positionCat2) {
    resultado = 'cat1';
  } else  if(positionCat2 < positionCat1){
    resultado = 'cat2';
  } else if(positionCat1 === positionCat2){
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}
console.log(catAndMouse(8, 12, 4));

  

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
