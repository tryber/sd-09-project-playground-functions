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
  let distanceMouseToCats= [Math.abs((cat1 - mouse)), Math.abs((cat2 - mouse))]
  let  priority = 'cat1';
  if (distanceMouseToCats[0] > distanceMouseToCats[1]) {
      priority = 'cat2';
  }
  if (distanceMouseToCats[0] === distanceMouseToCats[1]) {
      priority = 'os gatos trombam e o rato foge';
  }
  return priority;
}

// Desafio 8
function fizzBuzzGenerate(number) {
  let baseFizzBuzz = {
    0: 'bug!',
    1: 'fizz',
    2: 'buzz',
    3: 'fizzBuzz',    
  }
  let mask = 0;
  if (number % 3 === 0) {
    mask += 1 ;
  }
  if (number % 5 === 0) {
    mask += 2;
  }
  return baseFizzBuzz[mask];
}
function fizzBuzz(arrayNums) {
  let arrayResponse = [];
  for (let index = 0; index < arrayNums.length; index += 1) {
    arrayResponse.push(fizzBuzzGenerate(arrayNums[index]));
  }
  return arrayResponse;
}

// Desafio 9
function codeBase(phrase) {
  let objectReference = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  objectReference.arrayPhrase = phrase.split('');
  return objectReference;
}
function encode(phrase) {
  let baseCopy;
  baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in baseCopy) {
      baseCopy.arrayPhrase[index] = baseCopy[baseCopy.arrayPhrase[index]];
    }
  }
  return baseCopy.arrayPhrase.join('');
}

function decode(phrase) {
  let baseCopy;
  baseCopy = codeBase(phrase);
  for (let index in baseCopy.arrayPhrase) {
    if (baseCopy.arrayPhrase[index] in (Object.keys(baseCopy))) {
      baseCopy.arrayPhrase[index] = Object.keys(baseCopy)
        .slice(baseCopy.arrayPhrase[index] - 1, baseCopy.arrayPhrase[index]);
    }
  }
  return baseCopy.arrayPhrase.join('');
}

// Desafio 10
function techObjectCreator(arrayNamesAndTechs, nameReceived) {
  let arrayTech = [];
  arrayNamesAndTechs.sort();
  for (let index = 0; index < arrayNamesAndTechs.length; index += 1){
    let techObject = {
      tech: arrayNamesAndTechs[index],
      name: nameReceived,
    };
    arrayTech.push(techObject);
  }
  return arrayTech;
}

function techList(arrayNamesAndTechs, name) {
  if (arrayNamesAndTechs.length > 0) {
    return techObjectCreator(arrayNamesAndTechs, name);
  }
  return 'Vazio!';
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
