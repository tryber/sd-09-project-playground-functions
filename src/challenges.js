// Desafio 1
function compareTrue(value1, value2) {
  let compare = value1 && value2;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splits = string.split(' ');
  return splits;
}

// Desafio 4
function concatName(arrayNames) {
  let phrase = arrayNames[arrayNames.length - 1] + ', ' + arrayNames[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let counter = 0;
  let highestNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (highestNumber < arrayNumbers[index]) {
      highestNumber = arrayNumbers[index];
      counter = 0;
    }
    if (arrayNumbers[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1= Math.abs(mouse - cat1);
  let distanceCat2= Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return "cat1";
  }
  if (distanceCat1 > distanceCat2) {
    return "cat2";
  }
  if (distanceCat1 === distanceCat2) {
    return "os gatos trobam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arrayNum2 = [];
  for(let index2 = 0; index2 < arrayNum.length; index2 += 1) {
    if (arrayNum[index2] % 3 === 0 && arrayNum[index2] % 5 === 0) {
      arrayNum2[index2] = "fizzBuzz";
    }
    else if (arrayNum[index2] % 3 === 0) {
      arrayNum2[index2] = "fizz";
    }
    else if ( arrayNum[index2] % 5 === 0) {
      arrayNum2[index2] = "buzz";
    }
    else {
      arrayNum2[index2] = "bug";
    }
  }
  return arrayNum2;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
