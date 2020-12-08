// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(streng) {
  let rel = [];
  let guarda = '';
  for (let x = 0; x < streng.length; x += 1) {
    if (streng[x] !== ' ') {
      guarda += streng[x];
    }
    if (streng[x] === ' ' || x === streng.length - 1) {
      rel.push(guarda);
      guarda = '';
    }
  }
  return rel;
}

// Desafio 4
function concatName(array) {
  let ultimoEprimeiro = array[array.length - 1] + ', ' + array[0];
  return ultimoEprimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNum) {
  let resutado = 0;
  for (let x = 0; x < arrayNum.length; x += 1) {
    arrayNum.sort();
    if (arrayNum[x] === arrayNum[arrayNum.length - 1]) {
      resutado += 1;
    }
  }
  return resutado;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicaogat1 = '';
  let posicaogat2 = '';
  if (mouse > cat1 && mouse > cat2) {
    posicaogat1 = mouse - cat1;
    posicaogat2 = mouse - cat2;
  }
  if (mouse < cat1 && mouse < cat2) {
    posicaogat1 = cat1 - mouse;
    posicaogat2 = cat2 - mouse;
  }
  if (mouse < cat1 && mouse > cat2) {
    posicaogat1 = cat1 - mouse;
    posicaogat2 = mouse - cat2;
  }
  if (mouse > cat1 && mouse < cat2) {
    posicaogat1 = mouse - cat1;
    posicaogat2 = cat2 - mouse;
  }
  if (posicaogat1 < posicaogat2) {
    return 'cat1'
  }
  if (posicaogat1 > posicaogat2) {
    return 'cat2'
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayestreng = []
  for (let x = 0; x < array.length; x += 1) {
    if (array[x] % 3 === 0 && array[x] % 5 === 0) {
      arrayestreng.push('fizzBuzz');
    }
    else if (array[x] % 3 === 0) {
      arrayestreng.push('fizz');
    }
    else if (array[x] % 5 === 0) {
      arrayestreng.push('buzz');
    }
    else {
      arrayestreng.push('bug!');
    }
  }
  return arrayestreng;
}

// Desafio 9
function encode(array9) {
  let outraFrase = '';
  for (let x = 0; x < array9.length; x += 1) {
    if (array9[x] === 'a') {
      outraFrase += 1;
    }
    else if (array9[x] === 'e') {
      outraFrase += 2;
    }
    else if (array9[x] === 'i') {
      outraFrase += 3;
    }
    else if (array9[x] === 'o') {
      outraFrase += 4;
    }
    else if (array9[x] === 'u') {
      outraFrase += 5;
    }
    else {
      outraFrase += array9[x];
    }
  }
  return outraFrase;
}

function decode(array10) {
  let outraFrase = '';
  for (let x = 0; x < array10.length; x += 1) {
    if (array10[x] === '1') {
      outraFrase += 'a';
    }
    else if (array10[x] === '2') {
      outraFrase += 'e';
    }
    else if (array10[x] === '3') {
      outraFrase += 'i';
    }
    else if (array10[x] === '4') {
      outraFrase += 'o';
    }
    else if (array10[x] === '5') {
      outraFrase += 'u';
    }
    else {
      outraFrase += array10[x];
    }
  }
  return outraFrase;
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
