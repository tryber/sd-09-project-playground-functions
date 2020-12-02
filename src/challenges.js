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
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(arraySplit) {
  // seu código aqui
  let divisor = arraySplit.split(" ");
  return divisor;
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

    for (let index2 = 0; index2 < arrayRepet.length; index2 += 1) {
      if (arrayRepet[index2] === maiorNumero) {
        contaMaiorNumero += 1;
      }

      return contaMaiorNumero;
    }
  }
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = 0;
  let distancia2 = 0;

  if (cat1 > mouse) {
    distancia1 = cat1 - mouse;
  } else if (cat1 < mouse) {
    distancia1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distancia2 = cat2 - mouse;
  } else if (cat2 < mouse) {
    distancia2 = mouse - cat2;
  }

  if (distancia1 > distancia2) {
    return "cat2";
  } else if (distancia1 < distancia2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(3, 4, 5));

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
