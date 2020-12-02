// Project Playground Functions - by Felipe Pimentel
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
  let area = base * height / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  arraySplit = sentence.split(" ");
  return arraySplit;
}

// Desafio 4
function concatName(entry) {
  let name = entry[entry.length - 1] + ', ' + entry[0];
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + 1 * ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
      return 'cat2';
  } else if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
      return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(entry) {
  let divisibles = [];
  
  for (let index = 0; index < entry.length; index += 1) {
      if (entry[index] % 3 === 0 && entry[index] % 5 === 0) {
          divisibles.push('fizzBuzz');
      } else if (entry[index] % 3 === 0) {
          divisibles.push('fizz');
      } else if (entry[index] % 5 === 0) {
          divisibles.push('buzz');
      } else {
          divisibles.push('bug!')
      }
  }
  
  return divisibles;
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
