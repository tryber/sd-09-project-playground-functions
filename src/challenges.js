// Desafio 1
function compareTrue(today, date) {
  // seu código aqui
  if (today === true && date === true){
    return true;} 
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return( base * heigth ) /2;
}
// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  return phrase.split (" ");
}
// Desafio 4
function concatName(sArray) {
  // seu código aqui
  let backString = sArray[sArray.length - 1] + ',' + sArray[0];
  return backString; 
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
      let pointsWins = 3;
      let totalPointsWins = (wins * pointsWins);
      let pointsTies = 1;
      let totalPointsTies = (ties * pointsTies);
      return (totalPointsWins + totalPointsTies);
    } 
  

// Desafio 6
function highestCount(matrix) {
  let number = matrix[0];
  let counter = 0;
  for (let index = 0; index < matrix.length; index += 1) {
    if (number < matrix[index])  {
        number = matrix[index];
    } 
  } 
  for (let index = 0; index < matrix.length; index += 1) {
    if (number === matrix[index])  {
        counter +=1 ;
    }
  }
  return counter;
}	

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1OfMouse = cat1 - mouse;
  let distanceCat2OfMouse = cat2 - mouse;

  if(distanceCat1OfMouse < 0){
    distanceCat1OfMouse = distanceCat1OfMouse * (-1);
  }
  if(distanceCat2OfMouse < 0){
    distanceCat2OfMouse = distanceCat2OfMouse * (-1);
  }

  if(distanceCat1OfMouse < distanceCat2OfMouse){
    return 'cat1';
  } else if(distanceCat2OfMouse < distanceCat1OfMouse){
    return 'cat2';
  } if(distanceCat1OfMouse === distanceCat2OfMouse){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(pow) {
  
  if (pow % 3 === 0 && pow % 5 !== 0){
    return 'fizz';
  } else if (pow % 5 === 0 && pow % 3 !== 0){
    return 'buzz';
  } else if (pow % 3 === 0 && pow % 5 === 0){
    return 'fizzBuzz';
  } else {
    return 'bug';
  }
}


// Desafio 9
function encode(string) {
  
  let troca = '';
  let i = 0;
  while (i < string.length){
    if ( string[i] === 'a' ){
     troca = string.replace(/a/g, '1');
      break;
    }
    if ( string[i] === 'e' ){
      troca = string.replace(/e/g, '2');
      break;
    }
    if ( string[i] === 'i' ){
      troca = string.replace(/i/g, '3');
       break;
    }
    if ( string[i] === 'o' ){
      troca = string.replace(/o/g, '4');
      break;
    }
    if ( string[i] === 'u' ){
      troca = string.replace(/u/g, '5');
      break;
    }
      
  
  
  return troca;
  
} 

}
function decode() {
  let newArray = [];
for (let index = 0; index < array.length; index += 1) {
  newArray.push(array[index])
}
let encoding = [];
for (let index = 0; index < divArray.length; index += 1) {
  if (newArray[index] === 'a') {
    newArray[index] = 1;
  } else if (newArray[index] === 'e') {
    newArray[index] = 2;
  } else if (newArray[index] === 'i') {
    newArray[index] = 3;
  } else if (newArray[index] === 'o') {
    newArray[index] = 4;
  } else if (newArray[index] === 'u') {
    newArray[index] = 5;
  }
}
for (let index = 0; index < newArray.length; index += 1) {
  encoding += newArray[index]
}
return encoding;
}	
function decode(array) {
let newArray = [];
for (let index = 0; index < array.length; index += 1) {
  newArray.push(array[index])
}
let decoding = [];
for (let index = 0; index < newArray.length; index += 1) {
  if (newArray[index] === '1') {
    newArray[index] = 'a';
  } else if (newArray[index] === '2') {
    newArray[index] = 'e';
  } else if (newArray[index] === '3') {
    newArray[index] = 'i';
  } else if (newArray[index] === '4') {
    newArray[index] = 'o';
  } else if (newArray[index] === '5') {
    newArray[index] = 'u';
  }
}
for (let index = 0; index < newArray.length; index += 1) {
  decoding += newArray[index]
}

return decoding
}	
console.log(encode('hi there'))
console.log(decode(encode('hi there')))

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
