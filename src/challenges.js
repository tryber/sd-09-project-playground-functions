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

// Desafio 9 Ok (codeclimate repetição)
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
// (codeclimate repetição)
function decode(transNumbersLettes) {
  // seu código aqui
  let decodeTexte = '';
  for (let number of transNumbersLettes) {
    switch (number) {
      case '1':
        decodeTexte += 'a';
        break;
      case '2':
        decodeTexte += 'e';
        break;
      case '3':
        decodeTexte += 'i';
        break;
      case '4':
        decodeTexte += 'o';
        break;
      case '5':
        decodeTexte += 'u';
        break;
      default:
        decodeTexte += number;
    }
  }
  return decodeTexte;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayNames = [];
  for (let count = 0; count < tech.length; count += 1) {
    let obj = {};
    obj.tech = tech[count];
    obj.name = name;
    arrayNames.push(obj);
  }
  let arrayOrdenado = arrayNames.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  return tech.length > 0 ? arrayOrdenado : 'Vazio!'
}

// Desafio 11
function numberequal11(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return false;
  }
  return true;
}
function numberLess0(arrayNumber) {
  for (let key of arrayNumber) {
    if (key < 0 || key > 9) {
      return false;
    }
  }
  return true;
}
function verificationNumber(arrayNumber) {
  let repeatNumber = 0
  for (let count = 0; count < arrayNumber.length; count += 1) {
    repeatNumber = 0;
    for (let count2 = 0; count2 < arrayNumber.length; count2 += 1) {
      if (arrayNumber[count] === arrayNumber[count2]) {
        repeatNumber += 1;
      }
    }
    if (repeatNumber > 2) {
      return false;
    }
  }
  return true;
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
    if (numberLess0(arrayNumber) === false || verificationNumber(arrayNumber) === false) {
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
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    if (lineB < lineA + lineC && Math.abs(lineA - lineC)) {
      if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
        return true;
      }
    }
  }
  return false;
}

// Desafio 13
function hydrate(arrayDrink) {
  // seu código aqui
  let water = arrayDrink.split(/\D/g).join('');
  if (water.length === 1) {
    return '1 copo de água';
  }
  if (water.lentgh > 1) {
    return `${water.lentgh} copos de água`;
  }
  return '0 copos de água';
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
