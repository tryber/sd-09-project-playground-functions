// Desafio 1
function compareTrue(value1, value2) {
  return ((value1 === true) && (value2 === true));
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
function biggestNumber(numbers) {
  let biggest = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggest) {
      biggest = numbers[index];
    }
  }
  return biggest;
}

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
  const distance1 = Math.abs(cat1 - mouse);
  const distance2 = Math.abs(cat2 - mouse);
  let closerCat;
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
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case ((array[index] % 3 === 0) && (array[index] % 5 === 0)):
        array[index] = 'fizzBuzz';
        break;
      case (array[index] % 3 === 0):
        array[index] = 'fizz';
        break;
      case (array[index] % 5 === 0):
        array[index] = 'buzz';
        break;
      default:
        array[index] = 'bug!';
        break;
    }
  }
  return array;
}

// Desafio 9
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

function encode(phrase) {
  const input = ['a', 'e', 'i', 'o', 'u'];
  const output = ['1', '2', '3', '4', '5']
  return encodeDecode(phrase, input, output);
}
function decode(phrase) {
  const input = ['1', '2', '3', '4', '5']
  const output = ['a', 'e', 'i', 'o', 'u'];
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
  return (array.length === 11);
}
// SEGUNDO TESTE
function testNumberRange(array) {
  let check = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      check = true;
    }
  }
  return check;
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
// MAIN FUNCTION
function generatePhoneNumber(array) {
  let numberArray = testNumberArray(array);
  let impossibleNumber = testNumberRange(array);
  let repeatedNumbers = testRepeatedNumber(array);
  let phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  if (numberArray === false) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (impossibleNumber === true || biggestNumber(repeatedNumbers) >= 3) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores'
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC));
}

// Desafio 13
function hydrate(string) {
  let array = string.match(/\d+/g);
  let waterCups = 0;
  for (let index = 0; index < array.length; index += 1) {
    waterCups += parseInt(array[index], 10);
  }
  if (waterCups === 1) {
    return `${waterCups} copo de água`;
  }
  return `${waterCups} copos de água`;
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
