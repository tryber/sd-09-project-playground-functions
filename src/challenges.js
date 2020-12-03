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
function highestCount(numeros) {
  let maiorNumero = Math.max.apply(null, numeros);
  let repeticao = 0;

  for (const numero2 of numeros) {
    if (maiorNumero === numero2) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.hypot(cat1 - mouse);
  let distanciaCat2 = Math.hypot(cat2 - mouse);
  let message = '';

  if (distanciaCat1 < distanciaCat2) {
    message = 'cat1';
  } else if (distanciaCat1 > distanciaCat2) {
    message = 'cat2';
  } else if (distanciaCat1 === distanciaCat2) {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
function fizzBuzz(array3) {
  let array = [];

  for (const multiplo of array3) {
    if ((multiplo % 3 === 0) && (multiplo % 5 !== 0)) {
      array.push('fizz');
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
    } else if (frase[caracter] === 'e') {
      frase = frase.replace(frase[caracter], '2');
    } else if (frase[caracter] === 'i') {
      frase = frase.replace(frase[caracter], '3');
    } else if (frase[caracter] === 'o') {
      frase = frase.replace(frase[caracter], '4');
    } else if (frase[caracter] === 'u') {
      frase = frase.replace(frase[caracter], '5');
    }
  }
  return frase;
}
function decode(frase) {
  for (const caracter in frase) {
    if (frase[caracter] === '1') {
      frase = frase.replace(frase[caracter], 'a');
    } else if (frase[caracter] === '2') {
      frase = frase.replace(frase[caracter], 'e');
    } else if (frase[caracter] === '3') {
      frase = frase.replace(frase[caracter], 'i');
    } else if (frase[caracter] === '4') {
      frase = frase.replace(frase[caracter], 'o');
    } else if (frase[caracter] === '5') {
      frase = frase.replace(frase[caracter], 'u');
    }
  }
  return frase;
}

// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }

  let techOrdenada = arrayTech.sort();
  let listaDeObjetos = [];

  for (const NomeTech of techOrdenada) {
    let obj = {
      tech: NomeTech,
      name,
    };
    listaDeObjetos.push(obj);
  }
  return listaDeObjetos;
}

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  if (arrayTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (const numeros of arrayTelefone) {
    if ((numeros < 0) || (numeros > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    let contador = 0;
    for (const numero2 of arrayTelefone) {
      if (numeros === numero2) {
        contador += 1;
      }
    }

    if (contador > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let telefoneFormatado = '(ab) cdefg-hijk';
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[1], arrayTelefone[0]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[2], arrayTelefone[1]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[5], arrayTelefone[2]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[6], arrayTelefone[3]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[7], arrayTelefone[4]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[8], arrayTelefone[5]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[9], arrayTelefone[6]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[11], arrayTelefone[7]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[12], arrayTelefone[8]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[13], arrayTelefone[9]);
  telefoneFormatado = telefoneFormatado.replace(telefoneFormatado[14], arrayTelefone[10]);
  return telefoneFormatado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC)) {
    if (lineA > Math.abs(lineB - lineC)) {
      return true;
    }
  } else if (lineB < (lineA + lineC)) {
    if (lineB > Math.abs(lineA - lineC)) {
      return true;
    }
  } else if (lineC < (lineA + lineB)) {
    if (lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(qtdBebidas) {
  let valores = 0;
  for (const qtd of qtdBebidas) {
    if (!isNaN(parseInt(qtd, 10))) {
      valores += parseInt(qtd, 10);
    }
  }

  if (valores === 1) {
    return `${valores} copo de água`;
  }

  return `${valores} copos de água`;
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
