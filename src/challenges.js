// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
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
  let pointsForWin = 3;
  let result = (wins * pointsForWin) + ties;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let greaterNumber = numbers[0];
  let counter = 1;
  for (let i in numbers) {
    if (greaterNumber < numbers[i]) {
      greaterNumber = numbers[i];
    }
    if (greaterNumber === numbers[i]) {
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
function encode(string) {
  for (let i in string) {
    if (string[i] === 'a') {
      string = string.replace(/a/g, '1');
    } else if (string[i] === 'e') {
      string = string.replace(/e/g, '2');
    } else if (string[i] === 'i') {
      string = string.replace(/i/g, '3');
    } else if (string[i] === 'o') {
      string = string.replace(/o/g, '4');
    } else if (string[i] === 'u') {
      string = string.replace(/u/g, '5');
    }
  }
  return string;
}

function decode(numbers) {
  for (let j in numbers) {
    if (numbers[j] === '1') {
      numbers = numbers.replace(/1/g, 'a');
    } else if (numbers[j] === '2') {
      numbers = numbers.replace(/2/g, 'e');
    } else if (numbers[j] === '3') {
      numbers = numbers.replace(/3/g, 'i');
    } else if (numbers[j] === '4') {
      numbers = numbers.replace(/4/g, 'o');
    } else if (numbers[j] === '5') {
      numbers = numbers.replace(/5/g, 'u');
    }
  }
  return numbers;
}

// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let info = [];
  techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    let newInfo = { tech: techs[i], name };
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
