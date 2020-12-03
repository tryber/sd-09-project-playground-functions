// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let aux = 0;
  for (let index in string) {
    if (!array[aux]) {
      array[aux] = '';
    }
    if (string[index] === ' ') {
      aux += 1;
      index += 1;
    }
    array[aux] += string[index];
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let commaPlusSpace = ', '
  let string = lastIndex + commaPlusSpace + firstIndex;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array[0];
  let repeatCount = 0;
  for (let index in array) {
    if (array[index] === highestNumber) {
      repeatCount += 1;
    }
    if (array[index] > highestNumber) {
      highestNumber = array[index];
      repeatCount = 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closestCat = '';
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance === cat2Distance) {
    closestCat = 'os gatos trombam e o rato foge';
  }
  if (cat1Distance > cat2Distance) {
    closestCat = 'cat2';
  }
  if (cat1Distance > cat2Distance) {
    closestCat = 'cat1';
  }
  return closestCat;
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
    for (let index in array) {
      let restBy3 = (array[index]) % 3;
      let restBy5 = (array[index]) % 5;
      let restBy15 = restBy3 + restBy5;
      let restBy3Or5 = restBy3 * restBy5;
      if (restBy3Or5) {
        fizzBuzzArray[index] = 'bug!';
      }
      if (!restBy3) {
        fizzBuzzArray[index] = 'fizz';
      }
      if (!restBy5) {
        fizzBuzzArray[index] = 'buzz';
      }
      if (!restBy15) {
        fizzBuzzArray[index] = 'fizzBuzz';
      }
    }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let object = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let aux = [];
  for (let index in string) {
    aux[index] = string[index];
    for (let key in object) {
      if (string[index] === key) {
        aux[index] = object[key];
      }
    }
  }
  return aux.join('');
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
