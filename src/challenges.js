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
  let str3 = str2 + ', ' + str1;
  
  return str3;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
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
    if (array[index] == maior) {
      qtdVezes += 1;
    }
  }
  return qtdVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseGato1 = 0;
  let distanciaMouseGato2 = 0;

  if (mouse > cat1){
    distanciaMouseGato1 = mouse - cat1;
  } else {
    distanciaMouseGato1 = cat1 - mouse;
  }

  if (mouse > cat2){
    distanciaMouseGato2 = mouse - cat2;
  } else {
    distanciaMouseGato2 = cat2 - mouse;
  }

  Math.abs(distanciaMouseGato1);
  Math.abs(distanciaMouseGato2);


  if (distanciaMouseGato1 > distanciaMouseGato2) {
    console.log('\nCat 2 pegou o gato!!\n');
    console.log('Cat 2 estava a ' + distanciaMouseGato2 + ' de distância e pegou o gato');
    console.log('Cat 1 estava a ' + distanciaMouseGato1 + ' de distância e rodou');
  } else if (distanciaMouseGato1 < distanciaMouseGato2){
    console.log('Cat 1 pegou o gato!! ');
    console.log('Cat 1 estava a ' + distanciaMouseGato1 + ' de distância e pegou o gato');
    console.log('Cat 2 estava a ' + distanciaMouseGato2 + ' de distância e rodou');
  } else {
    console.log('Os gatos trombaram e o rato fugiu!!');
  }
  
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let novoArray = [];
    for (let index = 0; index < array.length; index += 1) {
        if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
            novoArray.push('fizzBuzz');
        } else if (array[index] % 3 == 0) {
            novoArray.push('fizz');
        } else if (array[index] % 5 == 0) {
            novoArray.push('buzz');
        } else {
            novoArray.push('bug!');
        }
    }
    return novoArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
