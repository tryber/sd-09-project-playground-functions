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
function concatName(nome1) {
  nome2 = nome1.length - 1
  return nome1[0], nome2
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
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1){
    let distancia1 = mouse - cat1;
  } else{
    let distancia1 = cat1 - mouse;
  }

  if (mouse > cat2){
    let distancia2 = mouse - cat2;
  } else{
    let distancia2 = cat2 - mouse;
  }

  if(distancia1 > distancia2){
    return cat1;
  } else if(distancia2 > distancia1){
    return cat2;
  } else{
    return "os gatos trombam e o rato foge"
  }
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
