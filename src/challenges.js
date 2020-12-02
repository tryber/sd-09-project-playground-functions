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

// Desafio 4 Ok (concatenação do ', ' dando erro no codeclimate)
function concatName(words) {
  // seu código aqui
  return (words[(words.length - 1)] + ', ' + words[0]);
}

// Desafio 5 OK
function footballPoints(wins, ties) {
  // seu código aqui
  let totalNumber = ((wins * 3) + ties);

  return totalNumber;
}

// Desafio 6 OK (Refatorar)
function highestCount(arrayNumber) {
  // seu código aqui
  let maxNumber = 0;
  let result = 0;
  for (let key in arrayNumber) {
    if (arrayNumber[key] > maxNumber) {
      maxNumber = arrayNumber[key];
    }
  }
  for (let key in arrayNumber) {
    if (arrayNumber[key] === maxNumber) {
      result += 1;
    }
  }
  return result;
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

// Desafio 8 Ok (refatorar)
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

// Desafio 9
function encode(transLettersNumbers) {
  // seu código aqui
   for (let count in transLettersNumbers) {
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
