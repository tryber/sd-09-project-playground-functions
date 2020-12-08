// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}
// let area = calcArea(4, 7)
// console.log(area)

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}
// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`
}
// console.log(concatName(['Long', 'live', 'trybers']))

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins *= 3) + ties
  return score
}
// console.log(footballPoints(5, 4))

// Desafio 6
function highestCount(recive) {
  // seu código aqui
  let highest = 0;
  let count = 0;
  for (let index = 0; index < recive.length; index += 1) {
    if (recive[index] > highest) {
      highest = recive[index];
    }
  }
  for (let index2 = 0; index2 < recive.length; index2 += 1) {
    if (recive[index2] === highest) {
      count += 1;
    }
  }
  return count
}
// console.log(highestCount([0, 0, 0, 0, 0, 0, 0]))
// console.log(count)

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  const distanceCat1 = Math.abs(cat1 - mouse)
  const distanceCat2 = Math.abs(cat2 - mouse)
  if (distanceCat1 < distanceCat2) {
    return 'cat1'
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2'
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'fail'
}
// console.log(catAndMouse(20, 20, 20))

// Desafio 8

function fizzBuzz(arrayFizz) {
  let buzzArray = [];
  for (let index of arrayFizz) {
    if (index % 3 !== 0 && index % 5 !== 0) {
      buzzArray.push('bug!');
    } else if (index % 3 === 0 && index % 5 === 0) {
      buzzArray.push('fizzBuzz');
    } else if (index % 3 === 0) {
      buzzArray.push('fizz');
    } else {
      buzzArray.push('buzz');
    }
  }
  return buzzArray;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui	  
  let encodedString = '';
  for (let letter of string) {
    switch (letter) {
      case 'a':
        encodedString += '1';
        break;
      case 'e':
        encodedString += '2';
        break;
      case 'i':
        encodedString += '3';
        break;
      case 'o':
        encodedString += '4';
        break;
      case 'u':
        encodedString += '5';
        break;
      default:
        encodedString += letter;
    }
  }
  return encodedString;
}
function decode(string) {
  // seu código aqui	  
  let decodedString = "";
  for (let letter of string) {
    switch (letter) {
      case "1":
        decodedString += "a";
        break;
      case "2":
        decodedString += "e";
        break;
      case "3":
        decodedString += "i";
        break;
      case "4":
        decodedString += "o";
        break;
      case "5":
        decodedString += "u";
        break;
      default:
        decodedString += letter;
    }
  }
  return decodedString;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui	 
  let arrayTechObjects = [];
  if (array.length !== 0) {
    for (let tec of array.sort()) {
      let techObject = { tech: undefined, name: name, };
      techObject.tech = tec;
      arrayTechObjects.push(techObject);
    }
    return arrayTechObjects;
  }
  return 'Vazio!'
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  let numberX  = '(';
  if (checkNumbers(array)) {
    if (array.length === 11) {
      for (let number in array) {
        if (number === '1') {
          numberX   += array[number] + ') ';
        } else if (number === '6') {
          numberX += array[number] + '-';
        } else {
          numberX  += array[number];
        }
      }
      return numberX;
    }
    return 'Array com tamanho incorreto.';
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

function checkNumbers(array) {
  let validate = true;
  for (let number in array) {
    let count = 0;
    for (let num in array) {
      if (array[num] === array[number]) {
        count += 1;
      }
    }
    if (count >= 3) {
      validate = false;
    }
    if (array[number] < 0 || array[number] > 9) {
      validate = false
    }
  }
  return validate;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
    if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
      return true;
    }
    return false;
  }

// Desafio 13
function hydrate(string) {
    // seu código aqui	  
    let numberString = string.replace(/\D/g, "");
    let total = 0;
  
    for (let index = 0; index < numberString.length; index++) {
      total += parseInt(numberString[index]);
    }
  
    if (total > 1) {
      return `${total} copos de água`;
    }
    return `${total} copo de água`; 
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
