   // Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));


// Desafio 2
function calcArea(base, heigth) {
  return ((base * heigth) / 2);
}
console.log(calcArea(10, 5));


// Desafio 3
let array = 'go trybe';
function splitSentence(string) {
  let divisor = string.split(' ');
  return divisor;
}
console.log(splitSentence(array));

//Desafio 4

let arrays = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(nomes) {
let firstName = nomes[0];
let lastName = nomes[nomes.length - 1];
let finalResult = lastName + ', ' + firstName;
  return finalResult;
}
        console.log(concatName(arrays));

// Desafio 5
function footballPoints(wins,ties) {
let totalWins = wins * 3;
let totalTies = ties * 1;
let total = totalWins + totalTies;
      return total;
}
      console.log(footballPoints(5,2));

// Desafio 6
let numbers = [1, 1, 2, 9, 9, 5, 7];
let contador = 0;
let maiorNumero = 0;
function highestCount() {
  for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];

      } else if (maiorNumero === numbers[i]) {
                contador = contador + 1;
    }
  } return contador;
}       
      console.log(highestCount());

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
let cat1Distance = cat1 - mouse;
let cat2Distance = cat2 - mouse;
    if (cat1Distance < cat2Distance) {
        return "cat1";
   } else if (cat2Distance < cat1Distance) {
        return "cat2";
   } else if ( cat1Distance === cat2Distance) {
        return "os gatos trombam e o rato foge";
   } 
}     
        console.log(catAndMouse(1, 2, 3));

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
