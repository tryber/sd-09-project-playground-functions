// Desafio 1
function compareTrue(booleanOne ,booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false ,false));

// Desafio 2
function calcArea(base ,height) {
  let area = ((base * height) / 2);
  return area;
}

console.log(calcArea(10 ,5));

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let str = array[array.length - 1] + ', ' + array[0];
  return str;
}

let arrayNames = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(arrayNames));

// Desafio 5
function footballPoints(wins ,ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

console.log(footballPoints(5 ,3));

// Desafio 6
function highestCount(array) {
  let higherNum = 0;
  let count = 0;
  for (index in array){
    if (array[index] > higherNum){
      higherNum = array[index];
      for (indexTwo in array){
        if (higherNum === array[indexTwo]){
          count += 1;
        }
      }
    } 
  }
  return count;
}

let arrayNumbers = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(arrayNumbers));

// Desafio 7
function catAndMouse(mouse ,cat1 ,cat2) {
  let result = '';
  if ((cat1 - mouse) < (cat2 - mouse)){
    result = 'cat1';
    return console.log(result);
  }else if ((cat1 - mouse) > (cat2 - mouse)){
    result = 'cat2';
    return console.log(result);
  } else {
    result = 'os gatos trombam e o rato foge'
    return console.log(result);
  }
}

let mousePos = 5;
let cat1Pos = 7;
let cat2Pos = 8;
console.log(catAndMouse(mousePos ,cat1Pos ,cat2Pos));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (index in array){
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

let arrayFizBuzz = [2, 15, 7, 9, 45];
console.log(fizzBuzz(arrayFizBuzz));

// Desafio 9
function encode(str) {
  let array = str.split('');
  for (index in array){
    if (array[index] === 'a') {
      array[index] = 1;
    } else if (array[index] === 'e') {
      array[index] = 2;
    } else if (array[index] === 'i') {
      array[index] = 3;
    } else if (array[index] === 'o') {
      array[index] = 4;
    } else if (array[index] === 'u') {
      array[index] = 5;
    }
  }
  str = array.join('');
  return str;
}

function decode(str) {
  let array = str.split('');
  for (index in array){
    if (array[index] === '1') {
      array[index] = 'a';
    } else if (array[index] === '2') {
      array[index] = 'e';
    } else if (array[index] === '3') {
      array[index] = 'i';
    } else if (array[index] === '4') {
      array[index] = 'o';
    } else if (array[index] === '5') {
      array[index] = 'u';
    }
  }
  str = array.join('');
  return str;
}

let phrase = 'hi there!';
phrase = encode(phrase);
console.log(phrase);
phrase = decode(phrase);
console.log(phrase);

// Desafio 10
function techList(array ,name) {
  let arrayTech = [];
  if (array.length != 0){
    for (index in array){
      let object = {
        tech: array[index],
        name: name,
      };
      arrayTech.push(object);
    }
    return arrayTech;
  } else {
    return 'Vazio!';
  }
}

let arrayTechList = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(arrayTechList, 'Felipe'));

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
