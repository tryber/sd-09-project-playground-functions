// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(arraySTR) {
  let firstName = arraySTR[0];
  let lastName = arraySTR[arraySTR.length - 1];
  let stringNames = lastName + ', ' + firstName;
  return stringNames;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(10, 5));

// Desafio 6
function highterValue(arrayNumbers) {
  let highter = 0;
  for (let element of arrayNumbers) {
    if (element > highter) {
      highter = element;
    }
  }
  return highter;
}

function highestCount(arrayNumbers) {
  let highterNumber = highterValue(arrayNumbers);
  let highterCounter = 0;
  for (let element of arrayNumbers) {
    if (element === highterNumber) {
      highterCounter += 1;
    }
  }
  return highterCounter;
}

console.log(highestCount([9, 1, 2, 3, 5, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let moveCat1 = Math.abs(mouse - cat1);
  let moveCat2 = Math.abs(mouse - cat2);
  if (moveCat1 === moveCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (moveCat1 > moveCat2) {
    return 'cat2';
  }
  return 'cat1';
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumbers[index] % 5 === 0) {
      result.push('buzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// href "https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings"
// buscando soluções para o desafio 09 encontrei esta trhead no StackOverflow
// onde a estrutura do codigo cabia perfeitamente na problematica
// param = param.replace(strings/gi, function(novoParam){return resultado[novoParam];
// Neste codigo apliquei replace para subustituir as strings por outras strings conforme solicitado
// utilizei o comando /gi para fosse aplicado o replace não só na primeira ocorrencia
// e uma função de retorno aplicando o novo parametro na string
// parametro do desafio.

function encode(arrayEncode) {
  let encodeVocals = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  arrayEncode = arrayEncode.replace(/a|e|i|o|u/gi, function (encoding) {
    return encodeVocals[encoding];
  })
  return arrayEncode;
}
console.log(encode('hi there!'));

function decode(arrayDecode) {
  let decodeVocals = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  arrayDecode = arrayDecode.replace(/1|2|3|4|5/gi, function (decoding) {
    return decodeVocals[decoding];
  })
  return arrayDecode;
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(tech, name) {
  let wantLearn = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tech.length; index += 1) {
    wantLearn.push({ tech: tech[index], name: name });
  }
  return wantLearn;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function invalidValue(numbers) {
  let numbersSlice = numbers.slice();
  let sortArray = numbersSlice.sort();
  let results = [];
  for (let index = 0; index < sortArray.length; index += 1) {
    if (sortArray[index + 1] === sortArray[index]) {
      results.push(sortArray[index]);
    }
  }
  for (let index = 0; index < results.length; index += 1) {
    if (results[index + 1] === results[index]) {
      return false
    }
  }
  return true
}

function generatePhoneNumber(numbers) {
  if (numbers.length < [11] || numbers.length > [11]) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || invalidValue(numbers) === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let rN = [];
  for (let index = 0; index < numbers.length; index += 1) {
    rN.push(numbers[index]);
  }
  return `(${rN[0]}${rN[1]}) ${rN[2]}${rN[3]}${rN[4]}${rN[5]}${rN[6]}-${rN[7]}${rN[8]}${rN[9]}${rN[10]}`
}
console.log(generatePhoneNumber([8, 9, 3, 4, 5, 6, 2, 9, 5, 7, 0]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let testeA = lineA < lineB + lineC && lineA > lineB - lineC
  let testeB = lineB < lineC + lineA && lineB > lineC - lineA
  let testeC = lineC < lineB + lineA && lineC > lineB - lineA
  if (testeA && testeB && testeC === true){
  return true;
}
  return false;
}
console.log(triangleCheck(10, 14, 10));

// Desafio 13
function hydrate(waterBottle) {
  let regex = /\d+/g;
  let matches = waterBottle.match(regex);
  let soma = 0;
  for (let index = 0; index < matches.length; index += 1) {
    soma += Number(matches[index]);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

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
