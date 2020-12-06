// Desafio 1
function compareTrue(boolUm, boolDois) {
  let trueOrFalse = false;
  if (boolUm === true && boolDois === true) {
    trueOrFalse = true;
  }
  return trueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let splitFrase = frase.split(' ');
  return splitFrase;
}

// Desafio 4
function concatName(arrayDeString) {
  let nome = '';
  nome += `${arrayDeString[arrayDeString.length - 1]}, ${arrayDeString[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNum) {
  let maiorNum = 0,
  contadorDeRep = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] > maiorNum) {
      maiorNum = arrayNum[index];
    }
  }
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] === maiorNum) {
      contadorDeRep += 1;
    }
  }

  return contadorDeRep;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    return 'cat1';
  } else if (Math.abs(mouse - cat2) === Math.abs(mouse - cat1)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayBuzz = [];
  for (let index in arrayFizz) {
    if (arrayFizz[index] % 3 === 0 && arrayFizz[index] % 5 != 0) {
      arrayBuzz[index] = 'fizz';
    } else if (arrayFizz[index] % 3 !== 0 && arrayFizz[index] % 5 == 0) {
      arrayBuzz[index] = 'buzz';
    } else if (arrayFizz[index] % 3 === 0 && arrayFizz[index] % 5 == 0) {
      arrayBuzz[index] = 'fizzBuzz';
    } else {
      arrayBuzz[index] = 'bug!';
    }
  }
  return arrayBuzz;
}

// Desafio 9
function encode(palavra) {
  let result = [];
  let frase = '';
  for (let index in palavra) {
    result[index] = palavra[index];
    console.log(`1 for: ${result}`);
  }
  for (let index in result) {
    if (result[index] === 'a') {
      result[index] = 1;
    } else if (result[index] === 'e') {
      result[index] = 2;
    } else if (result[index] === 'i') {
      result[index] = 3;
    } else if (result[index] === 'o') {
      result[index] = 4;
    } else if (result[index] === 'u') {
      result[index] = 5;
    }
  }
  for (let index in result) {
    frase += result[index];
  }
  return frase;
}
function decode(palavra2) {
  let result2 = [];
  let frase2 = '';
  for (let index in palavra2) {
    result2[index] = palavra2[index];
    console.log(`1 for: ${result2}`);
  }
  for (let index in result2) {
    if (result2[index] === '1') {
      result2[index] = 'a';
    } else if (result2[index] === '2') {
      result2[index] = 'e';
    } else if (result2[index] === '3') {
      result2[index] = 'i';
    } else if (result2[index] === '4') {
      result2[index] = 'o';
    } else if (result2[index] === '5') {
      result2[index] = 'u';
    }
  }
  for (let index in result2) {
    frase2 += result2[index];
  }
  return frase2;
}

// Desafio 10
function techList(arrayTech, name) { 
  let object = [];
  arrayTech.sort();
  if (arrayTech.length < 1) {
    object = 'Vazio!';
  } else {
    for (let index = 0; index < arrayTech.length; index += 1) {
      object[index] = {
        tech: arrayTech[index],
        name: name,
      };
    }
  }
  return object;
}

// Desafio 11
function generatePhoneNumber(arrayNum) {
  let retorna,
      contadorNum = 0;
  retorna = `(${arrayNum[0]}${arrayNum[1]}) ${arrayNum[2]}${arrayNum[3]}${arrayNum[4]}${arrayNum[5]}${arrayNum[6]}-${arrayNum[7]}${arrayNum[8]}${arrayNum[9]}${arrayNum[10]}`
  if (arrayNum.length !== 11) {
    retorna = 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < arrayNum.length; index += 1) {
      if (contadorNum >= 3) {
        retorna = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
      if (arrayNum[index] < 0 || arrayNum[index] > 9) {
        retorna = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
      contadorNum = 0;
      for (let index2 = 0; index2 < arrayNum.length; index2 += 1) {
        if (arrayNum[index] === arrayNum[index2]) {
          contadorNum += 1;
        }
      }
    }
  }
  return retorna;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let boolC,
      boolB,
      boolA,
      retornaTrueOrFalse;
  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    boolA = true;
  }
  if (lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    boolB = true;
  }
  if (lineC < Math.abs(lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    boolC = true;
  }
  if (boolA === true && boolB === true && boolC === true) {
    retornaTrueOrFalse = true;
  } else {
    retornaTrueOrFalse = false;
  }
  return retornaTrueOrFalse;
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
