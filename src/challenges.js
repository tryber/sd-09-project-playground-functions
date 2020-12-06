// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(streng) {
  let rel = [];
  let guarda = '';
  for (let x = 0; x < streng.length; x += 1) {
    if (streng[x] !== ' ') {
      guarda += streng[x];
    }
    if (streng[x] === ' ' || x === streng.length - 1) {
      rel.push(guarda);
      guarda = '';
    }
  }
  return rel;
}

// Desafio 4
function concatName(array) {
  let ultimoEprimeroNome = [];
  ultimoEprimeroNome.push(array[array.length - 1]);
  ultimoEprimeroNome.push(array[0]);
  return ultimoEprimeroNome;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let resutado = 0;
  for (let x = 0; x < arrayNum.length; x += 1) {
    arrayNum.sort();
    if (arrayNum[x] === arrayNum[arrayNum.length - 1]) {
      resutado += 1;
    }
  }
  return resutado;
}

// Desafio 7
function catAndMouse() {
}

// Desafio 8
function fizzBuzz(array) {
  let arrayestreng = []
  for (let x = 0; x < array.length; x += 1) {
    if(array[x] % 3 === 0 && array[x] % 5 === 0) {
      arrayestreng.push('fizzBuzz');
    }
    else if(array[x] % 3 === 0){
      arrayestreng.push('fizz');
    }
    else if(array[x] % 5 === 0){
      arrayestreng.push('buzz');
    }
    else{
      arrayestreng.push('bug!');
    }
  }
  return arrayestreng;
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
