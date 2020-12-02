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
  return `${lastFirst}, ${string[0]}`;
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
  for (let index in number) {
    if (number[index] > maiorNumero) {
      maiorNumero = number[index];
    }
  }
  for (let index2 in number) {
    if (number[index2] === maiorNumero) {
      qtdVezes += 1;
    }
  }
  return qtdVezes;
}
console.log(highestCount(array));

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  }
  else if (distancia2 < distancia1){
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}


// Desafio 8

function fizzBuzz(fizzbug) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < fizzbug.length; index += 1) {
    if (fizzbug[index] % 3 === 0 && fizzbug[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (fizzbug[index] % 3 === 0) {
      result.push('fizz');
    } else if (fizzbug[index] % 5 === 0) {
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
