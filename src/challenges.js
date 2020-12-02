// Começando o projeto 2
// Desafio 1
function compareTrue(paramer1, paramer2) {
  return paramer1 && paramer2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  let result = [array[array.length - 1]];
  for (let index = 0; index < 1; index += 1) {
    result.push(array[index]);
  }
  return result.join(', ');
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  let repeat = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > count) {
      count = array[index];
    } else {
      count === array[index];
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse > cat2 - mouse) {
    return "cat2";
  }
  if (cat1 - mouse < cat2 - mouse) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push("fizzBuzz");
    }
    if (array[index] % 5 === 0) {
      result.push("Buzz");
    }
    if (array[index] % 3 === 0) {
      result.push("fizz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
let java = {
  tech: "javascript",
  nome: "Felipe",
};
let react = {
  tech: "react",
  nome: "Felipe",
};
let python = {
  tech: "python",
  nome: "Felipe",
};
let nodejs = {
  tech: "nodejs",
  nome: "Felipe",
};
function techList(array) {
  for (let key in array) {
  }
}

techList([java, react, python, nodejs]);

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
};
