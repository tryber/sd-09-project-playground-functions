// Desafio 1
// function compareTrue(value1, value2) {  
//   if( value1 === true && value2 === true){
//     console.log(true);
//   }else{
//     console.log(false);
//   }
//   return console.log;
// }
// compareTrue(true, true);

// Desafio 2

// function calcArea(base, height) {
//   let triangle = []
//   triangle = ((base * height)/2);
//   return triangle
// }
// console.log(calcArea(10, 5))

// // Desafio 3
// function splitSentence(splitSentence) {
//   let string = splitSentence
//   return console.log(string.split(' '))
// }
// splitSentence('go Trybe')

// // Desafio 4

// function concatName(arraySTR) {
//   let string = arraySTR.reverse(' ')
//   return console.log(string)
// }
// concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])

// // Desafio 5
// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  let totalPoints = (wins*3) + ties;
  return console.log(totalPoints)
}
footballPoints(10, 5)



// // Desafio 6
// function highestCount() {
//   // seu código aqui
// }

// // Desafio 7
// function catAndMouse() {
//   // seu código aqui
// }

// // Desafio 8
// function fizzBuzz() {
//   // seu código aqui
// }

// // Desafio 9
// function encode() {
//   // seu código aqui
// }
// function decode() {
//   // seu código aqui
// }

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
