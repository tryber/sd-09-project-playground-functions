// Desafio 1

function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true
  }
  return false
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
};

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
};

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`
};

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
};

// Desafio 6
function highestCount(param) {
  let major = [];
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] >= major) {
      major.push(param[index])
    }
  }
  return major.length
};


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1
  let distanceCat2 = mouse - cat2

  if (distanceCat1 > distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 > distanceCat1) {
    return 'cat2'
  } else if (distanceCat1 === distanceCat2) {
    return 'Os gatos trombam e o rato foge'
  }
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
