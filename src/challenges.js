//ok
// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true){
    return true; 
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
}

// Desafio 4
function concatName(arrayS) {
  let primaryString = arrayS[0];
  let lastString = arrayS[arrayS.length - 1];
  let result = lastString + ', ' + primaryString;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  pointsWins = wins * 3;
  pointsTies = ties * 1;
  totPoints = pointsWins + pointsTies;
  return totPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let biggerNumber = Math.max(...arrayNumbers);
  let repeatNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (biggerNumber == arrayNumbers[index]){
      repeatNumber = repeatNumber + 1;
    }
  } 
  return repeatNumber;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let array = [];
  let input;
      for (let index in arrayNumbers) {
         if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0) {
             input = "fizz";
         } else if (arrayNumbers[index] % 3 !== 0 && arrayNumbers[index] % 5 === 0){
             input = "buzz";
         } else if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
             input = "fizzBuzz";
         } else {
             input = "bug!";
         }
      array.push(input);
      input = "";
      }
  return array;
}

// Desafio 9
function encode(characterSet) {
  let characterArray = characterSet.split("");
  for (let i in characterArray) {
    switch (characterArray[i]) {
      case "a": characterArray[i] = 1;
        break;
      case "e": characterArray[i] = 2;
        break;
      case "i": characterArray[i] = 3;
        break;
      case "o": characterArray[i] = 4;
        break;
      case "u": characterArray[i] = 5;
        break;
    }
  }
  let characterEncode = characterArray.join("");
  return characterEncode;
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
