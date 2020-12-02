//MAIS UM DESAFIO PARA SUPERAR

// Desafio 1
function compareTrue(firstItem, secondItem) {
  // seu código aqui
  if (firstItem && secondItem) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

console.log(calcArea(5, 5));

// Desafio 3
function splitSentence(arraySplit) {
  // seu código aqui
  return arraySplit.split(" ");
}

console.log(splitSentence("vamos com tudo!! todos somos trybe"));

// Desafio 4
function concatName(arrayConcat) {
  // seu código aqui
  let result = `${arrayConcat[arrayConcat.length - 1]}, ${arrayConcat[0]}`;

  return result;

  /*
  let string01 = array[0];
  let string02 = array[array.length -1];
  let string03 = string01 + ',' + string02;
   ou 

   return arrayConcat[arrayConcat.length - 1] + ',' + arrayContat;
  
  */
}

console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let quantityWins = wins * 3;
  let quantityTies = ties * 1;
  let quantityTotal = quantityWins + quantityTies;
  return quantityTotal;
}

console.log(footballPoints(10, 3));

// Desafio 6

function highestCount(arrayRepet) {
  let maiorNumero = arrayRepet[0];
  let contaMaiorNumero = 0;
  // seu código aqui
  for (let index = 0; index < arrayRepet.length; index += 1) {
    if (arrayRepet[index] > maiorNumero) {
      maiorNumero = arrayRepet[index];
    }

    for (let index = 0; index < arrayRepet.length; index += 1) {
      if (arrayRepet[index] === maiorNumero) {
        contaMaiorNumero += 1;
      }

      return contaMaiorNumero;
    }
  }
}

console.log(highestCount());

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
};
