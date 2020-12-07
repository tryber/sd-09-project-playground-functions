// Projeto 2!!

// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(20, 40));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}
// console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(array) {
  let highestNumber = Math.max(...array);
  let count = 0;

  for (let number in array) {
    if (highestNumber === array[number]) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whoHadLunch = '';
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if (cat1Dist === cat2Dist) {
    whoHadLunch = 'os gatos trombam e o rato foge';
  } else if (cat1Dist < cat2Dist) {
    whoHadLunch = 'cat1';
  } else {
    whoHadLunch = 'cat2';
  }
  return whoHadLunch;
}
// console.log(catAndMouse(0, 10, -5));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
      case ((array[index] % 3) === 0 && (array[index] % 5) !== 0):
        result.push('fizz');
        break;
      case ((array[index] % 3) !== 0 && (array[index] % 5) === 0):
        result.push('buzz');
        break;
      case ((array[index] % 3) === 0 && (array[index] % 5) === 0):
        result.push('fizzBuzz');
        break;
      default:
        result.push('bug!');
        break;
    }
  }
  return result;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
const letters = ['a', 'e', 'i', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5'];

function encode(string) {
  let encrypt = string;
  let index = 0;

  while (index < string.length) {
    for (let j = 0; j < 5; j += 1) {
      encrypt = encrypt.replace(letters[index], numbers[index]);
    }
    index += 1;
  }
  return encrypt;
}
// console.log(encode('hi there!'));

function decode(string) {
  let decrypt = string;

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      decrypt = decrypt.replace(numbers[i], letters[i]);
    }
  }
  return decrypt;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, name) {
  let arrayList = [];
  if (array.length === 0) {
    arrayList = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      arrayList.push({ tech: array[i], name });
    }
    arrayList.sort(function (a, b) {
      if (a.tech < b.tech) return -1;
      if (a.tech > b.tech) return 1;
      return 0;
    })
  }
  return arrayList;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Marcus'));
// console.log(techList([], 'Marcus'));

// Desafio 11
function validRange(arrayNumber) {
  for (let number of arrayNumber) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function validNumber(arrayNumber) {
  let count = 0;
  for (let number of arrayNumber) {
    for (let index = 0; index < arrayNumber.length; index += 1) {
      if (number === arrayNumber[index]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return false;
    }
    count = 0;
  }
  return true;
}

function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  let phoneNumber = arrayNumber.join('');
  if (validRange(arrayNumber) && validNumber(arrayNumber)) {
    phoneNumber = '(' + phoneNumber.substr(0, 2) + ') ' + phoneNumber.substr(2, 5) + '-' + phoneNumber.substr(7, 11);
  } else {
    phoneNumber ='não é possível gerar um número de telefone com esses valores';
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 1, 9, 8, 6, 2, 4, 8, 7, 0, 7]));

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
