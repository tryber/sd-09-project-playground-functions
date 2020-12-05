// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(split) {
  let string = split;
  return string.split(' ');
}
console.log(splitSentence('go Trybe'));

//Desafio 4
function concatName(arraySTR) {
  let firstName = arraySTR[0];
  let lastName = arraySTR[arraySTR.length -1];
  concat = lastName + ', ' + firstName;
  return concat;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}
console.log(footballPoints(10, 5));

// Desafio 6
function greatestValue(arrayNumbers) {
  let greatest = 0;
  for (let element of arrayNumbers) {
    if (element > greatest) {
      greatest = element;
    }
  }
  return greatest;
}

function highestCount(arrayNumbers) {
  let greatestNumber = greatestValue(arrayNumbers);
  let greatestCounter = 0;
  for (let element of arrayNumbers) {
    if (element === greatestNumber) {
      greatestCounter += 1;
    }
  }
  return greatestCounter;
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
  } else {
    return 'cat1';
}
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
// href "https://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings" buscando soluções para o desafio 09 encontrei esta trhead no StackOverflow onde a estrutura do codigo cabia perfeitamente na problematica ==> param = param.replace(strings/gi, function(novoParam){return resultado[novoParam]; <==
// Neste codigo apliquei replace para subustituir as strings por outras strings conforme solicitado, utilizei o comando /gi para fosse aplicado o replace não só na primeira ocorrencia e uma função de retorno aplicando o novo parametro na string parametro do desafio.

function encode(arrayEncode) {
  let encodeVocals = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
 }
 arrayEncode = arrayEncode.replace(/a|e|i|o|u/gi, function(encoding){
   return encodeVocals[encoding];
 })
return arrayEncode;
}
console.log(encode('hi there!'));

function decode(arrayDecode) {
  let decodeVocals = {
  '1': 'a',
  '2': 'e',
  '3': 'i',
  '4': 'o',
  '5': 'u',
}
arrayDecode = arrayDecode.replace(/1|2|3|4|5/gi, function(decoding){
  return decodeVocals[decoding];
})
return arrayDecode;
}
console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(tech , name) {
  let wantLearn = [];
  tech = tech.sort();
  if(tech.length === 0) {
    return 'Vazio!';
  }  
for(let index = 0; index < tech.length; index += 1) {
  wantLearn.push({ tech: tech[index],  name: name }); 
}
 return wantLearn;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'] , 'Lucas'));

// Desafio 11
function generatePhoneNumber(numbers) {
  let rN = []
  if(numbers.length < [11] || numbers.length > [11]) {
      return 'Array com tamanho incorreto.';
    }
  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for(let index = 0; index < numbers.length; index += 1) {
  rN.push(numbers[index])  
    }
concat = '(' + rN[0] + rN[1] + ')' + ' ' + rN[2] + rN[3] + rN[4] + rN[5] + rN[6] + '-' + rN[7] + rN[8] + rN[9] + rN[10] + '.';
  return(concat);
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9]));

//Desafio 12
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
