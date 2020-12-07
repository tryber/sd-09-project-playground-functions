// Desafio 1 OK
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 OK
function calcArea(base, height) {
  // seu código aqui
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3 OK
function splitSentence(phrase) {
  // seu código aqui
  let phraseString = phrase;
  let result = phraseString.split(' ');

  return result;
}

// Desafio 4 Ok
function concatName(words) {
  // seu código aqui
  return `${words[words.length - 1]}, ${words[0]}`;
}

// Desafio 5 OK
function footballPoints(wins, ties) {
  // seu código aqui
  let totalNumber = ((wins * 3) + ties);

  return totalNumber;
}

// Desafio 6 OK
function highestCount(arrayNumber) {
  // seu código aqui
  let repeatNumber = 0;
  let maxNumber = Math.max(...arrayNumber);
  for (let count = 0; count < arrayNumber.length; count += 1) {
    if (arrayNumber[count] === maxNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7 OK
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let numberCat1 = Math.abs(cat1 - mouse);
  let numberCat2 = Math.abs(cat2 - mouse);
  if (numberCat1 === numberCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (numberCat1 < numberCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8 Ok
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let count of array) {
    switch (true) {
      case count % 3 === 0 && count % 5 === 0:
        result.push('fizzBuzz');
        break;
      case count % 3 === 0:
        result.push('fizz');
        break;
      case count % 5 === 0:
        result.push('buzz');
        break;
      default:
        result.push('bug!');
        break;
    }
  }
  return result;
}

// Desafio 9 Ok
function encode(transLettersNumbers) {
  // seu código aqui
  let number = '';
  for (let index = 0; index < transLettersNumbers.length; index += 1) {
    switch (transLettersNumbers[index]) {
      case 'a':
        number += 1;
        break;
      case 'e':
        number += 2;
        break;
      case 'i':
        number += 3;
        break;
      case 'o':
        number += 4;
        break;
      case 'u':
        number += 5;
        break;
      default:
        number += transLettersNumbers[index];
        break;
    }
  }
  return number;
}
function decode(transNumbersLetter) {
  // seu código aqui
  let string = '';
  for (let index = 0; index < transNumbersLetter.length; index += 1) {
    switch (transNumbersLetter[index]) {
      case '1':
        string += 'a';
        break;
      case '2':
        string += 'e';
        break;
      case '3':
        string += 'i';
        break;
      case '4':
        string += 'o';
        break;
      case '5':
        string += 'u';
        break;
      default:
        string += transNumbersLetter[index];
        break;
    }
  }
  return string;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let obj = [];
  let array = tech.sort();
  if (tech.length < 1) {
    return 'Vazio!'
  }
  for (let index = 0; index < tech.length; index += 1) {
    let x = { tech: array[index], name };
    obj.push(x);
  }
  return obj;
}

// Desafio 11
function numberequal11(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return false;
  }
  return true;
}
function numberLess0(arrayNumber) {
  for (let value of arrayNumber) {
    if (value < 0 || value > 9) {
      return false;
    }
  }
  return true;
}
function verificationNumber1(arrayNumber, index, result) {
  let count = 0;
  for (let value2 of arrayNumber) {
    if (index === value2) {
      count += 1;
    }
    if (count > 2) {
      result = false;
    }
  }
  return result
}

function verificationNumber2(arrayNumber) {
  let result = true;
  for (let index of arrayNumber) {
    result = verificationNumber1(arrayNumber, index, result);
  }
  return result;
}
function transformeArrayString(arrayNumber) {
  let stringNumber = '';
  for (let number of arrayNumber) {
    stringNumber += number;
  }
  return stringNumber;
}
function generatePhoneNumber(arrayNumber) {
  // seu código aqui
  let stringNumber = transformeArrayString(arrayNumber);
  if (numberequal11(arrayNumber) === true) {
    if (numberLess0(arrayNumber) === false || verificationNumber2(arrayNumber) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let inittialNumbers = stringNumber.slice(0, 2);
    let middlesNumbers = stringNumber.slice(2, 7);
    let finalNumbers = stringNumber.slice(7, 12);
    return `(${inittialNumbers}) ${middlesNumbers}-${finalNumbers}`;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = true;
  let totalLines = lineA + lineB + lineC;
  let arraylines = [lineA, lineB, lineC];
  for (let value of arraylines) {
    if (value > Math.abs(totalLines - value)) {
      result = false;
    }
  }
  return result;
}

// Desafio 13
function hydrate(arrayDrink) {
  // seu código aqui
  let water = arrayDrink.split(/\D/g).join('');
  let result = 0;
  for (let i of water) {
    result += parseInt(i, 10);
  }
  if (result <= 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
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
