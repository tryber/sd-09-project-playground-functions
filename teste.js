<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.2</title>
    <style>
      div {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>let string8 = "Hi Braaaasil Aa UuooO";
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