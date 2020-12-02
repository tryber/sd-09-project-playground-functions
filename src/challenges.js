// Desafio 1
function compareTrue(booleanOne ,booleanTwo) {
  if (booleanOne === true && booleanTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base ,height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(str) {
  let strArray = str.split(' ');
  return strArray;
}

// Desafio 4
function concatName(array) {
  let str = array[array.length - 1] + ', ' + array[0];
  return str;
}

// Desafio 5
function footballPoints(wins ,ties) {
  let points = 0;
  points = (wins * 3) + ties;
  return points;
}

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

// Desafio 7
function catAndMouse(mouse ,cat1 ,cat2) {
  let result = '';
  if ((cat1 - mouse) < (cat2 - mouse)){
    result = 'cat1';
    return result;
  }else if ((cat1 - mouse) > (cat2 - mouse)){
    result = 'cat2';
    return result;
  } else {
    result = 'os gatos trombam e o rato foge'
    return result;
  }
}

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

// Desafio 11
function generatePhoneNumber(array) {
  let telephone = '';
  let error = 'não é possível gerar um número de telefone com esses valores';
  let errorArray = 'Array com tamanho incorreto.';
  if (array.length === 11){
    for (index in array) {
      let cont = 0;
      for (index2 in array){
        if (array[index] === array [index2]){
          cont += 1;
          if (cont >= 3){
            return error;
            break;
          }
        }
      }
      if ((array[index] < 0) || (array[index] > 9)){
        return error;
        break;
      } else if (index === '0') {
        telephone += '(' + array[index];
      } else if (index === '1') {
        telephone += array[index] + ')';
      } else if (index === '6'){
        telephone += array[index] + '-';
      } else {
        telephone += array[index];
      }
    }
    return telephone;
  } else {
    return errorArray;
  }
}

// Desafio 12
function triangleCheck(lineA ,lineB , lineC) {
  if ( lineA > (lineB + lineC) && lineA < (Math.abs(lineA - lineB - lineC))) {
    return false;
  } else if ( lineB > (lineA + lineC) && lineA < (Math.abs(lineA - lineB - lineC))) {
    return false;
  } else if ( lineC > (lineA + lineB) && lineA < (Math.abs(lineA - lineB - lineC))) {
    return false;
  } else {
    return true;
  }
}

// Desafio 13
function hydrate(str) {
  let digit = /\d+/;
  let numberOfDrinks = str.match(digit);
  if ( numberOfDrinks == 1){
    str =  numberOfDrinks + ' copo de água.';
  } else {
    str =  numberOfDrinks + ' copos de água.';
  }
  return str;
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
