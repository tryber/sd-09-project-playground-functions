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


function highestCount(array) {
    
    let maiorNumero = array[0]
    let contaMaiorNumero = 0
    
    // encontrar o maior valor
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] > maiorNumero){
            maiorNumero = array[index];
        }
    }
    // frequencia do maiorNumero no array
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] == maiorNumero){
            contaMaiorNumero += 1;
        }
    }
    return contaMaiorNumero;
  }
 let array = [9, 1, 2, 3, 9, 5, 7]
console.log(highestCount(array))




// // Desafio 8
// function fizzBuzz(numberArray) {
//     let resultArray = []
//     for (let fizzKey in numberArray) {
//       if (numberArray[fizzKey] % 3 === 0 && numberArray[fizzKey] % 5 === 0) {
//         resultArray.push('fizzBuzz');
//       } else if (numberArray[fizzKey] % 3 === 0) {
//           resultArray.push('fizz');
//       } else if (numberArray[fizzKey] % 5 === 0) {
//           resultArray.push('buzz');
//       } else {
//           resultArray.push('bug!');
//       }
//     }
//     return resultArray
//   }
// console.log(fizzBuzz([2, 15, 7, 9, 45]))