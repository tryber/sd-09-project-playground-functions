//Bruno Brolesi

// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return (strings[strings.length - 1] + ', ' + strings[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumberIndex = 0;
  let counter = 0;

  for (let i in numberArray) {
    if (numberArray[highestNumberIndex] < numberArray[i]) {
      highestNumberIndex = i;
      counter = 1;
    } else if (numberArray[highestNumberIndex] == numberArray[i]) {
      counter++;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = Math.abs(mouse - cat1);
  let distanceMouseCat2 = Math.abs(mouse - cat2);

  if (distanceMouseCat1 < distanceMouseCat2) {
    return ('cat1');
  } else if (distanceMouseCat1 > distanceMouseCat2) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(numberArray) {
  let strings = [];

  for (let i in numberArray) {
    let number = numberArray[i];

    if (number % 3 === 0 && number % 5 === 0) {
      strings.push('fizzBuzz');
    } else if (number % 3 === 0) {
      strings.push('fizz');
    } else if (number % 5 === 0) {
      strings.push('buzz');
    } else {
      strings.push('bug!');
    }
  }

  return strings;
}

// Desafio 9
function isVowel(character) {
  if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    return true;
  }
  return false;
}

function isNumberCharecter(number) {
  if (number === '1' || number === '2' || number === '3' || number === '4' || number === '5') {
    return true;
  }
  return false;
}

function swapVowelNumber(vowel) {
  if (vowel === 'a') {
    return '1';
  }
  if (vowel === 'e') {
    return '2';
  }
  if (vowel === 'i') {
    return '3';
  }
  if (vowel === 'o') {
    return '4';
  }
  if (vowel === 'u') {
    return '5';
  }
}

function swapNumberVowel(number) {
  if (number === '1') {
    return 'a';
  }
  if (number === '2') {
    return 'e';
  }
  if (number === '3') {
    return 'i';
  }
  if (number === '4') {
    return 'o';
  }
  if (number === '5') {
    return 'u';
  }
}

function encode(string) {
  for (let i in string) {
    if (isVowel(string[i])) {
      console.log(string[i]);
      string[i] = swapVowelNumber(string[i]);
      console.log(string[i]);
    }
  }

  return string;
}

function decode(string) {
  for (let i in string) {
    if (isNumberCharecter(string[i])) {
      string[i] = swapNumberVowel(string[i]);
    }
  }
  return string;
}

// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return 'Vazio!';
  }

  let listOfObjects = [];
  techArray = techArray.sort();

  for (let i in techArray) {
    let techObject = {
      tech: techArray[i],
      name: name,
    };

    listOfObjects.push(techObject);
  }

  return listOfObjects
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
