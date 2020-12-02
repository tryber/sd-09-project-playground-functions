// Desafio 1
function compareTrue(numB1, numB2) {
  // seu código
  if (numB1 && numB2 > 0) {
    return true;
  } return false;
}console.log(compareTrue(2, 2));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = 0;
  area = (base * altura) / 2;
  return area;
}console.log(calcArea(4, 2));

// Desafio 3
let array = [];
function splitSentence(word) {
  array = word.split(' ');
  return array;
}console.log(splitSentence('Mano... Seloko!!'));

// Desafio 4
function concatName(nomeInicioFim) {
  nomeInicioFim = nomeInicioFim[0] + nomeInicioFim[nomeInicioFim.length - 1];
  return nomeInicioFim;
}console.log(concatName(['Lucas', ' Cassiano', ' Ferraz', ' Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  for (index = 0; index < wins; index ++) {
    somaVitorias = wins * 3;
  }
  for (index2 = 0; index2 < ties; index2 ++) {
    somaEmpates = ties * 1;
  }return somaEmpates + somaVitorias;
}console.log(footballPoints(2, 2));

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
