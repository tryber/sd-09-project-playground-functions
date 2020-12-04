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
  let newArray = string.split(" ");
  return newArray;
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
  let array = [];

  for(let i = 0; i < numbers.length; i += 1) {
    let fizz = numbers[i] % 3;
    let buzz = numbers[i] % 5;
    
    if (fizz === 0 && buzz === 0) {
      array.push('fizzBuzz');
    } else if (fizz === 0 && buzz !== 0) {
      array.push('fizz');
    } else if (fizz !== 0 && buzz === 0) {
      array.push('buzz')
    } else {
      array.push('bug!')
    }
  }
return array;
}

// Desafio 9
function encode(string) {
let codedString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      codedString += '1';
    }
    else if (string[i] === 'e') {
      codedString += '2';
    }
    else if (string[i] === 'i') {
      codedString += '3';
    }
    else if (string[i] === 'o') {
      codedString += '4';
    }
    else if (string[i] === 'u') {
      codedString += '5';
    } else {
      codedString += string[i];
    }
  }
  return codedString;
}
console.log(encode('Ola mundo'));

function decode(codedString) {
let decodedString = '';

for (let i = 0; i < codedString.length; i += 1) {
  if (codedString[i] === '1') {
    decodedString += 'a';
  }
  else if (codedString[i] === '2') {
    decodedString += 'e';
  }
  else if (codedString[i] === '3') {
    decodedString += 'i';
  }
  else if (codedString[i] === '4') {
    decodedString += 'o';
  }
  else if (codedString[i] === '5') {
    decodedString += 'u';
  } else {
    decodedString += codedString[i];
  }
}
return decodedString;
}
}



// Desafio 10
function techList(techArray, name) {
  let array = [];
  let object = {}

  for (let i = 0; i < techArray.length; i += 1) {
    object = {
      tech: techArray[i],
      name: name,
    }
  array.push(object);
  object = {};
  }
}

let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = 'luciano';
console.log(techList(array, name))

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
