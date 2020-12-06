// Desafio 1
function compareTrue(num1, num2) {

if (num1 && num2) {
return true
} else {
return false
}}
console.log(compareTrue(0,2))

// Desafio 2
function calcArea(base,height) {
let area = (base*height)/2 
return area
}
console.log(calcArea(10,5))

// Desafio 3
function splitSentence(umaString) {
  return umaString.split(" ")
}
console.log(splitSentence("Estou aprendendo a programar com a Trybe"))

// Desafio 4
function concatName(umArray) {
  return umArray[umArray.length -1] + ", " + umArray[0] 
}
console.log(concatName(["a","b", "c", "d"]))

// Desafio 5
function footballPoints(wins,ties) {
 return wins * 3  + ties
}
console.log(footballPoints(3,2))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
let dist1 = mouse - cat1 
let dist2 = mouse - cat2 

if ( dist1 > dist2){ 
return "cat2"
} else if (dist1 < dist2) {
return "cat1" 
} else {
return "os gatos trombam e o rato foge"
}
}
console.log(catAndMouse(10,2,2))



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
