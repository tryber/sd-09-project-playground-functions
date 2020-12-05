// #VQV

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
} 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString[arrayString.length - 1];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
    let arrayOrdenad = arrayNumbers.sort(compareNumbers);
    let numberMax = arrayOrdenad.length - 1;
    let cont = 0;
    for (let index = 0; index < arrayOrdenad.length; index += 1) {
      if (arrayOrdenad[index] === arrayOrdenad[numberMax]) {
        cont += 1;
      }
    }
    return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  }
  return 'cat2';
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
