// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui 
let array = [];
let word = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] != ' ') {
      word += string[contador];
    }else {
      array.push(word);
      word = '';
    }
  }
  array.push(word);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui

 let string = '';

 function primeiroItem(array){
   let primeiroItem = '';
   primeiroItem += array[array.length - 1];
   return primeiroItem;
 }
 
 function segundoItem(array){
   let segundoItem = '';
   segundoItem += array[0];
   return segundoItem;
 }
 
 string = (primeiroItem(array) + ', ' + segundoItem(array));
 
 return string;
 }

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let pontos = 0;

function pontosWins(wins) {
  let pontosWins = 0;
  pontosWins = wins * 3;
  return pontosWins;
}
  
function pontosTies(ties) {
  let pontosTies = 0;
  pontosTies = ties * 1;
  return pontosTies;
}

pontos = pontosWins(wins) + pontosTies(ties);
  
return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui

let somaNumero = 0;
let somaMaior = 0;

  for (let contador = 0; contador < array.length; contador += 1) {
    for (let contadorNumero = 0; contadorNumero < array.length; contadorNumero += 1) {
      if (array[contadorNumero] === array[contador]) {
        somaNumero += 1;
      }
    }
    if (somaNumero > somaMaior) {
      somaMaior = somaNumero;
    }
    somaNumero = 0;
  }
  return somaMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

}
console.log(catAndMouse(2, 5, 6));

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
