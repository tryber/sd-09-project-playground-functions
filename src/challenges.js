// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let stringSeparated = string.split(separator);
  return stringSeparated;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function countNumber(numberMax, array) {
  let count = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (numberMax === array[key]) {
      count += 1
    }
  }
  return count;
}

function highestCount(array) {
  // seu código aqui
  let numberMax = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] > numberMax) {
      numberMax = array[key];
    }
  }
  let count = countNumber(numberMax, array);
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  const newArray = [];

  array.forEach((element) => {
    if (element % 5 === 0 && element % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (element % 3 === 0) {
      newArray.push('fizz');
    } else if (element % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  });

  return newArray;
}

// Desafio 9
const code = (string, changeFor, switchTo) => {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === changeFor) {
      newString += switchTo;
    } else {
      newString += string[index];
    }
  }
  return newString;
}

function encode(string) {
  // seu código aqui
  string = code(string, 'e', '2');
  string = code(string, 'u', '5');
  string = code(string, 'i', '3');
  string = code(string, 'a', '1');
  string = code(string, 'o', '4');

  return string;
}

function decode(string) {
  // seu código aqui
  string = code(string, '1', 'a');
  string = code(string, '4', 'o');
  string = code(string, '2', 'e');
  string = code(string, '5', 'u');
  string = code(string, '3', 'i');

  return string;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < array) {
      let object = { tech: array[index], name }
      newArray.push(object)
    }
  }
  newArray.sort((a, b) => a.tech - b.tech);

  if (newArray.length > 0) {
    return newArray;
  } else {
    newArray = 'Vazio!'
  }
  return newArray;
}

// Desafio 11
function repeatedNumber(array) {
  return array.map((element) => {
    return array.reduce((count, number) => {
      if (number === element) {
        count += 1
      }
      return count;
    }, 0);
  }).some((number) => number >= 3);
}

function lengthArray(array) {
  let verificando = false
  if (array.length === 0) {
    verificando = true
  } else if (array.length !== 11) {
    verificando = true
  }
  return verificando
}

function numberArray(array) {
  let verificacao = false
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      verificacao = true
    }
  }
  return verificacao
}

function generatePhoneNumber(array) {
  // seu código aqui
  let phoneNumber = '';
  for (let index = 0; index <= array.length; index += 1) {
    if (lengthArray(array)) {
      phoneNumber = 'Array com tamanho incorreto.'
    } else if (numberArray(array) || repeatedNumber(array)) {
      phoneNumber = 'não é possível gerar um número de telefone com esses valores'
    } else if (array.length === 11) {
      phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
    }
  }
  return phoneNumber;
}

// Desafio 12
function checkA(lineA, lineB, lineC) {
  let resultA = Math.abs(lineB - lineC)
  let sumA = lineB + lineC;
  let array = [resultA, sumA, lineA];

  array.sort((a, b) => a + b);

  if (array[0] === resultA) {
    return true;
  }
  return false;
}

function checkB(lineA, lineB, lineC) {
  let resultB = Math.abs(lineA - lineC)
  let sumB = lineA + lineC
  if (resultB < lineB && resultB < sumB) {
    return true
  }
  return false
}

function checkC(lineA, lineB, lineC) {
  let resultC = Math.abs(lineA - lineB);
  let sumC = lineA + lineB;

  let array = [resultC, sumC, lineC];

  return array.some(element => !array.every(line => line > element));
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (checkA(lineA, lineB, lineC) && checkB(lineA, lineB, lineC) && checkC(lineA, lineB, lineC)) {
    return true
  }
  return false
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let sumNumbers = 0;
  let numbers = string.match(/\d+/g);
  let returnString = '';

  for (let index = 0; index < numbers.length; index += 1) {
    sumNumbers += parseInt(numbers[index], 10)
  }
  if (sumNumbers === 1) {
    returnString = `${sumNumbers} copo de água`
  } else {
    returnString = `${sumNumbers} copos de água`
  }
  return returnString
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
