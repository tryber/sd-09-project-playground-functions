// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean === true && secondBoolean === true) {
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
function splitSentence(string) {
  let text = string.split(' ');
  return text;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highesNumber = array[0];
  let repetNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highesNumber) {
      highesNumber = array[index];
    }
    for (index = 0; index < array.length; index += 1) {
      if (highesNumber === array[index]) {
        repetNumber += 1;
      }
    }
  }
  return repetNumber;
}
/*function highestCount (array) {
  let maiorNumero = array[0];
  let contagemNumero = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero < array[index]) {
      maiorNumero = array[index];
      console.log(maiorNumero);
    } 
    for (index = 0; index < array.length; index += 1) {
      if (maiorNumero === array[index]) {
        contagemNumero += 1;
        //console.log(contagemNumero);
      }
    } 
  }
  return contagemNumero;
}
console.log(highestCount([8, 6, 5, 4, 8, 5]));*/

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCat = '';
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < 0) {
    distance1 = (cat1 - mouse) * -1;
    //console.log(distance1);
  }
  if (distance2 < 0) {
    distance2 = (cat2 - mouse) * -1;
    //console.log(distance2);
  }
  if (distance1 < distance2) {
    firstCat = 'cat1';
  } else {
    firstCat = 'cat2';
  }
  if (distance1 === distance2) {
    firstCat = 'os gatos trombam e o rato foge';
  }
  return firstCat;
}
//console.log(catAndMouse(0, -2, 2));

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayNew = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 !== 0) {
      arrayNew.push('fizz');
    } else if (arrayNumber[index] % 5 === 0 && arrayNumber[index] % 3 !== 0) {
      arrayNew.push('buzz');
    } else if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      arrayNew.push('fizzBuzz');
    } else {
      arrayNew.push('bug!');
    }
  }
  return arrayNew;
}
//console.log(fizzBuzz([10, 20, 5, 3, 15, 6]));

// Desafio 9
/*function encode(textInput) {
  let inputCodificate = ''
  for (let index = 0; index < textInput.length; index += 1) {
    if textInput.length(index)
  }
  return repetir o valor de entrada trocando as vogais minusculas por numeros

}*/
/*let teste = 'jose';
let letra = ''
if (teste.slice(0, 1) === 'j') {
  letra = teste.slice(1, 2);
}
console.log(letra);*/

function checkFizz(fizz) {
  if (fizz === 0) {
    return true;
  }
  return false;
}
function checkBuzz(buzz) {
  if (buzz === 0) {
    return true;
  }
  return false;
}
// Desafio 10
function techList() {
  // seu código aqui
}
// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let answerPhone;
  if (arrayPhone.length < 10 )
  return answerPhone;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validateTriangle = false;
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineB)) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      validateTriangle = true;
    }
  }
  return validateTriangle;
}
console.log(triangleCheck(10, 14, 8));

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
//  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
