// Desafio 1
function compareTrue(firstvalue, secondvalue) {
  if (firstvalue === true && secondvalue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayStrings = [];
  let newString = '';
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] !== ' ') {
      newString += sentence[index];
    }
    if (sentence[index] === ' ' && newString !== '') {
      arrayStrings.push(newString);
      newString = '';
    }
  }
  if (newString !== '') {
    arrayStrings.push(newString);
  }
  return arrayStrings;
}

// Desafio 4
function concatName(stringsArray) {
  let stringDone = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
  return stringDone;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTeam = 0;
  if (wins >= 1) {
    pointsTeam += 3 * wins;
  }
  if (ties >= 1) {
    pointsTeam += 1 * ties;
  }
  return pointsTeam;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let qttyHighestRepeats = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
    for (index = 0; index < arrayNumbers.length; index += 1) {
      if (highestNumber === arrayNumbers[index]) {
        qttyHighestRepeats += 1;
      }
    }
  }
  return qttyHighestRepeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = '';
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (cat1Distance < 0) {
    cat1Distance = (mouse - cat1) * -1;
  }
  if (cat2Distance < 0) {
    cat2Distance = (mouse - cat2) * -1;
  }
  if (cat1Distance < cat2Distance || cat1 === mouse) {
    firstCat = 'cat1';
  } else if (cat2Distance < cat1Distance || cat2 === mouse) {
    firstCat = 'cat2';
  } else {
    firstCat = 'os gatos trombam e o rato foge';
  }
  return firstCat;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let array = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0) {
      array.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 !== 0) {
      array.push('buzz');
    } else if (arrayNumbers[index] % 15 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(currentString) {
  let stringWithNumbers = '';

  stringWithNumbers = currentString.replace(/a/g, '1')
  stringWithNumbers = stringWithNumbers.replace(/e/g, '2');
  stringWithNumbers = stringWithNumbers.replace(/i/g, '3');
  stringWithNumbers = stringWithNumbers.replace(/o/g, '4');
  stringWithNumbers = stringWithNumbers.replace(/u/g, '5');

  return stringWithNumbers;
}

function decode(stringWithNumbers) {
  let stringWithoutNumbers = '';

  stringWithoutNumbers = stringWithNumbers.replace(/1/g, 'a');
  stringWithoutNumbers = stringWithoutNumbers.replace(/2/g, 'e');
  stringWithoutNumbers = stringWithoutNumbers.replace(/3/g, 'i');
  stringWithoutNumbers = stringWithoutNumbers.replace(/4/g, 'o');
  stringWithoutNumbers = stringWithoutNumbers.replace(/5/g, 'u');

  return stringWithoutNumbers;
}

// Desafio 10
function techList(arrayTechnology, name) {
  let finalList = [];
  let newOrderedList = arrayTechnology.sort();

  if (arrayTechnology.length === 0) {
    finalList = 'Vazio!';
  }

  for (let index = 0; index < newOrderedList.length; index += 1) {
    finalList.push({
      tech: arrayTechnology[index],
      name, 
    })
  }

  return finalList;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let answer = '';
  let qttySameNumber = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[0] === arrayNumbers[index]) {
      qttySameNumber += 1;
    }
    if (arrayNumbers[index] > 9 || arrayNumbers[index] < 0 || qttySameNumber >= 3) {
      answer = 'não é possível gerar um número de telefone com esses valores';
    }
    if (arrayNumbers.length !== 11) {
      answer = 'Array com tamanho incorreto.';
    } else {
       answer = `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
    }
  }
  return answer;
}
//console.log(generatePhoneNumber([1,2,4,5,6,7,8,9,9,7,3]));

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
