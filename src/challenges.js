
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true){
  return  true;
}else {return  false;
}
}
// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
  }
// Desafio 3
function splitSentence(text) {
  let result = text.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
return array[array.length -1 ] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let high = 0;
  let result = 0;
  for(let index = 0; index < 8; index += 1){
    if(high < arrayNumbers[index]){
      high = arrayNumbers[index];
    }
  }
  for(index = 0; index < 8; index += 1){
    if(high === arrayNumbers[index]){
      result += 1;
    }
  }
  return result;
} 

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    let cat1Pos = Math.abs(cat1 - mouse);
    let cat2Pos = Math.abs(cat2 - mouse);
    let result = "os gatos trombam e o rato foge";
    if (cat1Pos < cat2Pos){
      result = 'cat1';
    }
    if (cat2Pos < cat1Pos){
      result = 'cat2';
  }return result
}


 // Desafio 8
function fizzBuzz(arrayNumb) {
  let arrayFizz = [];
  for (let index = 0; index < arrayNumb.length; index += 1) {
    if (arrayNumb[index] % 3 === 0 && arrayNumb[index] % 5 === 0) {
      arrayFizz.push('fizzBuzz');
    } else if (arrayNumb[index] % 3 === 0) {
      arrayFizz.push('fizz');
    } else if (arrayNumb[index] % 5 === 0) {
      arrayFizz.push('buzz');
    } else {
      arrayFizz.push('bug!');
    }
  }
  return arrayFizz;
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