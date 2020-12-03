// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    console.log('Desafio 1 Ta indo');
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  console.log(`desafio 2 ${calc}`);
  return calc;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let storage = '';
  for (let index in string) {
    if (string[index] === ' ') {
      array.push(storage);
      storage = '';
    } else {
      storage += string[index];
    }
  }
  array.push(storage);
  console.log(array);
  return array;
}

// Desafio 4
function concatName(array) {
  let seiLaEu = `${array[array.length - 1]}, ${array[0]}`;
  console.log(seiLaEu);
  return seiLaEu;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result += (wins * 3) + ties;
  console.log(result);
  return result;
}

// Desafio 6
function highestCount(array) {
  let high = 0;
  let result = 0;
  for (let index in array) {
    if (array[index] > high) {
      high = array[index];
    }
  }
  for (let index2 in array) {
    if (array[index2] === high) {
      result += 1;
    }
  }
  console.log(result);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouCat1 = 0;
  let mouCat2 = 0;
  let result = '';

  if (mouse > cat1) {
    mouCat1 = mouse - cat1;
  } else {
    mouCat1 = cat1 - mouse;
  };
  if (mouse > cat2) {
    mouCat2 = mouse - cat2;
  } else {
    mouCat2 = cat2 - mouse;
  };
  if (mouCat2 > mouCat1) {
    console.log('cat1');
    result = 'cat1';
  } else if (mouCat1 === mouCat2) {
    console.log('os gatos trombam e o rato foge');
    result = 'os gatos trombam e o rato foge';
  } else {
    console.log('cat2');
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      result.push("fizz");
    } else if (array[index] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!")
    }
  }
  console.log(result);
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let index in string) {
    if (string[index].toLowerCase() === 'a') {
      encoded = encoded += 1;
    } else if (string[index].toLowerCase() === 'e') {
      encoded = encoded += 2;
    } else if (string[index].toLowerCase() === 'i') {
      encoded = encoded += 3;
    } else if (string[index].toLowerCase() === 'o') {
      encoded = encoded += 4;
    } else if (string[index].toLowerCase() === 'u') {
      encoded = encoded += 5;
    } else {
      encoded = encoded += string[index];
    }
  }
  console.log(encoded);
  return encoded;
}
function decode(encoded) {
  let decoded = '';
  for (let index in encoded) {
    if (encoded[index] === '1') {
      decoded = decoded += 'a';
    } else if (encoded[index] === '2') {
      decoded = decoded += 'e';
    } else if (encoded[index] === '3') {
      decoded = decoded += 'i';
    } else if (encoded[index] === '4') {
      decoded = decoded += 'o';
    } else if (encoded[index] === '5') {
      decoded = decoded += 'u';
    } else {
      decoded = decoded += encoded[index];
    }
  }
  console.log(decoded);
  return decoded;
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

compareTrue(true, true)
calcArea(5, 4)
splitSentence('Go Trybe')
concatName(['primeira', 'segunda', 'Ultima'])
footballPoints(3, 1)
highestCount([9, 1, 2, 41, 3, 9, 5, 7, 9, 41, 17, 41])
catAndMouse(7, 8, 8)
fizzBuzz([2, 15, 7, 9, 45, 25])
encode('Boa noite meu consagrado')
decode('B41 n43t2 m25 c4ns1gr1d4')

// Aooba, não é que tem um segredo no Lession Learned?!
