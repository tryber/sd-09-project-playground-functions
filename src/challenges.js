// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separator = ' ';
  let stringSeparated = string.split(separator);
  return stringSeparated;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  return arrayStrings[arrayStrings.length -1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + ties;
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numberMax = 0;
  let count = 0;
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] > numberMax) {
      numberMax = array[key];
    }
  }
  for (let key = 0; key < array.length; key += 1) {
      if (numberMax === array[key]) {
        count +=1
      }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else (distanciaCat1 === distanciaCat2)
    return 'os gatos trombam e o rato foge';
  }

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = []
  for (let key = 0; key < array.length; key +=1) {
    if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[key] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[key] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
}
  return newArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let newString = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in string) {
    if (string[key] === 'a' || string[key] === 'e' || string[key] === 'i' || string[key] === 'o'|| string[key] === 'u') {
      newString += vowels[string[key]];
  } else {
    newString += string[key];
  }
}
return newString;
}

function decode() {
  // seu código aqui
}

console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let newArray = []
  let string = 'Vazio!'
  for (let key = array.length; key > array.length; key -= 1) {
    if (array[key] < array.length) {
        let outro = {
          tech: array[key],
          name: name
        }
        newArray.push(outro)
    } 
    else if ([] === 0) {
        return string
    }
  }
  newArray.sort(function(a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
});
  return newArray;
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

