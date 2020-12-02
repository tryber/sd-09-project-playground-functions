// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  let currentWord = '';
  let textArray = [];
  let lastIndex = (text.length - 1).toString();
  for (let charIndex in text) {
    let char = text[charIndex];
    if (char === ' ') {
      textArray.push(currentWord);
      currentWord = '';
    } else if (charIndex === lastIndex) {
      currentWord += char;
      textArray.push(currentWord);
    } else {
      currentWord += char;
    }
  }
  return textArray;
}

// Desafio 4
function concatName(inputArray) {
  let firstItem = inputArray[0];
  let lastItem = inputArray[inputArray.length - 1];
  return `${lastItem}, ${firstItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(inputArray) {
  let counter = {};
  let highestNumber;
  for (let index in inputArray) {
    let number = inputArray[index];
    if (!(number in counter)) {
      counter[number] = 1;
    } else {
      counter[number] += 1;
    }
    if (index === '0' || number > highestNumber) {
      highestNumber = number;
    }
  }
  return counter[highestNumber];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let output = '';
  if (cat1Distance < cat2Distance) {
    output = 'cat1';
  } else if (cat1Distance > cat2Distance) {
    output = 'cat2';
  } else {
    output = 'os gatos trombam e o rato foge';
  }
  return output;
}

// Desafio 8
function getFizzBuzz(number) {
  let remainderBy3 = number % 3;
  let remainderBy5 = number % 5;
  let output = '';
  if ((remainderBy3 === 0) && (remainderBy5 === 0)) {
    output = 'fizzBuzz';
  } else if (remainderBy3 === 0) {
    output = 'fizz';
  } else if (remainderBy5 === 0) {
    output = 'buzz';
  } else {
    output = 'bug!';
  }
  return output;
}

function fizzBuzz(inputArray) {
  for (let index in inputArray) {
    let number = inputArray[index];
    let resultStr = getFizzBuzz(number);
    inputArray[index] = resultStr;
  }
  return inputArray;
}

// Desafio 9
function encode(text) {
  let dictionary = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let output = '';
  for (let charIndex in text) {
    let char = text[charIndex];
    if (char in dictionary) {
      output += dictionary[char];
    } else {
      output += char;
    }
  }
  return output;
}

function decode(text) {
  let dictionary = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let output = '';
  for (let charIndex in text) {
    let char = text[charIndex];
    if (char in dictionary) {
      output += dictionary[char];
    } else {
      output += char;
    }
  }
  return output;
}

// Desafio 10
function ascOrder(array) {
  for (let cycles = array.length - 1; cycles > 0; cycles -= 1) {
    for (let currentIndex = 0; currentIndex < cycles; currentIndex += 1) {
      let nextIndex = currentIndex + 1;
      if (array[currentIndex] > array[nextIndex]) {
        let first = array[nextIndex];
        array[nextIndex] = array[currentIndex];
        array[currentIndex] = first;
      }
    }
  }
  return array;
}

function techList(array, name) {
  if (array.length > 0) {
    array = ascOrder(array);
    let output = [];
    for (let index in array) {
      let tech = array[index];
      let obj = {tech, name};
      output.push(obj);
    }
    return output;
  } 
  return 'Vazio!';
}

// Desafio 11
function getIndexFormat(index) {
  let output = '';
  let formats = {
    0: '(',
    2: ') ',
    7: '-',
  };
  if (index in formats) {
    output = formats[index];
  }
  return output;
}

function countItem(item, counter) {
  if (item in counter) {
    counter[item] += 1;
  } else {
    counter[item] = 1;
  }
  return counter;
}

function validateItem(item, itemCount) {
  return ((itemCount > 2) || (item < 0) || (item > 9));
}

function handlePhoneArray(array) {
  let output = '';
  let counter = {};
  for (let index in array) {
    let item = array[index];
    counter = countItem(item, counter);
    if (validateItem(item, counter[item])) {
      output = 'não é possível gerar um número de telefone com esses valores';
      break;
    }
    output += getIndexFormat(index) + item;
  }
  return output;
}

function generatePhoneNumber(array) {
  let output = '';
  if (array.length === 11) {
    output = handlePhoneArray(array);
  } else {
    output = 'Array com tamanho incorreto.'
  }
  return output;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)))
}

// Desafio 13
function hydrate(text) {
  // Referência para o código (MDN web docs):
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match

  let numberPattern = /\d+/g;
  let numbersInText = text.match(numberPattern);
  let totalWater = 0;
  let cupsText = 'copo';

  for (let index in numbersInText) {
    let number = parseInt(numbersInText[index]);
    totalWater += number;
  }

  if (totalWater > 1) {
    cupsText += 's'
  }

  return `${totalWater} ${cupsText} de água`;
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
