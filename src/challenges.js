// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// General loop function
function loopThroughIn(contextObject, applyFunction) {
  for (let index in contextObject.input) {
    if (Object.prototype.hasOwnProperty.call(contextObject.input, index)) {
      contextObject.currentIndex = index;
      contextObject.currentValue = contextObject.input[index];
      contextObject = applyFunction(contextObject);
    }
  }
  return contextObject;
}

// Desafio 3
function handlePushing(context) {
  if (context.isLastChar) {
    context.currentWord += context.currentValue;
  }
  context.sentenceArray.push(context.currentWord);
  context.currentWord = '';
  return context;
}

function handleSplitSentence(context) {
  let isCharSpace = (context.currentValue === ' ');
  let isLastChar = (context.currentIndex === context.lastIndex);
  let caseToPush = (isCharSpace || isLastChar);
  if (caseToPush) {
    context.isLastChar = isLastChar;
    context = handlePushing(context);
  } else {
    context.currentWord += context.currentValue;
  }
  return context;
}

function splitSentence(sentence) {
  const lastIndex = (sentence.length - 1).toString();
  let contextObject = loopThroughIn(
    { input: sentence, sentenceArray: [], currentWord: '', lastIndex },
    handleSplitSentence);
  return contextObject.sentenceArray;
}

// Desafio 4
function concatName(inputArray) {
  const firstName = inputArray[0];
  const lastName = inputArray[inputArray.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function countNumber(context) {
  let numberNotCounted = (!(context.currentValue in context.counts));
  if (numberNotCounted) {
    context.counts[context.currentValue] = 1;
  } else {
    context.counts[context.currentValue] += 1;
  }
  return context;
}

function handleHighestCount(context) {
  let noHighestNumber = (context.highestNumber === null);
  let numberHigherThanHighest = (context.currentValue > context.highestNumber);
  if (noHighestNumber || numberHigherThanHighest) {
    context.highestNumber = context.currentValue;
  }
  context = countNumber(context);
  return context;
}

function highestCount(inputArray) {
  const contextObject = loopThroughIn(
    { input: inputArray, counts: {}, highestNumber: null },
    handleHighestCount);
  return contextObject.counts[contextObject.highestNumber];
}

// Desafio 7
function getCatDistance(catPosition, mousePosition) {
  return Math.abs(mousePosition - catPosition);
}

function getClosestCat(first, second) {
  let closest = first.name;
  if (first.distance > second.distance) {
    closest = second.name;
  }
  return closest;
}

function catAndMouse(mouse, cat1, cat2) {
  let outcome = '';
  cat1 = { name: 'cat1', distance: getCatDistance(cat1, mouse) };
  cat2 = { name: 'cat2', distance: getCatDistance(cat2, mouse) };
  if (cat1.distance === cat2.distance) {
    outcome = 'os gatos trombam e o rato foge';
  } else {
    outcome = getClosestCat(cat1, cat2);
  }
  return outcome;
}

// Desafio 8
function checkIfIsDivider(number, divider) {
  return ((number % divider) === 0);
}

function getFizzBuzz(context) {
  let output = 'fizz';
  if (context.isBuzz) {
    output = 'buzz';
  }
  if (context.isFizz && context.isBuzz) {
    output = 'fizzBuzz';
  }
  return output;
}

function handleFizzBuzz(context) {
  let value;
  context.isFizz = checkIfIsDivider(context.currentValue, 3);
  context.isBuzz = checkIfIsDivider(context.currentValue, 5);
  context.isFizzOrBuzz = (context.isFizz || context.isBuzz);
  if (!(context.isFizzOrBuzz)) {
    value = 'bug!';
  } else {
    value = getFizzBuzz(context);
  }
  context.input[context.currentIndex] = value;
  return context;
}

function fizzBuzz(inputArray) {
  const contextObject = loopThroughIn(
    { input: inputArray },
    handleFizzBuzz);
  return contextObject.input;
}

// Desafio 9
function translate(context) {
  let value = context.currentValue;
  if (context.currentValue in context.dictionary) {
    value = context.dictionary[context.currentValue];
  }
  context.translation += value;
  return context;
}

function getTranslation(text, dictionary) {
  const contextObject = loopThroughIn(
    { input: text, dictionary, translation: '' },
    translate);
  return contextObject.translation;
}

function encode(text) {
  const dictionary = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return getTranslation(text, dictionary);
}

function decode(text) {
  const dictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return getTranslation(text, dictionary);
}

// Desafio 10
function addObject(context) {
  context.techList.push({ tech: context.currentValue, name: context.name });
  return context;
}

function orderAscending(context) {
  let nextIndex = parseInt(context.currentIndex, 10) + 1;
  let nextValue = context.input[nextIndex.toString()];
  let currentGreaterThanNext = (context.currentValue > nextValue);
  let nextIndexExists = (nextIndex in context.input);
  if (currentGreaterThanNext && nextIndexExists) {
    context.input[context.currentIndex] = nextValue;
    context.input[nextIndex] = context.currentValue;
  }
  return context;
}

function techList(array, name) {
  let output = 'Vazio!';
  if (array.length > 0) {
    let contextObject = { input: array };
    for (let cycles = array.length - 1; cycles > 0; cycles -= 1) {
      contextObject = loopThroughIn(contextObject, orderAscending);
    }
    contextObject.name = name;
    contextObject.techList = [];
    contextObject = loopThroughIn(contextObject, addObject);
    output = contextObject.techList;
  }
  return output;
}

// Desafio 11
function validateNumbers(context) {
  context = countNumber(context);
  let invalidNumber = (
    (context.counts[context.currentValue] > 2) ||
    (context.currentValue < 0) ||
    (context.currentValue > 9)
  )
  if (invalidNumber) {
    context.invalidNumber = true;
  }
  return context;
}

function getPhoneFormat(context) {
  let format = '';
  if (context.currentIndex in context.formats) {
    format = context.formats[context.currentIndex];
  }
  context.output += format + context.currentValue;
  return context;
}

function generatePhoneNumber(array) {
  let output = 'Array com tamanho incorreto.';
  if (array.length === 11) {
    output = 'não é possível gerar um número de telefone com esses valores';
    let contextObject = { input: array, counts: {} };
    contextObject = loopThroughIn(contextObject, validateNumbers);
    if (!(contextObject.invalidNumber)) {
      contextObject.output = '';
      contextObject.formats = { 0: '(', 2: ') ', 7: '-' };
      output = loopThroughIn(contextObject, getPhoneFormat).output;
    }
  }
  return output;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC)));
}

// Desafio 13
function countCupsOfWater(context) {
  let number = parseInt(context.currentValue, 10);
  context.totalWater += number;
  return context;
}

function hydrate(text) {
  // Referência para o código de regex no JS (MDN web docs):
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  let numberPattern = /\d+/g;
  let numbersInText = text.match(numberPattern);
  let cupsText = 'copo';
  const contextObject = loopThroughIn({ input: numbersInText, totalWater: 0 }, countCupsOfWater);
  if (contextObject.totalWater > 1) {
    cupsText += 's'
  }
  return `${contextObject.totalWater} ${cupsText} de água`;
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
