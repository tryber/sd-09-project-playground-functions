// Desafio 1
function compareTrue(valor1, valor2){
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2
  return area;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(arrayString) {
  return arrayString[arrayString.lenght-1] + ", " + arrayString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let vict = wins *3;
  let draw = ties *1;
  let points = vict + draw
  
  return points;
}

// Desafio 6
function highestCount(arrayNumeros) {
  arrayNumeros.sort((a, b) => b-a);


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
    let arrayResult = [];

    function fizzBuzz(arrayNumeros) {
      for (let i = 0 ; i < arrayNumeros.length ; i +=1) {

        if ((arrayNumeros[i] % 3 === 0) && (arrayNumeros[i]  % 5 ===0)) {
            arrayResult.push ("fizzBuzz");
        
          } else if (arrayNumeros[i] % 3 === 0) {
            arrayResult.push ("fizz");
          
          } else if (arrayNumeros[i] % 5 ===0) {
            arrayResult.push ("buzz");
          
          } else {
            arrayResult.push ('bug!')
          }

      }
      console.log(arrayResult);
    }
    /// 



// Desafio 9

function encode(fr4s3) {

    fr4s3 = fr4s3.replaceAll ('a', '1');
    fr4s3 = fr4s3.replaceAll ('e', '2');
    fr4s3 = fr4s3.replaceAll ('i', '3');
    fr4s3 = fr4s3.replaceAll ('o', '4');
    fr4s3 = fr4s3.replaceAll ('u', '5');
    
    return fr4s3;
    }
  // seu código aqui

function decode(stringN) {

  stringN = stringN.replaceAll ('1', 'a');
  stringN = stringN.replaceAll ('2', 'e');
  stringN = stringN.replaceAll ('3', 'i');
  stringN = stringN.replaceAll ('4', 'o');
  stringN = stringN.replaceAll ('5', 'u');
    
  return stringN;
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
