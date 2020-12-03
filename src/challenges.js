//  Projeto II

// Desafio 1
function compareTrue(value1, value2) {
  return ((value1 === true) && (value2 === true));
}
// console.log(compareTrue(false,false));


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(100, 50));


// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('Go Trybe'));


// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// console.log(footballPoints(2, 1));


// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = 0;
  let highestNumberRepeat = 0;

  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
      highestNumberRepeat = 1;
    } else if (numbersArray[index] === highestNumber) {
      highestNumberRepeat += 1;
    }
  }

  return highestNumberRepeat;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function subtrNumber(number1, number2) {
  return (number1 < number2) ? number2 - number1 : number1 - number2;
}
function compareCatAndMouse(diff1, diff2) {
  let phrase = '';

  if (diff1 < diff2) {
    phrase = 'cat1';
  }

  if (diff1 > diff2) {
    phrase = 'cat2';
  }

  if (phrase === '') {
    phrase = 'os gatos trombam e o rato foge';
  }
  return phrase;
}
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = subtrNumber(mouse, cat1);
  let diffCat2 = subtrNumber(mouse, cat2);

  return compareCatAndMouse(diffCat1, diffCat2);
}
// console.log(catAndMouse(1, 0, 2));


// Desafio 8
function divideBy(number) {
  let word = '';
  let mod5 = number % 5 === 0;
  let mod3 = number % 3 === 0;

  if (mod3 === true) {
    word = 'fizz';
  }

  if (mod5 === true) {
    word = 'buzz';
  }

  if ((mod3 === true) && (mod5 === true)) {
    word = 'fizzBuzz';
  }

  if (word === '') {
    word = 'bug!';
  }

  return word;
}
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    arrayNumbers[index] = divideBy(arrayNumbers[index]);
  }
  return arrayNumbers;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// rgb(76,164,109)
// Desafio 9
function compareLetter(letter, objectChar) {
  let newLetter = '';

  for (let indexObject in objectChar) {
    if (letter === indexObject) {
      newLetter = objectChar[indexObject];
    }
  }
  return newLetter;
}

function switchLetter(phrase, objectChar) {
  let newPhrase = '';

  for (let index = 0; index < phrase.length; index += 1) {
    let newLetter = '';

    newLetter = compareLetter(phrase[index], objectChar);
    newPhrase += (newLetter !== '') ? newLetter : phrase[index];
  }

  return newPhrase;
}

function encode(phrase) {
  let objectEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return switchLetter(phrase, objectEncode);
}
// console.log(encode('hi there!'));

function decode(phrase) {
  let objectDecode = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return switchLetter(phrase, objectDecode);
}
// console.log(decode('H4w 1r2 y45 t4d1y?'));


// Desafio 10
function techList(tech, name) {
  let objectTech = [];

  tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    objectTech.push({
      tech: tech[index],
      name,
    });
  }

  if (objectTech.length === 0) {
    return 'Vazio!';
  }
  return objectTech;
}
// console.log(techList([], 'Nathália'));


// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // let phone = '';

  // for (let index = 0; index < arrayNumbers.length; index += 1) {
  //   switch (index) {
  //     case 0:
  //       phone += '(';
  //       break;
  //     case 2:
  //       phone += ') ';
  //       break;
  //     case 7:
  //       phone += '-';
  //       break;
  //   }
  //   phone += arrayNumbers[index];
  // }

  return phone;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
