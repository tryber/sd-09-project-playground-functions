// Desafio 1
function compareTrue(values1, values2) {
  // seu código aqui
  if (values1 === true && values2 === true) {
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let newSentence = [];

  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      newSentence = newSentence + phrase[index]
    } else if (phrase[index] === ' ') {
      newSentence.push(' ');
    }
  }
  return newSentence;
}
// console.log(splitSentence('Vamos com tudo!'));

// Desafio 4
function concatName(nameList) {
  // seu código aqui
  return (nameList[nameList.length-1] + ', ' + nameList[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(setOfNumbers) {
  // seu código aqui
  function getMaxOfArray(setOfNumbers) {
    return Math.max.apply(null, setOfNumbers);
 }
 let higherNumber = getMaxOfArray(setOfNumbers)
 let count = 0;

 for (let index = 0; index < setOfNumbers.length; index += 1) {
   if (higherNumber === setOfNumbers[index]) {
     count++;
   }
 }
 return count
}
console.log(highestCount[9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1Mouse = cat1 - mouse;
  let positionCat2Mouse = cat2 - mouse;

  if (positionCat1Mouse < positionCat2Mouse) {
    return "cat1";
  } else if (positionCat1Mouse > positionCat2Mouse) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(bet) {
  // seu código aqui
  let matchResult = [];
  for (let index = 0; index < bet.length; index += 1) {
    if (bet[index] % 3 === 0 && bet[index] % 5 !== 0) {
      matchResult.push('fizz');
    } else if (bet[index] % 3 !== 0 && bet[index] % 5 === 0) {
      matchResult.push('buzz');
    } else if (bet[index] % 3 === 0 && bet[index] % 5 === 0) {
      matchResult.push('fizzBuzz');
    } else {
      matchResult.push('bug!');
    }
  }
  return matchResult;
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
