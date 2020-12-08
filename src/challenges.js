// Iniciando Projeto, VAMO QUE VAMO!!
// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  let saida = text.split(' ');
  return saida;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let str1 = array[0];
  let str2 = array[array.length - 1];
  let str3 = `${str2}, ${str1}`;
  return str3;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalVictoryPoints = 3 * wins;
  return totalVictoryPoints + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = array[0];
  let qtdVezes = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      qtdVezes = 0;
    }
    if (array[index] === maior) {
      qtdVezes += 1;
    }
  }
  return qtdVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseGato1 = Math.abs(mouse - cat1);
  let distanciaMouseGato2 = Math.abs(mouse - cat2);
  if (distanciaMouseGato1 > distanciaMouseGato2) {
    return 'cat2';
  } else if (distanciaMouseGato1 < distanciaMouseGato2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      novoArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let enc = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        enc += 1;
        break;
      case 'e':
        enc += 2;
        break;
      case 'i':
        enc += 3;
        break;
      case 'o':
        enc += 4;
        break;
      case 'u':
        enc += 5;
        break;
      default:
        enc += string[index];
    }
  }
  return enc;
}
function decode(string) {
  // seu código aqui
  let dec = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        dec += 'a';
        break;
      case '2':
        dec += 'e';
        break;
      case '3':
        dec += 'i';
        break;
      case '4':
        dec += 'o';
        break;
      case '5':
        dec += 'u';
        break;
      default:
        dec += string[index];
    }
  }
  return dec;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  if (!array.length) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      tech: array[index],
      name: name,
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let saida = '(';
  let count = 0;

  // se o array for diferente de 11
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // se o array tiver numeros menores que 0, maiores que 9 ou se repetir 3 vezes ou mais
  for (let indice = 0; indice < array.length; indice += 1) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[indice] === array[index]) {
        count += 1;
      }
    }
    if (array[indice] < 0 || array[indice] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;

    saida += array[indice];
    if (indice === 1) {
      saida += ') ';
    } else if (indice === 6) {
      saida += '-';
    }
  }
  return saida;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let isTriangle = false;
  if (lineA < lineB + lineC && lineC < lineA + lineB) {
    isTriangle = true;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  // let regex = ;  // retorna os numeros encontrados na string
  let sum = 0; // a gente vai utilizar pra somar os numeros
  let numberInString = string.match(/\d+/g); // criamos um array com os numeros capturados na string
  // percorre o array somando os numeros
  for (let index = 0; index < numberInString.length; index += 1) {
    sum += parseInt(numberInString[index], 10); // numeros em tipo Number
  }

  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
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
