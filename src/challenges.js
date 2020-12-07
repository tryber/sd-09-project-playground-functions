// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    console.log('Desafio 1: Ta indo');
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  console.log(`Desafio 2: ${calc}`);
  return calc;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let storage = '';
  for (let index in string) {
    if (string[index] === ' ') {
      array.push(storage);
      storage = '';
    } else {
      storage += string[index];
    }
  }
  array.push(storage);
  console.log(`Desafio 3: ${array}`);
  return array;
}

// Desafio 4
function concatName(array) {
  let seiLaEu = `${array[array.length - 1]}, ${array[0]}`;
  console.log(`Desafio 4: ${seiLaEu}`);
  return seiLaEu;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result += (wins * 3) + ties;
  console.log(`Desafio 5: ${result}`);
  return result;
}

// Desafio 6
function addHigher(test, high) {
  let sum = 0;
  for (let index in test) {
    if (test[index] === high) {
      sum += 1;
    }
  }
  return sum;
}

function highestCount(array) {
  let high = 0;
  for (let index in array) {
    if (array[index] > high) {
      high = array[index];
    }
  }
  let result = addHigher(array, high);
  console.log(`Desafio 6: ${result}`);
  return result;
}

// Desafio 7
function moucat1Result(mouse, cat1) {
  let result1 = 0;
  let result = 0;
  if (mouse > cat1) {
    result1 = mouse - cat1;
  } else {
    result = cat1 - mouse;
  }
  if (result1 > 0) {
    result = result1
  }
  return result;
}

function moucat2Result(mouse, cat2) {
  let result = 0;
  if (mouse < cat2) {
    result = cat2 - mouse;
  } else {
    result = mouse - cat2;
  }
  return result;
}

function catAndMouse(mouse, cat1, cat2) {
  let mouCat1 = moucat1Result(mouse, cat1);
  let mouCat2 = moucat2Result(mouse, cat2);
  let result = '';
  if (mouCat2 > mouCat1) {
    console.log('Desafio 7: cat1');
    result = 'cat1';
  } else if (mouCat1 === mouCat2) {
    console.log('Desafio 7: os gatos trombam e o rato foge');
    result = 'os gatos trombam e o rato foge';
  } else {
    console.log('Desafio 7: cat2');
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzzResult(array, index) {
  let result = '';
  if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    result = ('fizzBuzz');
  } else if (array[index] % 3 === 0) {
    result = ('fizz');
  } else if (array[index] % 5 === 0) {
    result = ('buzz');
  }
  return result;
}

function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 || array[index] % 5 === 0) {
      result.push(fizzBuzzResult(array, index));
    } else {
      result.push('bug!')
    }
  }
  console.log(`Desafio 8: ${result}`);
  return result;
}

// Desafio 9
function encodeYes(string, index) {
  let encoded = 0;
  if (string[index].toLowerCase() === 'a') {
    encoded = 1;
  } else if (string[index].toLowerCase() === 'e') {
    encoded = 2;
  } else if (string[index].toLowerCase() === 'i') {
    encoded = 3;
  } else if (string[index].toLowerCase() === 'o') {
    encoded = 4;
  } else {
    encoded = 5;
  }
  return encoded;
}

function encode(string) {
  let encoded = '';
  for (let index in string) {
    if (string[index].toLowerCase() === 'a' || string[index].toLowerCase() === 'e' || string[index].toLowerCase() === 'i' || string[index].toLowerCase() === 'o' || string[index].toLowerCase() === 'u') {
      encoded += encodeYes(string, index, encoded)
    } else {
      encoded += string[index];
    }
  }
  console.log(`Desafio 9: Codificando: ${encoded}`);
  return encoded;
}

function decodeYes(encoded, index) {
  let decodedYes = '';
  if (encoded[index] === '1') {
    decodedYes += 'a';
  } else if (encoded[index] === '2') {
    decodedYes += 'e';
  } else if (encoded[index] === '3') {
    decodedYes += 'i';
  } else if (encoded[index] === '4') {
    decodedYes += 'o';
  } else {
    decodedYes += 'u';
  }
  return decodedYes;
}

function decode(encoded) {
  let decoded = '';
  for (let index in encoded) {
    if (encoded[index] === '1' || encoded[index] === '2' || encoded[index] === '3' || encoded[index] === '4' || encoded[index] === '5') {
      decoded += decodeYes(encoded, index);
    } else {
      decoded += encoded[index];
    }
  }
  console.log(`Desafio 9: Decodificando: ${decoded}`);
  return decoded;
}

// Desafio 10
function techListTest(index, array, name) {
  let result = [];
  let object = {
    tech: array[index],
    name,
  };
  result.push(object);
  return result;
}

function techList(array, name) {
  let techArray = [];
  array = array.sort();
  if (array[0] !== undefined) {
    for (let index = 0; index < array.length; index += 1) {
      techArray.push(techListTest(index, array, name));
    }
  } else {
    techArray = 'Vazio!';
  }
  console.log(`Desafio 10: ${techArray}`);
  return techArray;
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

compareTrue(true, true)
calcArea(5, 4)
splitSentence('Go Trybe')
concatName(['primeira', 'segunda', 'Ultima'])
footballPoints(3, 1)
highestCount([9, 1, 2, 41, 3, 9, 5, 7, 9, 41, 17, 41])
catAndMouse(7, 8, 8)
fizzBuzz([2, 15, 7, 9, 45, 25])
encode('Boa noite meu consagrado')
decode('B41 n43t2 m25 c4ns1gr1d4')
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Willian')

// Aooba, não é que tem um segredo no Lession Learned?!
