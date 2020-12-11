// Desafio 1
function compareTrue(bool1, bool2) {
  let check = false;
  if (bool1 && bool2) {
    check = true;
  }
  return check;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let result = '';
  result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(namesArray) {
  // seu código aqui
  let keepNames = [];
  let formater = '';
  keepNames.push(namesArray[namesArray.length - 1]);
  keepNames.push(namesArray[0]);
  formater = keepNames.join(', ');
  return formater;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let countWins = 0;
  let countTies = 0;
  let totalPoints = 0;
  for (let calcWins = 0; calcWins < wins; calcWins += 1) {
    countWins += 3;
  }
  for (let calcTies = 0; calcTies < ties; calcTies += 1) {
    countTies += 1;
  }
  totalPoints = countWins + countTies;
  return totalPoints;
}

// Desafio 6
function countEqualsNumbers(numbers) {
  let equalsCount = 0;
  for (let pos = 0; pos < numbers.length; pos += 1) {
    if (numbers[0] === numbers[pos]) {
      equalsCount += 1;
    }
  }
  return equalsCount;
}
function highestCount(numbers) {
  // seu código aqui
  numbers.sort(function (a, b) { return b - a });
  let result = countEqualsNumbers(numbers);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Position = Math.abs(cat1 - mouse);
  let cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge'
  }
  return cat1Position < cat2Position ? 'cat1' : 'cat2';
}
function validateNumberDividedFor3Only(key, array, array2) {
  if (array[key] % 3 === 0 && array[key] % 5 !== 0) {
    array2.push('fizz');
  } else if (array[key] % 5 === 0 && array[key] % 3 !== 0) {
    array2.push('buzz');
  } else if (array[key] % 3 === 0 && array[key] % 5 === 0) {
    array2.push('fizzBuzz');
  }
  return array2;
}
function validateNumberCanotDividedFor3And5(key, array, array2) {
  if (array[key] % 3 !== 0 && array[key] % 5 !== 0) {
    array2.push('bug!');
  }
  return array2;
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let array2 = [];
  for (let key in array) {
    if (array !== []) {
      validateNumberDividedFor3Only(key, array, array2);
      validateNumberCanotDividedFor3And5(key, array, array2);
    }
  }
  return array2;
}

// Desafio 9
function validateEncode(str2) {
  str2 = str2.replace(/a/gi, '1');
  str2 = str2.replace(/e/gi, '2');
  str2 = str2.replace(/i/gi, '3');
  str2 = str2.replace(/o/gi, '4');
  str2 = str2.replace(/u/gi, '5');
  return str2;
}
function encode(str2) {
  // seu código aqui
  return validateEncode(str2);
}
function validateDecode(str1) {
  str1 = str1.replace(/1/gi, 'a');
  str1 = str1.replace(/2/gi, 'e');
  str1 = str1.replace(/3/gi, 'i');
  str1 = str1.replace(/4/gi, 'o');
  str1 = str1.replace(/5/gi, 'u');
  return str1;
}
function decode(str1) {
  // seu código aqui
  return validateDecode(str1);
}

// Desafio 10
function createObject(arrayTech, name1) {
  let techObject = [];
  for (let key in arrayTech) {
    if (arrayTech.length > 0) {
      techObject.push({
        tech: arrayTech[key],
        name: name1,
      })
    }
  }
  return techObject;
}
function techList(arrayTech, name1) {
  // seu código aqui
  arrayTech.sort();
  if (arrayTech.length > 0) {
    return createObject(arrayTech, name1);
  }
  return 'Vazio!';
}
// Desafio 11
function validatePossibleNumber(array, trigger) {
  let count = [];
  trigger = false;
  for (let a = 0; a < array.length; a += 1) {
    count = [];
    for (let b = 0; b < array.length; b += 1) {
      if (array[a] === array[b]) {
        count.push(array[b])
      }
    }
    if (count.length >= 3 || array[a] > 9 || array[a] < 0) {
      trigger = true;
      break;
    }
  }
  return trigger;
}
function generatingNumber(array) {
  let formater = '';
  formater = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + '-' + array[6] + array[7] + array[8] + array[9] + array[10];
  return formater;
}
function generatePhoneNumber(array) {
  // seu código aqui
  let trigger = false;
  let result = generatingNumber(array);
  trigger = validatePossibleNumber(array, trigger);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (trigger) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return result;
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
