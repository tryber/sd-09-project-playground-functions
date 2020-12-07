// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentença) {
  let splitedSentece = [];
  sentença = sentença.split(' ');
  for (const i of sentença) {
    splitedSentece.push(i);
  }
  return splitedSentece;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(array) {
  let helper = 0;
  for (const i of array) {
    if (Math.max.apply(null, array) === i) {
      helper += 1;
    }
  }
  return helper;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1Dist = Math.abs(cat1 - mouse);
  let gato2Dist = Math.abs(cat2 - mouse);
  if (gato1Dist === gato2Dist) {
    return 'os gatos trombam e o rato foge';
  } else if (gato1Dist < gato2Dist) {
    return 'cat1';
  } else if (gato2Dist < gato1Dist) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      array[i] = 'buzz';
    } else if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      array[i] = 'fizzBuzz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(frase) {
  let trocasAto1 = {
    a: '1', e: '2',
    i: '3', o: '4',
    u: '5'
  };
  for (let i = 0; i < frase.length; i += 1) {
    for (const j in trocasAto1) {
      if (frase[i] === j) {
        frase = frase.replace(frase[i], trocasAto1[j]);
      }
    }
  }
  return frase;
}

function decode(fraseEstranha) {
  let trocasAto1 = {
    1: 'a', 2: 'e',
    3: 'i', 4: 'o',
    5: 'u'
  };
  for (let i = 0; i < fraseEstranha.length; i += 1) {
    for (const j in trocasAto1) {
      if (fraseEstranha[i] === j) {
        fraseEstranha = fraseEstranha.replace(fraseEstranha[i], trocasAto1[j]);
      }
    }
  }
  return fraseEstranha;
}

// Desafio 10
function techList(tech, name) {
  let lista = [];
  tech.sort();
  if (tech.length > 0) {
    for (let i = 0; i < tech.length; i += 1) {
      lista.push(
        {
          tech: tech[i],
          name: name,
        }
      );
    }
    return lista;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length === 11) {
    let listaTelefonica = '(XX) XXXXX-XXXX';
    let indicesTelefonica = [];
    let idx = listaTelefonica.indexOf('X');
    while (idx != -1) {
      indicesTelefonica.push(idx);
      idx = listaTelefonica.indexOf('X', idx + 1);
    }
    for (let i = 0; i < array.length; i += 1) {
      let helper = 0;
      if (array[i] < 0 || array[i] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      for (let j = 0; j < array.length; j += 1) {
        if (array[i] === array[j]){
          helper += 1;
          if (helper >= 3){
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
    for (let i in array) {
      listaTelefonica = listaTelefonica.replace(listaTelefonica[indicesTelefonica[i]], array[i]);
    }
    return listaTelefonica;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lA, lB, lC) {
  let parametros = 0;
  let difAB = [(lA + lB), Math.abs(lA - lB)];
  let difBC = [(lB + lC), Math.abs(lB - lC)];
  let difCA = [(lC + lA), Math.abs(lC - lA)];
  if (difAB[0] > lC && difAB[1] < lC) {
    parametros += 1;
  }
  if (difBC[0] > lA && difBC[1] < lA) {
    parametros += 1;
  }
  if (difCA[0] > lB && difCA[1] < lB) {
    parametros += 1;
  }
  if (parametros === 3) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(frase) {
  let valores = [];
  var numbers = frase.match(/\d+/g).map(Number);
  let retorno = '';
  let resultado = 0;
  for (let i = 0; i < numbers.length; i++) {
    resultado += numbers[i];
  }
  if (resultado === 1) {
    retorno += resultado;
    retorno += ' copo de água';
    return retorno;
  }
  retorno += resultado;
  retorno += ' copos de água';
  return retorno;
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
