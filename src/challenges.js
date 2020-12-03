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
function splitSentence(string) {
  let stringArray = [];
  let wordSeparator = 0;
  stringArray[wordSeparator] = '';

  for (let i = 0; i < string.length; i += 1) {
    stringArray[wordSeparator] += string[i];
    if (string[i] === ' ') {
      wordSeparator += 1;
      stringArray[wordSeparator] = '';
    }
  }

  return stringArray;
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (higherNumber < array[i]) {
      higherNumber = array[i];
      count = 1;
    } else if (higherNumber === array[i]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge'
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }

  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else {
      array[i] = 'bug!';
    }
  }

  return array;
}

// Desafio 9
function encode(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a') {
      str[i] += '1';
    }
  }

  return str;
}
function decode(str) {
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '1':
        str[i] = "a";
        break;
      case '2':
        str[i] = 'e';
        break;
      case '3':
        str[i] = 'i';
        break;
      case '4':
        str[i] = 'o';
        break;
      case '5':
        str[i] = 'u';
        break;
    }
  }

  return str;
}

// let str = 'meu nome é gabriel galdino';
// console.log("Codificação:");
// console.log(encode(str));
// console.log("Decodificação:");
// console.log(decode(str));

// Desafio 10
function techList(techArray, nome) {
  let objList = []
  techArray = techArray.sort();

  for (let x in techArray) {
    if (techArray.length === 0) {
      return 'Vazio!';
    }

    objList.push({ tech: techArray[x], name: nome });
  }

  return objList;
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
