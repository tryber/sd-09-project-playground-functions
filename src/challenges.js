// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if(a && b) {
    return true
    }else {
      return false
  }
}
console.log(compareTrue(0,1))

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let resultado = (base * height) / 2
  return resultado
}
console.log(calcArea(2,5))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separador = string.split(' ')
  return separador
}
console.log(splitSentence('Agora vai !!!'))

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let concatenacao = nomes[nomes.length - 1] + ', ' + nomes[0]
  return concatenacao
}
console.log(concatName(['Thiago', 'Beatriz', 'Pedro', 'Barbára']))

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
