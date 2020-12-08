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
function fizzBuzz() {
  // seu código aqui
}
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
