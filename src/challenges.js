//Teste
// Desafio 1 OK
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } 
  return false;
  }
console.log(compareTrue(true, true));

// Desafio 2 OK
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 8));

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(" ");
  return arrayString;
}

// Desafio 4 OK
function concatName(frase) {
  let answer = (frase[frase.length-1] + ", " + frase[0]);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winpoint = 3;
  let result = (wins*winpoint)+ties;
  return result;
}

// Desafio 6
function highestNumber(array) {
  let index = 0;
  let highest = array[0];
    for (index = 0; index < array.length; index ++) {
      if (highest < array[index]) {
        highest = array[index];
      }
    }
  return highest;
}

let highest = highestNumber(array);

function highestCount(array) {
  let index = 0;
  let counter = 0;
  for (index = 0; index < array.length; index ++) {
    if (highest === array[index]) {
      counter = counter + 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = (cat1 - mouse);
  let distance2 = (cat2 - mouse);
  if (distance1 > distance2) {
    return "cat1";
  } else if (distance1 < distance2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  let index = 0
  for (index = 0; index < array.length; index ++) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
        array[index] = "fizzBuzz";
    } else if (array[index] % 3 == 0) {
      array[index] = "fizz";
    } else if (array[index] % 5 == 0) {
      array[index] = "buzz";
    } else {
    array[index] = "bug!";
    }
  }
  return array;
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
