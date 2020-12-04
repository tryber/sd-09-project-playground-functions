/* Projeto desenvolvido por Igor Marcos Riegel (igmriegel - github) #VQV :D */

// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
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
  let myArray = [];
  let myNewString = '';
  for (let letter in string) {
    if (string[letter] === ' ') {
      myArray.push(myNewString);
      myNewString = '';
    } else if (Number(letter) === Number(string.length - 1)) {
      myNewString += string[letter];
      myArray.push(myNewString);
    } else {
      myNewString += string[letter];
    }
  }
  return myArray;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[(array.length - 1)];
  let primeiroItem = array[0];
  let separador = ', ';
  let stringPronta = (ultimoItem + separador + primeiroItem);
  return stringPronta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = Math.max(...array);
  let occurrence = 0;
  for (let index in array) {
    if (array[index] === biggestNumber) {
      occurrence += 1;
    }
  }
  return occurrence;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(myArray) {
  let myNewArray = [];
  for (let element in myArray) {
    if (myArray[element] % 3 === 0 && myArray[element] % 5 === 0) {
      myNewArray.push('fizzBuzz');
    } else if (myArray[element] % 3 === 0) {
      myNewArray.push('fizz');
    } else if (myArray[element] % 5 === 0) {
      myNewArray.push('buzz');
    } else if (myArray[element] % 3 !== 0 && myArray[element] % 5 !== 0) {
      myNewArray.push('bug!');
    }
  }
  return myNewArray;
}

// Desafio 9
function encode(stringToBeEncoded) {
  let arrayOfCharacters = [];
  let myCypher = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  arrayOfCharacters.push(...stringToBeEncoded)
  for (let character in arrayOfCharacters) {
    if (arrayOfCharacters[character] in myCypher) {
      arrayOfCharacters[character] = myCypher[arrayOfCharacters[character]];
    }
  }
  let regexReplace = /,/g;
  let encodedString = arrayOfCharacters.toString().replace(regexReplace, '');
  return encodedString;
}
function decode(stringToBeDecoded) {
  let arrayOfDecodedChar = [];
  let myCypher = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  arrayOfDecodedChar.push(...stringToBeDecoded);
  for (let character in arrayOfDecodedChar) {
    if (arrayOfDecodedChar[character] in myCypher) {
      arrayOfDecodedChar[character] = myCypher[arrayOfDecodedChar[character]];
    }
  }
  let regexReplace = /,/g;
  let decodedString = arrayOfDecodedChar.toString().replace(regexReplace, '');
  return decodedString;
}

// Desafio 10
function techList(arrayOfTech, name) {
  let myArrayOfTech = arrayOfTech.sort();
  let myArrayOfTechObjects = [];
  if (arrayOfTech.length === 0) {
    return 'Vazio!';
  }
  for (let item = 0; item < myArrayOfTech.length; item += 1) {
    let tempObject = {}
    tempObject.tech = myArrayOfTech[item];
    tempObject.name = name;
    myArrayOfTechObjects.push(tempObject);
  }
  return myArrayOfTechObjects;
}

// Desafio 11
function inadequateNumbers(number) {
  let inadequate = false;
  for (let valor in number) {
    if (number[valor] > 9) {
      inadequate = true;
      break
    }
    if (number[valor] < 0) {
      inadequate = true;
      break
    }
  }
  return inadequate;
}
function tooMuchRepeated(array) {
  let soMuchRepetition = false;
  let numberOfRepetition = 0;
  for (let number = 0; number < array.length; number += 1) {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === array[number]) {
        numberOfRepetition += 1;
      }
      if (numberOfRepetition > 2) {
        soMuchRepetition = true
        return soMuchRepetition;
      }
    }
    numberOfRepetition = 0;
  }
  return soMuchRepetition;
}
function generatePhoneNumber(array) {
  let myPhoneNumber = ''
  let invalidNumbers = inadequateNumbers(array);
  let repeatedNumbers = tooMuchRepeated(array);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumbers !== false || repeatedNumbers !== false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  myPhoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
  return myPhoneNumber
}

// Desafio 12
function lineACheck(lineA, lineB, lineC) {
  let smallerThanSum = lineA < lineB + lineC;
  let biggerThanDiff = lineA > Math.abs(lineB - lineC);
  return (smallerThanSum && biggerThanDiff);
}
function lineBCheck(lineA, lineB, lineC) {
  let smallerThanSum = lineB < lineA + lineC;
  let biggerThanDiff = lineB > Math.abs(lineA - lineC);
  return (smallerThanSum && biggerThanDiff);
}
function lineCCheck(lineA, lineB, lineC) {
  let smallerThanSum = lineC < lineB + lineA;
  let biggerThanDiff = lineC > Math.abs(lineB - lineA);
  return (smallerThanSum && biggerThanDiff);
}
function triangleCheck(lineA, lineB, lineC) {
  let sideA = lineACheck(lineA, lineB, lineC);
  let sideB = lineBCheck(lineA, lineB, lineC);
  let sideC = lineCCheck(lineA, lineB, lineC);
  let compare = (sideA === true || sideB === true || sideC === true) ? 1 : 0;
  return !!compare;
}

// Desafio 13
function hydrate(string) {
  let regexForNumbers = /\d+/g;
  let myNumbers = string.match(regexForNumbers);
  let sumOfArrayNumbers = 0;
  for (let number = 0; number < myNumbers.length; number += 1) {
    sumOfArrayNumbers += Math.abs(myNumbers[number]);
  }
  if (sumOfArrayNumbers === 1) {
    return `${sumOfArrayNumbers} copo de água`;
  }
  return `${sumOfArrayNumbers} copos de água`;
}
console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'))

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
