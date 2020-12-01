//VQV Brows






// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let word = '';
  phrase += ' ';
  let n = phrase.length;
  let wordsSplited = [];
  for(let index = 0; index < n; index += 1){
    phrase += ' ';
    let letter = phrase.charAt(index);
    if (letter != ' ') {
      word += letter;
    } else {
      wordsSplited.push(word);
      word = '';
    }
  }
  return console.log(wordsSplited);
}

// Desafio 4
function concatName(array) {
  let n = array.length;
  return console.log(array[0] + ', ' + array[(n-1)]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return console.log(points);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if (dist1 < 0){
    dist1 = (dist1 * -1);
  } else if (dist2 < 0){
    dist2 = (dist2 * -1);
  }
  if (dist1 < dist2){
    return console.log('cat1');
  } else {
    return console.log('cat2')
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      array2.push('fizzBuzz');
    } else if (array[index] % 5 === 0){
      array2.push('buzz');
    } else if (array[index] % 3 === 0){
          array2.push('fizz');
    } else {
      array2.push('bug!')
    }
  }
  return console.log(array2);
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
