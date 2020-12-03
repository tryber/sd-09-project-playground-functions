// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  text += ' ';
  let result = [];
  let auxiliary = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== ' ') {
      auxiliary += text[index];
    } else {
      result.push(auxiliary);
      auxiliary = '';
    }
  }
  return result;
}

// Desafio 4
function concatName(names) {
  let result = names[names.length - 1] + ', ' + names[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Funcao auxiliar
function highestValue(array) {
  let bigger = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  return bigger;
}

// Desafio 6
function highestCount(array) {
  let bigger = highestValue(array);
  let highestValueAmount = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === bigger) {
      highestValueAmount += 1;
    }
  }
  return highestValueAmount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(8, 5, 3));

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
