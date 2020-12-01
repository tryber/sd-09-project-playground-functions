// #VQV turma 09!
// Desafio 1
function compareTrue(value1, value2) {
  let result = value1 === true && value2 === true;
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
// Used the split method contained in the documentation <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(nameList) {
  let firstAndLast = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestNumber(numberList) {
  let highest = 0;
  for (let index in numberList) {
    if (highest < numberList[index]) {
      highest = numberList[index];
    }
  }
  return highest;
}

function highestCount(numberList) {
  let countMode = 0;
  let highest = highestNumber(numberList);
  for (let index in numberList) {
    if (highest === numberList[index]) {
      countMode += 1;
    }
  }
  return countMode;
}
console.log(highestCount([2,4,5,6,6]));

// Desafio 7
// Used this explanation <https://medium.com/@migcoder/reflection-get-variable-name-in-javascript-64ed595701eb> to figure out how to display a variable name
function catAndMouse(mouse, cat1, cat2) {
  let positions = {
    mouse,
    cat1,
    cat2,
  }
  let message = '';
  if (positions.mouse - positions.cat1 < positions.mouse - positions.cat2) {
    message = 'cat1';
  } else if (positions.mouse - positions.cat1 > positions.mouse - positions.cat2) {
    message = 'cat2';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}
console.log(catAndMouse(10,5,2));

// Desafio 8
function fizzBuzz(numberList) {
  let answer = [];
  for (let index in numberList) {
    if (numberList[index] % 3 === 0 && numberList[index] % 5 === 0) {
      answer.push('fizzBuzz');
    } else if (numberList[index] % 3 === 0) {
      answer.push('fizz');
    } else if (numberList[index] % 5 === 0) {
      answer.push('buzz');
    } else {
      answer.push('bug!');
    }
  }
  return answer;
}

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
