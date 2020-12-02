// // Desafio 1
// function compareTrue(value1, value2) {
//   if (value1 === true && value2 === true) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
//   return console.log;
// }
// compareTrue(true, true);

// // Desafio 2
// function calcArea(base, height) {
//   let triangle = [];
//   triangle = ((base * height)/2);
//   return triangle
// }
// console.log(calcArea(10, 5));

// // Desafio 3
// function splitSentence(splitSentence) {
//   let string = splitSentence;
//   return console.log(string.split(' '));
// }
// splitSentence('go Trybe');

// // Desafio 4
// function concatName(arraySTR) {
//   let string = arraySTR.reverse(' ');
//   return console.log(string);
// }
// concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// // Desafio 5
// function footballPoints(wins, ties) {
//   let totalPoints = (wins*3) + ties;
//   return console.log(totalPoints);
// }
// footballPoints(10, 5);

// //Desafio 6
// function highestCount(arrayNumbers) {
// let numbers = [];
//   for (let index = 0; index < arrayNumbers.length; index += 1) {
//     let value = arrayNumbers[index];
//     if (numbers[value] === void 0) {
//       numbers[value] = 1;
//     } else {
//       numbers[value] = numbers[value] + 1;
//     }
//   }
//   let sumRepeated = 0;  
//   for (let key in numbers) {
//     if (sumRepeated < numbers[key]) {
//       sumRepeated = numbers[key];
//     }
//   }
//   return console.log(sumRepeated);
// }
// highestCount([9, 1, 2, 3, 9, 5, 7])

// // Desafio 7
// function catAndMouse(cat1, cat2) {
//   if(cat1 > cat2) {
//     console.log(cat1);
//   } else if (cat1 < cat2) {
//     console.log(cat2);
//   }else{
//     console.log("os gatos trombam e o rato foge")
//   }
//   return console.log
// }
// catAndMouse(10, 10)


// // Desafio 8
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
function fizzBuzz(arrayNumbers) {
  let result = []
  for(let index = 0; index < arrayNumbers.length; index += 1){
    if(arrayNumbers[index] % 3 === 0){
      result.push("fizz");} 
    else if(arrayNumbers[index] % 5 === 0) {
      result.push("buzz");} 
    else if(arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result.push("fizzBuzz");
    } else {
      result.push("bug!");
    }
  }
  return console.log(result)
}
fizzBuzz([2, 15, 7, 9, 45])

// //Desafio 9
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
// function encode(a, e, i, o, u) {
//   a = 1
//   e = 2
//   i = 3
//   o = 4
//   u = 5

// }
// encode("hi there!")

// function decode(a, e, i, o, u) {
  
// }
// decode("h3 th2r2!")
// // Desafio 10
// function techList() {
//   // seu código aqui
// }

// // Desafio 11
// function generatePhoneNumber() {
//   // seu código aqui
// }

// // Desafio 12
// function triangleCheck() {
//   // seu código aqui
// }

// // Desafio 13
// function hydrate() {
//   // seu código aqui
// }


// module.exports = {
//   calcArea,
//   catAndMouse,
//   compareTrue,
//   concatName,
//   decode,
//   encode,
//   fizzBuzz,
//   footballPoints,
//   generatePhoneNumber,
//   techList,
//   highestCount,
//   hydrate,
//   splitSentence,
//   triangleCheck,
// }
