// Desafio 1
function compareTrue(bool1, bool2) {
    let answer

    bool1 === true && bool1 === bool2 ? answer = true : answer = false

    return answer
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2

  return area
}

// Desafio 3
function splitSentence(sentence) {
  let resultArray = sentence.split(' ') 
  
  return resultArray
}

// Desafio 4
function concatName(array) {
  let resultString = `${array[0]}, ${array[array.length - 1]}`

  return resultString
}

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
};
