// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string0) {
  // seu código aqui
  let main = [];
  let sup1 = '';
  for(let i = 0; i <= string0.length; i += 1) {
    if (string0[i] === ' ' || i === string0.length) {
      main.push(sup1)
      sup1 = ''
    } else {
      sup1 += string0[i]
    }
  }
  return main
}

// Desafio 4
function concatName(arrayHere) {
  // seu código aqui
  return arrayHere[arrayHere.length - 1] + ', ' + arrayHere[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victoryPoints = 0;
  victoryPoints = wins * 3
  return ties + victoryPoints
}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let highestNumber = 0;
  let counter = 0;
  for(i = 0; i < numberArray.length; i+= 1) {
    highestNumber = numberArray[i]
    if (numberArray[i] > highestNumber) {
      highestNumber = numberArray[i]
    }
  }
  for(i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] === highestNumber) {
      counter += 1
    }
  } return counter
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(cat1 - mouse)
  let distance2 = Math.abs(cat2 - mouse)

  if (distance1 > distance2) {
    return 'cat2'
  } else if (distance2 > distance1) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let retorno = []; 
  for(let i = 0; i < numberArray.length; i+= 1) {
    if (numberArray[i] % 3 === 0 && numberArray[i] % 5 !== 0) {
      retorno.push('fizz')
    } else if (numberArray[i] % 5 === 0 && numberArray[i] % 3 !== 0) {
      retorno.push('buzz')
    } else if (numberArray[i] % 3 === 0 && numberArray[i] % 3 === 0) {
      retorno.push('fizzBuzz')
    } else {
      retorno.push('bug!')
    }
  } return retorno
}

// Desafio 9
function encode(stringToCodify) {
  // seu código aqui
  let codifiedString = '';
  for(i = 0; i < stringToCodify.length; i += 1) {
    if (stringToCodify[i] === 'a') {
      codifiedString += '1'
    } else if (stringToCodify[i] === 'e') {
      codifiedString += '2'
    } else if (stringToCodify[i] === 'i') {
      codifiedString += '3'
    } else if (stringToCodify[i] === 'o') {
      codifiedString += '4'
    } else if (stringToCodify[i] === 'u') {
      codifiedString += '5'
    } else {
      codifiedString += stringToCodify[i]
    }
  } return codifiedString
}

function decode(stringToDecodify) {
  // seu código aqui
  let decodifiedString = '';
  for(i = 0; i < stringToDecodify.length; i += 1) {
    if (stringToDecodify[i] === '1') {
      decodifiedString += 'a'
    } else if (stringToDecodify[i] === '2') {
      decodifiedString += 'e'
    } else if (stringToDecodify[i] === '3') {
      decodifiedString += 'i'
    } else if (stringToDecodify[i] === '4') {
      decodifiedString += 'o'
    } else if (stringToDecodify[i] === '5') {
      decodifiedString += 'u'
    } else {
      decodifiedString += stringToDecodify[i]
    }
  } return decodifiedString
}

// Suporte Desafio 10
function compare(a, b) {
  if (a.tech < b.tech) return -1;
  if (a.tech > b.tech) return 1;
  return 0;
}
// Desafio 10
function techList(techsToLearn, name) {
  // seu código aqui
  let objectsArray = [];
  let techObjects = {
  }
  for(let i = 0; i < techsToLearn.length; i += 1) {
    if(techsToLearn.length === 0) {
      return 'Vazio!'
    } else {
    techObjects['tech'] = techsToLearn[i]
    techObjects['name'] = name
    objectsArray.push(techObjects)
    techObjects = {
    }
    }
  } return objectsArray.sort(compare)
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
