//Bruno Brolesi
//
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
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(character);
}

function isNumberCharacter(character) {
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return numbers.includes(character);
}

function swapVowelNumber(vowel) {
  let vowelNumberPair = {
    vowels: ['a', 'e', 'i', 'o', 'u'],
    numbers: ['1', '2', '3', '4', '5'],
  };

  for (let i in vowelNumberPair.vowels) {
    if (vowel === vowelNumberPair.vowels[i]) {
      return vowelNumberPair.numbers[i];
    }
  }
}

function swapNumberVowel(number) {

  let vowelNumberPair = {
    vowels: ['a', 'e', 'i', 'o', 'u'],
    numbers: ['1', '2', '3', '4', '5'],
  };

  for (let i in vowelNumberPair.numbers) {
    if (number === vowelNumberPair.numbers[i]) {
      return vowelNumberPair.vowels[i];
    }
  }
}

function encode(string) {
  string = string.split("");

  for (let i in string) {
    if (isVowel(string[i])) {
      string[i] = swapVowelNumber(string[i]);
    }
  }
  return string.join("");
}

console.log(encode("hello world!"));

function decode(string) {
  string = string.split("");

  for (let i in string) {
    if (isNumberCharacter(string[i])) {
      string[i] = swapNumberVowel(string[i]);
    }
  }
  return string.join("");
}
console.log(decode(encode("hello world!")));
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
function generatePhoneNumber(numberArray) {
  if (numberArray.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i in numberArray) {
    if (numberArray[i] < 0 || numberArray[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let repeatCounter = 0;

  for (let i in numberArray) {
    for (let j = i; j < numberArray.length; j++) {
      if (numberArray[j] === numberArray[i]) {
        repeatCounter++;
      }
      if (repeatCounter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    repeatCounter = 0;
  }
  numberArray = numberArray.join("")
  return ('(' + numberArray.slice(0, 2) + ') ' + numberArray.slice(2, 7) + '-' + numberArray.slice(7, 11));
}

// Desafio 12
function checkSumRule(lineA, lineB, lineC) {
  return (lineA < (lineB + lineC))
}

function checkSubRule(lineA, lineB, lineC) {
  return (lineA > Math.abs(lineB - lineC))
}

function triangleCheck(lineA, lineB, lineC) {
  let checks = [];

  checks.push(checkSumRule(lineA, lineB, lineC));
  checks.push(checkSumRule(lineB, lineC, lineA));
  checks.push(checkSumRule(lineC, lineA, lineB));

  checks.push(checkSubRule(lineA, lineB, lineC));
  checks.push(checkSubRule(lineB, lineC, lineA));
  checks.push(checkSubRule(lineC, lineA, lineB));

  for (i in checks) {
    if (!checks[i]) {
      return false;
    }
  }

  return true;
}

// Desafio 13
function hydrate() {
  string = string.split("")
  let cupsOfWater = 0;

  for (i in string) {
    if (isNumberCharacter(string[i])) {
      cupsOfWater += parseInt(string[i], 10);
    }
  }
  return (cupsOfWater + ' copos de água');
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
