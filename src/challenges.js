// Project 2

// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue === true) && (secondValue === true)) {
    return true
 }
 else {
   return false
  }
 }

// Desafio 2
function calcArea(value1, value2) {
  return value1 * value2/2
 }

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
 }

// Desafio 4
function concatName(names) {
   container = names.split(' ').reverse()
   for(i = 0; i < container.length; i++) {
       if (i == 0) {
           y += container[i]+', '
       }
       else if (i == container.length -1) {
          y += container[i]
       }
   }
   return y
 }

// Desafio 5
function footballPoints(wins, ties) {
   let winspoints = wins *3;
   let tiespoints = ties;
   let totalPoints;
   return totalPoints = winspoints + tiespoints;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = numbers[0];
  let bigger2 = 0;
  for (let counter = 0; counter < numbers.length; counter += 1) {
     if (bigger < numbers[counter]) {
       bigger = numbers[counter];
     }
  }
  for (let index in numbers) {
    if (bigger === numbers[index]) {
      bigger2 += 1;
    }
  }
  return bigger2;
  }

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(word) {
  let encodePhrase = '';

  for (let key in word) {
    if (word[key] === 'a') {
      encodePhrase += '1';
    } else if (word[key] === 'e') {
      encodePhrase += '2';
    } else if (word[key] === 'i') {
      encodePhrase += '3';
    } else if (word[key] === 'o') {
      encodePhrase += '4';
    } else if (word[key] === 'u') {
      encodePhrase += '5';
    } else {
      encodePhrase += word[key];
    }
  }
  return encodePhrase;
}
function decode(word2) {
  let decodePhrase = '';

  for (let key in word2) {
    if (word2[key] === '1') {
      decodePhrase += 'a';
    } else if (word2[key] === '2') {
      decodePhrase += 'e';
    } else if (word2[key] === '3') {
      decodePhrase += 'i';
    } else if (word2[key] === '4') {
      decodePhrase += 'o';
    } else if (word2[key] === '5') {
      decodePhrase += 'u';
    } else {
      decodePhrase += word2[key];
    }
  } 
  return decodePhrase;
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
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
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
