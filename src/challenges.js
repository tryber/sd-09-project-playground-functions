// VAMO NESSA É APENAS O COMEÇO!!!
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(meuNome) {
  return meuNome.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  let concatenando = arrayString[arrayString.length - 1];
  concatenando += ", " + arrayString[0];
  return concatenando;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins *= 3) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === 9) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(n) {
  for (let index = 1; index <= n; index += 1) {
    if (index % 3 === 0) {
      return "fizz";
    } else if (index % 5 === 0) {
      return "buzz";
    } else if (index % 3 === 0 && index % 5 === 0) {
      return "fizzBuzz";
    } else {
      return "bug!";
    }
  }
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

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

console.log(fizzBuzz(10));
