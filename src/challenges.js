// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  let currentWord = '';
  let setenceArray = [];
  for (let charIndex in text) {
    let char = text[charIndex];
    if (char === ' ') {
      setenceArray.push(currentWord);
      currentWord = '';
    } else if (charIndex === text.length - 1) {
      currentWord += char;
      setenceArray.push(currentWord);
    } else {
      currentWord += char;
    }
  }
  return setenceArray;
}

// Desafio 4
function concatName(inputArray) {
  let firstItem = inputArray[0];
  let lastItem = inputArray[inputArray.length - 1];
  return `${lastItem}, ${firstItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(inputArray) {
  let counter = {};
  let highestNumber;
  for (let index in inputArray) {
    let number = inputArray[index];
    if (!(number in counter)) {
      counter[number] = 1;
    } else {
      counter[number] += 1;
    }
    if (index == 0 || number > highestNumber) {
      highestNumber = number;
    }
  }
  return counter[highestNumber];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance < cat2Distance) {
    return "cat1";
  }
  else if (cat1Distance > cat2Distance) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
