// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

// Desafio 4
function concatName(array) {
  let str = `${array[array.length - 1]}, ${array[0]}`;
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let higherNum = 0;
  let count = 0;
  higherNum = Math.max(...array);
  for (let index = 0; index < array.length; index += 1) {
    if (higherNum === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if ((Math.abs(cat1 - mouse)) === Math.abs((cat2 - mouse))) {
    result = 'os gatos trombam e o rato foge';
  } else if ((Math.abs(cat1 - mouse)) < Math.abs((cat2 - mouse))) {
    result = 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > Math.abs((cat2 - mouse))) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case ((array[index] % 3 === 0) && (array[index] % 5 === 0)):
        result.push('fizzBuzz');
        break;
      case (array[index] % 5 === 0):
        result.push('buzz');
        break;
      case (array[index] % 3 === 0):
        result.push('fizz');
        break;
      default:
        result.push('bug!');
        break;
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  let array = str.split('');
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case (array[index] === 'a'):
        array[index] = 1;
        break;
      case (array[index] === 'e'):
        array[index] = 2;
        break;
      case (array[index] === 'i'):
        array[index] = 3;
        break;
      case (array[index] === 'o'):
        array[index] = 4;
        break;
      case (array[index] === 'u'):
        array[index] = 5;
        break;
      default:
        break;
    }
  }
  str = array.join('');
  return str;
}

function decode(str) {
  let array = str.split('');
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case (array[index] === '1'):
        array[index] = 'a';
        break;
      case (array[index] === '2'):
        array[index] = 'e';
        break;
      case (array[index] === '3'):
        array[index] = 'i';
        break;
      case (array[index] === '4'):
        array[index] = 'o';
        break;
      case (array[index] === '5'):
        array[index] = 'u';
        break;
      default:
        break;
    }
  }
  str = array.join('');
  return str;
}

// Desafio 10
function techList(array, name) {
  let arrayTech = [];
  if (array.length !== 0) {
    array = array.sort();
    for (let index = 0; index < array.length; index += 1) {
      let object = {
        tech: array[index],
        name,
      };
      arrayTech.push(object);
    }
    return arrayTech;
  }
  return 'Vazio!';
}

// Desafio 11
function getNumberRepetition(number1, number2, count) {
  if (number1 === number2) {
    count += 1;
  }
  return count;
}

function verifyNumberRepetition(array, number) {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    count = getNumberRepetition(number, array[index], count);
  }
  if (count >= 3) {
    return true;
  }
  return false;
}

function generatePhoneNumber(array) {
  let telephone = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case (verifyNumberRepetition(array, array[index])):
        return 'não é possível gerar um número de telefone com esses valores';
      case ((array[index] < 0) || (array[index] > 9)):
        return 'não é possível gerar um número de telefone com esses valores';
      case (index === 0):
        telephone += `(${array[index]}`;
        break;
      case (index === 1):
        telephone += `${array[index]}) `;
        break;
      case (index === 6):
        telephone += `${array[index]}-`;
        break;
      default:
        telephone += array[index];
        break;
    }
  }
  return telephone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumBC = lineB + lineC;
  let sumAC = lineA + lineC;
  let sumAB = lineA + lineC;
  let subBC = Math.abs(lineB - lineC);
  let subAC = Math.abs(lineA - lineC);
  let subAB = Math.abs(lineA - lineB);
  if ((lineA > (sumBC) || lineB > (sumAC) || lineC > (sumAB))) {
    if ((lineA > (subBC) || lineB > (subAC) || lineC > (subAB))) {
      return false;
    }
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let digit = /\d+/g;
  let numberOfDrinks = '';
  let numberOfWater = 0;
  numberOfDrinks = str.match(digit);
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    numberOfWater += parseInt(numberOfDrinks[index], 10);
  }
  if (numberOfWater === 1) {
    str = `${numberOfWater} copo de água`;
  } else {
    str = `${numberOfWater} copos de água`;
  }
  return str;
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
