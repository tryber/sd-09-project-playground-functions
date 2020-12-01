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
function concatName(nameString) {
  let name = '';
  name += nameString[nameString.length - 1] + ', ' + nameString[0];
  return name;
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
function fizzBuzz(values) {
  let valuesBuzz = [];
  for (let index in valuesFizz){
    if (valuesFizz[index] % 3 == 0 && valuesFizz[index] % 5 != 0){
      valuesBuzz[index] = 'Fizz';
    } else if (valuesFizz[index] % 3 != 0 && valuesFizz[index] % 5 == 0){
      valuesBuzz[index] = 'Buzz';
    } else if (valuesFizz[index] % 3 == 0 && valuesFizz[index] % 5 == 0){
      valuesBuzz[index] = 'FizzBuzz';
    } else {
      valuesBuzz[index] = 'Bug!'; 
    } 
  }

  return valuesBuzz;
}

// Desafio 9
function encode(newphrase) {
  let encodePhrase = '';

  for (let key in newphrase) {
    if (newphrase[key] === 'a') {
      encodePhrase += '1';
    } else if (newphrase[key] === 'e') {
      encodePhrase += '2';
    } else if (newphrase[key] === 'i') {
      encodePhrase += '3';
    } else if (newphrase[key] === 'o') {
      encodePhrase += '4';
    } else if (newphrase[key] === 'u') {
      encodePhrase += '5';
    } else {
      encodePhrase += newphrase[key];
    }
  }
  return encodePhrase;
}
function decode(phrase) {
  let decodePhrase = '';

  for (let key in phrase) {
    if (phrase[key] === '1') {
      decodePhrase += 'a';
    } else if (phrase[key] === '2') {
      decodePhrase += 'e';
    } else if (phrase[key] === '3') {
      decodePhrase += 'i';
    } else if (phrase[key] === '4') {
      decodePhrase += 'o';
    } else if (phrase[key] === '5') {
      decodePhrase += 'u';
    } else {
      decodePhrase += phrase[key];
    }
  } 
  return decodePhrase;
}

// Desafio 10
function techList() {
  let order = tech.sort();
  let result = [];
 
  if (tech.length > 0) {
    for (let key in order) {
      let object = {};
      object.tech = order[key];
      object.name = name;
      result.push(object);
    }
  } else {
    result = 'Vazio!';
  }
  return result;
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
