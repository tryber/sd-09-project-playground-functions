// Desafio 1
function compareTrue(bool1, bool2) {
  let answer;

  bool1 === true && bool1 === bool2 ? (answer = true) : (answer = false);

  return answer;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let resultArray = sentence.split(" ");

  return resultArray;
}

// Desafio 4
function concatName(array) {
  let resultString = `${array[0]}, ${array[array.length - 1]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 3 * wins + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let mostAparisons = 0;
  let currentAparisons;
  let mostCommon;

  for (let i in array) {
    currentAparisons = 0;

    for (let j in array) {
      if (array[i] === array[j]) {
        currentAparisons++;
      }
    }

    if (currentAparisons > mostAparisons) {
      mostCommon = array[i];
      mostAparisons = currentAparisons;
    }
  }
  return mostAparisons;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = "os gatos trombam e o rato foge";

  if (distCat1 < distCat2) {
    result = "cat1";
  }

  if (distCat2 < distCat1) {
    result = "cat2";
  }

  return result;
}

// Desafio 8
function fizzBuzz(array) {
  resultArray = [];

  for (let i of array) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push("fizzBuzz");
    } else if (i % 3 === 0) {
      resultArray.push("fizz");
    } else if (i % 5 === 0) {
      resultArray.push("buzz");
    } else {
      resultArray.push("bug!");
    }
  }
  return resultArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

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
};
