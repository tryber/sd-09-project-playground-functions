// Desafio 1
function compareTrue(firstParam, secondParam) {
  // seu código aqui
  if (firstParam === true && secondParam === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringParam) {
  // seu código aqui
  return stringParam.split(' ')
}

// Desafio 4
function concatName(paramName) {
  // seu código aqui
  let nameString = '';
  for (let index = 0; index < paramName.length; index += 1) {
    nameString = `${paramName[paramName.length - 1]}, ${paramName[0]}`
  }
  return nameString;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(paramNumbers) {
  // seu código aqui
  let compar = 0;
  let arr = [];
  for (let i = 0; i < paramNumbers.length; i += 1) {
    if (paramNumbers[i] >= compar) {
      compar = paramNumbers[i]
    }
  }
  for (let j = 0; j < paramNumbers.length; j += 1) {
    if (paramNumbers[j] === compar) {
      arr.push(paramNumbers[j])
    }
  }
  return arr.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((Math.abs(cat1 - mouse) === Math.abs(mouse - cat2))
    || Math.abs(mouse - cat1) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 > mouse) && Math.abs(cat1 > cat2)) {
    return 'cat2';
  } else if (Math.abs(cat1 < mouse) && Math.abs(cat1 < cat2)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) > Math.abs(mouse - cat2)
    || Math.abs(mouse - cat1) > Math.abs(cat2 - mouse)) {
    return 'cat2'
  }
  return 'cat1';
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
