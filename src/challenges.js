// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let stringSeparated = string.split(separator);
  return stringSeparated;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return `${arrayStrings[arrayStrings.length -1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numberMax = 0;
  let count = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] > numberMax) {
      numberMax = array[key];
    }
  }
  for (let key = 0; key < array.length; key += 1) {
    if (numberMax === array[key]) {
        count += 1
      }
    }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
    return 'os gatos trombam e o rato foge';
  }

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = []
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[key] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[key] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}


// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in string) {
    if (string[key] === 'a' || string[key] === 'e' || string[key] === 'i' || string[key] === 'o' || string[key] === 'u') {
      newString += vowels[string[key]];
    } else {
        newString += string[key];
      }
  }
  return newString;
}

function decode(string) {
  // seu código aqui
  let newString = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in string) {
    if (string[key] === '1' || string[key] === '2' || string[key] === '3' || string[key] === '4' || string[key] === '5') {
      newString += vowels[string[key]];
    } else {
        newString += string[key];
      }
  }
  return newString;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < array) {
          let outro = {tech: array[index], name: name};
          newArray.push(outro)
    }
  }
  newArray.sort(function (a, b) {
                if (a.tech > b.tech) {
                    return 1;
                  }
                if (a.tech < b.tech) {
                    return -1;
                  }
                    return 0;
  })
  if (newArray.length > 0) {
      return newArray;
  } else {
      return 'Vazio!'
    }
}

// Desafio 11
function repeatedNumber(array) {
  let trueOrFalse = false
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    let checkNumber = array [index]
    for (let index = 0; index < array.length; index += 1) {
      if (checkNumber === array[index]) {
        count += 1
      }
      if (count >= 3) {
        trueOrFalse = true
      }
    }
    count = 0;
  }
  return trueOrFalse
}

function generatePhoneNumber(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    if (repeatedNumber(array) || array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    else if (array.length !== 11) {
      return 'Array com tamanho incorreto.'
    }
    else if (array.length === 11) {
      return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let resultA = Math.abs(lineB - lineC)
  let resultB = Math.abs(lineA - lineC)
  let resultC = Math.abs(lineA - lineB)
  let sumA = lineB + lineC
  let sumB = lineA + lineC
  let sumC = lineA + lineB

  if (resultA < lineA && resultA < sumA && resultB < lineB && resultB < sumB && resultC < lineC && resultC < sumC) {
    return true
  }
  return false
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let sumNumbers = 0;
  let numbers = string.match(/\d+/g);

  for (let index = 0; index < numbers.length; index += 1) {
        sumNumbers += parseInt(numbers[index], 10)
  }
  if (sumNumbers === 1) {
    return sumNumbers + ' copo de água'
  } else {
    return sumNumbers + ' copos de água'
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
