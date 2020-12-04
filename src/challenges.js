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
  let maiorNum = 0;
  let quantMaior = 0;
    for(let index = 0; index < repeat.length; index +=1){
      if(repeat[index] > maiorNum){
        maiorNum = repeat[index];        
      }
    }    
    for(let index1 = 0; index1 < repeat.length; index1 += 1){
      if(repeat[index1] === maiorNum){
        quantMaior+=1;
      }
    }
    return quantMaior
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);
  if(gato1 > gato2){
    return 'cat2';
  } else if(gato2 > gato1){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }   
}
console.log(catAndMouse(1, 0, 2))
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  let array1 = []
  for(index = 0; index < arrayFizzBuzz.length; index+=1){
    if(arrayFizzBuzz[index] % 3 === 0 && arrayFizzBuzz[index] % 5 ===0){
      array1.push("fizzBuzz")
    } else if (arrayFizzBuzz[index] % 3 ===0){
      array1.push("fizz") 
    } else if(arrayFizzBuzz[index] % 5 === 0){
      array1.push("buzz") 
    } else {
      array1.push("bug!") 
    }
  }
  return array1
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
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
