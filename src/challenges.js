// Desafio 1 OK
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}

// Desafio 2 OK
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string3) {
  let arrayString3 = string3.split(' ');
  return arrayString3;
}

// Desafio 4 OK
function concatName(frase4) {
  let answer = (frase4[frase4.length -1] + ', ' + frase4[0]);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winpoint = 3;
  let result = (wins * winpoint) + ties;
  return result;
}

// Desafio 6
function highestNumber(array6) {
  let index = 0;
  let highest = array6[index];
  for (index = 0; index < array6.length; index += 1) {
    if (highest < array6[index]) {
      highest = array6[index];
    }
  }
  return highest;
  // teste
}
function highestCount(array6) {
  let index = 0;
  let counter = 0;
  for (index = 0; index < array6.length; index += 1) {
    if (highestNumber(array6) === array6[index]) {
      counter = counter += 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs((cat1 - mouse));
  let distance2 = Math.abs((cat2 - mouse));
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array8) {
  let index = 0
  for (index = 0; index < array8.length; index += 1) {
    if (array8[index] % 3 === 0 && array8[index] % 5 === 0) {
      array8[index] = 'fizzBuzz';
    } else if (array8[index] % 3 === 0) {
      array8[index] = 'fizz';
    } else if (array8[index] % 5 === 0) {
      array8[index] = 'buzz';
    } else {
      array8[index] = 'bug!';
    }
  }
  return array8;
}

// Desafio 9
function encode(string9) {
  let object = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  for (let key in object) {
    let substitute = key;
    let re = new RegExp(substitute, 'g');
    string9 = string9.replace(re, object[key]);
  }
  return string9;
}

function decode(string9) {
  let object2 = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  for (let key2 in object2) {
    let substitute2 = key2;
    let re2 = new RegExp(substitute2, 'g');
    string9 = string9.replace(re2, object2[key2]);
  }
  return string9;
}

// Desafio 10
function techList(arraytech, name) {
// seu código aqui
  let arrayTech = [];
  arraytech.sort();
  for (let index = 0; index < arraytech.length; index += 1) {
    arrayTech.push({
      tech: arraytech[index],
      name,
    }
    );
  }
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return arrayTech;
}

// Desafio 11
function generatePhoneNumber() {
}

// tt
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
