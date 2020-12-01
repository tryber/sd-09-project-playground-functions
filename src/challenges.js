// Desafio 1
function compareTrue(x ,y) {
  if(x == true && y == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeiro = array.shift();
  let ultimo = array[array.length -1]
  array = ultimo + ', ' + primeiro;
  return array;
}
console.log(concatName(['Felipe', 'José', 'Maria', 'Sorin']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let contador = 0;
  for(let i in array) {
   if(array[i] == maior) {
     contador++;
   } 
  }
  return contador
}

// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  if(posCat1 === posCat2) return "os gatos trombam e o rato foge";
  if(Math.abs(posCat1 - posMouse) < Math.abs(posCat2 - posMouse)) return "cat1"
  if(Math.abs(posCat1 - posMouse) > Math.abs(posCat2 - posMouse)) return "cat2"
}
console.log(catAndMouse(20, 16, 15));

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
