// Desafio 4
function concatName(array) {
  let firstAndLast = [array[array.length - 1], array[0]];
  firstAndLast = firstAndLast.join(', ');
  return firstAndLast;
}
let arrayOfNames = ['Roberta', 'Julia', 'João', 'Maria', 'Marcos'];
console.log(concatName(arrayOfNames));