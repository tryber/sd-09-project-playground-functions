function highestFinder(numbersArray) {
  let higher = numbersArray[0];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > higher) {
      higher = numbersArray[index];
    }
  }
  return higher;
}

// Challenge 1 - This function receives two booleans
// and returns true if both are true and false if not.
// By Pablo P Fernandes
function compareTrue(boolOne, boolTwo) {
  if (boolOne && boolTwo) {
    return true;
  }
  return false;
}

// Challenge Two - Triangle area
function calcArea(base, height) {
  return (base * height) / 2;
}

// Challenge Three - Split a sentence into an array
function splitSentence(sentence) {
  let words = [];
  let wordCharacters = '';
  for (let index = 0; index < sentence.length; index += 1) {
    switch (true) {
      case (sentence[index] === ' ' && wordCharacters !== ''):
        words.push(wordCharacters);
        wordCharacters = '';
        break;
      case (index === (sentence.length - 1) && sentence[index] !== ' '):
        wordCharacters += sentence[index];
        words.push(wordCharacters);
        break;
      case (sentence[index] !== ' '):
        wordCharacters += sentence[index];
        break;
      default:
        break;
    }
  }
  return words;
}

// Challenge Four - Concatenation of strings
function concatName(stringArray) {
  let stringConcat = '';
  stringConcat = stringArray[stringArray.length - 1];
  stringConcat += ', ';
  stringConcat += stringArray[0];
  return stringConcat;
}

// Challenge Five - Football Points Counter
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

// Challenge Six - Highest popularity counter
function highestCount(numbersArray) {
  let higherPopularity = 0;
  let higher = highestFinder(numbersArray);
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] === higher) {
      higherPopularity += 1;
    }
  }
  return higherPopularity;
}

// Challenge seven - Cat and mouse porsuit
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  switch (true) {
    case (distanceCat1 > distanceCat2):
      return 'cat2';
    case (distanceCat2 > distanceCat1):
      return 'cat1';
    default:
      return 'os gatos trombam e o rato foge';
  }
}

// Challenge Eight - FizzBuzz Calculator
function fizzBuzz(numbersArray) {
  let fizzBuzzStrings = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    switch (true) {
      case ((numbersArray[index] % 5 === 0 && numbersArray[index] % 3 === 0)):
        fizzBuzzStrings.push('fizzBuzz');
        break;
      case ((numbersArray[index] % 5 === 0)):
        fizzBuzzStrings.push('buzz');
        break;
      case ((numbersArray[index] % 3 === 0)):
        fizzBuzzStrings.push('fizz');
        break;
      default:
        fizzBuzzStrings.push('bug!');
        break;
    }
  }
  return fizzBuzzStrings;
}

let translatorMap = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

// Challenge Nine - Function to encode string
function encriptAndDecriptMessage(character, charMap) {
  for (let key in charMap) {
    if (character === key) {
      return charMap[key];
    }
    if (character === charMap[key].toString()) {
      return key;
    }
  }
  return character;
}

// Challenge Nine - Function to encode string
function encode(stringToEncode) {
  let encodedArray = [];
  let encodedString = '';
  for (let index = 0; index < stringToEncode.length; index += 1) {
    encodedArray.push(stringToEncode[index]);
    encodedArray[index] = encriptAndDecriptMessage(encodedArray[index], translatorMap);
    encodedString += encodedArray[index];
  }
  return encodedString;
}

// Challenge Nine - Function to decode a string
function decode(stringToDecode) {
  let decodedArray = [];
  let decodedString = '';
  for (let index = 0; index < stringToDecode.length; index += 1) {
    decodedArray.push(stringToDecode[index]);
    decodedArray[index] = encriptAndDecriptMessage(stringToDecode[index], translatorMap);
    decodedString += decodedArray[index];
  }
  return decodedString;
}

let code = encode('Hello there, how ari you');
console.log(code);
console.log(decode(code));

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
};
