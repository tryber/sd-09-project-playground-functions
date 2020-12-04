let string8 = "Hi BH1 Bra1111A223il Aa Uuo45Oasil";
function encode(string9){
  let object = {"a":"1","e":"2","i":"3","o":"4","u":"5"};
  for (let key in object) {
    let substitute = key;
    let re = new RegExp(substitute,"g");
    string9 = string9.replace(re, object[key]);
  }
return string9;
}
console.log(encode(string8));


function decode(string8) {
        for (let encodeIndex = 0; encodeIndex < string8.length; encodeIndex ++) {
               if (string8.charAt(encodeIndex)== 'a') {
                string8.charAt(encodeIndex) = 1;
                } else if (string8.charAt(encodeIndex) == 'e') {
                string8.charAt(encodeIndex) = 2;
                } else if (string8.charAt(encodeIndex) == 'i') {
                string8.charAt(encodeIndex) = 3;
                } else if (string8.charAt(encodeIndex) == 'o') {
                string8.charAt(encodeIndex) = 4;
                } else if (string8.charAt(encodeIndex) == 'u') {
                string8.charAt(encodeIndex) = 5;
                } 
                return string8;
        }
}        
console.log(decode(string8));
