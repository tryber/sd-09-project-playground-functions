//  Cheguei na NAVE, Trybers!! VAMOS QUE VAMOS!

// Desafio 1
  function compareTrue(valorOne, valorTwo) {
  if(valorOne === true && valorTwo === true) {
    return true;
  } else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}
console.log(splitSentence('Kamila Vanessa Ribeiro'));

/*Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas. */

let arrayNomes = ['Lucas','Cassiano','Ferraz', 'Paolillo']
// Desafio 4
function concatName(arrayNomes) {
return `${arrayNomes[arrayNomes.length-1] + ', ' + arrayNomes[0]}`;
}
console.log(concatName(arrayNomes));

// Desafio 5
  function footballPoints(wins, ties) {
  return wins *3 + ties
  }
  // Desafio 6
  let array = [1, 3, 7, 7, 7, 7];
  function highestCount(numbers) {
  let maxNumber = 0;
  let amountMany = 0;
  for(let index in numbers) {
    if(numbers[index] > maxNumber){
    maxNumber = numbers[index];
    }
  }
  for(let index2 in numbers){
    if(numbers[index2] === maxNumber){
    amountMany += 1;
    }
  }
  return amountMany;
}
console.log(highestCount(array));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distanciaCat1 = cat1 - mouse;
let distanciaCat2 = cat2 - mouse;

if( distanciaCat2 > distanciaCat1) {
    return 'Cat2';

  }else (distanciaCat1 === distanciaCat2); {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(5,7,15))

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
