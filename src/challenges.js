// Desafio 1
function compareTrue(value1, value2) {
  
  return value1 && value2  
}

// Desafio 2
function calcArea(base, height) {
  let quadrilateralArea = base * height;
  let triangleArea = quadrilateralArea / 2;
  
  return triangleArea
}

// Desafio 3
function splitSentence(anyStringLiteral) {
  let arrayStrings = anyStringLiteral.split(" ");

  return arrayStrings
}

// Desafio 4
function concatName(arrayOfStrings) {
  let lastFirstValues = arrayOfStrings[arrayOfStrings.length - 1] + ", " + arrayOfStrings[0];
  
  return lastFirstValues
}

// Desafio 5
function footballPoints(wins, ties) {
  
}

// Desafio 6
function highestCount(numberArray) {
  let bigBoy = Math.max(...numberArray);

  for (let index = 0; index <= numberArray.length; index = index + 1) {
    if (numberArray[index] == bigBoy){
      let counter = numberArray.pop(numberArray[index]);
    }
  }
  return counter.length
}

// Desafio 7javascriptjavascriptjavascript
function catAndMouse(mouse, cat1, cat2) {
  mouse = [abscissePointMouse, orderedPointMouse];
  cat1 = [abscissePointCat1, orderedPointCat1];
  cat2 = [abscissePointCat2, orderedPointCat2];
  let deltaAbscisse1 = [abscissePointMouse, abscissePointCat1];
  let deltaOrdenated1 = [orderedPointMouse, orderedPointCat1];
  let deltaAbscisse2 = [abscissePointMouse, abscissePointCat2];
  let deltaOrdenated2 = [orderedPointMouse, orderedPointCat2];
  let distanceCat1 = Math.sqrt(Math.pow(deltaAbscisse1, 2) + Math.pow(deltaOrdenated1, 2));
  let distanceCat2 = Math.sqrt(Math.pow(deltaAbscisse2, 2) + Math.pow(deltaOrdenated2, 2));

  if(distanceCat1 < distanceCat2) {
    return "Cat1";
  }
  else if (distanceCat2 < distanceCat1) {
    return "Cat2";
  }
  else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(numArray) {
  let fbArray = [];
  for (let indexFiBu = 0; indexFiBu <= numArray.length; indexFiBu = indexFiBu + 1) {
    if (numArray[indexFiBu] % 3 == 0) {
      return fbArray[indexFiBu] = "fizz"; 
    }
    else if (numArray[indexFiBu] % 5 == 0) {
      return fbArray[indexFiBu] = "buzz";
    }
    else if (numArray[indexFiBu] % 3 == 0 && numArray[indexFiBu] % 5 == 0) {
      return fbArray[indexFiBu] = "fizzBuzz";
    }
    else {
      return fbArray[indexFiBu] = "bug";
    }
  }  
}

// Desafio 9
function encode(encodedVocals) {
for (let iVocals = 0; iVocals <= encodedVocals.length; iVocals = iVocals + 1); {
  if (encodedVocals[iVocals] == "a") {
    encodedVocals[iVocals] = "1";
  }
  else if (encodedVocals[iVocals] == "e") {
    encodedVocals[iVocals] = "2";
  }
  else if (encodedVocals[iVocals] == "i") {
    encodedVocals[iVocals] = "3";
  }
  else if (encodedVocals[iVocals] == "o") {
    encodedVocals[iVocals] = "4";
  }
  else (encodedVocals[iVocals] == "u") {
    encodedVocals[iVocals] = "5";
  }

  return encodedVocals
}  

}
function decode(stringToMix) {
  
  for (let iNumbers = 0; iNumbers <= stringToMix.length; iNumbers = iNumbers + 1); {
    if (stringToMix[iNumbers] == "1") {
      stringToMix[iNumbers] = "a";
    }
    else if (stringToMix[iNumbers] == "2") {
      stringToMix[iNumbers] = "e";
    }
    else if (stringToMix[iNumbers] == "3") {
      stringToMix[iNumbers] = "i";
    }
    else if (stringToMix[iNumbers] == "4") {
      stringToMix[iNumbers] = "o";
    }
    else (stringToMix[iNumbers] == "5") {
      stringToMix[iNumbers] = "u";
    }
    
    return stringToMix
  }  
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
