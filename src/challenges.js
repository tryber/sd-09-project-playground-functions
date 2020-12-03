function compareNum(a, b) {
  let output = 0;

  if (a < b) {
    output = -1;
  }

  if (a > b) {
    output = 1;
  }

  return output;
}

// Desafio 1
function compareTrue(bool1, bool2) {
  let answer = false;

  if (bool1 === true && bool1 === bool2) {
    answer = true;
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
  let biggest = array.sort(compareNum)[array.length - 1];
  let aparissons = 0;

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
function fizzBuzzStatements(i) {
  let fizzBuzzAnswer;

  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzzAnswer = 'fizzBuzz';
  } else if (i % 3 === 0) {
    fizzBuzzAnswer = 'fizz';
  } else if (i % 5 === 0) {
    fizzBuzzAnswer = 'buzz';
  } else {
    fizzBuzzAnswer = 'bug!';
  }
  return fizzBuzzAnswer;
}

function fizzBuzz(array) {
  let resultArray = [];

  for (let i of array) {
    resultArray.push(fizzBuzzStatements(i));
  }
  return resultArray;
}

// Desafio 9
function createCipherObj(type) {
  let cipher;

  if (type === 'encode') {
    cipher = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
  }

  if (type === 'decode') {
    cipher = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
  }
  return cipher;
}

function cipherCases(index, type) {
  let encryptedChar;
  let cipher = createCipherObj(type);

  switch (index) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
      encryptedChar = cipher[index];
      break;

    default:
      encryptedChar = index;
      break;
  }
  return encryptedChar;
}

function encode(string) {
  let encrypted = '';

  for (let i of string) {
    encrypted += cipherCases(i, 'encode');
  }
  return encrypted;
}

function decode(string) {
  let decipher = '';

  for (let i of string) {
    decipher += cipherCases(i, 'decode');
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
      name,
    });
  }

  return resultArray.length === 0 ? 'Vazio!' : resultArray;
}

// Desafio 11
function countingReps(arr) {
  let reps;
  let answer;

  for (let i of arr) {
    reps = 0;

    for (let j of arr) {
      if (i === j) {
        reps += 1;
      }
    }

    if (reps >= 3 || i < 0 || i > 9) {
      answer = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return answer;
}

function statements(arr) {
  
  let otherAnswers;

  if (arr.length !== 11) {
    otherAnswers = 'Array com tamanho incorreto.';
  } else {
    otherAnswers = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
  }
  return otherAnswers;
}

function generatePhoneNumber(array) {
  let result = ' ';

  result = countingReps(array);
  
  if (typeof(result) === 'undefined') {
    result = statements(array);
  }
  

  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lines = [lineA, lineB, lineC];
  let linesSorted = lines.sort(compareNum);
  let sum = Math.abs(linesSorted[1] + linesSorted[0]);
  let result = false;

  if (linesSorted[2] < sum) {
    result = true;
  }

  return result;
}

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let resultArray = string.match(reg);
  let phrase = 'copos de água';
  let quantity = 0;
  let output;

  for (let i of resultArray) {
    quantity += parseInt(i, 10);
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
