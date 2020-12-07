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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}// console.log(catAndMouse(1, 1 , 5))

// Desafio 8
function getFizzBuzz(number) {
  let remainderBy3 = number % 3;
  let remainderBy5 = number % 5;
  let output = '';
  if ((remainderBy3 === 0) && (remainderBy5 === 0)) {
    output = 'fizzBuzz';
  } else if (remainderBy3 === 0) {
    output = 'fizz';
  } else if (remainderBy5 === 0) {
    output = 'buzz';
  } else {
    output = 'bug!';
  }
  return output;
}
function fizzBuzz(inputArray) {
  for (let index in inputArray) {
    let number = inputArray[index];
    let resultStr = getFizzBuzz(number);
    inputArray[index] = resultStr;
  }
  return inputArray;
}// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
 // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  let output = 'Array com tamanho incorreto!';
  if (array.length === 11) {
    output = 'Não é possível gerar um número de telefone com esses valores!';
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
