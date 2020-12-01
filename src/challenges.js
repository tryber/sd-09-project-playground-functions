// Project 2

// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue === true) && (secondValue === true)) {
    return true
 }
 else {
   return false
 }
}

// Desafio 2
function calcArea(value1, value2) {
  return value1 * value2/2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
}

// Desafio 4
function concatName(phrase) {
  let result = [];
  for (let key in phrase) {
    result = phrase[phrase.length-1] + ', ' + phrase[0];
  }
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winspoints = wins *3;
  let tiespoints = ties;
  let totalPoints;
   return totalPoints = winspoints + tiespoints;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = numbers[0];
  let bigger2 = 0;

  for (let counter = 0; counter < numbers.length; counter += 1) {
     if (bigger < numbers[counter]) {
       bigger = numbers[counter];
     }
}
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1 , cat2) {

  let result = ''; 
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

  if (positionCat1 < positionCat2) {
      result = 'cat1';
    } else if (positionCat2 < positionCat1) {
      result ='cat2';
    } else {
      result = 'os gatos trombam e o rato foge';
    }
  return result;
}


// Desafio 8
function fizzBuzz(numbers) {
  let x = [];
 
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
        x.push('fizzBuzz');
      } else if (numbers[index] % 5 == 0) {
        x.push('buzz');
      } else if (numbers[index] % 3 == 0) {
        x.push('fizz');
      }else {
        x.push('bug!');
      }
    }
  return x;
}

// Desafio 9
function encode(word) {
  let functionString = '';
  for (let key in word) {
    if (word[key] === 'a') {
      functionString += '1';
    } else if (word[key] === 'e') {
      functionString += '2';
    } else if (word[key] === 'i') {
      functionString += '3';
    } else if (word[key] === 'o') {
      functionString += '4';
    } else if (word[key] === 'u') {
      functionString += '5';
    } else {
      functionString += word[key];
    }
  }
  return functionString;
}

function decode(word) {
  let decodeString = '';
  for (let key in word) {
    if (word2[key] =String) {
      decodeString += 'a';
    } else if (word[key] === '2') {
      decodeString += 'e';
    } else if (word[key] === '3') {
      decodeString += 'i';
    } else if (word[key] === '4') {
      decodeString += 'o';
    } else if (word[key] === '5') {
      decodeString += 'u';
    } else {
      decodeString += word[key];
    }
  } 
  return decodeString;
}

// Desafio 10
function techList(tech, name) {
    
  let techB = tech.sort();

  let techD = [];
  if (tech.length > 0) {
  for (let i = 0; i < tech.length; i++ ) {
     let tech = techB[i]
      techD.push({
          tech,
          name
      })
  }
}
else {
  return 'vazio'
}
  
  return techD
}

// Desafio 11
function generatePhoneNumber(number) {
  let number = '(xxx) xxxx-xxxx';

  if (number.length === 11) {

    for(let i = 0; i < numbers.length; i++) {
        number = number.replace('x', numbers[i])
    }
 
    return number
  }
  else {
      return 'não é possível gerar um número de telefone com esses valores'
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  switch(true) {
    case lineA < lineB + lineC:
    case lineB < lineA + lineC:
    case lineC < lineA + lineB:
      return true;
      break;

    default:
      return false;
      break;
  }
}

// Desafio 13
function hydrate(pedido) {
  let total = pedido.split(' ');
  let counter = 0;
  for (let i = 0; i < total.length; i++) {
      if (total[i] > 0) {
          counter += parseInt(total[i]) 
      }
  }
  return counter + ' copos de água'
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
