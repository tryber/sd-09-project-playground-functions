// Desafio 1
// iniciando
function compareTrue(valor1, valor2) {
  let resposta = false;
  if (valor1 === true && valor2 === true) {
    resposta = true;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let quantity = 0;
  let bigger = Math.max.apply(null, array);
  for (let number of array) {
    if (number === bigger) {
      quantity += 1;
    }
  }
  return quantity;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzOrBuzz(array) {
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      array[index] = 'fizz';
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      array[index] = 'buzz';
    }
  }
  return array;
}

function fizzBuzz(array) {
  fizzOrBuzz(array);
  for (let index in array) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      array[index] = 'fizzBuzz';
    } else if (typeof array[index] !== 'string') {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encodedOrdecoded(numberOrLetter) {
  switch (numberOrLetter) {
    case 'a':
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    default:
      return numberOrLetter;
  }
}

function encode(string) {
  let letter = '';
  for (let index in string) {
    if (isNaN(string[index])) {
      letter += encodedOrdecoded(string[index]);
    } else {
      letter += string[index];
    }
  }
  return letter;
}
function decode(string) {
  let letter = '';
  for (let index in string) {
    if (!isNaN(string[index])) {
      letter += encodedOrdecoded(string[index]);
    } else {
      letter += string[index];
    }
  }
  return letter;
}
console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));
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
