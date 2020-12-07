// ME SEGURA SILICON VALLEY!!
// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true))

// Desafio 2

function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(param1) {
  // seu código aqui
  return param1.split(' ')
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(string) {
  // seu código aqui
  for (let i = 0; i < string.length; i += 1) {
    return (string[string.length -1] + ', ' + string[0])
  }
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties
}

// Desafio 6
function highestCount() {
  // seu código aqui

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse)
  let distanceCat2 = Math.abs(cat2 - mouse)

  if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2'
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  // seu código aqui
  let array = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if ((arrayNumber[index] % 3 === 0) && (arrayNumber[index] % 5 === 0)) {
      array.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 === 0) {
      array.push('fizz');
    } else if (arrayNumber[index] % 5 === 0) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}
console.log(fizzBuzz(2, 15, 7, 9, 45))

// Desafio 9
function encode(param1) {
  // seu código aqui  
  let firstParam = ''
  for (let index = 0; index < param1.length; index += 1) {
    if (param1[index] === 'a') {
      firstParam += '1'
    } else if (param1[index] === 'e') {
      firstParam += '2'
    } else if (param1[index] === 'i') {
      firstParam += '3'
    } else if (param1[index] === 'o') {
      firstParam += '4'
    } else if (param1[index] === 'u') {
      firstParam += '5'
    } else {
      firstParam = param1
    }
  }
  return firstParam
}

function decode(Param2) {
  // seu código aqui
  let secondParam = ''

  for (index = 0; index < Param2.length; index += 1) {
    if (Param2[index] === '1') {
      secondParam += 'a'
    } else if (Param2[index] === '2') {
      secondParam += 'e'
    } else if (Param2[index] === '3') {
      secondParam += 'i'
    } else if (Param2[index] === '4') {
      secondParam += 'o'
    } else if (Param2[index] === '5') {
      secondParam += 'u'
    } else {
      secondParam = Param2
    }
  }
  return secondParam
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
