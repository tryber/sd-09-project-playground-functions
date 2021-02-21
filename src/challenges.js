// Desafio 1
function compareTrue(diaUtil, haveraAula) {
  if (diaUtil && haveraAula === true) {
    return true;
  } else {
    return false;
  }
} console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} console.log(calcArea(5, 6));

// Desafio 3
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}console.log(splitSentence('vqv trybe'));

// Desafio 4
let arrays = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(names) {
  let primeiroNome = names[0];
  let ultimoNome = names[names.length - 1];
  let concatenacao = (ultimoNome + ', ') + primeiroNome;
  return concatenacao;
}
console.log(concatName(arrays));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let frequency = 0;
  let largernumb = Math.max.apply(null, array);
  for (let number of array) {
    if (number === largernumb) {
      frequency += 1;
    }
  }
  return frequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let resultadoArray = [];
  for (let fizzDivisible in arrayDeNumeros) {
    if (arrayDeNumeros[fizzDivisible] % 3 === 0 && arrayDeNumeros[fizzDivisible] % 5 === 0) {
      resultadoArray.push('fizzBuzz');
    } else if (arrayDeNumeros[fizzDivisible] % 3 === 0) {
      resultadoArray.push('fizz');
    } else if (arrayDeNumeros[fizzDivisible] % 5 === 0) {
      resultadoArray.push('buzz');
    } else {
      resultadoArray.push('bug!')
    }
  }
  return resultadoArray;
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
