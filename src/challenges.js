// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayOfStrigs) {
  let concatenatedName = [];
  concatenatedName.push(arrayOfStrigs[arrayOfStrigs.length - 1]);
  concatenatedName.push(arrayOfStrigs[0]);

  return concatenatedName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highest;
  let count = 0;
  for(let index in arrayOfNumbers){
    if(index == 0){
      highest = arrayOfNumbers[index];
    }else if(arrayOfNumbers[index] > highest){
      highest = arrayOfNumbers[index];
    }
  }
  for(let index in arrayOfNumbers){
    if(highest == arrayOfNumbers[index]){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(cat1 - mouse > cat2 - mouse){
    return 'cat1';
  }else if(cat2 - mouse > cat1 - mouse){
    return 'cat2';
  }else{
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  for(let index in arrayOfNumbers){
    if(arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0){
      arrayOfNumbers[index] = 'fizzBuzz';
    }else if(arrayOfNumbers[index] % 3 === 0){
      arrayOfNumbers[index] = 'fizz';
    }else if(arrayOfNumbers[index] % 5 === 0){
      arrayOfNumbers[index] = 'buzz';
    }else{
      arrayOfNumbers[index] = 'bug!';
    }
  }
  return arrayOfNumbers;
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