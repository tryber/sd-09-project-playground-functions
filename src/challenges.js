// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(30, 20));

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = (string.split(' '));
  return array
}
console.log(splitSentence('Vamos nessa'));

// Desafio 4
function concatName(array) {
  let firstAndLast = [array[array.length - 1], array[0]];
  firstAndLast = firstAndLast.join(', ');
  return firstAndLast;
}
let arrayOfNames = ['Roberta', 'Julia', 'João', 'Maria', 'Marcos'];
console.log(concatName(arrayOfNames));

// Desafio 5
function footballPoints(wins, ties) {
  let gameWins = wins * 3;
  let gameTies = ties * 1;
  let totalOfPoints = gameWins + gameTies;
  return totalOfPoints;
}
console.log(footballPoints(5, 5));

// Desafio 6
function highestCount(array) {
  let bigger = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  let number = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === bigger) {
      number += 1;
    }
  }
  return number;
}
let array = [9, 1, 2, 3, 9, 10, 5, 7]
console.log(highestCount(array));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = '';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result += 'fizzBuzz ';
    } else if (arrayNumbers[index] % 5 === 0) {
      result += 'buzz ';
    } else if (arrayNumbers[index] % 3 === 0) {
      result += 'fizz ';
    } else {
      result += 'bug! ';
    }
  }
  return result;
}
let arrayNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayNumbers));

// Desafio 9
function encode(string) {
  let vowel = string.split('');
  for (let index = 0; index < vowel.length; index += 1) {
    switch(vowel[index]) {
      case ' ':
        break;
      case 'a':
        vowel[index] = '1';
        break;
      case 'e':
        vowel[index] = '2';
        break;
      case 'i': 
        vowel[index] = '3';
        break;
      case 'o': 
        vowel[index] = '4';
        break;
          case 'u': 
        vowel[index] = '5';
        break;
    }
  }
    return vowel.join('');
  }
  let vowelString = 'hi there!';
  console.log(encode(vowelString));

function decode(string) {
  let vowel = string.split('');
  for (let index = 0; index < vowel.length; index += 1) {
      switch(vowel[index]) {
        case ' ':
          break;
        case '1':
          vowel[index] = 'a';
          break;
        case '2':
          vowel[index] = 'e';
          break;
        case '3': 
          vowel[index] = 'i';
          break;
        case '4': 
          vowel[index] = 'o';
          break;
        case '5': 
          vowel[index] = 'u';
          break;
      }
    }
  return vowel.join('');
}
let numberString = 'h3 th2r2!';
  console.log(decode(numberString));

// Desafio 10
function techList(technologies, name) {
  technologies.sort();
  newList = [];
  if(technologies.length === 0){
    return 'Vazio!';
  }
  for (let index = 0; index < technologies.length; index += 1) {
    let objectTech = {tech: 'NomeTech', name: name};
    objectTech.tech = technologies[index];
    newList.push(objectTech);
  }
  return newList;
}
let arrayTechnologies = ["React", "Jest", "HTML", "CSS", "JavaScript"]
let studentName = 'Daniela'
console.log(techList(arrayTechnologies, studentName));

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let toString = '';
  toString = toString.replace(/[^\d]/g, "");
  for (let index = 0; index < phoneNumber.length; index += 1) {
    toString += phoneNumber[index];
  }
  if (phoneNumber.length === 11) {
    return toString.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (phoneNumber < 0 || phoneNumber > 9){
    return 'Array com tamanho incorreto.';
  } else {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
  console.log(generatePhoneNumber(number));

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
