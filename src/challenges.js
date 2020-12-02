// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(strings) {
  return strings.reverse[0].concat(' ', strings[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let qtidade = 0;
  for (let key in array) {
    if (array[ḱey] > maior) {
      maior = array[key];
    } else if (maior === array[key]) {
      qtidade += 1;
    }
  }return qtidade;
}

// Desafio 7
function catAndMouse(dist1, dist2) {
  if (dist1 > dist2) {
    return 'cat2';
  }else if (dist2 > dist1) {
    return 'cat1';
  }
  return 'os gatos trombam e o gato foge';
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let key = 0; key < arrayNumbers.length; key += 1) {
    if (arrayNumbers[key] % 3 === 0 && arrayNumbers[key] % 5 === 0) {
       console.log('fizzBuzz');
    }else if (arrayNumbers[key] % 3 === 0){
      console.log('fizz');
    }else if (arrayNumbers[key] % 5 === 0) {
      console.log('buzz');
    }
      console.log("bug");
    }
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
