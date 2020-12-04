// Iniciando Projeto #02

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array.shift();
  let lastIndex = array.pop();
  return `${lastIndex}, ${firstIndex}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = 0;
  for (let index in numbers) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
    let repetitionCounterOfHighestNumber = 0;
    for (let index2 in numbers) {
      if (numbers[index2] === highestNumber) {
        repetitionCounterOfHighestNumber += 1;
      }
    }
    return repetitionCounterOfHighestNumber;
  }
  return highestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let arrayOfStrings = [];
  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings[index] = 'fizzBuzz';
    } else if (arrayOfNumbers[index] % 3 === 0) {
      arrayOfStrings[index] = 'fizz';
    } else if (arrayOfNumbers[index] % 5 === 0) {
      arrayOfStrings[index] = 'buzz';
    } else {
      arrayOfStrings[index] = 'bug!';
    }
  }
  return arrayOfStrings;
}

// Desafio 9
function encode(string) {
  
}
function decode() {
  
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
