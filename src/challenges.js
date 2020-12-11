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
function splitSentence(sentence) {
  return sentence.split([' ']);
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(valueArray) {
  let highestValue = 0;
  let highestValueCount = 0;
  for (let index = 0; index < valueArray.length; index += 1) {
    if (valueArray[index] > highestValue) {
      highestValue = valueArray[index];
      highestValueCount = 1;
    } else if (valueArray[index] === highestValue) {
      highestValueCount += 1;
    }
  }
  return highestValueCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    winner = 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    winner = 'cat1';
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    winner = 'cat2';
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayResult.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let stringArray = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    for (let myIndex = 0; myIndex < vowels.length; myIndex += 1) {
      if (stringArray[index] === vowels[myIndex]) {
        stringArray[index] = numbers[myIndex];
      }
    }
  }
  return stringArray.join('');
}
function decode(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let stringArray = string.split('');
  for (let index = 0; index < string.length; index += 1) {
    for (let myIndex = 0; myIndex < numbers.length; myIndex += 1) {
      if (stringArray[index] === numbers[myIndex]) {
        stringArray[index] = vowels[myIndex];
      }
    }
  }
  return stringArray.join('');
}

// Desafio 10
function techList(array, name) {
  array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    array[index] = {
      tech: array[index],
      name: name
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  let messages = {
    firstError: 'Array com tamanho incorreto.',
    secondError: 'não é possível gerar um número de telefone com esses valores',
    phoneNumber: '(aa) aaaaa-aaaa',
    phoneNumberArray: [],
    phoneIndex: 0,
    repeatCount: 0,
    displayMessage: '',
  }
  for (let index = 0; index < messages.phoneNumber.length; index += 1) {
    messages.phoneNumberArray[index] = messages.phoneNumber[index];
    if (display.phoneNumber[index] === 'a') {
      messages.phoneNumberArray[index] = array[messages.phoneIndex];
      messages.phoneIndex += 1;
    }
  }
  messages.displayMessage = messages.phoneNumberArray.join('');
  for (let index = 0; index < array.length; index += 1) {
    display.repeatCount = 0;
    for (let repeatIndex = 0; repeatIndex < array.length; repeatIndex += 1) {
      if (array[repeatIndex] === array[index]) {
        messages.repeatCount += 1;
      }
      if (array[index] < 0 || array[index] > 9 || messages.repeatCount > 2) {
        messages.displayMessage = messages.secondError;
      }
    }
  }
  if (array.length !== 11) {
    messages.displayMessage = messages.firstError;
  }
  return display.displayMessage;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    
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
