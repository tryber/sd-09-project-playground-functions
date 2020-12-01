//COMEÇANDO UHUU!
// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let splitted=phrase.split(' ')
  return splitted;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let received=[];
  let switched=[];
  for (i in array){
    if (i==0){
      received.push=array[i];
    } else if (i==array.length-1){
      received.push=array[i];
    }
  }
  switched.push=received[1];
  switched.push=received[0];
  let result=switched.join(',');
  return result;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
let points = 3*wins + ties;
return points;
}

// Desafio 6
function highestCount(numbArray) {
  // seu código aqui
  let bigOne = 0;
  let counter = 0;
  for (i in numbArray){
    if (bigOne < numbArray[i]){
        bigOne = numbArray[i];
    }
  }
  for (j in numbArray){
    if (bigOne == numbArray[j]){
        counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(cat1,cat2,mouse) {
  // seu código aqui
  for (i in mouse) {
    if (i==cat1) {
      if (cat1==cat2){
        return 'os gatos trombam e o rato foge';
      }
      return 'cat1';
    } else if (i==cat2){
      return 'cat2';
    }
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
