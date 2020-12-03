// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const arrayString = string.split(' ');
  return arrayString;
}
// console.log(splitSentence('Tree Of Savior'));

// Desafio 4
function concatName(stringArray) {
  let firstName = stringArray[0];
  let lastName = stringArray[stringArray.length - 1];
  return `${lastName}, ${firstName}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winner = wins * 3;
  let tied = ties * 1;
  let points = winner + tied;
  return points;
}
// console.log(footballPoints(1, 1));

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
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = Math.abs(mouse - cat1);
  let diffCat2 = Math.abs(mouse - cat2);

  if (diffCat1 === diffCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (diffCat1 > diffCat2) {
    return 'cat2';
  }
  return 'cat1';
}
// console.log(catAndMouse(-15, -15, -15));

// Desafio 8
function divideBy(array) {
  let key = '';
  let case5 = array % 5 === 0;
  let case3 = array % 3 === 0;

  if (case3 === true) {
    key = 'fizz';
  }

  if (case5 === true) {
    key = 'buzz';
  }

  if ((case3 === true) && (case5 === true)) {
    key = 'fizzBuzz';
  }

  if (key === '') {
    key = 'bug!';
  }

  return key;
}
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = divideBy(arrayNumbers[index]);
  }
  return arrayNumbers;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let stringEnc = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        stringEnc += 1;
        break;
      case 'e':
        stringEnc += 2;
        break;
      case 'i':
        stringEnc += 3;
        break;
      case 'o':
        stringEnc += 4;
        break;
      case 'u':
        stringEnc += 5;
        break;
      default:
        stringEnc += string[index];
    }
  }
  return stringEnc;
}
// console.log(encode('hi there!'))

function decode(string) {
  let stringDec = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        stringDec += 'a';
        break;
      case '2':
        stringDec += 'e';
        break;
      case '3':
        stringDec += 'i';
        break;
      case '4':
        stringDec += 'o';
        break;
      case '5':
        stringDec += 'u';
        break;
      default:
        stringDec += string[index];
    }
  }
  return stringDec;
}

// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(languages, name) {
  if (languages.length === 0) {
    return 'Vazio!';
  }
  languages.sort();
  let arrayTech = [];
  for (let element of languages) {
    let object = {};
    object.tech = element;
    object.name = name;
    arrayTech.push(object);
  }
  return arrayTech;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Matheus'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC) {
    isTriangle = true;
    return isTriangle;
  } else if (lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC) {
    isTriangle = true;
    return isTriangle;
  } else if (lineC > Math.abs(lineA - lineB) && lineC < lineA + lineB) {
    isTriangle = true;
    return isTriangle;
  }
  return isTriangle;
}
// console.log(triangleCheck(10, 14, 8));

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
};
