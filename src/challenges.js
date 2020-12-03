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
  let cypher = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let code = entry.split('');
// Solução baseada na resolução do desafio 6
  for (let index = 0; index < code.length; index += 1) {
    if (cypher[code[index]] !== undefined) {
      code[index] = cypher[code[index]]
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
function generatePhoneNumber(entry) {
  let repeat = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 }
  let phone = entry.join('')
  let ddd = '('.concat(phone.substr(0, 2)).concat(') ');
  let tel = phone.substr(2, 5).concat('-').concat(phone.substr(7, 4));
  let message = ddd + tel
  if (entry.length !== 11) {
    message = 'Array com tamanho incorreto.';
    return message;
  }
  for (let index = 0; index < entry.length; index += 1) {
    let number = entry[index];
    if (repeat[number] === undefined || repeat[number] === 2) {
      message = 'não é possível gerar um número de telefone com esses valores';
      return message;
    }
    repeat[number] += 1;
  }
  return message
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangle = true;
  let check = [[lineA, lineB, lineC], [lineB, lineA, lineC], [lineC, lineA, lineB]];
  let line = 0;
  let sum = 0;
  let diff = 0;
  for (let index = 0; index < check.length; index += 1) {
    line = check[index][0];
    sum = check[index][1] + check[index][2];
    diff = Math.abs(check[index][1] - check[index][2]);
    if (line > diff && line < sum) {
      triangle = true;
    } else {
      triangle = false;
      break;
    }
  }
  return triangle;
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
