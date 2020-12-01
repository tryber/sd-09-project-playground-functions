// Desafio 1
function compareTrue(numB1, numB2) {
  // seu código
  if (numB1 && numB2 > 0) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = 0;
  area = (base * altura) / 2;
  return area;
}

// Desafio 3
let array = [];
function splitSentence(word) {
  array = word.split(' ');
  return array;
  }//console.log(array('18 36'));
  

// Desafio 4
function concatName(nomeInicioFim) {
  //let retorno = nomeInicioFim[0]
  return nomeInicioFim= nomeInicioFim[0] + ' e ' + nomeInicioFim[nomeInicioFim.length -1];
}console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//var nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'] ;
//console.log(nomes[0], nomes[nomes.length -1]);


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
