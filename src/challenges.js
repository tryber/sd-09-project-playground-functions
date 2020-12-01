// Desafio 1
function compareTrue(value1, value2) {
  let resultado = ' ';
  if (value1 === true && value2 === true) {
    resultado = true
  } else {
    resultado = false
  }
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    arraySentence.push(sentence[index])
  }
  
  let arrayLast = [];
  for (let index = 0; index < arraySentence.length; index += 1) {
    if(arraySentence[index] !== ' ') {
      arrayLast += arraySentence[index] 
    } else if (arraySentence[index] === ' ') {
      arrayLast.push(arraySentence[index])
    }
  }
  // seu código aqui
  return arrayFinal;
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(array) {
  let nomes = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] === array[array.length - 1]) {
      nomes += array[index]
      nomes += ', '
    } else if (array[index] === array[0]) {
      nomes += array[index]
    }
  }
  return nomes;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let numberOfRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > biggestNumber) {
      biggestNumber = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      numberOfRepeat += 1
    }
  }
  return numberOfRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  if(mouse > cat1){
    cat1Distance = mouse - cat1;
  } else {
    cat1Distance = cat1 - mouse;
  }
  if(mouse > cat2){
    cat2Distance = mouse - cat2;
  } else {
    cat2Distance = cat2 - mouse;
  }
  if(cat1Distance > cat2Distance) {
    hunte = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    hunte = 'cat1';
  } else {
    hunte = 'os gatos trombam e o rato foge'
  }
  return hunte;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz')
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz')
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
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
