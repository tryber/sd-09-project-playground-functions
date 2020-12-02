// Desafio 1

function compareTrue( value1, value2 ) {
  // seu código aqui
  if ( value1 === true && value2 === true ) {
    return true;
  } 
  
  return false;

}

// Desafio 2
function calcArea( base , height ) {
  // seu código aqui
  let valueArea = ( base * height ) / 2;

  return valueArea;

}

// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  let array = phrase.split( " " );

  return array;

}

// Desafio 4
function concatName( arrayString ) {
  // seu código aqui
  let itemOne = "";
  let itemTwo = "";

  for (let index = 0; index < arrayString.length; index += 1){
    if (index === 0){
      itemOne = arrayString[index];
    } else if (index === arrayString.length - 1) {
      itemTwo = arrayString[index];
      
    }
  }
  let result = itemTwo+ ',' + ' ' + itemOne;
  return result;
}

// Desafio 5
function footballPoints( wins, ties) {
  // seu código aqui

  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;

  let result = winsPoints + tiesPoints;
  return result;

}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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

