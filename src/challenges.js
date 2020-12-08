// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let retorno = 0;
  retorno = string.split(' ');
  return retorno;
}

// Desafio 4
function concatName(stringArray) {
  let reverse = stringArray.reverse();
  let concatReverse = reverse.join(', ');
  return concatReverse;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empate = ties * 1
  let total = vitorias + empate;
  return total;
}

// Desafio 6
function highestCount(arrayNum) {
  let contador = 0;
  let maiorNum = Math.max.apply(null, arrayNum);
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (maiorNum === arrayNum[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  let resultCat = '';

  if (positionCat1 < positionCat2) {
    resultCat = 'cat1';
  } else if (positionCat2 < positionCat1) {
    resultCat = 'cat2';
  } else if (positionCat1 === positionCat2) {
    resultCat = 'os gatos trombam e o rato foge';
  }
  return resultCat;
}

// Desafio 8
function fizzBuzz(array) {
  let final = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      final.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      final.push('fizz');
    } else if (array[index] % 5 === 0) {
      final.push('buzz')
    } else {
      final.push('bug!');
    }
  }
  return final;
}

// Desafio 9
function encode(stringArray) {
  let coding = '';
  for (let index = 0; index < stringArray.length; index += 1) {
    switch (stringArray[index]) {
      case 'a':
        coding += 1;
        break;
      case 'e':
        coding += 2;
        break;
      case 'i':
        coding += 3;
        break;
      case 'o':
        coding += 4;
        break
      case 'u':
        coding += 5;
        break;
      default:
        coding += stringArray[index];
        break;
    }
  }
  return coding;
}

function decode(codeArray) {
  let decoding = '';
  for (let index = 0; index < codeArray.length; index += 1) {
    switch (codeArray[index]) {
      case '1':
        decoding += 'a';
        break;
      case '2':
        decoding += 'e';
        break;
      case '3':
        decoding += 'i';
        break;
      case '4':
        decoding += 'o';
        break
      case '5':
        decoding += 'u';
        break;
      default:
        decoding += codeArray[index];
        break;
    }
  }
  return decoding;
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
function triangleCheck(lineA, lineB, lineC) {
  let vector = Math.abs(lineA + lineB);
  let answer = 0;
  if (vector > lineC) {
    answer += false;
  } else {
    answer = true;
  }
  return answer;
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
