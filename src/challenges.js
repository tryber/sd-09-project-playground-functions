// Desafio 1 feito
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let auxiliarString = '';
  let arrayString = [];
  for (let index = 0; index < string.length; index+=1) {
    if (string[index] !== ' '){
      auxiliarString += string[index];
    } else if (string[index] === ' ') {
            arrayString.push(auxiliarString);
            auxiliarString = '';
          }
    if (index === (string.length -1)) {
              arrayString.push(auxiliarString);
           }
  }
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
let indexOfLastWord = arrayString.length - 1;
  let lastString = arrayString[indexOfLastWord];
  return lastString + ', ' + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = 0;
  score = (3 * wins ) + (1 * ties);
  return score;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let auxiliarArray = [];
  auxiliarArray.push(numbers[0]);
  for (let index = 0; index < numbers.length; index +=1) {
    for(let indexAux = 0; indexAux < auxiliarArray.length; indexAux +=1 ) {
      if (numbers[index] !== auxiliarArray[indexAux]){
        auxiliarArray.push(numbers[index]);
      }
    }
  }
  return auxiliarArray;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let distanceCat1 = 0;
  let distanceCat2 = 0; 
  distanceCat1 = cat1 - mouse;
  distanceCat2 = cat2 - mouse;
  if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge';
  }
  if(distanceCat1 > distanceCat2){
      return 'cat1';
  } else {
      return 'cat2';
  }
  
}
function fizz(number) {
  if (number%3 === 0){
    return true;
  }
}

function buzz (number) {
  if (number%5 === 0){
    return true;
  }
}
// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
      if (buzz(numbers[index]) === true && fizz(numbers[index]) === true) {
          arrayFizzBuzz.push('fizzBuzz');
      } else if (buzz(numbers[index]) === true) {
        arrayFizzBuzz.push('buzz');
      } else if (fizz(numbers[index]) === true) {
        arrayFizzBuzz.push('fizz');
      } else {
        arrayFizzBuzz.push('bug!');
      }
  }
  return arrayFizzBuzz;
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
