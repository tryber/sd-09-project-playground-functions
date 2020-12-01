// Desafio 1
function compareTrue(arg, arg2) {
  if ((arg === true) && (arg2 === true)) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(2, 3))

// Desafio 3
function splitSentence(param) {
  return param.split(' ')
}
console.log(splitSentence('go Trybe'))

// Desafio 4
function concatName(param) {
  let last = [...param].pop();
  let first = [...param].shift();
  let newArr = [last, first];
  return newArr.join(', ').toString();
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(3, 1))

// Desafio 6
function highestCount(param) {
  let highNum = 0;
  let counNum = 0;
  for (let index = 0; index < param.length; index += 1) {
    let firstNum = param[index];
    for (let index2 = 0; index2 < param.length; index2 += 1) {
      let secondNum = param[index2];      
      if ((highNum < firstNum) && (highNum < secondNum)) {
        if (firstNum > secondNum) {
          highNum = firstNum;
        }
        highNum = secondNum;
      }
    }
  }
  for (let index3 = 0; index3 < param.length; index3 += 1) {
    if (param[index3] === highNum) {
      counNum += 1;
    }
  }
  return counNum;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 3]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
