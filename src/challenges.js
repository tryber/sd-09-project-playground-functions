// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(35, 58));

// Desafio 3
function splitSentence(phrase) {
  let wordArray = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] !== ' ' && index < phrase.length) {
      word += phrase[index];
    } else {
      wordArray.push(word);
      word = '';
    }
  }
  return wordArray;
}
// console.log(splitSentence('Go Trybe'));

// Desafio 4
function concatName(names) {
  let lastFirst = names[names.length - 1] + ', ' + names[0];
  return lastFirst;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}
// console.log(footballPoints(5, 3));

// Desafio 6 test
function highestCount(numbers) {
  let higher = 0;
  let times = 0;
  for (let index = 0; index <= numbers.length; index += 1) {
    if (numbers[index] >= numbers[index + 1]) {
      if (numbers[index] == higher) {
        times += 1;
      } else if (numbers[index] > higher) {
        higher = numbers[index];
        times = 1;
      }
    } else if (numbers[index - 1] != higher && numbers[index - 1] > higher){
      higher = numbers[index - 1];
      times = 1;
    }
  }
  return times;
}
//console.log(highestCount([9, 9, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = mouse - cat1;
  cat2 = mouse - cat2;
  if (cat1 < 0) {
    cat1 = (cat1 * -1);
  }
  if (cat2 < 0) {
    cat2 = (cat2 * -1);
  }
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (cat1 < cat2){
    return 'cat1';
  }
  return 'cat2';
}
// console.log(catAndMouse(8, 12, 4))

// Desafio 8
function fizzBuzz(numbersTo) {
  for (let index = 0; index < numbersTo.length; index += 1) {
    if ((numbersTo[index] % 3 === 0) && (numbersTo[index] % 5 === 0)) {
      numbersTo[index] = 'fizzBuzz';
    } else if(numbersTo[index] % 5 === 0) {
      numbersTo[index] = 'buzz';
    } else if(numbersTo[index] % 3 === 0) {
      numbersTo[index] = 'fizz';
    }
    else {
      numbersTo[index] = 'bug!';
    }
  }
  return numbersTo;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(originalText) {
  let key = ['1', '2', '3', '4', '5'];
  let putCode = ['a','e','i','o','u'];
  let encodedText = '';
  for (let index = 0; index < originalText.length; index += 1) {
    let letterCoded = false;
    for (let indexCode = 0; indexCode < key.length; indexCode += 1) {
      if (originalText[index] === putCode[indexCode]) {
        encodedText += key[indexCode];
        letterCoded = true;
        break;
      }
    }
    if (letterCoded === false){
      encodedText += originalText[index];
    }
  }
return encodedText;
}
// console.log(encode('hi there!'));

function decode(codedText) {
  let key = ['1', '2', '3', '4', '5'];
  let uncode = ['a','e','i','o','u'];
  let uncodedText = '';
  for (let index = 0; index < codedText.length; index += 1) {
    let letterUncoded = false;
    for (let indexCode = 0; indexCode < key.length; indexCode += 1) {
      if (codedText[index] === key[indexCode]) {
        uncodedText += uncode[indexCode];
        letterUncoded = true;
        break;
      }
    }
    if (letterUncoded === false) {
      uncodedText += codedText[index];
    }
  }
return uncodedText;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList() {
  // seu código aqui
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
