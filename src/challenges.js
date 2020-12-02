// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arrayPalavras = [];
  let palavra = '';

  for (let index = 0; index <= frase.length; index += 1) {
    if (frase[index] !== ' ' && index !== frase.length) {
      palavra += frase[index];
    } else {
      arrayPalavras.push(palavra);
      palavra = '';
    }
  }
  return arrayPalavras;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestNumber(array) {
  let highestN = array[0];
  for (let number in array) {
    if (array[number] > highestN) {
      highestN = array[number];
    }
  }
  return highestN;
}

function highestCount(array) {
  let count = 0;
  for (let number in array) {
    if (array[number] === highestNumber(array)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let number of array) {
    switch (true) {
      case number % 3 === 0 && number % 5 === 0:
        fizzBuzzArray.push('fizzBuzz');
        break;
      case number % 3 === 0:
        fizzBuzzArray.push('fizz');
        break;
      case number % 5 === 0:
        fizzBuzzArray.push('buzz');
        break;
      default:
        fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  for (let letter of string) {
    switch (letter) {
      case 'a':
        encodedString += '1';
        break;
      case 'e':
        encodedString += '2';
        break;
      case 'i':
        encodedString += '3';
        break;
      case 'o':
        encodedString += '4';
        break;
      case 'u':
        encodedString += '5';
        break;
      default:
        encodedString += letter;
    }
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';
  for (let letter of string) {
    switch (letter) {
      case '1':
        decodedString += 'a';
        break;
      case '2':
        decodedString += 'e';
        break;
      case '3':
        decodedString += 'i';
        break;
      case '4':
        decodedString += 'o';
        break;
      case '5':
        decodedString += 'u';
        break;
      default:
        decodedString += letter;
    }
  }
  return decodedString;
}

// Desafio 10
function techList(array, name) {
  let arrayTechObjects = [];
  if (array.length !== 0) {
    for (let tec of array.sort()) {
      let techObject = {
        tech: undefined,
        name,
      };
      techObject.tech = tec;
      arrayTechObjects.push(techObject);
    }
    return arrayTechObjects;
  }
  return 'Vazio!';
}

// Desafio 11
function checkNumbers(array) {
  let validate = true;
  for (let number in array) {
    let count = 0;
    for (let num in array) {
      if (array[num] === array[number]) {
        count += 1;
      }
    }
    if (count >= 3) {
      validate = false;
    }
    if (array[number] < 0 || array[number] > 9) {
      validate = false;
    }
  }
  return validate;
}

function generatePhoneNumber(array) {
  let numero = '(';
  if (array.length === 11) {
    if (checkNumbers(array)) {
      for (let number in array) {
        if (number === "1") {
          numero += `${array[number]}) `;
        } else if (number === "6") {
          numero += `${array[number]}-`;
        } else {
          numero += array[number];
        }
      }
      return numero;
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
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
