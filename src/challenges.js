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
let arrayys = [0, 4, 4, 4, 9, 2, 1];
function highestCount(numbers) {
let contador = 0;
let maiorNumero = 9;
  for (let i = 0; i < arrayys.length; i += 1) {
        if (maiorNumero === arrayys[i]) {
            arrays[i] = maiorNumero; }
//um for para descobrir o maior e outro para contar o 9
 // for (let j = 0; j < )   
    
  } return contador;
}       
      //console.log(highestCount(arrayys));

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
   ArFizzBuzz = [2, 15, 7, 9, 45];

  //ArFizzBuzz.push();
//criar um array
//dar um push
//retornar o array
  for (let index = 0; index < ArFizzBuzz.length; index += 1) {

    if (ArFizzBuzz[index] % 3 === 0 && ArFizzBuzz[index] % 5 === 0) {
        console.log('fizzBuzz');

    } else if (ArFizzBuzz[index] % 3 === 0) {
        console.log('fizz');
        
    } else if (ArFizzBuzz[index] % 5 === 0) {
        console.log('buzz');

    } else {
        console.log('bug!');
    }
  }   return ArFizzBuzz;
}      fizzBuzz();

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
