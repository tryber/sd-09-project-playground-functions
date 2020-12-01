// Segundo Projecto de Frederico Canoeira #VQV
// Desafio 1
function compareTrue(number1, number2) {
  if (number1 % 2 === 0 && number2 % 2 !== 0) {
    return true
  }
  return false
}
//let result = compareTrue(4, 9)
//console.log(result)

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
let area = calcArea(4, 7)
console.log(area)

// Desafio 3
let lodo = "Lucas, Marcio, oliveira, Carlos"
function splitSentence(lodo) {
  //for (let cont = 0; cont <= arr.length; cont += 1) {
let div = lodo.split(" ");
console.log(div)
  return lodo
  }

  // Desafio 4
   function concatName(names) {
   let concat  = names[names.length]
    return `${names.length[-1]} , ${names[0]}`

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
  }
