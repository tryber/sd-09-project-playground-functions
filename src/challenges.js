// Bora!
// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true;
  } else {
    return false;
  }
}
let teste = false;
let teste2 = false;
console.log(compareTrue(teste, teste2));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}
let base1 = 4;
let altura = 4;
console.log(calcArea(base1, altura));


// Desafio 3
function splitSentence(separateString) {  
  let array = separateString.split(' ');
  return array;
}
console.log(splitSentence('Henrique Gabriel de Moura'));

// Desafio 4
function concatName(concatenacao){
  let newArray = concatenacao.pop();  
  return(newArray + ', ' + concatenacao[0]);    
}
console.log(concatName(['Napolitana', 'Escarola', 'Atum']));

// Desafio 5
function footballPoints(wins, ties) {
return (wins*3) + ties
}
let vitoria = 7;
let empate = 8;
console.log(footballPoints(vitoria, empate))

// Desafio 6
function highestCount(repeat) {
  let array = [repeat];
  let maiorNum = 0;
  let quantMaior = 0;
    for(index = 0; index < array.length; index +=1){
      if(array[index] > 0){
        
      }
    }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
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
