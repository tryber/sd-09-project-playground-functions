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
  let finalStg = arrayString[arrayString.length-1] + ", " + arrayString[0];

  return finalStg;
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
 let bestCat ='';

 if ( cat1Mouse < cat2Mouse ) {
  bestCat = 'cat1'; 
  return bestCat;

 } else if ( cat1Mouse > cat2Mouse ) {

  bestCat = 'cat2'   
  return bestCat;
 
} else {

  bestCat = 'os gatos trombam e o rato foge'
  return bestCat;
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
          
      return arrayResult;
    }
    

// Desafio 9 *okk*

function encode(fr4s3) {

    fr4s3 = fr4s3.replace (/a/g , '1');
    fr4s3 = fr4s3.replace (/e/g , '2');
    fr4s3 = fr4s3.replace (/i/g , '3');
    fr4s3 = fr4s3.replace (/o/g , '4');
    fr4s3 = fr4s3.replace (/u/g , '5');
    
    return fr4s3;
    }
  

function decode(stringN) {

  stringN = stringN.replace (/1/g , 'a');
  stringN = stringN.replace (/2/g , 'e');
  stringN = stringN.replace (/3/g , 'i');
  stringN = stringN.replace (/4/g , 'o');
  stringN = stringN.replace (/5/g , 'u');
    
  return stringN;
}



// Desafio 10  *okk*
function techList(tech, name) {

 
  let orderList = tech.sort();
  let technoList = [];
  

  if ( tech.length === 0 ) {
    return 'Vazio!';
  
  } else {

    for ( let count = 0; count < tech.lenght ; count += 1) {

      let technoObject = {
        tech: orderList[count],
        name: name,
      }

      technoList.push(technoObject)
             
    }
  }

  return technoList

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
