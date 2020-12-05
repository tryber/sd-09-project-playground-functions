// Playground Functions - Henrique Brito Elias
// Desafio 1
function compareTrue(firstValue, secondValue) {
  let result;
  if (firstValue === true && secondValue === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return (`${names[names.length - 1]}, ${names[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let index = 1; index <= wins; index += 1) {
    points += 3;
  }
  for (let index = 1; index <= ties; index += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let biggestNumber = 0;
  let repeatCount = 0;

  for (let index in numbers) {
    if (biggestNumber < numbers[index]) {
      biggestNumber = numbers[index];
    }
  }
  for (let index in numbers) {
    if (biggestNumber === numbers[index]) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (numbers[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (numbers[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(phrase) {
  let coded = phrase
  .replace(/a/g, 1)
  .replace(/e/g, 2)
  .replace(/i/g, 3)
  .replace(/o/g, 4)
  .replace(/u/g, 5);
  return coded;
}

function decode(phrase) {
  let decoded = phrase
  .replace(/1/g, 'a')
  .replace(/2/g, 'e')
  .replace(/3/g, 'i')
  .replace(/4/g, 'o')
  .replace(/5/g, 'u');
  return decoded;
}

// Desafio 10
function techList(tech, name) {
  let technology = [];
  let result;

  for (let index in tech.sort()) {
    technology.push({
      tech: tech[index],
      name: name,
    });
  }
  if (technology.length === 0) {
    result = 'Vazio!';
  } else {
    result = technology;
  }
  return result;
}

// Desafio 11
function checkNumbers(numbers) {
  let timesAppeared = 0;
  let repeatCount = 0;
  let result;
  if (numbers.length !== 11) {
    result = ('Array com tamanho incorreto.');
  } else {
    for (let index = 0; index < numbers.length; index += 1) {
      for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] === numbers[index2]) {
          timesAppeared += 1;
        }
      }
      if (repeatCount < timesAppeared) {
        repeatCount = timesAppeared;
      }
      timesAppeared = 0;
    }
    if (repeatCount > 2) {
      result = ('não é possível gerar um número de telefone com esses valores');
    } else {
      result = numbers;
    }
  }
  return result;
}

function generatePhoneNumber(numbers) {
  let checkedNumbers = checkNumbers(numbers);
  let result;
  if (checkedNumbers === 'não é possível gerar um número de telefone com esses valores' || checkedNumbers === 'Array com tamanho incorreto.') {
    result = checkedNumbers;
  } else {
    for (let index = 0; index < numbers.length; index += 1) {
      if (checkedNumbers[index] > 9 || checkedNumbers[index] < 0) {
        result = ('não é possível gerar um número de telefone com esses valores');
        break;
      } else {
          result = `(${checkedNumbers.slice(0, 2).join('')}) ${checkedNumbers.slice(2, 7).join('')}-${checkedNumbers.slice(7).join('')}`;
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(order) {
  let numbers = order.match(/\d+/g).map(Number);
  let waterCups = 0;
  let result;

  for (let index in numbers) {
    waterCups += numbers[index]
  }

  if (waterCups === 1) {
    result = `${waterCups} copo de água`;
  } else {
    result = `${waterCups} copos de água`;
  }
  return result;
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
