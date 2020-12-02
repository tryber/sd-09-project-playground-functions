// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentense) {
  let array = [];
  let frase = '';
  for (const index in sentense) {
    if (sentense[index] !== ' ') {
      frase += sentense[index];
    } else if (sentense[index] === ' ') {
      array.push(frase);
      frase = '';
    }
  }
  array.push(frase);
  return array;
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
function highestCount(array2) {
  let maiorNumero = 0;
  let repeticao = 0;

  for (const numero1 of array2) {
    if (maiorNumero < numero1) {
      maiorNumero = numero1;
      repeticao = 0;

      for (const numero2 of array2) {
        if (maiorNumero === numero2) {
          repeticao += 1;
        }
      }
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array3) {
  let array = [];

  for (const multiplo of array3) {
    if ((multiplo % 3 === 0) && (multiplo % 5 !== 0)) {
      array.push('Fizz');
    } else if ((multiplo % 5 === 0) && (multiplo % 3 !== 0)) {
      array.push('buzz');
    } else if ((multiplo % 3 === 0) && (multiplo % 5 === 0)) {
      array.push('fizzBuzz');
    } else if ((multiplo % 3 !== 0) && (multiplo % 5 !== 0)) {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(frase) {
  for (const caracter in frase) {
    if (frase[caracter] === 'a') {
      frase = frase.replace(frase[caracter], '1');
    } 
    else if (frase[caracter] === 'e') {
      frase = frase.replace(frase[caracter], '2');
    } 
    else if (frase[caracter] === 'i') {
      frase = frase.replace(frase[caracter], '3');
    } 
    else if (frase[caracter] === 'o') {
      frase = frase.replace(frase[caracter], '4');
    } 
    else if (frase[caracter] === 'u') {
      frase = frase.replace(frase[caracter], '5');
    }
  }
  return frase;
}
function decode(frase) {
  for (const caracter in frase) {
    if (frase[caracter] === '1') {
      frase = frase.replace(frase[caracter], 'a');
    } 
    else if (frase[caracter] === '2') {
      frase = frase.replace(frase[caracter], 'e');
    } 
    else if (frase[caracter] === '3') {
      frase = frase.replace(frase[caracter], 'i');
    } 
    else if (frase[caracter] === '4') {
      frase = frase.replace(frase[caracter], 'o');
    } 
    else if (frase[caracter] === '5') {
      frase = frase.replace(frase[caracter], 'u');
    }
  }
  return frase;
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
