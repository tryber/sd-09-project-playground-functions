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
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(arrayStrings) {
  let fist = arrayStrings.slice(0, 1).join('');
  let last = arrayStrings.slice(arrayStrings.length - 1, arrayStrings.length).join('');
  return `${last}, ${fist}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNums) {
  let highterNum = arrayNums[0];
  let highterNumRepeat = 0;
  for (let numberIndex in arrayNums) {
    if (arrayNums[numberIndex] > highterNum) {
      highterNum = arrayNums[numberIndex];
      highterNumRepeat = 1;
    }
    else if (arrayNums[numberIndex] === highterNum) {
      highterNumRepeat += 1;
    }
  }
  return highterNumRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs((cat1 - mouse));
  let distanceCat2 = Math.abs((cat2 - mouse));
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arrayNums) {
  let arrayResponse = [];
  for (let numIndex in arrayNums) {
    if (((arrayNums[numIndex]) % 3 === 0) && ((arrayNums[numIndex]) % 5 === 0)) {
      arrayResponse[numIndex] = 'fizzBuzz';
    }
    else if ((arrayNums[numIndex]) % 5 === 0) {
      arrayResponse[numIndex] = 'buzz';
    }
    else if ((arrayNums[numIndex]) % 3 === 0) {
      arrayResponse[numIndex] = 'fizz';
    }
    else {
      arrayResponse[numIndex] = 'bug!';
    }
  }
  return arrayResponse;
}

// Desafio 9
function encode(phrase) {
  let baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in baseCopy) {
      baseCopy.arrayPhrase[index] = baseCopy[baseCopy.arrayPhrase[index]];
    }
  }
  return baseCopy.arrayPhrase.join('');
}

function decode(phrase) {
  let baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in (Object.keys(baseCopy))) {
      baseCopy.arrayPhrase[index] = Object.keys(baseCopy).
        slice(baseCopy.arrayPhrase[index] - 1 , baseCopy.arrayPhrase[index]);
    }
  }
  return baseCopy.arrayPhrase.join('');
}

function codeBase(phrase) {
  objectReference = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  objectReference['arrayPhrase'] = phrase.split('');
  return objectReference;
}

// Desafio 10
function techList(arrayNamesAndTechs, name) {
  if (arrayNamesAndTechs.length > 0) {
    return techObjectCreator(arrayNamesAndTechs);
  }
  else {
    return 'Vazio!';
  }
}
function techObjectCreator(arrayNamesAndTechs){
  let arrayTech = [];
  arrayNamesAndTechs.sort();
  for (let index in arrayNamesAndTechs) {
    arrayTech.push(
      techObject = {
      tech: arrayNamesAndTechs[index],
      name: name
    }
    )
  }
  return arrayTech;
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
