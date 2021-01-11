/* Projeto: Playground Functions;
   Aluno: Julio Henrique Thosi;
   Turma: 09; */
// Desafio 1
function compareTrue(vD1_1,vD1_2) {
  if (vD1_1 === true && vD1_2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(vD3) {
  return vD3.split(' ');
}

// Desafio 4
function concatName(vD4) {
  return vD4[vD4.length-1] + ', ' + vD4[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let teamPoints = (wins * 3) + ties;
  return teamPoints;
}

// Desafio 6
function highestCount(countRepetition) {
  let maior = 0;
  let qtdeMaior = 0;
  for (let index = 0; index < 8; index += 1) {
    if(maior < countRepetition[index]) {
      maior = countRepetition[index];
    }
  }
  for (index = 0; index < 8; index += 1) {
    if (maior === countRepetition[index]) {
      qtdeMaior += 1;
    }
  }
  return qtdeMaior;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {

  let distIgual = 'os gatos trombam e o rato foge';
  let cat1s = Math.abs (cat1 - mouse);
  let cat2s = Math.abs (cat2 - mouse);
  let phrase = '';

  if (cat1s < cat2s) {
  phrase = 'cat1';
  return phrase;
  }

  else if (cat1s > cat2s) {
  phrase = 'cat2';
  return phrase;
  }

  else {
    return distIgual;
  }
}

// Desafio 8
function fizzBuzz(vd8) {

  let result = [];

  for (let index = 0; index < vd8.length; index += 1) {

    if ((vd8[index] % 3) === 0 && (vd8[index] % 5) === 0)
    result.push ('fizzBuzz');
    else if((vd8[index] % 3) === 0)
    result.push ('fizz');
    else if ((vd8[index] % 5) === 0)
    result.push ('buzz');
    else
    result.push ('bug!');
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  phrase = phrase.replace(/a/gi, '1');
  phrase = phrase.replace(/e/gi, '2');
  phrase = phrase.replace(/i/gi, '3');
  phrase = phrase.replace(/o/gi, '4');
  phrase = phrase.replace(/u/gi, '5');
  return phrase;
}

function decode(phrase) {
  phrase = phrase.replace(/1/gi, 'a');
  phrase = phrase.replace(/2/gi, 'e');
  phrase = phrase.replace(/3/gi, 'i');
  phrase = phrase.replace(/4/gi, 'o');
  phrase = phrase.replace(/5/gi, 'u');
  return phrase;
}

// Desafio 10
function techList(technologies, name) {
  technologies.sort();
  let techObjects = [];
  for (let index in technologies) {
    techObjects.push({
      tech: technologies[index],
      name: name,
    })
  }
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  return techObjects;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (index = 0; index < phoneNumber.length; index += 1) {
    let teste0 = 0;
    let teste9 = 9;
    let repeticao = 0;

    if (phoneNumber[index] < teste0 || phoneNumber[index] > teste9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if (phoneNumber[index] === phoneNumber[index2]) {
        repeticao += 1;
        if (repeticao >= 3) {
          return'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  phoneNumber.splice(0, 0, '(');
  phoneNumber.splice(3, 0, ')');
  phoneNumber.splice(4, 0, ' ');
  phoneNumber.splice(10, 0, '-');

  let teste = '';
  teste = phoneNumber+'';
  teste = phoneNumber.join();
  teste = teste.replace(/,/gi, '');
  return teste;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)) {
    if (lineA > Math.abs(lineB-lineC) || lineA > Math.abs(lineC-lineB)) {
    return false;
    }
  }

  if (lineB > (lineA + lineC)) {
    if (lineB > Math.abs(lineA-lineC) || lineB > Math.abs(lineC-lineA)) {
    return false;
    }
  }

  if (lineC > (lineB + lineA)) {
    if (lineC > Math.abs(lineB-lineA) || lineC > Math.abs(lineA-lineB)) {
    return false;
    }
  }

  return true;
}

// Desafio 13
function hydrate(bebida) {
  bebida = bebida.match(/\d/g);
  let somaBebida = 0;
  for (index = 0; index < bebida.length; index += 1) {
    somaBebida += parseInt(bebida[index], 10);
  }
  if (somaBebida == 1) {
    return somaBebida + ' copo de água';
  }
  else {
  return somaBebida + ' copos de água';
  }
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
