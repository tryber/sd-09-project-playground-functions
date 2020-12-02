// Project Playground Functions
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = 0;
  area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = '';
  result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(arrayStrings) {
  let first = '';
  let last = '';
  first = arrayStrings[0];
  last = arrayStrings[arrayStrings.length - 1];
  let returnString = [last, first];
  return returnString.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0
  result = (wins * 3) + (ties * 1);
  return result
}

// Desafio 6
function highestCount(numbers) {
  let maxnumber = 0;
  let contnumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (maxnumber < numbers[index]) {
      maxnumber = numbers[index];
      contnumber = 1;
    } else if (maxnumber === numbers[index]) {
      contnumber += 1;
    }
  }
  return contnumber
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = 0;
  let distcat2 = 0;
  distcat1 = cat1 - mouse;
  distcat2 = cat2 - mouse;
  if (distcat1 < 0) {
    distcat1 *= -1;
  }
  if (distcat2 < 0) {
    distcat2 *= -1;
  }
  if (distcat1 < distcat2) {
    return 'cat1';
  } else if (distcat2 < distcat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arraynumbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arraynumbers.length; index += 1) {
    if (arraynumbers[index] % 3 === 0 && arraynumbers[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arraynumbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arraynumbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let strEnc = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        strEnc += 1;
        break;
      case 'e':
        strEnc += 2;
        break;
      case 'i':
        strEnc += 3;
        break;
      case 'o':
        strEnc += 4;
        break;
      case 'u':
        strEnc += 5;
        break;
      default:
        strEnc += string[index];
    }
  }
  return strEnc;
}

function decode(string) {
  let strEnc = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        strEnc += 'a';
        break;
      case '2':
        strEnc += 'e';
        break;
      case '3':
        strEnc += 'i';
        break;
      case '4':
        strEnc += 'o';
        break;
      case '5':
        strEnc += 'u';
        break;
      default:
        strEnc += string[index];
    }
  }
  return strEnc;
}

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
