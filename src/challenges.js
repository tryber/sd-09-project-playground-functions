// Segundo projeto! #VQV
// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) /2);
}

// Desafio 3
function splitSentence(sentence) {
  result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(nomes) {
  result = nomes[nomes.length -1] + ', ' + nomes[0]
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins * 3) + ties
  return result;
}

// Desafio 6

function highestCount(param) {
  let maxNumber = 0;
  let count = null;
  for (let index = 0; index < param.length; index+=1) {
    if (param[index] !== maxNumber && param[index] > maxNumber) {
      maxNumber = param[index]
      count = 1
    } else if (param[index] === maxNumber) {
      count += 1
    }
  }
  return count;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(param) {
  let result = [];
  for (index = 0; index < param.length; index+=1) {
    const multiploDe3 = param[index] % 3;
    const multiploDe5 = param[index] % 5;

    if (multiploDe3 === 0 && multiploDe3 !== multiploDe5) {
      result.push('fizz');
    } else if (multiploDe5 === 0 && multiploDe5 !== multiploDe3) {
      result.push('buzz');
    } else if (multiploDe3 === 0 && multiploDe5 === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
const text = 'hi there!';
function encode(string) {
  let result = []
  for (index = 0; index < string.length; index+=1) {
    switch (string[index]) {
      case 'a':
        result += 1;
        break;
      case 'e':
        result += 2;
        break;
      case 'i':
        result += 3;
        break;
      case 'o':
        result += 4;
        break;
      case 'u':
        result += 5;
        break;
      default:
        result += string[index]
        break;
    }
  }
  return result;
}
encode(text);

const texto = 'h3 th2r2!';
function decode(string) {
  let result = []
  for (index = 0; index < string.length; index+=1) {
    switch (string[index]) {
      case '1':
        result += 'a';
        break;
      case '2':
        result += 'e';
        break;
      case '3':
        result += 'i';
        break;
      case '4':
        result += 'o';
        break;
      case '5':
        result += 'u';
        break;
      default:
        result += string[index]
        break;
    }
  }
  return result;
}
decode(texto);

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
