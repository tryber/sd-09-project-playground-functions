// hora de chorar

// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split([' ']);
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(string) {
  // seu código aqui
  let lastFirst = string.pop();
  return lastFirst + ', ' + string[0];
}
let array1 = ['pedro', 'henrique', 'frederico'];
console.log(concatName(array1));



// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = (wins * 3) + ties;
  return score;
}


// Desafio 6
let array = [9, 1, 2, 3, 9, 5, 7];
function highestCount(number) {
  // seu código aqui
  let maiorNumero = 0;
  let qtdVezes = 0;
  for (let index in number){
    if (number[index] > maiorNumero) {
      maiorNumero = number[index];
    }
  }
  for (let index2 in number){
    if (number[index2] === maiorNumero){
      qtdVezes += 1;
    }
  }
  return qtdVezes;
}
console.log(highestCount(array));
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0){
      result.push('fizz');
    } else if (array[index] % 5 === 0){
      result.push('buzz');
    } else {
      result.push('bug!');
    }    
  }
  return result;
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
