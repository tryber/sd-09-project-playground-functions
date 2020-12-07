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
function catAndMouse(mouse, cat1, cat2) {
  let mouCat1 = 0;
  let mouCat2 = 0;
  let result = '';

  if (mouse > cat1) {
    mouCat1 = mouse - cat1;
  } else {
    mouCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    mouCat2 = mouse - cat2;
  } else {
    mouCat2 = cat2 - mouse;
  }
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
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!')
    }
  }
  console.log(`Desafio 8: ${result}`);
  return result;
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let index in string) {
    if (string[index].toLowerCase() === 'a') {
      encoded += 1;
    } else if (string[index].toLowerCase() === 'e') {
      encoded += 2;
    } else if (string[index].toLowerCase() === 'i') {
      encoded += 3;
    } else if (string[index].toLowerCase() === 'o') {
      encoded += 4;
    } else if (string[index].toLowerCase() === 'u') {
      encoded += 5;
    } else {
      encoded += string[index];
    }
  }
  console.log(`Desafio 8: Codificando: ${encoded}`);
  return encoded;
}
function decode(encoded) {
  let decoded = '';
  for (let index in encoded) {
    if (encoded[index] === '1') {
      decoded += 'a';
    } else if (encoded[index] === '2') {
      decoded += 'e';
    } else if (encoded[index] === '3') {
      decoded += 'i';
    } else if (encoded[index] === '4') {
      decoded += 'o';
    } else if (encoded[index] === '5') {
      decoded += 'u';
    } else {
      decoded += encoded[index];
    }
  }
  console.log(`Desafio 8: Decodificando: ${decoded}`);
  return decoded;
}

// Desafio 10
function techList(array, name) {
  let techArray = [];
  array = array.sort();
  if (array[0] !== undefined) {
    for (let index in array) {
      if (Object.prototype.hasOwnProperty.call(index, array)) {
        let object = {tech: array[index], name: name};
        techArray.push(object);
      }
      if ({}.hasOwnProperty.call(array, index)) {
        let object = {tech: array[index], name: name};
        techArray.push(object);
      }
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
