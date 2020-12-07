// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// let area = calcArea(4, 7)
// console.log(area)

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`
}
// console.log(concatName(['Long', 'live', 'trybers']))

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins *= 3) + ties
  return score
}
// console.log(footballPoints(5, 4))

// Desafio 6
function highestCount(recive) {
  // seu código aqui
  let highest = 0;
  let count = 0;
  for (let index = 0; index < recive.length; index += 1) {
    if (recive[index] > highest) {
      highest = recive[index];
    }

  }
  for (let index2 = 0; index2 < recive.length; index2 += 1) {
    if (recive[index2] === highest) {
      count += 1;
    }
  }
  return count
}
// console.log(highestCount([0, 0, 0, 0, 0, 0, 0]))
// console.log(count)

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const distanceCat1 = Math.abs(cat1 - mouse)
  const distanceCat2 = Math.abs(cat2 - mouse)
  if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2'
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'fail'
}
// console.log(catAndMouse(20, 20, 20))

// Desafio 8

function fizzBuzz(arrayFizz) {
  // seu código aqui
  /*if (arrayFizz % 3 === 0) {
    return 'fizz'
  } else if (arrayFizz % 5 === 0) {
    return 'buzz'
  } else if (arrayFizz % 3 === 0 && arrayFizz % 5 === 0) {
    return 'fizzBuzz'
  } else if (arrayFizz % 3 !== 0 && arrayFizz % 5 !== 0) {
    return 'bug!'
  }*/
  let buzzArray = [];
  for (let index of arrayFizz) {
    if (index % 3 !== 0 && index % 5 !== 0) {
      buzzArray.push('bug!');
    } else if (index % 3 === 0 && index % 5 === 0) {
      buzzArray.push('fizzBuzz');
    } else if (index % 3 === 0) {
      buzzArray.push('fizz');
    } else {
      buzzArray.push('buzz');
    }
  }
  return buzzArray;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(stri) {
  // seu código aqui
  let voltaStr = '';
  let str = stri;
  for (let index = 0; index < str.length; index += 1) {
    switch (str[index]) {
      case 'a':

        function decode(stri) {
          // seu código aqui
          let voltaStr = '';
          let str = stri;
          for (let index = 0; index < str.length; index += 1) {
            switch (str[index]) {
              case '1':
            }
          }
        }
    }
  }
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayTechObjects = [];
  if (array.length !== 0) {
    for (let tec of array.sort()) {
      let techObject = {
        tech: undefined,
        name
      };
      techObject.tech = tec;
      arrayTechObjects.push(techObject);
    }
    return arrayTechObjects;
  }
  return 'Vazio!';
}




// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui	  let numero = '(';
  if (checkNumbers(array)) {
    if (array.length === 11) {
      for (let number in array) {
        if (number === '1') {
          numero += array[number] + ') ';
        } else if (number === '6') {
          numero += array[number] + '-';
        } else {
          numero += array[number];
        }
      }
      return numero;
    }
    return 'Array com tamanho incorreto.';
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

function checkNumbers(array) {
  let validate = true;
  for (let number in array) {
    let count = 0;
    for (let num in array) {
      if (array[num] === array[number]) {
        count += 1;
      }
    }
    if (count >= 3) {
      validate = false;
    }
    if (array[number] < 0 || array[number] > 9) {
      validate = false
    }
  }
  return validate;
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
