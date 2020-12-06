//  Cheguei na NAVE, Trybers!! VAMOS QUE VAMOS!

// Desafio 1
function compareTrue(valorOne, valorTwo) {
  if (valorOne === true && valorTwo === true) {
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
function splitSentence(frase) {
  let array = frase.split(" ");
  return array;
}

/*Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas. */

let arrayNomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
// Desafio 4
function concatName(arrayNomes) {
  return `${arrayNomes[arrayNomes.length - 1] + ", " + arrayNomes[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
let array = [1, 3, 7, 7, 7, 7];
function highestCount(numbers) {
  let maxNumber = 0;
  let amountMany = 0;
  for (let index in numbers) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  for (let index2 in numbers) {
    if (numbers[index2] === maxNumber) {
      amountMany += 1;
    }
  }
  return amountMany;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;

  if (cat1 > mouse) {
    distanciaCat1 = cat1 - mouse;
  } else {
    distanciaCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distanciaCat2 = cat2 - mouse;
  } else {
    distanciaCat2 = mouse - cat2;
  }

  if (distanciaCat2 > distanciaCat1) {
    return "cat1";
  } else if (distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}
//console.log(catAndMouse(5, 6, 9))

// Desafio 8

function fizzBuzz(arrNumbers) {
  let nomesBizarros = [];
  for (let valor of arrNumbers) {
    if (valor % 3 === 0 && valor % 5 === 0) {
      nomesBizarros.push("fizzBuzz");
    } else if (valor % 5 === 0) {
      nomesBizarros.push("buzz");
    } else if (valor % 3 === 0) {
      nomesBizarros.push("fizz");
    } else {
      nomesBizarros.push("bug!");
    }
  }
  return nomesBizarros;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9

function encode(letters) {
  letters = letters.split("a").join("1");
  letters = letters.split("e").join("2");
  letters = letters.split("i").join("3");
  letters = letters.split("o").join("4");
  letters = letters.split("u").join("5");
  return letters;
}
let encodeLetters = "Kamila";
//console.log(encode(encodeLetters));

function decode(letters) {
  letters = letters.split("1").join("a");
  letters = letters.split("2").join("e");
  letters = letters.split("3").join("i");
  letters = letters.split("4").join("o");
  letters = letters.split("5").join("u");
  return letters;
}
let decodeLetters = "K1m3l1";
//console.log(decode(decodeLetters));

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return "Vazio!";
  }
  let tek = tech.sort();
  let list = [];
  for (let index = 0; index < tek.length; index += 1) {
    list.push({
      tech: tek[index],
      name: name,
    });
  }
  return list;
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort//
}
//console.log(techList(["React", "Jest", "HTML"], "Kamila"));

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
