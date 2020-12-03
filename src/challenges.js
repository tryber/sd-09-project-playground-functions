// Desafio iniciado por Maximilian Kaden

// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    // console.log('Retornou true')
    return true;
  }
  return false;
}

compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  // console.log(`Area do triangulo é ${(base * height) / 2}`)
  return (base * height) / 2;
  // seu código aqui
}

calcArea(5, 4);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function getHigherNumber(numbers) {
  let higherNumberFromNow = 0;
  for (let index in numbers) {
    if (numbers[index] > higherNumberFromNow) {
      higherNumberFromNow = numbers[index];
    }
  }
  return higherNumberFromNow;
}

function getTimesHigherNumber(numbers, numberToCount) {
  let timesHigherNumberFromNow = 0;
  for (let index in numbers) {
    if (numbers[index] === numberToCount) {
      timesHigherNumberFromNow += 1;
    }
  }
  return timesHigherNumberFromNow;
}

function highestCount(numbers) {
  let higherNumber = getHigherNumber(numbers);
  let timesHigherNumber = getTimesHigherNumber(numbers, higherNumber);
  // console.log(`O maior numero foi ${higherNumber} e ele aparece ${timesHigherNumber} vezes`)
  return timesHigherNumber;
}

// Desafio 7
function distanceCalculator(cat, mouse) {
  let distance = cat - mouse;
  if (distance < 0) {
    distance *= -1;
  }
  return distance;
}
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1ToMouse = distanceCalculator(cat1, mouse);
  let distanceCat2ToMouse = distanceCalculator(cat2, mouse);
  if (distanceCat2ToMouse > distanceCat1ToMouse) {
    // console.log('cat1')
    return 'cat1';
  } else if (distanceCat2ToMouse === distanceCat1ToMouse) {
    return 'os gatos trombam e o rato foge';
  }
  // console.log('cat2')
  return 'cat2';
}

// Desafio 8

function addWord(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let arrayToReturn = [];
  for (let index in numbers) {
    if (typeof numbers[index] === 'number') {
      arrayToReturn.push(addWord(numbers[index]));
    }
  }
  // console.log(arrayToReturn);
  return arrayToReturn;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function checkIsVowel(letter) {
  if (
    letter === 'a' ||
    letter === 'e' ||
    letter === 'i' ||
    letter === 'o' ||
    letter === 'u'
  ) {
    return true;
  }
  return false;
}
function switchVowelToNumber(letter) {
  switch (letter) {
    case 'a':
      letter = 1;
      break;
    case 'e':
      letter = 2;
      break;
    case 'i':
      letter = 3;
      break;
    case 'o':
      letter = 4;
      break;
    case 'u':
      letter = 5;
      break;
    default:
      break;
  }
  return letter;
}

function switchNumberToVowel(letter) {
  switch (letter) {
    case '1':
      letter = 'a';
      break;
    case '2':
      letter = 'e';
      break;
    case '3':
      letter = 'i';
      break;
    case '4':
      letter = 'o';
      break;
    case '5':
      letter = 'u';
      break;
    default:
      break;
  }
  return letter;
}
function encode(frase) {
  let encodedFrase = [];
  for (let index in frase) {
    if (checkIsVowel(frase[index])) {
      encodedFrase.push(switchVowelToNumber(frase[index]));
      // console.log(`A letra da frase agora é ${frase[index]}`);
    } else {
      encodedFrase.push(frase[index])
    }
  }
  // console.log(encodedFrase.join(''));
  return encodedFrase.join('');
}

function decode(frase) {
  let decodedFrase = [];
  for (let index in frase) {
    if (checkIsVowel(frase[index])) {
      decodedFrase.push(switchNumberToVowel(frase[index]));
      // console.log(`A letra da frase agora é ${frase[index]}`);
    } else {
      decodedFrase.push(frase[index])
    }
  }
  // console.log(decodedFrase.join(''));
  return decodedFrase.join('');
}

// Desafio 10
function techList() {
  
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
