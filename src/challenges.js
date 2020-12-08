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
  let encodedString = '';
  for (let index in string) {
    if (string[index] === 'a') {
      encodedString += '1';
    } else if (string[index] === 'e') {
      encodedString += '2';
    } else if (string[index] === 'i') {
      encodedString += '3';
    } else if (string[index] === 'o') {
      encodedString += '4';
    } else if (string[index] === 'u') {
      encodedString += '5';
    } else {
      encodedString += string[index];
    }
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';
  for (let index in string) {
    if (string[index] === '1') {
      decodedString += 'a';
    } else if (string[index] === '2') {
      decodedString += 'e';
    } else if (string[index] === '3') {
      decodedString += 'i';
    } else if (string[index] === '4') {
      decodedString += 'o';
    } else if (string[index] === '5') {
      decodedString += 'u';
    } else {
      decodedString += string[index];
    }
  }
  return decodedString;
}

// Desafio 10
function techList(array, name) {
  let arrayOfTechs = [];
  if (array.length !== 0) {
    for (let tech of array.sort()) {
      let techObject = {
        tech,
        name,
      };
      arrayOfTechs.push(techObject);
    }
    return arrayOfTechs;
  }
  return 'Vazio!';
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
