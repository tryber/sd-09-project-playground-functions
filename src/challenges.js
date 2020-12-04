/** RAFAEL GERONIMO | TRYBE | #VQV */
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let words = phrase.split(' ');
  return words;
}

// Desafio 4
function concatName(names) {
  let firstAndLast = '';
  firstAndLast = firstAndLast.concat(`${names[names.length - 1]}, ${names[0]}`);
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = numbers.reduce(function (a, b) {
    return Math.max(a, b)
  })
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.max(mouse, cat1) - Math.min(mouse, cat1);
  let cat2Dist = Math.max(mouse, cat2) - Math.min(mouse, cat2);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } else if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzResult = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzBuzzResult = fizzBuzzResult.concat('fizzBuzz');
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      fizzBuzzResult = fizzBuzzResult.concat('buzz');
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      fizzBuzzResult = fizzBuzzResult.concat('fizz');
    } else {
      fizzBuzzResult = fizzBuzzResult.concat('bug!');
    }
  }
  return fizzBuzzResult;
}

// Desafio 9
function encode(phrase) {
  let encoded = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case 'a':
        encoded = encoded.concat('1');
        break;
      case 'e':
        encoded = encoded.concat('2');
        break;
      case 'i':
        encoded = encoded.concat('3');
        break;
      case 'o':
        encoded = encoded.concat('4');
        break;
      case 'u':
        encoded = encoded.concat('5');
        break;
      default:
        encoded = encoded.concat(phrase[index]);
        break;
    }
  }
  return encoded;
}

function decode(phrase) {
  let decoded = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (phrase[index]) {
      case '1':
        decoded = decoded.concat('a');
        break;
      case '2':
        decoded = decoded.concat('e');
        break;
      case '3':
        decoded = decoded.concat('i');
        break;
      case '4':
        decoded = decoded.concat('o');
        break;
      case '5':
        decoded = decoded.concat('u');
        break;
      default:
        decoded = decoded.concat(phrase[index]);
        break;
    }
  }
  return decoded;
}

// Desafio 10
function techList(techs, name) {
  if (techs == '') {
    return 'Vazio!';
  }
  let techListName = [];
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    let newItem = { tech: techs[index], name };
    techListName.push(newItem);
  }
  return techListName;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  let phoneNumber = `(${numbers[0]}${numbers[1]}) `;
  for (let number in numbers) {
    if (numbers[number] < 0 || numbers[number] > 9) return 'não é possível gerar um número de telefone com esses valores';
    let checkRepeat = 0;
    for (let item = 0; item < numbers.length; item += 1) {
      if (parseInt(number, 10) === numbers[item]) checkRepeat += 1;
      if (checkRepeat > 2) return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index = 2; index < numbers.length; index += 1) {
    phoneNumber = phoneNumber.concat(`${numbers[index]}`)
    if (index === 6) phoneNumber = phoneNumber.concat('-');
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lines = [lineA, lineB, lineC];
  let segments = [
    lineB + lineC,
    lineC + lineA,
    lineA + lineB,
  ];
  for (let segment in segments) {
    if (segments[segment] <= lines[segment]) {
      return false;
    }
  }
  return true;
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
