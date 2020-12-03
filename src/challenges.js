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
  let lastName = entry[entry.length - 1];
  let firstName = entry[0]
  let name = lastName.concat(', ', firstName);
  return name;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (ties);
  return points;
}

// Desafio 6
function highestCount(entry) {
  let repetitions = {};
  let sortedEntry = entry.sort(function (a, b) { return a - b });
// Contagem de repetições baseada no gabarito do exercício 5 da parte II do bloco 4.4
  for (let index = 0; index < entry.length; index += 1) {
    let number = entry[index];
    if (repetitions[number] === undefined) {
      repetitions[number] = 1;
    } else {
      repetitions[number] += 1;
    }
  }
  return repetitions[sortedEntry[sortedEntry.length - 1].toString()];
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
  let code = entry.split('');
  for (let index = 0; index < code.length; index += 1) {
    switch (code[index]) {
      case 'a':
        code[index] = '1';
        break;
      case 'e':
        code[index] = '2';
        break;
      case 'i':
        code[index] = '3';
        break;
      case 'o':
        code[index] = '4';
        break;
      case 'u':
        code[index] = '5';
        break;
      default:
    }
  }
  return code.join('');
}

function decode(secret) {
  let cypher = secret.split('');
  for (let control = 0; control < cypher.length; control += 1) {
    switch (cypher[control]) {
      case '1':
        cypher[control] = 'a';
        break;
      case '2':
        cypher[control] = 'e';
        break;
      case '3':
        cypher[control] = 'i';
        break;
      case '4':
        cypher[control] = 'o';
        break;
      case '5':
        cypher[control] = 'u';
        break;
      default:
    }
  }
  return cypher.join('');
}

// Desafio 10
function techList(techs, person) {
  let alphaTechs = techs.sort();
  let abilities;
  if (techs.length === 0) {
    abilities = 'Vazio!';
  } else {
    abilities = [];
    for (let index = 0; index < alphaTechs.length; index += 1) {
      abilities.push({ tech: alphaTechs[index], name: person });
    }
  }
  return abilities;
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
function hydrate(entry) {
  let water = 0;
  let message = '';
  for (let index = 0; index < entry.length; index += 1) {
    if (isNaN(entry[index]) === false) {
      water += Number(entry[index]);
    }
  }
  if (water === 1) {
    message = '1 copo de água';
  } else {
    message = water.toString().concat(' copos de água');
  }
  return message;
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
