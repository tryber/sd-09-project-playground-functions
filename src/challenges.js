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

// Desafio 6 OK (Refatorar)
function highestNumber(arrayNumber) {
  let maxNumber = 0;
  for (let key in arrayNumber) {
    if (arrayNumber[key] > maxNumber) {
      maxNumber = arrayNumber[key];
    }
  }
  return maxNumber;
}
function highestCount(arrayNumber) {
  // seu código aqui
  let numberMax = highestNumber(arrayNumber);
  let result = 0;
  for (let key in arrayNumber) {
    if (arrayNumber[key] === numberMax) {
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
  let texteDecode = '';
  for (let letter of transLettersNumbers) {
    switch (letter) {
      case 'a':
        texteDecode += '1';
        break;
      case 'e':
        texteDecode += '2';
        break;
      case 'i':
        texteDecode += '3';
        break;
      case 'o':
        texteDecode += '4';
        break;
      case 'u':
        texteDecode += '5';
        break;
      default:
        texteDecode += letter;
    }
  }
  return texteDecode;
}

function decode(transNumbersLettes) {
  // seu código aqui
  let decodeTexte = '';
  for (let number of transNumbersLettes) {
    switch (number) {
      case '1':
        texteDecode += 'a';
        break;
      case '2':
        texteDecode += 'e';
        break;
      case '3':
        texteDecode += 'i';
        break;
      case '4':
        texteDecode += 'o';
        break;
      case '5':
        texteDecode += 'u';
        break;
      default:
        texteDecode += letter;
    }
  }
  return texteDecode;
}

// Desafio 10
function techList(arrayNames, name) {
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
