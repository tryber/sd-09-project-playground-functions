// #VQV!
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
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = '';
  for (let index = 0; index < array.length; index += 1) {
    string = array[array.length-1] + ', ' + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  for (let index in array) {
    if (array[index] > higherNumber) {
        higherNumber = array[index];
    }
  }
  let vezesRepetido = 0;
  for (let index2 in array) {
    if (array[index2] === higherNumber) {
      vezesRepetido += 1;
    }
  }
  return vezesRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Position < cat2Position) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let array = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      array.push('fizzBuzz');
    } else if (arrayNum[index] % 5 === 0) {
      array.push('buzz');
    } else if (arrayNum[index] % 3 === 0) {
      array.push('fizz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let numString = '';
  for (let index in string) {
    switch (string[index]) {
      case 'a':
        numString += 1;
        break;
      case 'e':
        numString += 2;
        break;
      case 'i':
        numString += 3;
        break;
      case 'o':
        numString += 4;
        break;
      case 'u':
        numString += 5;
        break;
      default:
        numString += string[index];
    }
  }
  return numString;
}

function decode(numString) {
  let decodeString = '';
  for (let index in numString) {
    switch (numString[index]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += numString[index];
    }
  }
  return decodeString;
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let infoList = array.sort();
  let techObject = [];
  for (let index in infoList) {
    techObject.push({
      tech: infoList[index],
      name,
    });
  }
  return techObject;
}

// Desafio 11
function contaRepeticoes(array) {
  let trueOrFalse = false;
  let contador = 0;
  for (let index in array) {
    let verificaNumero = array[index];
    for (let index2 in array) {
      if (verificaNumero === array[index2]) {
        contador += 1;
      }
      if (contador >= 3) {
        trueOrFalse = true;
      }
    }
    contador = 0;
  }
  return trueOrFalse;
}

function verificaTamanho(array) {
  let trueOrFalse = false;
  for (let index = 0; index < array.length; index += 1) {
    if (contaRepeticoes(array) || array[index] < 0 || array[index]> 9) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;
}

function generatePhoneNumber(array) {
  let resposta = '';
  if (verificaTamanho(array)) {
    resposta = 'não é possível gerar um número de telefone com esses valores';
  }
  if (array.length !== 11) {
    resposta = 'Array com tamanho incorreto.';
  }
  if (resposta === '') {
    resposta = '(' + array[0] + '' + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  }
  return resposta;
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
