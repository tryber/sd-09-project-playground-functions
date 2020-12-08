// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let commaSpace = ', ';
  return (array[array.length - 1] + commaSpace + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let result = wins + ties;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let greaterNumber = 0;
  let counter = 0;
  for (let i in numbers) {
    if (greaterNumber < numbers[i]) {
      greaterNumber = numbers[i];
    }
  }
  for (let i in numbers) {
    if (numbers[i] === greaterNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 'os gatos trombam e o rato foge';
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 < cat2) {
    result = 'cat1';
  }
  if (cat2 < cat1) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let i in numbers) {
    if (numbers[i] % 15 === 0) {
      numbers[i] = 'fizzBuzz';
    } else if (numbers[i] % 3 === 0) {
      numbers[i] = 'fizz';
    } else if (numbers[i] % 5 === 0) {
      numbers[i] = 'buzz';
    } else {
      numbers[i] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(char) {
  for (let i = 0; i < char.length; i += 1) {
    if (char[i] === 'a') {
      char = char.replace(/a/g, '1');
    } else if (char[i] === 'e') {
      char = char.replace(/e/g, '2');
    } else if (char[i] === 'i') {
      char = char.replace(/i/g, '3');
    } else if (char[i] === 'o') {
      char = char.replace(/o/g, '4');
    } else if (char[i] === 'u') {
      char = char.replace(/u/g, '5');
    }
  }
  return char;
}

function decode(number) {
  for (let j = 0; j < number.length; j += 1) {
    if (number[j] === '1') {
      number = number.replace(/1/g, 'a');
    } else if (number[j] === '2') {
      number = number.replace(/2/g, 'e');
    } else if (number[j] === '3') {
      number = number.replace(/3/g, 'i');
    } else if (number[j] === '4') {
      number = number.replace(/4/g, 'o');
    } else if (number[j] === '5') {
      number = number.replace(/5/g, 'u');
    }
  }
  return number;
}

// Desafio 10
function techList(array, name) {
  if (array == '') {
    return 'Vazio!';
  }
  let info = [];
  array.sort();
  for (let i = 0; i < array.length; i += 1) {
    let newInfo = { tech: array[i], name };
    info.push(newInfo);
  }
  return info;
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
