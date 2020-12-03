let string8 = "Hi Braaaasil Aa UuooO";
let object = {"a":"1","e":"2","i":"3","o":"4","u":"5"}

for (let key in object) {
  let substitute = key;
  let re = new RegExp(substitute,"g");
  string8 = string8.replace(re, object[key]);
}

console.log(string8);

// for (let key in object) {
//   //console.log([key] + " " + object[key]);
//   string8 = string8.replace(key, object[key]); 
// }
// for (let key in object) {
//   //console.log([key] + " " + object[key]);
//   string8 = string8.replace(key, object[key]); 
// }
// console.log(string8);

// String.replaceAll = function(replaceThis, withThis) {
//   this.replace(/replaceThis/g, withThis);
// };

// Exemplo com RegExp
// var replace = "a";
// var re = new RegExp(replace,"g");

// console.log(re);
// string8 = string8.replace(re, "1");
// console.log(string8);