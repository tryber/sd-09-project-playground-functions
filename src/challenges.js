// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let wordsArray = [];
  let word = '';

  for (let index = 0; index <= sentence.length; index += 1) {
    if (sentence[index] !== ' ' && index !== sentence.length) {
      word += sentence[index];
    } else {
      wordsArray.push(word);
      word = '';
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winnerPoints = 3;
  return (wins * winnerPoints) + ties;
}

// Desafio 6
function highestNumber(array) {
  let highestN = array[0];
  for (let number in array) {
    if (array[number] > highestN) {
      highestN = array[number];
    }
  }
  return highestN;
}

function highestCount(array) {
  let count = 0;
  for (let number in array) {
    if (array[number] === highestNumber(array)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let number of array) {
    switch (true) {
      case number % 3 === 0 && number % 5 === 0:
        fizzBuzzArray.push('fizzBuzz');
        break;
      case number % 3 === 0:
        fizzBuzzArray.push('fizz');
        break;
      case number % 5 === 0:
        fizzBuzzArray.push('buzz');
        break;
      default:
        fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encodeDecode(string, code) {
  let newString = '';
  for (let letter of string) {
    if (letter in code) {
      newString += code[letter];
    } else {
      newString += letter;
    }
  }
  return newString;
}

function encode(string) {
  const code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = encodeDecode(string, code);
  return encodedString;
}

function decode(string) {
  const code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = encodeDecode(string, code);
  return decodedString;
}

// Desafio 10
function techList(array, name) {
  let arrayTechObjects = [];
  if (array.length !== 0) {
    for (let tech of array.sort()) {
      let techObject = {
        tech,
        name,
      };
      arrayTechObjects.push(techObject);
    }
    return arrayTechObjects;
  }
  return 'Vazio!';
}

// Desafio 11
function validateNumbers(num, count) {
  let validate = true;
  if (count >= 3 || num < 0 || num > 9) {
    validate = false;
  }
  return validate;
}

function countRepeatedNumbers(array, number) {
  let count = 0;
  let highestRepeatedCount = 0;
  for (let num of array) {
    if (num === number) {
      count += 1;
    }
    if (highestRepeatedCount < count) {
      highestRepeatedCount = count;
    }
  }
  return highestRepeatedCount;
}

function checkNumbers(array) {
  let validate = true;
  let check = true;
  for (let number of array) {
    let count = countRepeatedNumbers(array, number);
    validate = validateNumbers(number, count);
    if (validate === false) {
      check = false;
    }
    count = 0;
  }
  return check;
}

function validateIfPossiblePhoneNumber(array) {
  if (array.length === 11) {
    if (checkNumbers(array)) {
      return true;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}

function generatePhoneNumber(array) {
  if (validateIfPossiblePhoneNumber(array) === true) {
    const joinedArray = array.join('');
    let DDD = joinedArray.slice(0, 2);
    let firstPart = joinedArray.slice(2, 7);
    let secondPart = joinedArray.slice(7, 11);
    let numero = `(${DDD}) ${firstPart}-${secondPart}`;
    return numero;
  }
  return validateIfPossiblePhoneNumber(array);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let numberString = string.replace(/\D/g, '');
  let total = 0;

  for (let index = 0; index < numberString.length; index += 1) {
    total += parseInt(numberString[index], 10);
  }

  if (total > 1) {
    return `${total} copos de água`;
  }
  return `${total} copo de água`;
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
};
