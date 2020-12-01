// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true 
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  resultado = base * height / 2 
  return resultado
}


// Desafio 3
function splitSentence(string) {
  let  array = [];
  let separacao = '';
  for(i = 0; i < string.length; i = i + 1) {
    if(string[i] != ' ') {
      separacao = separacao + string[i];
    }else {
      array.push(separacao);
      separacao = '';
    } 
  }
  array.push(separacao);
  return array;
}

// Desafio 4
function concatName(arrs) {
  let concatenando = arrs[arrs.length -1]
  concatenando = concatenando +  ', ' + arrs[0];
  return concatenando
}



// Desafio 5
function footballPoints(wins, ties) {
 return wins * 3 + ties
  
  
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
