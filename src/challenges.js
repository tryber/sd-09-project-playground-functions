// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(String) {
  return String.split(' ');
}

// Desafio 4
function concatName(Ar) {
  return Ar[Ar.length - 1] + ', ' + Ar[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(nums) {
  let numMax = nums[0];
  let numMaxTimes = 0;
  for (let index = 1; index < nums.length; index += 1) {
    if (numMax < nums[index]) {
      numMax = nums[index];
    }
  }
  for (let index2 = 0; index2 < nums.length; index2 += 1) {
    if (numMax === nums[index2]) {
      numMaxTimes += 1;
    }
  }
  return numMaxTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) !== Math.abs(mouse - cat2)) {
    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
      return 'cat1';
    }
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(Ar) {
  let Array = [];
  for (let index = 0; index < Ar.length; index += 1) {
    if (Ar[index] % 3 === 0 && Ar[index] % 5 === 0) {
      Array.push('fizzBuzz');
    } else if (Ar[index] % 3 === 0) {
      Array.push('fizz');
    } else if (Ar[index] % 5 === 0) {
      Array.push('buzz');
    } else {
      Array.push('bug!');
    }
  }
  return Array;
}

// Desafio 9
function encode(Str) {
  for (let index = 0; index < Str.length; index += 1) {
    if (Str.includes('a')) {
      Str = Str.replace('a', '1');
    }
    if (Str.includes('e')) {
      Str = Str.replace('e', '2');
    }
    if (Str.includes('i')) {
      Str = Str.replace('i', '3');
    }
    if (Str.includes('o')) {
      Str = Str.replace('o', '4');
    }
    if (Str.includes('u')) {
      Str = Str.replace('u', '5');
    }
  }
  return Str;
}

function decode(Str2) {
  for (let index = 0; index < Str2.length; index += 1) {
    if (Str2.includes('1')) {
      Str2 = Str2.replace('1', 'a');
    }
    if (Str2.includes('2')) {
      Str2 = Str2.replace('2', 'e');
    }
    if (Str2.includes('3')) {
      Str2 = Str2.replace('3', 'i');
    }
    if (Str2.includes('4')) {
      Str2 = Str2.replace('4', 'o');
    }
    if (Str2.includes('5')) {
      Str2 = Str2.replace('5', 'u');
    }
  }
  return Str2;
}

// Desafio 10
function techList(tech, named) {
  let techListObjects = [];
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    let tec = Object();
    tec.tech = tech[index];
    tec.name = named;
    techListObjects.push(tec);
  }
  if (techListObjects.length === 0) {
    return 'Vazio!';
  }
  return techListObjects;
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
