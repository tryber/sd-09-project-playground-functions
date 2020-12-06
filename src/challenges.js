// Segundo projeto! #VQV
// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2);
}

// Desafio 3
function splitSentence(sentence) {
  result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(nomes) {
  result = nomes[nomes.length -1] + ', ' + nomes[0]
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins * 3) + ties
  return result;
}

// Desafio 6

function highestCount(param) {
  let maxNumber = 0;
  let count = null;
  for (let index = 0; index < param.length; index+=1) {
    if (param[index] !== maxNumber && param[index] > maxNumber) {
      maxNumber = param[index]
      count = 1
    } else if (param[index] === maxNumber) {
      count += 1
    }
  }
  return count;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(param) {
  let result = [];
  for (index = 0; index < param.length; index+=1) {
    const multiploDe3 = param[index] % 3;
    const multiploDe5 = param[index] % 5;

    if (multiploDe3 === 0 && multiploDe3 !== multiploDe5) {
      result.push('fizz');
    } else if (multiploDe5 === 0 && multiploDe5 !== multiploDe3) {
      result.push('buzz');
    } else if (multiploDe3 === 0 && multiploDe5 === 0) {
      result.push('fizzbuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
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
