// Desafio 1 teste
function compareTrue(bool1, bool2) {
  let answer = false;

  if (bool1 === true && bool1 === bool2) {
    answer = true
  }

  return answer;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let resultArray = sentence.split(' ');

  return resultArray;
}

// Desafio 4
function concatName(array) {
  let resultString = `${array[array.length - 1]}, ${array[0]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0];
  let aparissons = 0;

  for (let i of array) {
    if (i > biggest) {
      biggest = i;
    }
  }

  for (let i of array) {
    if (i === biggest) {
      aparissons += 1;
    }
  }
  return aparissons;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = 'os gatos trombam e o rato foge';

  if (distCat1 < distCat2) {
    result = 'cat1';
  }

  if (distCat2 < distCat1) {
    result = 'cat2';
  }

  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let resultArray = [];

  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (i % 3 === 0) {
      resultArray.push('fizz');
    } else if (i % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
  let encrypted = '';
  let cipher = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i of string) {
    switch (i) {
      case 'a':
        encrypted += cipher[i];
        break;

      case 'e':
        encrypted += cipher[i];
        break;

      case 'i':
        encrypted += cipher[i];
        break;

      case 'o':
        encrypted += cipher[i];
        break;

      case 'u':
        encrypted += cipher[i];
        break;

      default:
        encrypted += i;
        break;
    }
  }
  return encrypted;
}

function decode(string) {
  let decipher = '';
  let cipher = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let i of string) {
    switch (i) {
      case '1':
        decipher += cipher[i];
        break;

      case '2':
        decipher += cipher[i];
        break;

      case '3':
        decipher += cipher[i];
        break;

      case '4':
        decipher += cipher[i];
        break;

      case '5':
        decipher += cipher[i];
        break;

      default:
        decipher += i;
        break;
    }
  }
  return decipher;
}

// Desafio 10
function techList(array, name) {
  let sortArray = array.sort();
  let resultArray = [];

  for (let i = 0; i < array.length; i += 1) {
    resultArray.push({
      tech: sortArray[i],
      name: name
    });
  }

  return resultArray.length === 0 ? 'Vazio!' : resultArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let isValid = true;
  let result;
  let reps;

  for (let i of array) {
    reps = 0;

    for (let j of array) {
      if (i === j) {
        reps += 1;
      }
    }

    if (reps >= 3 || i < 0 || i > 9) {
      result = 'não é possível gerar um número de telefone com esses valores';
      isValid = false;
    }
  }

  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
    isValid = false;
  }

  if (isValid === true) {
    result = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
  return result;
}

// Desafio 12
function compareNum(a, b) {
  if (a === b) return 0;
  if (a < b) return -1;
  if (a > b) return 1;
}

function triangleCheck(lineA, lineB, lineC) {
  let lines = [lineA, lineB, lineC];
  let linesSorted = lines.sort(compareNum);
  let sum = Math.abs(linesSorted[1] + linesSorted[0]);
  let result = false

  if (linesSorted[2] < sum) {
    result = true
  }

  return result
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let resultArray = string.match(reg);
  let phrase = 'copos de água';
  let quantity = 0;
  let output;

  for (let i of resultArray) {
    quantity += parseInt(i);
  }

  if (quantity === 1) {
    phrase = 'copo de água';
  }

  output = `${quantity} ${phrase}`;

  return output;
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
};
