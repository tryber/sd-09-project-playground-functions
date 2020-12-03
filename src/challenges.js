// Project Playground Functions - by Felipe Pimentel
// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySplit = [];
  arraySplit = sentence.split(' ');
  return arraySplit;
}

// Desafio 4
function concatName(entry) {
  let name = entry[entry.length - 1] + ', ' + entry[0];
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (ties);
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let capture = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    capture = 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    capture = 'cat2';
  }
  if (Math.abs(cat2 - mouse) === Math.abs(cat1 - mouse)) {
    capture = 'os gatos trombam e o rato foge';
  }
  return capture;
}

// Desafio 8
function fizzBuzz(entry) {
  let divisibles = [];
  for (let index = 0; index < entry.length; index += 1) {
    divisibles.push('bug!');
    if (entry[index] % 15 === 0) {
      divisibles[index] = 'fizzBuzz';
    } else if (entry[index] % 3 === 0) {
      divisibles[index] = 'fizz';
    } else if (entry[index] % 5 === 0) {
      divisibles[index] = 'buzz';
    }
  }
  return divisibles;
}

// Desafio 9
function encode(entry) {
  let cypher = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  let code = entry.split('');
  for (let char in cypher) {
    for (let index = 0; index < code.length; index += 1) {
      if (code[index] === char) {
        code[index] = cypher[char];
      }
    }
  }
  return code.join('');
}

function decode(entry) {
  let cypher = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5'
  };
  let code = entry.split('');
  for (let char in cypher) {
    for (let index = 0; index < code.length; index += 1) {
      if (code[index] === cypher[char]) {
        code[index] = char;
      }
    }
  }
  return code.join('');
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
