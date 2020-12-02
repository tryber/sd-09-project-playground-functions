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
function splitSentence(go trybe) {
  return ['go' , 'trybe']
}

// Desafio 4
function concatName(arrayNome) {
return arrayNome[arrayNome.length-1] + ',' + arrayNome[0];
}

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
