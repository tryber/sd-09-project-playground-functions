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

// Desafio 4
function concatName(words) {
  // seu código aquig
  let saveArray = words;
  let result = saveArray.split(' ');
  let concat = (result[0] + ' ' + result[(result.length - 1)]);
  return concat;
}

console.log(concatName('pedro, joao, johnatas, bernardo, issac'));

// Desafio 5 OK
function footballPoints(wins, ties) {
  // seu código aqui
  let totalNumber = ((wins * 3) + ties);

  return totalNumber;
}

// Desafio 6 OK (condeclimate)
function highestCount(arrayNumber) {
  // seu código aqui
  let bigNumber = arrayNumber[0];
  let sweepNumber = 0;
  let result = 0;
  for (let count = 0; count < arrayNumber.length; count += 1) {
    sweepNumber = arrayNumber[count];
    if (sweepNumber > bigNumber) {
      bigNumber = sweepNumber;
    }
  }
  for (let count = 0; count < arrayNumber.length; count += 1) {
    if (bigNumber === arrayNumber[count]) {
      result += 1;
    }
  }
  return result;
}

console.log (highestCount([1,9,7,6,8,9,3,5,9,8,6,9]));

// Desafio 7
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

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let count = 0; count < array.length; count += 1) {
    if ((array[count] % 3) === 0 && (array[count] % 5) === 0) {
      result.push('fizzBuzz');
    } else if ((array[count] % 3) === 0 && (array[count] % 5) !== 0) {
      result.push('fizz');
    } else if ((array[count] % 3) !== 0 && (array[count] % 5) === 0) {
      result.push('buzz');
    } else if ((array[count] % 3) !== 0 && (array[count] % 5) !== 0) {
      result.push('bug!');
    }
  }
  return result;
}

console.log(fizzBuzz([1,9,15,7,30]));

// Desafio 9
function encode(texto) {
  // seu código aqui
  let transLettersNumbers = texto;
  for (let count = 0; count < transLettersNumbers.length; count += 1) {
    if (transLettersNumbers[count] === 'a') {
      transLettersNumbers[count] = 1;
    } else if (transLettersNumbers[count] === 'e') {
      transLettersNumbers[count] = 2;
    } else if (transLettersNumbers[count] === 'i') {
      transLettersNumbers[count] = 3;
    } else if (transLettersNumbers[count] === 'o') {
      transLettersNumbers[count] = 4;
    } else if (transLettersNumbers[count] === 'u') {
      transLettersNumbers[count] = 5;
    }
  }
  return transLettersNumbers;
}

console.log(encode('um texto aqui para teste'));

function decode(transLettersNumbers) {
  // seu código aqui
  for (let count = 0; count < transLettersNumbers.length; count += 1) {
    if (transLettersNumbers[count] === 1) {
      transLettersNumbers[count] = 'a';
    } else if (transLettersNumbers[count] === 2) {
      transLettersNumbers[count] = 'e';
    } else if (transLettersNumbers[count] === 3) {
      transLettersNumbers[count] = 'i';
    } else if (transLettersNumbers[count] === 4) {
      transLettersNumbers[count] = 'o';
    } else if (transLettersNumbers[count] === 5) {
      transLettersNumbers[count] = 'u';
    }
  }
  return transLettersNumbers;
}

console.log(decode('1t 2hfk2 kfl3 jfdklg5'));

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
