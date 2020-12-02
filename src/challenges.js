// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
//console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
//console.log(calcArea(35, 58));

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let wordArray = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] !== ' ' && index < phrase.length) {
      word += phrase[index];
    } else {
      wordArray.push(word);
      word = '';
    }
  }
  return wordArray;
}
//console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(ahei) {
  // seu código aqui
  let lastFirst = ahei[ahei.length-1] + ', ' + ahei[0];
  return lastFirst;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins*3)+ties);
}
//console.log(footballPoints(5, 3));

// Desafio 6
function highestCount(aheiNumbers) {
  // seu código aqui
  let maior = [0, 0];
  for (index = 0; index < aheiNumbers.length; index += 1) {
    if (aheiNumbers[index] >= aheiNumbers[(aheiNumbers.length-1)-index] && aheiNumbers[index] >= maior[0]) {
        if (aheiNumbers[index] === maior[0]) {
          maior[0] = aheiNumbers[index];
          maior[1] += 1; 
        } else {
          maior[0] = aheiNumbers[index];
          maior[1] = 1;
        }
    }
  }
  return maior[1];
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = mouse - cat1;
  cat2 = mouse - cat2;
  if (cat1 < 0){
    cat1 = cat1 * -1;
  }
  if (cat2 < 0){
    cat2 = cat2 * -1;
  }
  if (cat1  === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if(cat1 < cat2){
    return 'cat1'; 
  } else {
    return 'cat2'; 
  }
}
//console.log(catAndMouse(8, 12, 4))

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
