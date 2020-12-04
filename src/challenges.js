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

// Para melhorar a complexidade a utilização do .replaceAll, irá eliminar a necessidade de utilização do for para percorrer a string, e de .replace dentro de if, alterando de uma vez todas as ocorrências dos caracteres escolhidos. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

// Desafio 9
function encode(Str) {
    let Str2 = Str.replaceAll('a', '1');
    let Str3 = Str2.replaceAll('e', '2');
    let Str4 = Str3.replaceAll('i', '3');
    let Str5 = Str4.replaceAll('o', '4');
    let Str6 = Str5.replaceAll('u', '5');
  return Str6;
}

function decode(Str) {
  let Str2 = Str.replaceAll('1', 'a');
  let Str3 = Str2.replaceAll('2', 'e');
  let Str4 = Str3.replaceAll('3', 'i');
  let Str5 = Str4.replaceAll('4', 'o');
  let Str6 = Str5.replaceAll('5', 'u');
return Str6;
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
