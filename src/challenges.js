// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayOfStrigs) {
  let concatenatedName = [];
  concatenatedName.push(arrayOfStrigs[arrayOfStrigs.length - 1]);
  concatenatedName.push(arrayOfStrigs[0]);

  return concatenatedName.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties * 1);
  return result;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highest;
  let count = 0;
  for (let index in arrayOfNumbers) {
    if (index === '0') {
      highest = arrayOfNumbers[index];
    } else if (arrayOfNumbers[index] > highest) {
      highest = arrayOfNumbers[index];
    }
  }
  for (let index in arrayOfNumbers) {
    if (highest === arrayOfNumbers[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  for (let index in arrayOfNumbers) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      arrayOfNumbers[index] = 'fizzBuzz';
    } else if (arrayOfNumbers[index] % 3 === 0) {
      arrayOfNumbers[index] = 'fizz';
    } else if (arrayOfNumbers[index] % 5 === 0) {
      arrayOfNumbers[index] = 'buzz';
    } else {
      arrayOfNumbers[index] = 'bug!';
    }
  }
  return arrayOfNumbers;
}

// Desafio 9
function encode(sentence) {
  for (let index = 0; index < sentence.length; index+=1) {
    switch (sentence[index]) {
      case 'a':
        sentence = sentence.replace('a', '1');
        break;
      case 'e':
        sentence = sentence.replace('e', '2');
        break;
      case 'i':
        sentence = sentence.replace('i', '3');
        break;
      case 'o':
        sentence = sentence.replace('o', '4');
        break;
      case 'u':
        sentence = sentence.replace('u', '5');
        break;
      default:
        break;
    }
  }
  return sentence;
}

function decode(sentence) {
  let oldWord = sentence;
  for (let index = 0; index < sentence.length; index += 1) {
    switch(sentence[index]) {
      case '1':
        oldWord = oldWord.replace('1', 'a');
        break;
      case '2':
        oldWord = oldWord.replace('2', 'e');
        break;
      case '3':
        oldWord = oldWord.replace('3', 'i');
        break;
      case '4':
        oldWord = oldWord.replace('4', 'o');
        break;
      case '5':
        oldWord = oldWord.replace('5', 'u');
        break;
      default:
        break;
    }
  }
  return oldWord;
}

// Desafio 10
function techList(techArray, name) {
  let listToLearn = [];
  if (techArray.length !== 0) {
    for (let index = 0; index < techArray.length; index += 1) {
      let format = {
        tech: techArray[index],
        name: name,
      }
      listToLearn.push(format);
    }
    return listToLearn;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let number;
  if (arrayNumber.length === 11) {
    for (let index = 0; index < arrayNumber.length; index += 1) {
      if (!(validateNumber(arrayNumber[index]) && repeats(arrayNumber[index], arrayNumber, 0))) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    return format(arrayNumber);
  }
  return 'Array com tamanho incorreto.';
}

function format(arrayNumber) {
  let number = '';
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (number.length === 0) {
      number += '(';
      number += arrayNumber[index];
    }else if (number.length === 3) {
      number += ') ';
      number += arrayNumber[index];
    }else if (number.length === 10) {
      number += '-';
      number += arrayNumber[index];
    }else{
      number += arrayNumber[index];
    }
  }
  return number;
}

function validateNumber(number) {
  return (number >= 0) && (number <=9)
}

function repeats(number, array, qtty) {

  for (let index in array) {
    array[index] === number?qtty += 1:null;
  }
  if (qtty === 3) {
    return false;
  }
  return true;
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
