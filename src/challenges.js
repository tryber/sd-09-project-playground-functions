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
let asd = [9, 1, 2, 3, 9, 5, 7];
function highestCount(array) {
  // seu código aqui
  let somaNumero = 0;
  let maiorNumero = 0;

  function maiorNumeroList(arrayNumbers) {
    for (let contador = 0; contador < array.length; contador += 1) {
      if (array[contador] > maiorNumero) {
        maiorNumero = array[contador];
      }
    }
    return maiorNumero;
  }
  for (let contadorNumero = 0; contadorNumero < array.length; contadorNumero += 1) {
    if (maiorNumeroList(array) === array[contadorNumero]) {
      somaNumero += 1;
    }
  }
  return somaNumero;
}
console.log(highestCount(asd));
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
function fizzBuzz(array) {
  // seu código aqui
  let retornoArray = [];

  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] % 5 === 0 && array[contador] % 3 === 0) {
      retornoArray.push('fizzBuzz');
    } else if (array[contador] % 5 === 0) {
      retornoArray.push('buzz');
    } else if (array[contador] % 3 === 0) {
      retornoArray.push('fizz');
    } else {
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
function generatePhoneNumber(array) {
  // seu código aqui
  function repita(arrayRepitaNumero) {
    let repitaNumero = 0;
    let repitaMaior = 0;

    for (let contador1 = 0; contador1 < arrayRepitaNumero.length; contador1 += 1) {
      for (let contador2 = 0; contador2 < arrayRepitaNumero.length; contador2 += 1) {
        if (arrayRepitaNumero[contador1] === arrayRepitaNumero[contador2]) {
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

    for (let contador = 0; contador < arrayMenorMaior.length; contador += 1) {
      if (arrayMenorMaior[contador] < 0 || arrayMenorMaior[contador] > 9) {
        arrayTrueFalse = true;
      }
    }
    return arrayTrueFalse;
  }

  function telefoneNumero(arrayTelefone) {
    let ddd = '';
    let primeiroNumero = '';
    let segundoNumero = '';

    for (let dddContador = 0; dddContador < 2; dddContador += 1) {
      ddd += arrayTelefone[dddContador];
    }
    for (let primeiroNumeroContador = 2; primeiroNumeroContador < 7; primeiroNumeroContador += 1) {
      primeiroNumero += arrayTelefone[primeiroNumeroContador];
    }
    for (let segundoNumeroContador = 7; segundoNumeroContador < 11; segundoNumeroContador += 1) {
      segundoNumero += arrayTelefone[segundoNumeroContador];
    }
    let telefone = '';
    telefone = `(${ddd}) ${primeiroNumero}-${segundoNumero}`;
    return telefone;
  }

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (repita(array) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (numeroMenorMaior(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefoneFinal = '';
  telefoneFinal = telefoneNumero(array);

  return telefoneFinal;
}

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
function hydrate(string) {
  // seu código aqui
  let regExNumber = /\d+/g;
  let number = string.match(regExNumber);
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
