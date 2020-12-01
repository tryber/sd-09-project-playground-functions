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
  return `${param[param.length - 1]}, ${param[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(3, 1))

// Desafio 6
function highestCount(param) {
  let high = 0;
  let count = 0;
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] > high) {
      high = param[index];
      count = 1;
    } else if (param[index] === high) {
      count += 1;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 3]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1'
  }
  return 'cat2'
}
console.log(catAndMouse(5, 2, 3))

// Desafio 8
function fizzBuzz(param) {
  let newArr = [];
  for (let index = 0; index < param.length; index += 1) {
    switch (true) {
      case param[index] % 3 !== 0 && param[index] % 5 !== 0:
        newArr.push('bug!');
        break;
      case param[index] % 3 === 0 && param[index] % 5 === 0:
        newArr.push('fizzBuzz');
        break;
      case param[index] % 3 === 0:
        newArr.push('fizz');
        break;
      case param[index] % 5 === 0:
        newArr.push('buzz');
        break;
      default:
        newArr.push('bug!')
    }
  }
  return newArr;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))


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
