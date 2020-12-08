
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
}

// Desafio 4
function concatName(arrayName) {
  let lastName = arrayName.pop();
  let firstName = arrayName[0];
  let spaceGambiarra = ', ';
  let stringNames = lastName + spaceGambiarra + firstName
  return stringNames
}
// Desafio 5
function footballPoints(wins, ties) {
  let total = (wins * 3) + ties;
  return total
}

// Desafio 6
function highestCount(array) {
  let highNumber = Math.max(...array);
  let repeatNumber = 0;
  for (let cont = 0; cont < array.length; cont += 1) {
    if (array[cont] === highNumber) {
      repeatNumber += 1;
    }
  }
  return repeatNumber
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner = '';
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia1 > distancia2) {
    winner = 'cat2';
  } else if (distancia2 > distancia1) {
    winner = 'cat1';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner
}

// Desafio 8
function fizzBuzz(numberArray) {
  let finalArray = [];
  for (let cont of numberArray) {
    switch (true) {
      case cont % 3 === 0 && cont % 5 === 0 :
        finalArray.push('fizzBuzz');
        break;
      case cont % 5 === 0:
        finalArray.push('buzz');
        break;
      case cont % 3 === 0:
        finalArray.push('fizz');
        break;
      default:
        finalArray.push('bug!');
    }
  }
  return finalArray
}
// Desafio 9
function encode(phrase) {
  let phraseArray = [];
  for (let cont = 0;cont < phrase.length;cont += 1) { 
    switch (phrase[cont]) {
      case 'a' :
        phraseArray += '1';
        break;
      case 'e' :
        phraseArray += '2';
        break;
      case 'i' :
        phraseArray += '3';
        break;
      case 'o' :
        phraseArray += '4';
        break;
      case 'u' :
        phraseArray += '5';
        break;
      default:
        phraseArray += phrase[cont];
        break;
    }
  }
  return phraseArray
}

function decode(newPhrase) {
  let newPhraseArray = [];
  for (let cont = 0;cont < newPhrase.length;cont += 1) { 
    switch (newPhrase[cont]) {
      case '1' :
        newPhraseArray += 'a';
        break;
      case '2' :
        newPhraseArray += 'e';
        break;
      case '3' :
        newPhraseArray += 'i';
        break;
      case '4' :
        newPhraseArray += 'o';
        break;
      case '5' :
        newPhraseArray += 'u';
        break;
      default:
        newPhraseArray += newPhrase[cont];
        break;
    }
  }
  return newPhraseArray
}


// Desafio 10
function techList(techArray, name) {
  let arrayTech = []
  let finalList = '';
  if (techArray.length !== 0){
  for (let cont= 0; cont<techArray.length; cont+= 1){
    let techno = {
      tech: techArray[cont],
      name: name,
    }
    arrayTech.push(techno);
    //source do sort: https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    arrayTech.sort((a, b) => a.tech.localeCompare(b.tech))
    finalList = arrayTech
  }
} else {
    finalList = 'Vazio!'
}
  return finalList
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
