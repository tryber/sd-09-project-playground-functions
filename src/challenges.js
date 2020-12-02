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

function catAndMouse(mouse, cat1, cat2) {
  let phrase = '';
  let diffCat1 = subtrNumber(mouse, cat1);
  let diffCat2 = subtrNumber(mouse, cat2);

  switch (true) {
    case diffCat1 < diffCat2:
      phrase = 'cat1';
      break;
    case diffCat1 > diffCat2:
      phrase = 'cat2';
      break;
    default:
      phrase = 'os gatos trombam e o rato foge';
      break;
  }
  // if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
  //   phrase = 'cat1';
  // } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
  //   phrase = 'cat2';
  // } else {
  //   phrase = 'os gatos trombam e o rato foge';
  // }

  return phrase;
}
// console.log(catAndMouse(1, 0, 2));


// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let mod5 = arrayNumbers[index] % 5 === 0;
    let mod3 = arrayNumbers[index] % 3 === 0;

    switch (true) {
      case mod3 && mod5:
        arrayNumbers[index] = 'fizzBuzz';
        break;
      case mod3:
        arrayNumbers[index] = 'fizz';
        break;
      case mod5:
        arrayNumbers[index] = 'buzz';
        break;
      default:
        arrayNumbers[index] = 'bug!';
        break;
    }
  }

  return arrayNumbers;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(phrase) {
  let phraseEncode = '';

  for (let indexE = 0; indexE < phrase.length; indexE += 1) {
    switch (phrase[indexE]) {
      case 'a':
        phraseEncode += '1';
        break;
      case 'e':
        phraseEncode += '2';
        break;
      case 'i':
        phraseEncode += '3';
        break;
      case 'o':
        phraseEncode += '4';
        break;
      case 'u':
        phraseEncode += '5';
        break;
      default:
        phraseEncode += phrase[index];
        break;
    }
  }
  return phraseEncode;
}
function decode(phrase) {
  let phraseDecode = '';

  for (let indexD = 0; indexD < phrase.length; indexD += 1) {
    switch (phrase[indexD]) {
      case '1':
        phraseDecode += 'a';
        break;
      case '2':
        phraseDecode += 'e';
        break;
      case '3':
        phraseDecode += 'i';
        break;
      case '4':
        phraseDecode += 'o';
        break;
      case '5':
        phraseDecode += 'u';
        break;
      default:
        phraseDecode += phrase[index];
        break;
    }
  }
  return phraseDecode;
}
// console.log(decode(encode('hi there!')));


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
