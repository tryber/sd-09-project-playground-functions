//MAIS UM DESAFIO PARA SUPERAR

// Desafio 1
function compareTrue(firstItem, secondItem) {
  // seu código aqui
  if (firstItem && secondItem) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(arraySplit) {
  // seu código aqui
  let divisor = arraySplit.split(" ");
  return divisor;
}

console.log(splitSentence("vamos com tudo!! todos somos trybe"));

// Desafio 4
function concatName(arrayConcat) {
  // seu código aqui
  let result = `${arrayConcat[arrayConcat.length - 1]}, ${arrayConcat[0]}`;

  return result;

  /*
  let string01 = array[0];
  let string02 = array[array.length -1];
  let string03 = string01 + ',' + string02;
   ou 

   return arrayConcat[arrayConcat.length - 1] + ',' + arrayContat;
  
  */
}

console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let quantityWins = wins * 3;
  let quantityTies = ties * 1;
  let quantityTotal = quantityWins + quantityTies;
  return quantityTotal;
}

console.log(footballPoints(10, 4));

// Desafio 6

function highestCount(arrayRepet) {
  let highestNumber = 0;
  let countHighestNumber = 0;
  // seu código aqui
  for (let index = 0; index < arrayRepet.length; index += 1) {
    if (index === 0) {
      highestNumber = arrayRepet[index];
    } else if (arrayRepet[index] > highestNumber) {
      highestNumber = arrayRepet[index];
    }
  }

  for (let index = 0; index < arrayRepet.length; index += 1) {
    if (arrayRepet[index] === highestNumber) {
      countHighestNumber += 1;
    }
  }
  return countHighestNumber;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = 0;
  let distancia2 = 0;

  if (cat1 > mouse) {
    distancia1 = cat1 - mouse;
  } else if (cat1 < mouse) {
    distancia1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distancia2 = cat2 - mouse;
  } else if (cat2 < mouse) {
    distancia2 = mouse - cat2;
  }

  if (distancia1 > distancia2) {
    return "cat2";
  } else if (distancia1 < distancia2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

console.log(catAndMouse(3, 4, 8));

// Desafio 8
function fizzBuzz(arrayFizz) {
  // seu código aqui
  let arrayResult = [];
  for (let index = 0; index < arrayFizz.length; index += 1) {
    if (arrayFizz[index] % 3 === 0 && arrayFizz[index] % 5 !== 0) {
      arrayResult.push("fizz");
    } else if (arrayFizz[index] % 5 === 0 && arrayFizz[index] % 3 !== 0) {
      arrayResult.push("buzz");
    } else if (arrayFizz[index] % 3 === 0 && arrayFizz[index] % 5 === 0) {
      arrayResult.push("fizzBuzz");
    } else {
      arrayResult.push("bug!");
    }
  }
  return arrayResult;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(encodeStringToNumber) {
  // seu código aqui
  let encodeString = encodeStringToNumber.split("");

  for (let index = 0; index < encodeString.length; index += 1) {
    switch (encodeString[index]) {
      case "a":
        encodeString[index] = 1;
        break;
      case "e":
        encodeString[index] = 2;
        break;
      case "i":
        encodeString[index] = 3;
        break;
      case "o":
        encodeString[index] = 4;
        break;
      case "u":
        encodeString[index] = 5;
    }
  }

  return encodeString.join("");
}
function decode(encodeStringToNumber) {
  // seu código aqui
  let decodeNumber = encodeStringToNumber.split("");

  for (let index = 0; index < decodeNumber.length; index += 1) {
    switch (decodeNumber[index]) {
      case "1":
        decodeNumber[index] = "a";
        break;
      case "2":
        decodeNumber[index] = "e";
        break;
      case "3":
        decodeNumber[index] = "i";
        break;
      case "4":
        decodeNumber[index] = "o";
        break;
      case "5":
        decodeNumber[index] = "u";
    }
  }

  return decodeNumber.join("");
}

console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  // tech = ["ReactJS", "NodeJS", "React Native"];
  // name = "Igor";
  if (techArray.length === 0) {
    return "Vazio!";
  }

  let techName = [];
  techArray.sort();

  for (let index = 0; index < techArray.length; index += 1) {
    let techNameObject = {
      tech: techArray[index],
      name: name,
    };

    techName.push(techNameObject);
  }

  return techName;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
