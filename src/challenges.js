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
function fizzBuzz(array) {
  for (let number in array) {
    if (array[number] % 3 === 0 && array[number] % 5 !== 0) {
      array[number] = 'fizz';
    } else if (array[number] % 5 === 0 && array[number] % 3 !== 0) {
      array[number] = 'buzz';
    } else if (array[number] % 5 === 0 && array[number] % 3 === 0) {
      array[number] = 'fizzBuzz';
    } else {
      array[number] = 'bug!';
    }
  }
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let encodingString = '';
  for (let element of string) {
    if (element === 'a') {
      encodingString += '1';
    } else if (element === 'e') {
      encodingString += '2';
    } else if (element === 'i') {
      encodingString += '3';
    } else if (element === 'o') {
      encodingString += '4';
    } else if (element === 'u') {
      encodingString += '5';
    } else {
      encodingString += element;
    }
  }
  return encodingString;
}
// console.log(encode('hi there!'));

function decode(string2) {
  let decodingString = '';
  for (let element of string2) {
    if (element === '1') {
      decodingString += 'a';
    } else if (element === '2') {
      decodingString += 'e';
    } else if (element === '3') {
      decodingString += 'i';
    } else if (element === '4') {
      decodingString += 'o';
    } else if (element === '5') {
      decodingString += 'u';
    } else {
      decodingString += element;
    }
  }
  return decodingString;
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
