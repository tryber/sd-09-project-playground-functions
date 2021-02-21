// Desafio 1
function compareTrue(diaUtil, haveraAula) {
  if (diaUtil && haveraAula === true) {
    return true;
  } else {
    return false;
  }
} console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} console.log(calcArea(5, 6));

// Desafio 3
function splitSentence(stringSentence) {
  arraySentence = stringSentence.split(' ');
  return arraySentence;
}console.log(splitSentence('vqv trybe'));

// Desafio 4
let arrays = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(names) {
  let primeiroNome = names[0];
  let ultimoNome = names[names.length - 1];
  let concatenacao = (ultimoNome + ', ') + primeiroNome;
  return concatenacao;
}
console.log(concatName(arrays));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let frequency = 0;
  let largernumb = Math.max.apply(null, array);
  for (let number of array) {
    if (number === largernumb) {
      frequency += 1;
    }
  }
  return frequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let resultadoArray = [];
  for (let fizzDivisible in arrayDeNumeros) {
    if (arrayDeNumeros[fizzDivisible] % 3 === 0 && arrayDeNumeros[fizzDivisible] % 5 === 0) {
      resultadoArray.push('fizzBuzz');
    } else if (arrayDeNumeros[fizzDivisible] % 3 === 0) {
      resultadoArray.push('fizz');
    } else if (arrayDeNumeros[fizzDivisible] % 5 === 0) {
      resultadoArray.push('buzz');
    } else {
      resultadoArray.push('bug!')
    }
  }
  return resultadoArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(codifica) {
  let numerar = codifica.split('');
  let imprime = '';
  for (let counter = 0; counter < numerar.length; counter += 1) {
    switch (numerar[counter]) {
      case 'a':
        imprime += '1';
        break;
      case 'e':
        imprime += '2';
        break;
      case 'i':
        imprime += '3';
        break;
      case 'o':
        imprime += '4';
        break;
      case 'u':
        imprime += '5';
        break;
      default:
        imprime += numerar[counter];
        break;
    }
  }
  return imprime;
}

function decode(decodifica) {
  let letrar = decodifica.split('');
  let resulta = '';
  for (let index = 0; index < letrar.length; index += 1) {
    switch (letrar[index]) {
      case '1':
        resulta += 'a';
        break;
      case '2':
        resulta += 'e';
        break;
      case '3':
        resulta += 'i';
        break;
      case '4':
        resulta += 'o';
        break;
      case '5':
        resulta += 'u';
        break;
      default:
        resulta += letrar[index];
        break;
    }
  }
  return resulta;
}

// Desafio 10
function techList(techs, name) {
  let arrayTechs = techs.sort()
  if (arrayTechs.length === 0){
    return 'Vazio!'
  }
  let listaObjetos = [];
  for (let index = 0; index < arrayTechs.length; index += 1){
    listaObjetos[index] = {
      tech:arrayTechs[index],
      name: name,}
  }
  return listaObjetos
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condicao1 = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  let condicao2 = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  let condicao3 = (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB));
  return condicao1 && condicao2 && condicao3;
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
