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
function splitSentence(frase) {
  let frasesInArray = [];
  let individualFrase = '';
  for (let index in frase) {
    // console.log(`Letra que vou trabalhar agora é ${frase[index]}`)
    if (frase[index] === ' ') {
      frasesInArray.push(individualFrase);
      // console.log(`Frase acaba de ser adicionada no array`)
      individualFrase = '';
      // console.log(`Frase acaba de ser apagada, e agora esta assim ${individualFrase}`)
    } else {
      individualFrase += frase[index];
    }
  }
  frasesInArray.push(individualFrase);
  // console.log(frasesInArray);
  return frasesInArray;
}

splitSentence('vamo que vamo ')

// Desafio 4
function concatName(array) {
  nomeUltimoEPrimeiro = `${array[array.length - 1]}, ${array[0]}`
  return nomeUltimoEPrimeiro
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

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

function checkIsNumber(letter) {
  if (
    letter === '1' ||
    letter === '2' ||
    letter === '3' ||
    letter === '4' ||
    letter === '5'
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
      encodedFrase.push(frase[index]);
    }
  }
  // console.log(encodedFrase.join(''));
  return encodedFrase.join('');
}

function decode(frase) {
  let decodedFrase = [];
  for (let index in frase) {
    if (checkIsNumber(frase[index])) {
      decodedFrase.push(switchNumberToVowel(frase[index]));
      // console.log(`A letra da frase agora é ${frase[index]}`);
    } else {
      decodedFrase.push(frase[index]);
    }
  }
  // console.log(decodedFrase.join(''));
  return decodedFrase.join('');
}

// Desafio 10
let technologiesToLearn = ['React', 'Vue', 'Python', 'Django', 'MySQL', '.NET', 'Bootstrap', 'WordPress'];

function techList(technologies, name) {
  let listTechnologies = [];
  technologies.sort();
  if (technologies.length <= 0) {
    return 'Vazio!';
  };
  for (let index in technologies) {
    listTechnologies.push({
      tech: technologies[index],
      name: name,
    });
  }
  return listTechnologies;
}

// console.log(techList(['teste'], 'Maximilian'));

// Desafio 11
function ddd(array) {
  return `${array[0]}${array[1]}`
}

function fourNumber(array,firtsOrLast) {
  let fourNumber = '';
  if (firtsOrLast === 'first') {
    // console.log(`Entrando no IF first`)
    for (let numberIndex = 2; numberIndex <= 6; numberIndex += 1){
      // console.log(`Realizando for first`)
      fourNumber += array[numberIndex]
      // console.log(fourNumber)
    };
  };
  if (firtsOrLast === 'last') {
    for (let numberIndex = 7; numberIndex <= 10; numberIndex += 1){
      fourNumber += array[numberIndex]
    };
  };
  return fourNumber;
}

function checkNumberIsCorrect(array) {
  let isCorrect = true;
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9){
      isCorrect = false;
      console.log('Tem numero fora do range 0 - 9')
    };
    let actualNumberCheck = array[index]
    if (checkNumberRepeatMoreThanLimit(actualNumberCheck, array) === true){
      isCorrect = false;
      console.log('Numero se repetiu mais de 3x')
    }
  }
  return isCorrect
}

function checkNumberRepeatMoreThanLimit(number, array) {
  let timesNumberRepeat = 1;
  for (let index in array) {
    if (number === array[index]) {
      timesNumberRepeat += 1
      // console.log(`Numero se repetiu`)
      // console.log(timesNumberRepeat)
    }
    let maxTimeToRepeat = 3
    if (timesNumberRepeat >= maxTimeToRepeat) {
      return true;
    }
  }
  return false
}
function generatePhoneNumber(array) {
  if (array.length != 11){
    return 'Array com tamanho incorreto.';
  }
  if (checkNumberIsCorrect(array) === false) {
    return "não é possível gerar um número de telefone com esses valores";
  };
  let numero = `(${ddd(array)}) ${fourNumber(array,'first')}-${fourNumber(array,'last')}`;
  return numero;
}

console.log(generatePhoneNumber([1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1]))
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
