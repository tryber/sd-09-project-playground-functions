// Projeto 2!!

// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
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
  return array[array.length - 1] + array[0];
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  let count = 0;

  for (let number in array) {
    if (highestNumber === array[number]) {
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

  if (cat1Dist === cat2Dist) {
    whoHadLunch = 'os gatos trombam e o rato foge';
  } else if (cat1Dist < cat2Dist) {
    whoHadLunch = 'cat1';
  } else {
    whoHadLunch = 'cat2';
  }
  return whoHadLunch;
}
// console.log(catAndMouse(0, 10, -5));

// Desafio 8
function fizzBuzz(array) {
  let resultString = '';
  for (let number in array) {

    if (array[number] % 3 !== 0 && array[number] % 5 !== 0) {
      console.log('bug!');
    } else {
      console.log('fizzBuzz');
    }

    if (array[number] % 3 === 0 && array[number] % 5 !== 0) {
      console.log('fizz');
    } else if (array[number] % 3 !== 0 && array[number] % 5 === 0) {
      console.log('buzz');
    }    
  }
}
// fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(string) {
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let encrypt = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      encrypt = encrypt.replace(letters[i], numbers[i]);
    }
  }
  return encrypt;
}
// console.log(encode('Marcuseaio'));

function decode(string) {
  let numbers = ['1', '2', '3', '4', '5'];
  let letters = ['a', 'e', 'i', 'o', 'u'];
  let decrypt = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      decrypt = decrypt.replace(numbers[i], letters[i]);
    }
  }
  return decrypt;
}
// console.log(decode('M1rc5s'));

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
