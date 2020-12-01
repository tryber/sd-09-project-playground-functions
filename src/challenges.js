// Projeto 2

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  let sentenceArray = sentence.split('');
  let sentenceSplited = [];
  let positionCount = 0;

  for (let index in sentenceArray) {
    if (sentenceArray[index] !== ' ') {
      if (sentenceSplited[positionCount] === undefined) {
        sentenceSplited[positionCount] = '';
      };
      sentenceSplited[positionCount] += sentenceArray[index];
    } else {
      positionCount += 1;
    };
  };
  return sentenceSplited;
}

// Desafio 4
function concatName(nameToConcat) {
  let nameConcatened = '';
  nameConcatened += nameToConcat[nameToConcat.length - 1] + ', ' + nameToConcat[0];

  return nameConcatened;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let biggerNumber = 0;
  let countBuggerNumber = 0;
  
  for (let index in numbers) {
    if (numbers[index] === biggerNumber) {
      countBuggerNumber += 1;
    }
    if(numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
      countBuggerNumber = 1;
    }
  }

  return countBuggerNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzBug = [];

  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      fizzBuzzBug[index] = 'fizzBuzz';
    }
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      fizzBuzzBug[index] = 'fizz';
    }
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      fizzBuzzBug[index] = 'buzz';
    }
    if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
      fizzBuzzBug[index] = 'bug!';
    }
  }

  return fizzBuzzBug;
}

// Desafio 9
function encode(message) {
  let encoder= {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  let encodedMessage = '';

  for (let index in message) {
    if (message[index] === 'a' || message[index] === 'e' || message[index] === 'i' || message[index] === 'o' || message[index] === 'u') {
      encodedMessage += encoder[message[index]];
    } else {
      encodedMessage += message[index];
    }
  }

  return encodedMessage;
}

function decode(message) {
  let encoder= {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  let encodedMessage = '';

  for (let index in message) {
    if (message[index] === '1' || message[index] === '2' || message[index] === '3' || message[index] === '4' || message[index] === '5') {
      encodedMessage += encoder[message[index]];
    } else {
      encodedMessage += message[index];
    }
  }

  return encodedMessage;
}

// Desafio 10
function techList(list, name) {
  let arrayStacks = [];

  if (list.length === 0) {
    return 'Vazio!';
  } else {
    list = list.sort();
    let stack = {
      tech: '',
      name: ''
    };
  
    for (let index in list) {
      arrayStacks.push({
        tech: list[index],
        name: name
      })
    }
    return arrayStacks;
  }
  
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

console.log(compareTrue(true, true));
console.log(calcArea(20, 30));
console.log(splitSentence('go Trybe vamos que vamos'));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(footballPoints(10, 5));
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(catAndMouse(5, 2, 8));
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));

let techListArray = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Lucas';

console.log(techList(techListArray, name));
