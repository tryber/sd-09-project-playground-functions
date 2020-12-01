// Bora pra cima de mais um projeto :)
// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(vetor) {
  //return `${vetor[vetor.length - 1]}, ${vetor[0]}.`
  let resposta = vetor[vetor.length - 1];
  let resposta2 = vetor[0];
  return (resposta +', ' + resposta2);
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;

}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let cont = 0;
  for (let index in array){
    if (maiorNumero < array[index]){
      maiorNumero = array[index]
    }
  }
  for (let index2 in array){
    if (maiorNumero === array[index2]){
      cont += 1
    }
  }
  return cont
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
