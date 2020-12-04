// Minhas funções

function biggestNumber(numbers) {
  let biggest = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggest) {
      biggest = numbers[index];
    }
  }
  return biggest;
}

function encodeDecode(string, input, output) {
  let newString = '';

  for (let key of string) {
    if (key === input[0]) {
      newString += output[0];
    } else if (key === input[1]) {
      newString += output[1];
    } else if (key === input[2]) {
      newString += output[2];
    } else if (key === input[3]) {
      newString += output[3];
    } else if (key === input[4]) {
      newString += output[4];
    } else {
      newString += key;
    }
  }
  return newString;
}

// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let total = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber(array)) {
      total += 1;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closerCat;
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    closerCat = 'cat1';
  } else if (distance2 < distance1) {
    closerCat = 'cat2';
  } else if (distance1 === distance2) {
    closerCat = 'os gatos trombam e o rato foge';
  }
  return closerCat;
}

// Desafio 8
function fizzBuzz(array) {
  for (let key in array) {
    if ((array[key] % 3 === 0) && (array[key] % 5 === 0)) {
      array[key] = 'fizzBuzz';
    } else if (array[key] % 3 === 0) {
      array[key] = 'fizz';
    } else if (array[key] % 5 === 0) {
      array[key] = 'buzz';
    } else {
      array[key] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(phrase) {
  let input = ['a', 'e', 'i', 'o', 'u'];
  let output = ['1', '2', '3', '4', '5']
  return encodeDecode(phrase, input, output);
}
function decode(phrase) {
  let input = ['1', '2', '3', '4', '5']
  let output = ['a', 'e', 'i', 'o', 'u'];
  return encodeDecode(phrase, input, output);
}

// Desafio 10
function techList(array, name) {
  if (array.length > 0) {
    let newArray = [];
    array.sort();

    for (let index = 0; index < array.length; index += 1) {
      newArray[index] = {
        tech: array[index],
        name,
      }
    }
    return newArray;
  }
  return 'Vazio!'
}

// Desafio 11
// PRIMEIRO TESTE
function testNumberArray(array) {
  if (array.length === 11) {
    return true;
  }
  return false;
}
// SEGUNDO TESTE
function testNumberRange(array) {
  let test = false;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      test = true;
    }
  }
  return test;
}
// TERCEIRO TESTE
function testRepeatedNumber(array) {
  let repeatedNumbers = [];

  for (let number1 of array) {
    let counter = 0;
    for (let number2 = 0; number2 < array.length; number2 += 1) {
      if (number1 === array[number2]) {
        counter += 1;
      }
    }
    repeatedNumbers.push(counter);
  }
  return repeatedNumbers;
}
function generatePhoneNumber(array) {
  let numberArray = testNumberArray(array);
  let possibleNumber = testNumberRange(array);
  let repeatedNumbers = testRepeatedNumber(array);

  if (possibleNumber === false && biggestNumber(repeatedNumbers) < 3) {
    if (numberArray === true) {
      let phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
      return phoneNumber;
    } else {
      return 'Array com tamanho incorreto.';
    }
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
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
