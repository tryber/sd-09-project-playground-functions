/*
Projeto 2 - Playground Functions!

Tiago Yoneda
https://github.com/tiago-yoneda
*/

// Desafio 1
function compareTrue(bool1, bool2) {
  return ( bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
function splitSentence(arraySource) {
  let newArray = arraySource.split(' ');
  return newArray;
}

// Desafio 4
function concatName(arraySource) {
  let newArray = [];
  newArray.push(arraySource[arraySource.length-1],arraySource[0]);
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins+ties);
}

// funcao auxiliar para 6
function findHigher(array){
  let auxNum = 0;
  for ( let item of array){
    if (item >= auxNum){
      auxNum = item;
    }
  }
  return auxNum;
}

// Desafio 6
function highestCount(array) {
  let highest = findHigher(array);
  let counter = 0;
  for ( let item of array){
    if (highest === item){
      counter +=1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse-cat1);
  let dist2 = Math.abs(mouse-cat2);

  if ( dist1 === dist2){
    return 'os gatos trombam e o rato foge';
  }
  else if (dist1 < dist2){
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz() {
  let newArray = []
  for ( let item of array){
    if ( item%15 == 0){
      newArray.push('fizzBuzz');
    }
    else if ( item%3 == 0){
      newArray.push('fizz');
    }
    else if ( item%5 == 0){
      newArray.push('Buzz');
    }
    else{
      newArray.push('bug!');
    }
  }
  return newArray;
}

// objeto para ajudar o desafio 9
const correspondencia = {
  a:1,
  e:2,
  i:3,
  o:4,
  u:5
}
// funcao auxiliar replaceAll
function replaceAll(string, busca, troca){
  newString = string.split(busca).join(troca);
  return newString;
}

// Desafio 9
function encode(string) {
  
  for (let item in correspondencia){
    string = replaceAll(string, item, correspondencia[item]);
  }
  return string;
}

function decode(string) {
  for (let item in correspondencia){
    string = replaceAll(string, correspondencia[item], item);
  }
  return string;
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
