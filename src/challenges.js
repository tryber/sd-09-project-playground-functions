// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, high) {
  let area;
  area = (base * high) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimo;
  let concatenador = '';
  ultimo = array.length - 1;
  concatenador = array[ultimo];
  concatenador += ', ' + array[0];
  return concatenador;
}

// Desafio 5
function footballPoints(wins, ties) {
  let qntPontos = 0;
  wins *= 3;
  qntPontos += wins + ties;
  return qntPontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let numeroDeVezes = 0;
  let var1 = 0;
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    let repeticao = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] >= array[index2]) {
        contador += 1;
      }
      if (array[index] === array[index2]) {
        repeticao += 1;
      }
    }
    if (contador > var1) {
      var1 = contador;
      maiorNumero = array[index];
      numeroDeVezes = repeticao;
    }
  }
  return numeroDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return console.log('cat1');
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return console.log('cat2');
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return console.log('os gatos trombam e o rato foge');
  }
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
