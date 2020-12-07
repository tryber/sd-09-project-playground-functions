// Desafio 1
function compareTrue(numB1, numB2) {
  // seu código
  if (numB1 && numB2 > 0) {
    return true;
  } return false;
}// console.log(compareTrue(2, 2));

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  let area = 0;
  area = (base * altura) / 2;
  return area;
}// console.log(calcArea(4, 2));

// Desafio 3

function splitSentence(word) {
  let array = [];
  array = word.split(' ');
  return array;
}// console.log(splitSentence('Mano... Seloko!!'));

// Desafio 4
function concatName(nomeInicioFim) {
// let inicioEfim = `${nomeInicioFim[nomeInicioFim.length - 1]}, ` + nomeInicioFim[0];
  let inicioEfim = nomeInicioFim[nomeInicioFim.length - 1] + ', ' + nomeInicioFim[0];
  return inicioEfim;
}// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let somaVitorias = 0;
  let somaEmpates = 0;

  for (let index = 0; index < wins; index += 1) {
    somaVitorias = wins * 3;
  }
  for (let index2 = 0; index2 < ties; index2 += 1) {
    somaEmpates = ties * 1;
  } return somaEmpates + somaVitorias;
}// console.log(footballPoints(2, 3));

// Desafio 6
function highestCount(count) {
   let cont = 0;
   for (let index = 0; index < count.length; index += 1) {
      for (let index2 = 0; index < count.length; index += 1) {
        if (count[index] === count[index2]) {
          cont ++;
        }
      }return cont;
    }
  }// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9, 8, 9, 9]));

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
    outcome = 'Os gatos trombam e o rato foge!';
  } else {
    outcome = getClosestCat(cat1, cat2);
  }
  return outcome;
}console.log(catAndMouse(2, 4, 4));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
// seu código aqui
}

// function translate(context) {
//   let value = context.currentValue;
//   if (context.currentValue in context.dictionary){
//     value = context.dictionary[context.currentValue];
//   }
//   context.translation += value;
//   return context;
// }

// function getTranslation(text, dictionary) {
//   const contextObject = loopThroughIn(
//     {
//       input: text,
//       dictionary,
//       translation: '',
//     },
//     translate,
//   );
//   return contextObject.translation;
// }

// function encode(text) {
//   const dictionary = { a: 1, e: 2, i: 3, o: 4, u: 5 };
//   return getTranslation(text, dictionary);
// }

function decode(text) {
//   const dictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
//   return getTranslation(text, dictionary);
}

// Desafio 10
function addObject(context) {
  context.techList.push({ tech: context.currentValue, name: context.name });
  return context;
}
function orderAscending(context) {
  let nextIndex = parseInt(context.currentIndex) + 1;
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
  let contextObject = { input: array };
  for (let cycles = array.length - 1; cycles > 0; cycles -= 1) {
    contextObject = loopThroughIn(contextObject, orderAscending);
  }
  contextObject.name = name;
  contextObject.techList = [];
  contextObject = loopThroughIn(contextObject, addObject);
  return contextObject.techList;
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
