// Desafio 1
function compareTrue(value1, value2) {
  let resultado = ' ';
  if (value1 === true && value2 === true) {
    resultado = true
  } else {
    resultado = false
  }
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      arraySentence.push(sentence[index])
    }
  }
  // seu código aqui
  return arraySentence
}

// Desafio 4
function concatName(arrayNomes) {
  let nomes = [];
  for (let index = arrayNomes.length - 1; index >= 0; index -= 1) {
    if (arrayNomes[index] === arrayNomes[arrayNomes.length - 1]) {
      nomes += arrayNomes[index]
      nomes += ', '
    } else if (arrayNomes[index] === arrayNomes[0]) {
      nomes += arrayNomes[index]
    }
  }
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let numberOfRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > biggestNumber) {
      biggestNumber = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      numberOfRepeat += 1
    }
  }
  return numberOfRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  if(mouse > cat1){
    cat1Distance = mouse - cat1;
  } else {
    cat1Distance = cat1 - mouse;
  }
  if(mouse > cat2){
    cat2Distance = mouse - cat2;
  } else {
    cat2Distance = cat2 - mouse;
  }
  if(cat1Distance > cat2Distance) {
    hunte = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    hunte = 'cat1';
  } else {
    hunte = 'os gatos trombam e o rato foge'
  }
  return hunte;
}

console.log(catAndMouse(5, 2, 7))

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
