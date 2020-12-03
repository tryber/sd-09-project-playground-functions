// Mudança no arquivo para commit inicial.

// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

console.log(calcArea(10, 20));

// Desafio 3
function splitSentence(string) {
  const arrayString = string.split(' ');
  return arrayString;
}

console.log(splitSentence('Rua Leobino Pimentel'));

// Desafio 4
function concatName(strings) {
  let firstName = '';
  let lastName = '';

  for (let index = 0; index < strings.length; index += 1) {
    if (index === 0) {
      firstName = strings[index];
    } else if (index === strings.length - 1) {
      lastName = strings[index];
    }
  }

  return lastName + ', ' + firstName;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(3, 5));

// Desafio 6
function highestCount(numbers) {
  let higherNumber = 0;
  let numberRepetitions = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (index === 0) {
      higherNumber = numbers[index];
    } else {
      if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
      }
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNumber) {
      numberRepetitions += 1;
    }
  }

  return numberRepetitions;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;
  if (posCat1 > posMouse) {
    distanceCat1 = posCat1 - posMouse;
  }
  if (posCat1 < posMouse) {
    distanceCat1 = posMouse - posCat1;
  }
  if (posCat2 > posMouse) {
    distanceCat2 = posCat2 - posMouse;
  }
  if (posCat2 < posMouse) {
    distanceCat2 = posMouse - posCat2;
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2'
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1'
  }
  return 'os gatos trombam e o rato foge'
}

console.log(catAndMouse(5, 2, 9))

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 !== 0) {
      result.push('buzz')
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!')
    }
  }
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(phrase) {
  let strings = phrase.split('');

  for (let index = 0; index < strings.length; index += 1) {
    switch (strings[index]) {
      case 'a':
        strings[index] = 1;
        break;
      case 'e':
        strings[index] = 2;
        break;
      case 'i':
        strings[index] = 3;
        break;
      case 'o':
        strings[index] = 4;
        break;
      case 'u':
        strings[index] = 5;
        break;
      default:
        break;
    }
  }

  return strings.join('');
}
function decode(phrase) {
  let strings = phrase.split('');

  for (let index = 0; index < strings.length; index += 1) {
    switch (strings[index]) {
      case '1':
        strings[index] = 'a';
        break;
      case '2':
        strings[index] = 'e';
        break;
      case '3':
        strings[index] = 'i';
        break;
      case '4':
        strings[index] = 'o';
        break;
      case '5':
        strings[index] = 'u';
        break;
      default:
        break;
    }
  }

  return strings.join('');
}

console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(techs, name) {
  let techLists = [];
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    const object = {
      tech: techs[index],
      name,
    }
    techLists.push(object);
  }
  return techLists;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
