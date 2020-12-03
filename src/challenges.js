// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(String) {
  return String.split(' ');
}

// Desafio 4
function concatName(Ar) {
  return Ar[Ar.length - 1] + ', ' + Ar[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(nums) {
  let numMax = nums[0];
  let numMaxTimes = 0;
  for (let index = 1; index < nums.length; index += 1) {
    if (numMax < nums[index]) {
      numMax = nums[index];
     }
  }
  for (let index2 = 0; index2 < nums.length; index2 += 1) {
    if (numMax == nums[index2]) {
      numMaxTimes += 1;
    }
  }
  return numMaxTimes;
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
