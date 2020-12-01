//Vamo Que Vamo!!!
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(a) {
  b = a.length - 1
  return a[0], a[b]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(nums) {
  let maior = nums[0];
  for(let i = 0; i < nums.length; i += 1){
    if(nums[i] > maior){
        maior = nums[i]
    } else{
    }
  }  
  for(let i = 0; i < nums.length; i += 1){
    let contagem = 0
    if(nums[i] == maior){
        contagem += 1
    } else{
    }
  }
}
return contagem

// Desafio 7
function catAndMouse() {
  
}

// Desafio 8
function fizzBuzz() {
  
}

// Desafio 9
function encode() {
  
}
function decode() {
  
}

// Desafio 10
function techList() {
  
}

// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
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
