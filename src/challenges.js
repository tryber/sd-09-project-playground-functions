// PROJECT STARTED! #VQV

// Desafio 1
let result = true;
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  } return result;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(3, 5));

// Desafio 3
let arraySentence = [];
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(firstAndLast) {
  let challengeResult = `${firstAndLast[firstAndLast.length - 1]}, ${firstAndLast[0]}`;
  return challengeResult;
}
// console.log(concatName(['Fernanda', 'Cajueiro', 'Machado']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties)
  return points;
}
// console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(numbersArray) {
  let maiorNumero = numbersArray[0]
  let count = 0

  for (let index in numbersArray) {
    if (numbersArray[index] > maiorNumero) {
      maiorNumero = numbersArray[index];
    }
  }

  for (let index in numbersArray) {
    if (maiorNumero === numbersArray[index]) {
      count += 1;
    }
  } return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzResult = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzResult.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      fizzBuzzResult.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      fizzBuzzResult.push('buzz');
    } else {
      fizzBuzzResult.push('bug!');
    }
  } return fizzBuzzResult;
}
// console.log(fizzBuzz([7, 9]));

// Desafio 9
function encode(string) {
  let encodeString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        encodeString += '1';
        break;
      case 'e':
        encodeString += '2';
        break;
      case 'i':
        encodeString += '3';
        break;
      case 'o':
        encodeString += '4';
        break;
      case 'u':
        encodeString += '5';
        break;
      default:
        encodeString += string[index];
    }
  } return encodeString;
}
// console.log(encode('hi there!'));

function decode(string) {
  let decodeString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += string[index];
    }
  } return decodeString;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!'
  }

  array.sort();

  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      tech: array[index],
      name: nome,
    }
  }
  return array;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Fernanda'));

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '(';
  let count = 0;

  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }

  for (let indice = 0; indice < array.length; indice += 1) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[indice] === array[index]) { 
        count += 1;
      }
    }
  
    if (array[indice] < 0 || array[indice] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;

    phoneNumber += array[indice];
    if (phoneNumber[indice] === phoneNumber[1]) {
      phoneNumber += ') ';
    } else if (phoneNumber[indice] === phoneNumber[6]) {
      phoneNumber += '-';
    }
  }

  return phoneNumber;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
