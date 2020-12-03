// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let lastItem = array.length - 1;
  let phrase = `${array[lastItem]}, ${array[0]}`;
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function compareNumbers(a, b) {
  return a - b;
}

function highestCount(arrayNumbers) {
  let arrayOrdenad = arrayNumbers.sort(compareNumbers);
  let numberMax = arrayOrdenad.length - 1;
  let cont = 0;
  for (let index = 0; index < arrayOrdenad.length; index += 1) {
    if (arrayOrdenad[index] === arrayOrdenad[numberMax]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
  for (let number of numbers) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (number % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (number % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function engine(text, action) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let code = 1;
  let newText = text;
  for (let vowel of vowels) {
    for (let character of newText) {
      if (character === vowel && action === 'encode') {
        newText = newText.replace(vowel, code);
      } else if (character === code.toString() && action === 'decode'){
        newText = newText.replace(code, vowel);
      }
    }
    code += 1;
  }
  return newText;
}

function encode(text) {
  textEncode = engine(text, 'encode');
  return textEncode;
}

function decode(text) {
  textDecode = engine(text, 'decode');
  return textDecode;
}

// Desafio 10
function techList(arrayTechs, name) {
  let orderListTech = arrayTechs.sort();
  let listObjects = [];
  for (let tech of orderListTech) {
    listObjects.push({
      tech: tech, 
      name: name
    });
  }
  return listObjects;
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
