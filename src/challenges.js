// #VQV - LRLODI
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let finalArray = [];
  let tempArray = '';

  for (let index = 0; index < string.length; index += 1) {
    tempArray += string[index];
    if (string[index + 1] === ' ' || index === string.length - 1) {
      finalArray.push(tempArray);
      tempArray = '';
    }
  }
  return finalArray;
}

// Desafio 4
function concatName(array) {
  let finalArray = `${array[array.length - 1]}, ${array[0]}`
  return finalArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints;
  totalPoints = (wins * 3) + (ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let counter = 0;

  let number = findHighest(arrayOfNumbers);

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === number) {
      counter += 1;
    }
  }
  return counter;
}
function findHighest (arrayOfNumbers) {
  let highestNumber = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber) {
      highestNumber = arrayOfNumbers[index];
    }
    return highestNumber;
}
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
let arrayFizzBuzz = [];

for (let i = 0; i < numbers.length; i += 1) {
  
  if (numbers[i] % 3 === 0) {
    if (numbers[i] % 5 === 0) {
      arrayFizzBuzz[i] = "fizzBuzz";
    }
    arrayFizzBuzz[i] = "fizz";
  }
  if (numbers[i] % 5 === 0) {
    arrayFizzBuzz[i] = "buzz";
  }
  arrayFizzBuzz[i] = "bug!";
}

return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let codedString = '';
  let charCode = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === charCode[0]){
      codedString += '1';
      continue;
    }
    if (string[i] === charCode[1]){
      codedString += '2';
      continue;
    }
    if (string[i] === charCode[2]){
      codedString += '3';
      continue;
    }
    if (string[i] === charCode[3]){
      codedString += '4';
      continue;
    }
    if (string[i] === charCode[4]){
      codedString += '5';
      continue;
    }
    codedString += string[i];
  }
  return codedString;
}

function decode(string) {
  let decodedString ='';
  let numberCode = ['1', '2', '3', '4', '5'];

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === numberCode[0]){
      decodedString += 'a';
      continue;
    }
    if (string[i] === numberCode[1]){
      decodedString += 'e';
      continue;
    }
    if (string[i] === numberCode[2]){
      decodedString += 'i';
      continue;
    }
    if (string[i] === numberCode[3]){
      decodedString += 'o';
      continue;
    }
    if (string[i] === numberCode[4]){
      decodedString += 'u';
      continue;
    }
    decodeString += string[i];
  }
  return decodedString;
}

// Desafio 10
function techList(techArray, name) {
  let error = 'Vazio!';
  
  for (let i = 0; i < techArray.length; i += 1){
    let newList = {
      tech: techArray[i],
      name: name,
    }
    if (techArray = []) {
      return error;
    }
  }
  return newList;
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
