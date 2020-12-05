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
  let newArray = string.split(' ');
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
function findHighest(arrayOfNumbers) {
  let highestNumber = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber) {
      highestNumber = arrayOfNumbers[index];
    }
    return highestNumber;
  }
}
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

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  let winner;

  if (distance1 < distance2) {
    winner = 'cat1';
  } else if (distance1 > distance2) {
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
 return winner;
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = [];

  for (let i = 0; i < numbers.length; i += 1) {
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
    } else if (string[i] === 'e') {
      codedString += '2';
    } else if (string[i] === 'i') {
      codedString += '3';
    } else if (string[i] === 'o') {
      codedString += '4';
    } else if (string[i] === 'u') {
      codedString += '5';
    } else {
      codedString += string[i];
    }
  }
  return codedString;
}

function decode(codedString) {
  let decodedString = '';

  for (let i = 0; i < codedString.length; i += 1) {
    if (codedString[i] === '1') {
      decodedString += 'a';
    } else if (codedString[i] === '2') {
      decodedString += 'e';
    } else if (codedString[i] === '3') {
      decodedString += 'i';
    } else if (codedString[i] === '4') {
      decodedString += 'o';
    } else if (codedString[i] === '5') {
      decodedString += 'u';
    } else {
      decodedString += codedString[i];
    }
  }
  return decodedString;
}


// Desafio 10
function techList(techList, name) {
  let techArray = techList.sort();
  let sortedList = [];

  if (techList.length === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < techArray.length; i += 1) {
      sortedList[i] = {
          tech: techArray[i],
          name: name,
      };
    }
  }
  return sortedList;
}
// let techList0 = [];
// let name = 'Luciano';
// console.log(techList(techList0, name));

// Desafio 11

// Estava com dificuldade em checar a repetição dos números e consegui entender melhor Como montar o número de telefone final
// olhando os PR de outros colegas. Cito aqui a solução encontrada pela Raquel Picanço e também busquei entender como 
//funcionavam as funções splice e join para conseguir juntar tudo ao final.
// (https://github.com/tryber/sd-09-project-playground-functions/pull/18/commits/0bf0907452a62b74dec851d2c15eb4c5195a52ca)
function generatePhoneNumber(numbers) {
  let phoneNumber = [];

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (checkNumbers(numbers) === false || checkIfValid(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      phoneNumber.push(numbers[i]);
    }
    phoneNumber.splice(0, 0, '(');
    phoneNumber.splice(3, 0, ')');
    phoneNumber.splice(4, 0, ' ');
    phoneNumber.splice(10, 0, '-');    
  }
  return phoneNumber.join('');
}
function checkNumbers (numbers) {
  let checkResult = true;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9 ) {
      checkResult = false;
    }
  }
  return checkResult;
}

function checkIfValid(numbers) {
  let counter = 1;
  let isValid = true;

  for (let i = 0; i < numbers.length; i += 1) {
    let numberToCheck = numbers[i];
    for (let j = 1; j < numbers.length; j += 1) {
      if (numberToCheck == numbers[j]) {
        counter += 1;
      }
      if (counter >= 3 || numbers[i] > 9 || numbers[i] < 0) {
        isValid = false;
      }
    }    
    counter = 1;
  }
  return isValid;
}
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'];
console.log(generatePhoneNumber(numbers));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum1 = lineA + lineB;
  let sum2 = lineA + lineC;
  let sum3 = lineB + lineC;

  if (sum1 < lineC) {
    return false;
  } else if (sum2 < lineB) {
    return false;
  } else if (sum3 < lineA) {
    return false;
  } else {
  return true;
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
