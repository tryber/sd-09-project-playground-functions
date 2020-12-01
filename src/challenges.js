/*
Projeto 2 - Playground Functions!

Tiago Yoneda
https://github.com/tiago-yoneda
*/

// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height * 0.5);
}

// Desafio 3
function splitSentence(arraySource) {
  let newArray = arraySource.split(' ');
  return newArray;
}

// Desafio 4
function concatName(arraySource) {
  let newArray = [];
  newArray.push(arraySource[arraySource.length - 1], arraySource[0]);
  return newArray.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// funcao auxiliar para 6
function findHigher(array) {
  let auxNum = 0;
  for (let item of array) {
    if (item >= auxNum) {
      auxNum = item;
    }
  }
  return auxNum;
}

// Desafio 6
function highestCount(array) {
  let highest = findHigher(array);
  let counter = 0;
  for (let item of array) {
    if (highest === item) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = []
  for (let item of array) {
    if (item % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (item % 3 === 0) {
      newArray.push('fizz');
    } else if (item % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// objeto para ajudar o desafio 9
const correspondencia = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}

// funcao auxiliar replaceAll
function replaceAll(string, busca, troca) {
  let newString = string.split(busca).join(troca);
  return newString;
}

// Desafio 9
function encode(string) {
  for (let item in correspondencia) {
    string = replaceAll(string, item, correspondencia[item]);
  }
  return string;
}

function decode(string) {
  for (let item in correspondencia) {
    string = replaceAll(string, correspondencia[item], item);
  }
  return string;
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }

  array.sort();
  let newArray = [];
  let newObject = {};

  for (let item of array) {
    newObject.tech = item;
    newObject.name = name;
    newArray.push(newObject);
    newObject = {};
  }
  return newArray;
}

// funcao auxiliar para fuincao 11
function verificaRepetido(array) {
  let topCounter = 0;
  let counter = 0;
  for (let num of array) {
    for (let item in array) {
      if (num === array[item]) {
        counter += 1;
      }
    }
    if (counter >= topCounter) {
      topCounter = counter;
    }
    counter = 0;
  }
  if (topCounter >= 3) {
    return 1;
  }
  return 0;
}

function verificaViabilidade(array) {
  if (array.length !== 11) {
    return (-1);
  } else if (array.some(element => element > 9) || array.some(element => element < 0)) {
    return 1;
  } else if (verificaRepetido(array) === 1) {
    return 1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber(array) {
  let verificador = verificaViabilidade(array);
  if (verificador === -1) {
    return ('Array com tamanho incorreto.');
  } else if (verificador === 1) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  let telefone = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
  return (telefone);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check1 = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let check2 = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  let check3 = (lineC < lineA + lineB) && (lineC > Math.abs(lineA - lineB));
  return (check1 && check2 && check3);
}

// Desafio 13
function hydrate(string) {
  // extrai todos os digitos com o match / \d /g
  // transforma eles de string para numero com map(Number)

  let numbers = string.match(/\d+/g).map(Number);
  let soma = 0;
  for (let item of numbers) {
    soma += item;
  }
  if (soma > 1) {
    return (`${soma} copos de água`);
  }
  return (`${soma} copo de água`);
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
