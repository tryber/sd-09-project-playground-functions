// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean && secondBoolean) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let text = string.split(' ');
  return text;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let max = 0;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(max < array[index]){
      max = array[index];
      contador = 1;
    }else if(array[index] === max) {
      contador += 1
    }
  }

return contador
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  
  if(distanceCat1 < distanceCat2){
    return 'cat1';

  }else if(distanceCat1 > distanceCat2){
    return 'cat2';

  }else if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge'
  }
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
