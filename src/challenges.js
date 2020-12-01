// Desafio 1
function compareTrue(boolUm, boolDois) {
  if (boolUm === true && boolDois === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  var splitFrase = frase.split(' ');
  return splitFrase;
}

// Desafio 4
function concatName(arrayDeString) {
  let nome = '';
  nome += arrayDeString[arrayDeString.length - 1] + ', ' + arrayDeString[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNum) {
    let maiorNum = 0;
  let contadorDeRep = 0;
  for(let index = 0; index < arrayNum.length; index += 1){
    if (arrayNum[index] > maiorNum){
      maiorNum = arrayNum[index];
    }
  }
  for(let index = 0; index < arrayNum.length; index += 1){
    if (arrayNum[index] == maiorNum){
      contadorDeRep += 1;
    }
  }

  return contadorDeRep;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2) ){
    return 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayBuzz = [];
  for (let index in arrayFizz){
    if (arrayFizz[index] % 3 == 0 && arrayFizz[index] % 5 != 0){
      arrayBuzz[index] = 'fizz';
    } else if (arrayFizz[index] % 3 != 0 && arrayFizz[index] % 5 == 0){
      arrayBuzz[index] = 'buzz';
    } else if (arrayFizz[index] % 3 == 0 && arrayFizz[index] % 5 == 0){
      arrayBuzz[index] = 'fizzBuzz';
    } else {
      arrayBuzz[index] = 'bug!'; 
    } 
  }

  return arrayBuzz;
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
