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
function fizzBuzz(matrixx) {
  // seu código 
  newMatrix = [];
  for (let index = 0; i < matrixx.length; i += 1) {
    let fizz = matrixx[index] % 3;
    let buzz = matrixx[index] % 5;
    if (fizz === 0 && buzz !== 0) {
      newMatrix.push('fizz');
    } 
    if (fizz !== 0 && buzz === 0) {
      newMatrix.push('buzz');
    } 
    if (fizz === 0 && buzz === 0) {
      newMatrix.push('fizzBuzz');
    }
    else {
      newMatrix.push('bug!');
    }
  
}

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
}
