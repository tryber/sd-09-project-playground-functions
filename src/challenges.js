// Desafio 1
  // seu código aqui
function compareTrue(values1, values2) {
  if (values1 === true && values2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true))

// Desafio 2
// seu código aqui
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}
console.log(calcArea(10, 2))

// Desafio 3
let array = 'go trybe'
function splitSentence(string) {
  let divisor = string.split(' ');
  console.log(divisor);
  return string;
}
console.log(splitSentence(array));

// Desafio 4
function concatName(arrayDeStrings) {
  let lastFirst = arrayDeStrings.pop()
  return (lastFirst + ', ' + arrayDeStrings[0])
}
let arrayDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(arrayDeNomes))

// Desafio 5
// concluido
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties
  return pontos
}
console.log(footballPoints(5, 2))

// Desafio 6
function highestCount() {
  let maiorNumero = arrayDoEx6[0]
  let contaMaiorNumero = 0
  // encontrar o maior valor
  let arrayDoEx6 = [9, 1, 2, 3, 9, 5, 7]
  for (let index = 0; index < arrayDoEx6.length; index += 1) {
    if (arrayDoEx6[index] > maiorNumero) {
      maiorNumero = arrayDoEx6[index];
    }
  }
  // frequencia do maiorNumero no array
  for (let index = 0; index < arrayDoEx6.length; index += 1) {
    if (arrayDoEx6[index] === maiorNumero) {
      contaMaiorNumero += 1;
    }
  }
  return contaMaiorNumero;
}

console.log(highestCount(arrayDoEx6))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else if (cat2Distance > cat1Distance) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge'
}
console.log(catAndMouse(1, 0, 2))

// Desafio 8
function fizzBuzz(numberArray) {
  let resultArray = []
  for (let fizzKey in numberArray) {
    if (numberArray[fizzKey] % 3 === 0 && numberArray[fizzKey] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (numberArray[fizzKey] % 3 === 0) {
      resultArray.push('fizz');
    } else if (numberArray[fizzKey] % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
