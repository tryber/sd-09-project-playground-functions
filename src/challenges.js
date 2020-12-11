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
function generatePhoneNumber() {
  function checkArrayLength(array) {
    if ((array !== 11)) {
      return 'Array com tamanho incorreto.';
    }
    return '';
  }
  function checkNumbers(numbers) {
    if ((numbers < 0) || (numbers >= 10)) {
      return true;
    }
    return false;
  }
  function countNumberRepeat(array, number) {
    let repeats = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (number === array[index]) {
        repeats += 1;
      }
    }
    return repeats;
  }
  function wrongArrays(number, array) {
    let wrong = checkArrayLength(array.length);
    let message = '';
    if (wrong !== '') {
      message = wrong;
    }
    if (checkNumbers(numbers) || (countNumberRepeat(array, number) >= 3)) {
      message = 'não é possível gerar um número de telefone com esses valores';
    }
    return message;
  }
  function separator(number, index) {
    let phone = '';
    if (index === 0) {
      phone += '(';
    }
    if (index === 2) {
      phone += ') ';
    }
    if (index === 7) {
      phone += '-';
    }
    phone += number;
    return phone;
  }
  function generatePhoneNumber(arrayPhone) {
    let message = '';
    let error = '';    
    wrong = wrongArrays('', arrayPhone);
      if ((arrayPhone.length === 0) || (wrong !== '')) {
        message = wrong;
      }
      for (let index = 0; index < arrayPhone.length; index += 1) {
        message += separator(arrayPhone[index], index);
        wrong = wrongArrays(arrayPhone[index], arrayPhone);
        if (wrong !== '') {
          message = wrong;
          break;
        }
      }
      return message;
  }
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
