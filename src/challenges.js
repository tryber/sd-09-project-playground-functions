// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 5));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}
console.log(concatName(['Valdeci', 'Lucas', 'Jean', 'Paolillo', 'Patricia']));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsMatchWins = 3;
  let pointsMatchTies = 1;
  wins *= pointsMatchWins;
  ties *= pointsMatchTies;
  return wins + ties;
}
console.log(footballPoints(5, 5));

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maior) {
      maior = arrayNumbers[index];
    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maior === arrayNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia = 0;
  let distancia2 = 0;
  if (mouse < cat1) {
    distancia = cat1 - mouse;
  } else {
    distancia = mouse - cat1;
  }
  if (mouse < cat2) {
    distancia2 = cat2 - mouse;
  } else {
    distancia2 = mouse - cat2;
  }
  if (distancia < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      result.push('fizzBuzz');
      }
    else if (numeros[index] % 5 === 0) {
      result.push('buzz');
    }
    else if (numeros[index] % 3 === 0) {
      result.push('fizz');
    }
    else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(param1) {
  let letters = param1.split('');
  let results = '';
  for (let index = 0; index < letters.length; index += 1) {
    switch (letters[index]) {
      case 'a':
        results += '1';
        break;
      case 'e':
        results += '2';
        break;
      case 'i':
        results += '3';
        break;
      case 'o':
        results += '4';
        break;
      case 'u':
        results += '5';
        break;
      default:
        results += letters[index];
        break;
    }
  }
  return results;
}
function decode(param2) {
  let letters2 = param2.split('');
  let results2 = '';
  for (let index = 0; index < letters2.length; index += 1) {
    switch (letters2[index]) {
      case '1':
        results2 += 'a';
        break;
      case '2':
        results2 += 'e';
        break;
      case '3':
        results2 += 'i';
        break;
      case '4':
        results2 += 'o';
        break;
      case '5':
        results2 += 'u';
        break;
      default:
        results2 += letters2[index];
        break;
    }
  }
  return results2;
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
