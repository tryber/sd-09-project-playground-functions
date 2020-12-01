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
  if (cat1 - mouse > cat2 - mouse) {
    return 'cat1';
  } else if(cat2 - mouse > cat1 - mouse) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
  let newWord = sentence;
  for (let index in sentence) {
    switch (sentence[index]) {
      case 'a':
        newWord = newWord.replace('a', '1');
        break;
      case 'e':
        newWord = newWord.replace('e', '2');
        break;
      case 'i':
        newWord = newWord.replace('i', '3');
        break;
      case 'o':
        newWord = newWord.replace('o', '4');
        break;
      case 'u':
        newWord = newWord.replace('u', '5');
        break;
    }
  }
  return newWord;
}

function decode(sentence) {
  let oldWord = sentence;
  for (let index in sentence) {
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
    }
  }
  return oldWord;
}

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
