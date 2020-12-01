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
      storage += string[index];
    }
  }
  array.push(storage);
  console.log(array);
  return array;
}

// Desafio 4
function concatName(array) {
  let seiLaEu = `${array[array.length - 1]}, ${array[0]}`;
  console.log(seiLaEu);
  return seiLaEu;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result += (wins * 3) + ties;
  console.log(result);
  return result;
}

// Desafio 6
function highestCount(array) {
  let higher = 0;
  let result = 0;
  for (let index in array) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  for (let index2 in array) {
    if (array[index2] === higher) {
      result += 1;
    }
  }
  console.log(result);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
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
concatName(['primeira', 'segunda', 'Ultima'])
footballPoints(3, 1)
highestCount([9, 1, 2, 41, 3, 9, 5, 7, 9, 41, 17, 41])

// Aooba, não é que tem um segredo no Lession Learned?!
