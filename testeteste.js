// function highestNumber(array6) {
//   let index = 0;
//   let highest = 0;
//   let array = [];
//   for (index0 = 0; index0 < array6.length; index0 ++) {
//     array = array.push(array6[index0]);
//   }
//   for (index = 0; index < array6.length; index ++) {
//     if (highest < array6[index]) {
//       highest = array6[index];
//     }
//   }
//   return highest;
// }
// console.log(highestNumber([3, 4, 5, 6, 8, 4]));

//desafio10
// let arraytech = ["react", "phyton", "javascript"];
// let name = "Felipe";
// function techList(arraytech, name) {
//   let arraysort = arraytech.sort;
//   return arraysort

// }
// console.log(techlist(arraytech, name));

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);