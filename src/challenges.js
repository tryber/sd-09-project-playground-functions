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
    if (string[contador] != ' ') {
      word += string[contador];
    }else {
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

 function primeiroItem(array){
   let primeiroItem = '';
   primeiroItem += array[array.length - 1];
   return primeiroItem;
 }
 
 function segundoItem(array){
   let segundoItem = '';
   segundoItem += array[0];
   return segundoItem;
 }
 
 string = (primeiroItem(array) + ', ' + segundoItem(array));
 
 return string;
 }

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let pontos = 0;

function pontosWins(wins) {
  let pontosWins = 0;
  pontosWins = wins * 3;
  return pontosWins;
}
  
function pontosTies(ties) {
  let pontosTies = 0;
  pontosTies = ties * 1;
  return pontosTies;
}

pontos = pontosWins(wins) + pontosTies(ties);
  
return pontos;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui

let somaNumero = 0;
let maiorNumero = 0;

  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] > maiorNumero) {
      maiorNumero = array[contador];
    }
  }
  for (let contadorNumero = 0; contadorNumero < array.length; contadorNumero += 1) {
    if (maiorNumero === array[contadorNumero]) {
      somaNumero += 1;
    }
  }
  return somaNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

function catFunct1(mouse, cat1) {

let distancia1 = 0;

  if (mouse < cat1){
    distancia1 = cat1 - mouse;
  } else if (mouse > cat1) {
    distancia1 = mouse - cat1;
  }
  return distancia1;
}

function catFunct2(mouse, cat2) {

let distancia2 = 0;

  if (mouse < cat2){
    distancia2 = cat2 - mouse;
  } else if (mouse > cat2) {
    distancia2 = mouse - cat2;
  }
  return distancia2;
}

  if (catFunct1(mouse, cat1) < catFunct2(mouse, cat2)) {
    return 'cat1';
  } else if (catFunct1(mouse, cat1) > catFunct2(mouse, cat2)) {
    return 'cat2';
  } else if (catFunct1(mouse, cat1) === catFunct2(mouse, cat2)) {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui

let retornoArray = [];
  
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] % 5 === 0 && array[contador] % 3 === 0) {
      retornoArray.push('fizzBuzz');
    } else if (array[contador] % 5 === 0){
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
let fraseFinal = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === 'a') {
      fraseFinal += '1';
    } else if (string[contador] === 'e') {
      fraseFinal += '2';
    } else if (string[contador] === 'i') {
      fraseFinal += '3'
    } else if (string[contador] === 'o') {
      fraseFinal += '4';
    } else if (string[contador] === 'u') {
      fraseFinal += '5'
    } else {
      fraseFinal += string[contador];
    }
  }
return fraseFinal;
}

function decode(string) {
  // seu código aqui
  let fraseFinal = '';

  for (let contador = 0; contador < string.length; contador += 1) {
    if (string[contador] === '1') {
      fraseFinal += 'a';
    } else if (string[contador] === '2') {
      fraseFinal += 'e';
    } else if (string[contador] === '3') {
      fraseFinal += 'i'
    } else if (string[contador] === '4') {
      fraseFinal += 'o';
    } else if (string[contador] === '5') {
      fraseFinal += 'u'
    } else {
      fraseFinal += string[contador];
    }
  }
return fraseFinal;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui

let lista = [];
array.sort()

  for (let contador = 0; contador < array.length; contador += 1) {
    lista.push({tech: array[contador], name: name})
  }
  if(lista.length === 0) {
    return 'Vazio!'
  }
return lista;
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui

let telefone = '';

function repita(array) {

let repitaNumero = 0;
let repitaMaior = 0;

  for (let contador1 = 0; contador1 < array.length; contador1 += 1) {
    for (let contador2 = 0; contador2 < array.length; contador2 += 1) {
      if (array[contador1] === array[contador2]) {
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

function numeroMenorMaior(array) {

let arrayTrueFalse = false;

  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] < 0 || array[contador] > 9) {
      arrayTrueFalse = true;
    }
  }
return arrayTrueFalse;
}

function telefoneNumero(array) {

let ddd = '';
let primeiroNumero = '';
let segundoNumero = '';

  for (let dddContador = 0; dddContador < 2; dddContador += 1) {
    ddd += array[dddContador];
  }
  for (let primeiroNumeroContador = 2; primeiroNumeroContador < 7; primeiroNumeroContador += 1) {
    primeiroNumero += array[primeiroNumeroContador];
  }
  for (let segundoNumeroContador = 7; segundoNumeroContador < 11; segundoNumeroContador += 1) {
    segundoNumero += array[segundoNumeroContador];
  }
  let telefone = '(' + ddd + ')' + ' ' + primeiroNumero + '-' + segundoNumero;
return telefone;
}

  if (array.length != 11) {
      return 'Array com tamanho incorreto.';
  } else if (repita(array) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
  } else if (numeroMenorMaior(array) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
  } else {
    telefone = telefoneNumero(array);
  }
return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

let number1 = false;
let number2 = false;
let number3 = false;

function menorQueSomaDasMedidas(number1, number2, number3) {

let somaNumero = number2 + number3;

  if (number1 < somaNumero) {
    return true;
  }
  return false;
}

function numeroAbsoluto(number1, number2, number3) {

let diferencaNumero = Math.abs(number2) - Math.abs(number3);

  if (number1 > diferencaNumero) {
    return true;
  }
  return false;
}

  if (menorQueSomaDasMedidas(lineA, lineB, lineC) === true && numeroAbsoluto(lineA, lineB, lineC) === true) {
    number1 = true;
  }
  if (menorQueSomaDasMedidas(lineB, lineA, lineC) === true && numeroAbsoluto(lineB, lineA, lineC) === true) {
    number2 = true;
  }
  if (menorQueSomaDasMedidas(lineC, lineA, lineB) === true && numeroAbsoluto(lineC, lineA, lineB) === true) {
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

  return (totalNumber + ' copos de água');
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
