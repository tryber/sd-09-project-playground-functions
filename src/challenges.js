// Segundo Projeto - VQV
// Playground Functions

// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
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
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let helper = array[array.length - 1];
  let holder = array[0];
  let answer = helper + ", " + holder;
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let higher = 0;
  let max = 0;
  for (let index in array) {
    if (array[index] > higher) {
      higher = array[index];
      max = 0;
      for (let counter in array) {
        if (array[counter] === array[index]) {
          max += 1;
        }
      }
    }
  }
  return max;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let d1 = cat1 - mouse;
  let d2 = cat2 - mouse;
  if (d1 < d2) {
    return "cat1";
  }
  if (d1 > d2) {
    return "cat2";
  }
  if (d1 === d2) {
    return "os gatos trombam e o rato foge";
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
};
