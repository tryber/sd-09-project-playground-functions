// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let word = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] !== ' ') {
      word += string[contador];
    } else {
      array.push(word);
      word = '';
    }
  }
  array.push(word);
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = '';
  string = string.concat(`${array[array.length - 1]}, ${array[0]}`);

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
// Referência para usar o Math.max(...array) e o for (... in ...) no desafio:
// https://imasters.com.br/front-end/diferenca-entre-for-of-e-for-in
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(array) {
  // seu código aqui
  let maiorNumero = Math.max(...array);
  let somaNumero = 0;
  for (let contadorNumero in array) {
    if (maiorNumero === array[contadorNumero]) {
      somaNumero += 1;
    }
  }
  return somaNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  function catFunct(mouseD, catD) {
    let distancia = 0;

    if (mouseD < catD) {
      distancia = catD - mouseD;
    } else if (mouseD > catD) {
      distancia = mouseD - catD;
    }
    return distancia;
  }

  if (catFunct(mouse, cat1) < catFunct(mouse, cat2)) {
    return 'cat1';
  } else if (catFunct(mouse, cat1) > catFunct(mouse, cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// Refecencia do for (... of ...) usado no desafio:
// // https://imasters.com.br/front-end/diferenca-entre-for-of-e-for-in
function fizzBuzz(array) {
  // seu código aqui
  let retornoArray = [];

  for (let contador of array) {
    switch (true) {
      case contador % 5 === 0 && contador % 3 === 0:
        retornoArray.push('fizzBuzz');
        break;
      case contador % 5 === 0:
        retornoArray.push('buzz');
        break;
      case array[contador] % 3 === 0:
        retornoArray.push('fizz');
        break;
      default:
        retornoArray.push('bug!');
    }
  }
  return retornoArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let fraseEncode = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === 'a') {
      fraseEncode += '1';
    } else if (string[contador] === 'e') {
      fraseEncode += '2';
    } else if (string[contador] === 'i') {
      fraseEncode += '3'
    } else if (string[contador] === 'o') {
      fraseEncode += '4';
    } else if (string[contador] === 'u') {
      fraseEncode += '5'
    } else {
      fraseEncode += string[contador];
    }
  }
  return fraseEncode;
}

function decode(string) {
  // seu código aqui
  let fraseDecode = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === '1') {
      fraseDecode += 'a';
    } else if (string[contador] === '2') {
      fraseDecode += 'e';
    } else if (string[contador] === '3') {
      fraseDecode += 'i'
    } else if (string[contador] === '4') {
      fraseDecode += 'o';
    } else if (string[contador] === '5') {
      fraseDecode += 'u'
    } else {
      fraseDecode += string[contador];
    }
  }
  return fraseDecode;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let lista = [];
  array.sort()

  for (let contador = 0; contador < array.length; contador += 1) {
    lista.push({
      tech: array[contador],
      name,
    });
  }
  if (lista.length === 0) {
    return 'Vazio!'
  }
  return lista;
}

// Desafio 11
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// Referencia da funcao slice():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function generatePhoneNumber(array) {
  // seu código aqui
  function repita(arrayRepitaNumero) {
    let repitaNumero = 0;
    let repitaMaior = 0;

    for (let contador1 = 0; contador1 < arrayRepitaNumero.length; contador1 += 1) {
      for (let contador2 of arrayRepitaNumero) {
        if (arrayRepitaNumero[contador1] === contador2) {
          repitaNumero += 1;
        }
      }
      if (repitaNumero > repitaMaior) {
        repitaMaior = repitaNumero;
      }
      repitaNumero = 0;
    }
    return repitaMaior;
  }

  function numeroMenorMaior(arrayMenorMaior) {
    let arrayTrueFalse = false;

    for (let contador of arrayMenorMaior) {
      if (contador < 0 || contador > 9) {
        arrayTrueFalse = true;
      }
    }
    return arrayTrueFalse;
  }

  function arrayString(array) {
    let telefone = '';
    for (let contador of array) {
      telefone += contador;
    }
    return telefone;
  }

  let telefoneString = arrayString(array);
  let ddd = telefoneString.slice(0, 2);
  let primeiroNumero = telefoneString.slice(2, 7);
  let segundoNumero = telefoneString.slice(7, 12);

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (repita(array) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (numeroMenorMaior(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefoneFinal = '';
  telefoneFinal = `(${ddd}) ${primeiroNumero}-${segundoNumero}`;

  return telefoneFinal;
}
console.log(generatePhoneNumber(array))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let number1 = false;
  let number2 = false;
  let number3 = false;

  function menorMedidas(numberMenor1, numberMenor2, numberMenor3) {
    let somaNumero = numberMenor2 + numberMenor3;

    if (numberMenor1 < somaNumero) {
      return true;
    }
    return false;
  }

  function numeroAbsoluto(numberAbs1, numberAbs2, numberAbs3) {
    let diferencaNumero = Math.abs(numberAbs2) - Math.abs(numberAbs3);

    if (numberAbs1 > diferencaNumero) {
      return true;
    }
    return false;
  }

  if (menorMedidas(lineA, lineB, lineC) === true && numeroAbsoluto(lineA, lineB, lineC) === true) {
    number1 = true;
  }
  if (menorMedidas(lineB, lineA, lineC) === true && numeroAbsoluto(lineB, lineA, lineC) === true) {
    number2 = true;
  }
  if (menorMedidas(lineC, lineA, lineB) === true && numeroAbsoluto(lineC, lineA, lineB) === true) {
    number3 = true;
  }

  if (number1 === true && number2 === true && number3 === true) {
    return true;
  }
  return false;
}

// Desafio 13
// Referencia para usar o RegExp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
function hydrate(string) {
  // seu código aqui
  let regExpNumber = /\d+/g;
  let number = string.match(regExpNumber);
  let totalNumber = 0;

  for (let contador = 0; contador < number.length; contador += 1) {
    totalNumber += Math.abs(number[contador]);
  }
  if (totalNumber === 1) {
    return `${totalNumber} copo de água`;
  }
  return `${totalNumber} copos de água`;
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
