// #VQV!
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base*height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string ='';
  for(let index = 0; index < array.length; index += 1) {
    string = array[array.length-1] + ', ' + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = (wins * 3) + (ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
    for (let index in array) {
      if (array[index] > higherNumber) {
        higherNumber = array[index];
      }
    }
  let vezesRepetido = 0;
  for (let index2 in array) {
    if(array[index2] === higherNumber) {
      vezesRepetido += 1;
    }
  }
  return vezesRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return "os gatos trombam e o rato foge";
  } else if (cat1Position < cat2Position) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let array = [];
  for(let index = 0; index < arrayNum.length; index += 1) {
    if(arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      array.push("fizzBuzz");
    } else if (arrayNum[index] % 5 === 0) {
      array.push("buzz");
    } else if (arrayNum[index] % 3 === 0) {
      array.push("fizz");
    } else {
      array.push("bug!");
    }
  }
  return array;
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
