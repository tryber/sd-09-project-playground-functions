// Desafio 1
// iniciando
function compareTrue(valor1, valor2) {
  let resposta = false;
  if (valor1 === true && valor2 === true) {
    resposta = true;
  }
  return resposta;
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
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let quantity = 0;
  let bigger = Math.max.apply(null, array);
  for (let number of array) {
    if (number === bigger) {
      quantity += 1;
    }
  }
  return quantity;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let number;
  for (number in array) {
    number = number;
    if (array[number] % 3 === 0 && array[number] % 5 !== 0) {
      array[number] = 'fizz';
    } else if (array[number] % 5 === 0 && array[number] % 3 !== 0) {
      array[number] = 'buzz';
    } else if (array[number] % 5 === 0 && array[number] % 3 === 0) {
      array[number] = 'fizzBuzz';
    } else {
      array[number] = 'bug!';
    }
  }
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
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
