// Desafio 1 *okk*
function compareTrue(valor1, valor2){
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }
    return false;
}

// Desafio 2 *okk*
function calcArea(base, height) {
  let area = (base * height)/2
  return area;
}

// Desafio 3 *okk*
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4 *okk*
function concatName(arrayString) {
  return arrayString[arrayString.lenght-1] + ", " + arrayString[0];
}

// Desafio 5 *okk*
function footballPoints(wins, ties) {
  let vict = wins *3;
  let draw = ties *1;
  let points = vict + draw
  
  return points;
}

// Desafio 6 *okk*
let contNumber = 0;
entrada: [9, 1, 2, 3, 9, 5, 7];

function highestCount(arrayEntrada) {

  let contNumber = 0;
  
  arrayEntrada.sort((a, b) => b-a);

  for ( let i = 0 ; i < arrayEntrada.length ; i += 1) {
    if (arrayEntrada[i] === arrayEntrada[0]) {
      contNumber = contNumber + 1;
    }else{ 
      contNumber = contNumber;
  }
}
return contNumber
}
 

// Desafio 7 *okk*
function catAndMouse(mouse, cat1, cat2) {

 let cat1Mouse = Math.abs(cat1 -mouse);
 let cat2Mouse = Math.abs(cat2 -mouse);

 if ( cat1Mouse < cat2Mouse ) {
   return "cat1";
 }
 else if ( cat1Mouse > cat2Mouse ) {
   return "cat2";
 }
 else {
   return "os gatos trombam e o rato vai embora";
 }

}

// Desafio 8 *okk*
    

    function fizzBuzz(arrayNumeros) {
      
      let arrayResult = [];

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
    

// Desafio 9 *okk*

function encode(fr4s3) {

    fr4s3 = fr4s3.replaceAll ('a', '1');
    fr4s3 = fr4s3.replaceAll ('e', '2');
    fr4s3 = fr4s3.replaceAll ('i', '3');
    fr4s3 = fr4s3.replaceAll ('o', '4');
    fr4s3 = fr4s3.replaceAll ('u', '5');
    
    return fr4s3;
    }
  

function decode(stringN) {

  stringN = stringN.replaceAll ('1', 'a');
  stringN = stringN.replaceAll ('2', 'e');
  stringN = stringN.replaceAll ('3', 'i');
  stringN = stringN.replaceAll ('4', 'o');
  stringN = stringN.replaceAll ('5', 'u');
    
  return stringN;
}



// Desafio 10  *n comecei*
function techList() {
  // seu código aqui
}

// Desafio 11 *n comecei*
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12 *n comecei*
function triangleCheck() {
  // seu código aqui
}

// Desafio 13 *n comecei*
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
