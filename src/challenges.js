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
  return phrase.split(' ');
}

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
  let numberCounter = 0;

  for (let index = 0; index < setOfNumbers.length; index += 1) {
    if (higherNumber === setOfNumbers[index]) {
      numberCounter = numberCounter + 1;
    }
  }
  return numberCounter
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1Mouse = Math.abs(cat1 - mouse);
  let positionCat2Mouse = Math.abs(cat2 - mouse);
  let mouseHut;

  if (positionCat1Mouse < positionCat2Mouse) {
    mouseHut = 'cat1';
  } else if (positionCat1Mouse > positionCat2Mouse) {
    mouseHut = 'cat2';
  } else {
    mouseHut = 'os gatos trombam e o rato foge';
  }
  return mouseHut;
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
function encode(insertString) {
  // seu código aqui
  let encodeResult = '';

  for (let index = 0; index < insertString.length; index += 1) {
    if (insertString[index] === 'a') {
      encodeResult = encodeResult + '1';
    } else if (insertString[index] === 'e') {
      encodeResult = encodeResult + '2';
    } else if (insertString[index] === 'i') {
      encodeResult = encodeResult + '3';
    } else if (insertString[index] === 'o') {
      encodeResult = encodeResult + '4';
    } else if (insertString[index] === 'u') {
      encodeResult = encodeResult + '5';
    } else {
      encodeResult = encodeResult + insertString[index];
    }
  }
  return encodeResult;
}
function decode(encodeResult) {
  // seu código aqui
  let decodeResult = '';

  for (let index = 0; index < encodeResult.length; index += 1) {
    if (encodeResult[index] === '1') {
      decodeResult = decodeResult + 'a';
    } else if (encodeResult[index] === '2') {
      decodeResult = decodeResult + 'e';
    } else if (encodeResult[index] === '3') {
      decodeResult = decodeResult + 'i';
    } else if (encodeResult[index] === '4') {
      decodeResult = decodeResult + 'o';
    } else if (encodeResult[index] === '5') {
      decodeResult = decodeResult + 'u';
    } else {
      decodeResult = decodeResult + encodeResult[index];
    }
  }
  return decodeResult;
}

// Desafio 10
function techList(technologies, name1) {
  // seu código aqui
  let resultsTechlist = [];
  let orderTechnologies = technologies.sort();
  if (technologies.length > 0) {
    for (let index = 0; index < orderTechnologies.length; index += 1) {
      resultsTechlist.push({ tech: orderTechnologies[index], name: name1 });
    }
  } else {
    resultsTechlist = 'Vazio!';
  }
  return resultsTechlist;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangleExists = false;
  let acount = 0;
  let sideA1 = lineA < (lineB + lineC);
  let sideA2 = lineA > (Math.abs(lineB - lineC));
  let sideB1 = lineB < (lineA + lineC);
  let sideB2 = lineB > (Math.abs(lineA - lineC));
  let sideC1 = lineC < (lineA + lineB);
  let sideC2 = lineC > (Math.abs(lineA - lineB));
  let existenceConditions = [sideA1, sideA2, sideB1, sideB2, sideC1, sideC2];

  for (let index = 0; index < existenceConditions.length; index += 1) {
    if (existenceConditions[index] === true) {
      acount += 1;
    }
  }
  if (acount === 6) {
    triangleExists = true;
  }
return triangleExists;
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
