    // Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true, true));


// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}
//console.log(calcArea(10, 5));

// Desafio 3
let array = 'go trybe';
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
}
//console.log(splitSentence(array));

//Desafio 4
let arrays = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(nomes) {
let firstName = nomes[0];
let lastName = nomes[nomes.length - 1];
let finalResult = lastName + ', ' + firstName;
  return finalResult;
}
        //console.log(concatName(arrays));

// Desafio 5
function footballPoints(wins,ties) {
let totalWins = wins * 3;
let totalTies = ties * 1;
let total = totalWins + totalTies;
      return total;
}
      //console.log(footballPoints(5,2));

// Desafio 6
function highestCount(arrayys) {
let contador = 0;
let maiorNumero = 0;
  for (let i = 0; i < arrayys.length; i += 1) {
      if (maiorNumero > arrayys[i]) {
      contador = contador;
      maiorNumero = maiorNumero;
      } else if (maiorNumero === arrayys[i]) {
       maiorNumero = maiorNumero;
       contador = contador + 1;
      } else if (maiorNumero < arrayys[i]) {
       maiorNumero = arrayys[i];
       contador = 1;
     }
  } return contador;
}       
      console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
      
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let cat1Distance = Math.abs(cat1 - mouse);
let cat2Distance = Math.abs(cat2 - mouse);

    if (cat1Distance < cat2Distance) {
        return "cat1";
   } else if (cat2Distance < cat1Distance) {
        return "cat2";
   } else if ( cat1Distance === cat2Distance) {
        return "os gatos trombam e o rato foge";
   } 
}     
       // console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(ArFizzBuzz) {

  for (let index = 0; index < ArFizzBuzz.length; index += 1) {

    if (ArFizzBuzz[index] % 3 === 0 && ArFizzBuzz[index] % 5 === 0) {
        ArFizzBuzz[index] = 'fizzBuzz';
        console.log(ArFizzBuzz[index]);

    } else if (ArFizzBuzz[index] % 3 === 0) {
        ArFizzBuzz[index] = 'fizz';
        console.log(ArFizzBuzz[index]);
        
    } else if (ArFizzBuzz[index] % 5 === 0) {
        ArFizzBuzz[index] = 'buzz';
        console.log(ArFizzBuzz[index]);

    } else {
        ArFizzBuzz[index] = 'bug!';
        console.log(ArFizzBuzz[index]);
    }
  } return ArFizzBuzz;
}      //fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(resultado) {
for (let index = 0; index < resultado.length; index += 1) {
   if(resultado[index] === 'a') {
     resultado = resultado.replace('a', 1);
 } else if (resultado[index] === 'e') {
    resultado = resultado.replace('e', 2);
 } else if ( resultado[index] === 'i') {
  resultado = resultado.replace('i', 3);
 } else if (resultado[index] === 'o') {
  resultado = resultado.replace('o', 4);
 } else if (resultado[index] === 'u') {
  resultado = resultado.replace('u', 4);
 }
  }
    return resultado;
}       console.log(encode('hi there'));

function decode(result) {
  for (let i = 0; i < result.length; i += 1) {
    if(result[i] === '1') {
      result = result.replace('1', 'a');
  } else if (result[i] === '2') {
     result = result.replace('2', 'e');
  } else if (result[i] === '3') {
   result = result.replace('3', 'i');
  } else if (result[i] === '4') {
   result = result.replace('4', 'o');
  } else if (result[i] === '5') {
   result = result.replace('5', 'u');
  }
}
return result;
}
     console.log(decode('h3 th2r2'.toLowerCase()));

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
