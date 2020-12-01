// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    console.log('Desafio 1 Ta indo');
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  console.log(`desafio 2 ${calc}`);
  return calc;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let storage = '';
  for (let index in string) {
    if (string[index] === ' ') {
      array.push(storage);
      storage = '';
    } else {
      storage = storage + string[index];
    }
  }
  array.push(storage);
  console.log(array);
  return array;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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

compareTrue(true, true)
calcArea(5, 4)
splitSentence('Go Trybe')

// Aooba, não é que tem um segredo no Lession Learned?
