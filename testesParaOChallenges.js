// EX 5 COMENTADO
// function footballPoints(wins, ties) {
// pontos = wins * 3 + ties 
//   return pontos
// } 
// console.log(footballPoints(5,2))

// // Desafio 3
// let array = 'go trybe'
// function splitSentence(arrayDeStrings) {
//    let divisor = arrayDeStrings.split(' ');
//    console.log(divisor);
//    return arrayDeStrings;
//   }
//   console.log(splitSentence(array));


// // Desafio 1
// function compareTrue(values1, values2) {
//     if (values1 === true && values2 === true){
//         return true;
// } 
//    return false;
//   }
//   console.log(compareTrue(false, true))


// // Desafio 4
// function concatName(arrayDeStrings) {
//    let lastFirst = arrayDeStrings.pop()
//    return lastFirst + ', ' + arrayDeStrings[0]
//   }
//   let arrayDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
//   console.log(concatName(arrayDeNomes))


// // Desafio 2
// // seu código aqui
// function calcArea(base, height) {
//     // seu código aqui
//     return (base * height) / 2
//   }
//   console.log(calcArea(10, 2))




// Desafio 6
// function highestCount() {
//     // seu código aqui
//   }


function highestCount(testArray) {
  let max = 0;
  let result;
  let freq = 0;
  for(let index = 0; index < testArray.length; index += 1) {
      if (testArray[index] === testArray[index+1]) {
          freq += 1;
      } else {
          freq = 0;
      } if (freq > max) {
          result = testArray[index];
          max = freq;
      }
      return result;
  }
let testArray = [9, 1, 2, 3, 9, 5, 7];  
console.log(highestCount(testArray));
}