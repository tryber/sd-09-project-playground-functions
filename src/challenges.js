function compareTrue(valor1, valor2) {

  if (valor1 === true && valor2 === true) {
    return true;
  } else { return false }
}

let verdadeiro = true;
let falso = false;

console.log(compareTrue(verdadeiro, verdadeiro))

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2;
  
}
console.log(calcArea(10, 20))



// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}
let teste3 = 'go trybe'
console.log(splitSentence(teste3));



// Desafio 4
function concatName(meuArray) {
 return `${meuArray[meuArray.length -1]} e ${meuArray[0]}`
}

let nomes = ['paulo', 'joao', 'felipe', 'thiago'];
console.log(concatName(nomes));



// Desafio 5
function footballPoints(wins, ties) {
 
return (wins * 3) + (ties * 1);
 
}
let jogosGanhos = 5;
let jogosEmpatados = 2;

console.log(footballPoints(jogosGanhos, jogosEmpatados))

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
