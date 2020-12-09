// #VQV turma 09!
// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 === true && value2 === true;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
// Used the split method contained in the documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstAndLast = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestNumber(numberList) {
  let highest = 0;
  for (let index in numberList) {
    if (highest < numberList[index]) {
      highest = numberList[index];
    }
  }
  return highest;
}

function highestCount(numberList) {
  let countMode = 0;
  let highest = highestNumber(numberList);
  for (let index in numberList) {
    if (highest === numberList[index]) {
      countMode += 1;
    }
  }
  return countMode;
}

// Desafio 7
// Used this explanation <https://medium.com/@migcoder/reflection-get-variable-name-in-javascript-64ed595701eb> to figure out how to display a variable name
function catAndMouse(mouse, cat1, cat2) {
  let positions = {
    mouse,
    cat1,
    cat2,
  }
  let message = '';
  let distanceCat1 = Math.abs(positions.mouse - positions.cat1);
  let distanceCat2 = Math.abs(positions.mouse - positions.cat2)
  if (distanceCat1 < distanceCat2) {
    message = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
// switch  if() to switch()

function isItdivisibleByThreeOrFive(number) {
  let byFiveAndThree = 'fizzBuzz';
  let byThree = 'fizz';
  let byFive = 'buzz';
  let byNone = 'bug!';
  if (number % 3 === 0 && number % 5 === 0) {
    return byFiveAndThree;
  } else if (number % 5 === 0) {
    return byFive;
  } else if (number % 3 === 0) {
    return byThree;
  } else {
    return byNone;
  }
}

function fizzBuzz(numberList) {
  let answer = [];
  for (let index in numberList) {
    answer.push(isItdivisibleByThreeOrFive(numberList[index]));
  }
  return answer;
}

// Desafio 9
function encode(word) {
  let codedWord = '';
  for (let index = 0; index < word.length; index += 1) {
    switch (word[index]) {
      default:
        codedWord += word[index];
        break;
      case 'a':
        codedWord += '1';
        break;
      case 'e':
        codedWord += '2';
        break;
      case 'i':
        codedWord += '3';
        break;
      case 'o':
        codedWord += '4';
        break;
      case 'u':
        codedWord += '5';
    }
  }
  return codedWord;
}

function decode(codedWord) {
  let decodedWord = '';
  for (let index = 0; index < codedWord.length; index += 1) {
    switch (codedWord[index]) {
      default:
        decodedWord += codedWord[index];
        break;
      case '1':
        decodedWord += 'a';
        break;
      case '2':
        decodedWord += 'e';
        break;
      case '3':
        decodedWord += 'i';
        break;
      case '4':
        decodedWord += 'o';
        break;
      case '5':
        decodedWord += 'u';
    }
  }
  return decodedWord;
}

// Desafio 10
function techList(tech, name) {
  // receive an array and a string
  // if array is empty, return 'Vazio!'
  // sort the array
  // put each name and array index in an object sorted by the array index
  // put all objects in one array ordered by the latter sorted array
  if (tech.length === 0) {
    let answer = 'Vazio!';
    return answer;
  }
  tech.sort();
  let arrayReturn = [];
  for (let index = 0; index < tech.length; index += 1) {
    let objectTech = {};
    objectTech.tech = tech[index];
    objectTech.name = name;
    arrayReturn.push(objectTech);
  }
  return arrayReturn;
}

// Desafio 11
function numberLength(number) {
  if (number.length !== 11) {
    let message = 'Array com tamanho incorreto.';
    return message;
  }
}

function numberSize(number) {
  for (let index in number) {
    if (number[index] < 0 || number[index] > 9) {
      let message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
  }
}

function repeatedNumber(number) {
  for (let index in number) {
    let count = 0;
    for (let indexRepeat in number) {
      if (number[indexRepeat] === number[index]) {
        count += 1;
      }
    }
    if (count >= 3) {
      let message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
  }
}
function wrongNumber(number) {
  if (numberLength(number) !== undefined) {
    return numberLength(number);
  }
  if (numberSize(number) !== undefined) {
    return numberSize(number);
  }
  if (repeatedNumber(number) !== undefined) {
    return repeatedNumber(number);
  }
}
function generatePhoneNumber(number) {
  if (wrongNumber(number) !== undefined) {
    return wrongNumber(number);
  }
  let phoneNumber = '';
  for (let index = 0; index < number.length; index += 1) {
    switch (index) {
      case 0:
      phoneNumber += `(${number[index]}`;
        break;
      case 1:
        phoneNumber += `${number[index]}) `;
        break;
      case 6:
        phoneNumber += `${number[index]}-`;
        break;
      default:
        phoneNumber += number[index];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC;
  let checkB = lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC;
  let checkC = lineC > Math.abs(lineB - lineA) && lineC < lineA + lineB;
  let allCheck = checkA && checkB && checkC;
  return allCheck;
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
