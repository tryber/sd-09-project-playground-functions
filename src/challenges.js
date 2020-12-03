// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let retorno = 0;
  retorno = string.split(' ');
  return retorno;
}

// Desafio 4
let numbers = ['lucas', 'gustavo', 'jon', 'carlos', 'yan']
function concatName(stringArray){
  let reverse = stringArray.reverse();
  let concatReverse = reverse.join(', ');
  return concatReverse;
}
console.log(concatName(numbers))

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empate = ties * 1
  let total = vitorias + empate;
  return total;
}

// Desafio 6
function highestCount(arrayNum) {
 let contador = 0
 let maiorNum = Math.max.apply(null, arrayNum);
 for (index = 0; index < arrayNum.length; index += 1) {
   if (maiorNum === arrayNum[index]) {
      contador +=1
    }
  }
 return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  let resultCat = '';

  if (positionCat1 < positionCat2) {
    resultCat = 'cat1';
  } else  if(positionCat2 < positionCat1){
    resultCat = 'cat2';
  } else if(positionCat1 === positionCat2){
    resultCat = 'os gatos trombam e o rato foge';
  }
  return resultCat;
}

// Desafio 8
function fizzBuzz(array) {
  let final = [];
  for (let index = 0; index <= array.length; index += 1){
    if (index % 3 == 0 && index % 5 == 0){
      final.push('fizzBuzz');
      } else if (index % 3 == 0){
        final.push('fizz');
      } else if (index % 5 == 0){
        final.push('buzz' );
      } else {
        final.push('bug!');
      }
  }
  return final
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
