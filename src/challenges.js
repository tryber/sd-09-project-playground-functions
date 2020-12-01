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
  let resultString = `${array[array.length - 1]}, ${array[0]}`;

  return resultString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 3 * wins + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0]
  let aparissons = 0
  
  for (let i of array) {
    if (i > biggest) {
      biggest = i
    }
  }

  for (let i of array) {
    if (i === biggest) {
      aparissons++
    }
  }
  return aparissons
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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

// Desafio 9
function encode(string) {
  let encrypted = "";
  let cipher = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let i of string) {
    switch (i) {
      case "a":
        encrypted += cipher[i];
        break;

      case "b":
        encrypted += cipher[i];
        break;

      case "c":
        encrypted += cipher[i];
        break;

      case "d":
        encrypted += cipher[i];
        break;

      case "e":
        encrypted += cipher[i];
        break;

      default:
        encrypted += i
        break;
    }
  }
  return encrypted
}

function decode(string) {
  let decipher = "";
  let cipher = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  };

  for (let i of string) {
    switch (i) {
      case "1":
        decipher += cipher[i];
        break;

      case "2":
        decipher += cipher[i];
        break;

      case "3":
        decipher += cipher[i];
        break;

      case "4":
        decipher += cipher[i];
        break;

      case "5":
        decipher += cipher[i];
        break;

      default:
        decipher += i
        break;
    }
  }
  return decipher
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
