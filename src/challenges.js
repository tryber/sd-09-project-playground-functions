// Desafio 1
function compareTrue(valueOne, valueTwo) {
   return valueOne && valueTwo;
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
  let winPoints = 3;
  let points = (wins * winPoints) + (ties);
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

// Desafio 7 - Método abs() para retorna valor absoluto positivo
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
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
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function engineCode(text, action) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let codeVowels = 1;
  let newText = text;
  for (let index = 0; index < vowels.length; index += 1) {
    for (let indexCharacter = 0; indexCharacter < newText.length; indexCharacter += 1) {
      if (newText[indexCharacter] === vowels[index] && action === 'encode') {
        newText = newText.replace(vowels[index], codeVowels);
      } else if (newText[indexCharacter] === codeVowels.toString() && action === 'decode') {
        newText = newText.replace(codeVowels, vowels[index]);
      }
    }
    codeVowels += 1;
  }
  return newText;
}

function encode(text) {
  let textEncode = engineCode(text, 'encode');
  return textEncode;
}

function decode(text) {
  let textDecode = engineCode(text, 'decode');
  return textDecode;
}

// Desafio 10 - Ordenando o array antes
function techList(arrayTechs, name) {
  let orderListTech = arrayTechs.sort();
  let listObjects = [];
  for (let tech of orderListTech) {
    listObjects.push({ tech, name });
  }
  if (listObjects.length === 0) {
    return 'Vazio!';
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
