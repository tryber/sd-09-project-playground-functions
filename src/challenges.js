// Desafio 1
// ____________________________________________________________________________________________________________
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));
console.log(compareTrue(true, false));

// Desafio 2
// ____________________________________________________________________________________________________________
function calcArea(base, height) {
  if (base !== 0 && height !== 0) {
    let areaTriangulo = (base * height) / 2;
    return areaTriangulo;
  } return 'Valor do triângulo inválido!'
}
console.log(`A área do triângulo é: ${calcArea(10, 50)}`);
console.log(`A área do triângulo é: ${calcArea(10, 0)}`);

// Desafio 3
// ____________________________________________________________________________________________________________
function splitSentence(string) {
  let novaString = string.split(' ');
  return novaString;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
// ____________________________________________________________________________________________________________
function concatName(words) {
  let ultimoPalavra = words.pop();
  return `${ultimoPalavra}, ${words[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
// ____________________________________________________________________________________________________________
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(10, 5));

// Desafio 6
// ____________________________________________________________________________________________________________
function highestCount(numeros) {
  let contador = 0;
  let maiorNum = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNum) {
      maiorNum = numeros[index];
    }
  } for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    if (numeros[index2] === maiorNum) {
      contador += 1;
    }
  } return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
// ____________________________________________________________________________________________________________
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance = Math.abs(mouse - cat1);
  let secondDistance = Math.abs(mouse - cat2);
  if (firstDistance < secondDistance) {
    return 'cat1';
  } else if (firstDistance > secondDistance) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
// ____________________________________________________________________________________________________________
function fizzBuzz(lista) {
  let proxima = [];
  let proximaCont = 0;
  for (let index = 0; index < lista.length; index += 1) {
    proximaCont = lista[index];
    if (proximaCont % 3 === 0 && proximaCont % 5 === 0) {
      proxima.push('fizzBuzz');
    } else if (proximaCont % 3 === 0) {
      proxima.push('fizz');
    } else if (proximaCont % 5 === 0) {
      proxima.push('buzz');
    } else proxima.push('bug!');
  } return proxima;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// ____________________________________________________________________________________________________________
function encode(frase) {
  let novaString = '';
  for (let index = 0; index < frase.length; index += 1) {
    let word = frase[index];
    switch (word) {
      case 'a':
        novaString += '1';
        break;
      case 'e':
        novaString += '2';
        break;
      case 'i':
        novaString += '3';
        break;
      case 'o':
        novaString += '4';
        break;
      case 'u':
        novaString += '5';
        break;
      default:
        novaString += word;
    }
  } return novaString;
}
encode('hi there!');

function decode(outraString) {
  let novaString = '';
  for (let index = 0; index < outraString.length; index += 1) {
    let word = outraString[index];
    switch (word) {
      case '1':
        novaString += 'a';
        break;
      case '2':
        novaString += 'e';
        break;
      case '3':
        novaString += 'i';
        break;
      case '4':
        novaString += 'o';
        break;
      case '5':
        novaString += 'u';
        break;
      default:
        novaString += word;
    }
  } return novaString;
}
decode('h3 th2r2!');

// Desafio 10
// ____________________________________________________________________________________________________________
function techList(desejos, name) {
  let objeto = {};
  let novaArray = [];
  desejos.sort();
  if (desejos === []) {
    return 'Vazio!';
  }
  for (let index = 0; index < desejos.length; index += 1) {
    novaArray.push({
      tech: desejos[index] ,
      name
       });

  }  
  return novaArray;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Perycles'));


// Desafio 11
// ____________________________________________________________________________________________________________
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
// ____________________________________________________________________________________________________________
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
// ____________________________________________________________________________________________________________
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
