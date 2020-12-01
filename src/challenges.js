// Projeto 2!!

// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2) ? true : false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(20, 40));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]} ${array[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(array) {
  highestNumber =  Math.max(...array);
  let count = 0;
  
  for (number in array) {
    if (highestNumber == array[number]) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whoHadLunch = '';
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  
  if (cat1Dist == cat2Dist) {
    whoHadLunch = 'os gatos trombam e o rato foge';
  }else if (cat1Dist < cat2Dist) {
    whoHadLunch = 'cat1';
  }else {
    whoHadLunch = 'cat2';
  }
  return whoHadLunch;
}
// console.log(catAndMouse(0, 10, -5));

// Desafio 8
function fizzBuzz(array) {
  let resultString = '';
  for (number in array) {
    if (array[number] % 3 != 0 && array[number] % 5 != 0) {
      resultString = 'bug!';
    }else if (array[number] % 3 === 0 && array[number] % 5 === 0) {
      resultString = 'fizzBuzz';
    }else if (array[number] % 3 === 0 && array[number] % 5 != 0) {
      resultString = 'fizz';
    }else if (array[number] % 3 != 0 && array[number] % 5 === 0) {
      resultString = 'buzz';
    }
    console.log(resultString);
  }
}
// fizzBuzz([2, 15, 7, 9, 45]);

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
