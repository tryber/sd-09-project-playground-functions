// #VQV - LRLODI
// Desafio 1

// true + true = true;
// true + false = false;
// false + false = false;
// Então podemos simplificar a função simplesmente pedindo para retornar os dois valores linkados
// com um operador lógico, no caso o &&. Caso ambos valores sejam verdadeiros ele retorna true,
// ou então retorna false.
function compareTrue(value1, value2) {
  return value1 && value2;
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
  let winnerPoints = wins * 3;
  totalPoints = winnerPoints + ties; // criada a variável winnerPoints por boa prática.
  return totalPoints;
}

// Desafio 6
function findHighest(arrayOfNumbers) {
  let highestNumber = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > highestNumber) {
      highestNumber = arrayOfNumbers[index];
    }
  }
  return highestNumber;
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
  }

  for (let i = 0; i < techArray.length; i += 1) {
    sortedList[i] = {
      tech: techArray[i],
      name,
    };
  }
  return sortedList;
}

// let techList0 = [];
// let name = 'Luciano';
// console.log(techList(techList0, name));

// Desafio 11
function checkNumbers(numbers) {
  let checkResult = true;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= 0 && numbers[i] <= 9) {
      checkResult = true;
    } else {
      checkResult = false;
      break;
    }
  }
  return checkResult;
}

function checkIfValid(numbers) {
  let counter = 1;
  let isValid = true;

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        counter += 1;
      }
      if (counter > 2) {
        isValid = false;
      }
    }
    counter = 1;
  }
  return isValid;
}
// Estava com dificuldade em checar a repetição dos números e consegui entender melhor Como montar o 
// número de telefone final olhando os PR de outros colegas. Cito aqui a solução encontrada pela Raquel
// Picanço e também busquei entender como funcionavam as funções splice e join para conseguir juntar
// tudo ao final 
// https://github.com/tryber/sd-09-project-playground-functions/pull/18/commits/0bf0907452a62b74dec851d2c15eb4c5195a52ca
function generatePhoneNumber(numbers) {
  // busquei em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  // para transformar o parametro em integers.

  let phone = parseInt(numbers, 10);
  let phoneNumber = [];

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (checkNumbers(numbers) === false || checkIfValid(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      phoneNumber[i] = (numbers[i]);
    }
    phoneNumber.splice(0, 0, '(');
    phoneNumber.splice(3, 0, ')');
    phoneNumber.splice(4, 0, ' ');
    phoneNumber.splice(10, 0, '-');
  }
  return phoneNumber.join('');
}

let teste = [5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0];
console.log(generatePhoneNumber(teste));

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
function hydrate(string) {
  // Busquei na internet formas de extrair números em string e encontrei sobre Expressões Regulares(regex)
  // Usei (.match) para armazenar os números encontrados em um array, e então varrer o array somando-os
  // para retornar o numero final de copos de água.

  let drinks = string.match(/\d+/g);
  let totalDrinks = 0;

  for (let i = 0; i < drinks.length; i += 1) {
    totalDrinks += parseInt(drinks[i]);
  }
  if (totalDrinks === 1) {
    return `${totalDrinks} copo de água`
  } else {
    return `${totalDrinks} copos de água`
  }
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
