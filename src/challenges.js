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
function highestCount( arrayNumbers ) {
  // seu código aqui
  let maiorValor = arrayNumbers[0]
  let cont = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {

    if (maiorValor < arrayNumbers[index]) {
      maiorValor = arrayNumbers[index];

    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (maiorValor === arrayNumbers[index] ){
      cont += 1;
    }
  }

  return cont; 
}


// Desafio 7
function catAndMouse( mouse, cat1, cat2 ) {
  // seu código aqui
  let gato1 = "cat1";
  let gato2 = "cat2";
  let gatoIgual = "os gatos trombam e o rato foge";
  if ( cat1 - mouse < cat2 - mouse ){
    return gato1;
  } else if (cat2 - mouse < cat1 - mouse){
    return gato2;
  } else if (cat1 - mouse == cat2 - mouse) {
    return gatoIgual;
  }
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

