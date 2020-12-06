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
      //ArFizzBuzz.push();
    //criar um arraylet let let ArFizzBuzz = [2, 15, 7, 9, 45]; ArFizzBuzz = [2, 15, 7, 9, 45];ArFizzBuzz = [2, 15, 7, 9, 45]; ArFizzBuzz = [2, 15, 7, 9, 45];zzBuzz = [2, 15, 7, 9, 45];
    //dar um push
    //retornar o array

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
       // console.log('fizzBuzz');
        ArFizzBuzz[index] = 'fizzBuzz';
        console.log(ArFizzBuzz[index]);

    } else if (ArFizzBuzz[index] % 3 === 0) {
        //console.log('fizz');
        ArFizzBuzz[index] = 'fizz';
        console.log(ArFizzBuzz[index]);
        
    } else if (ArFizzBuzz[index] % 5 === 0) {
        //console.log('buzz');arrayFB
        ArFizzBuzz[index] = 'buzz';
        console.log(ArFizzBuzz[index]);

    } else {
        //console.log('bug!');
        ArFizzBuzz[index] = 'bug!';
        console.log(ArFizzBuzz[index]);
    }
  } return ArFizzBuzz;
}      //fizzBuzz([2, 15, 7, 9, 45]);


// Desafio 9
let letra = [];
//let soma = 0;
function encode(changeLtoN) {
 for (let index = 0; index < letra.length; index += 1){
//changeLtoN = letra[index].replace('a', 1);
              //soma += letra[index];
      if (letra[index] === 'a') {        
      } else ('a' === 1); 

      console.log(letra);
 }  
  

}       encode();

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
