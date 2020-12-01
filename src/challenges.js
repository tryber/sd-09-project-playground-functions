// Desafio 1 
function compareTrue(operador1,operador2) {
    if (operador1 === true && operador2 === true){
        return true;
    } else {
        return false;
    }
}

// Desafio 2
function calcArea(base,height) {
  let area= (base*height)/2
return area;
}

// Desafio 3
function splitSentence(string) {
  let frase = " "
  frase = string.split(" ");
  return frase;
}

// Desafio 4
let lista = ["a","b","c"];
function concatName(arrayRetorno) {
  lista= arrayRetorno = arrayRetorno[arrayRetorno.length-1] + ", " + arrayRetorno[0];
  return lista;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos= (wins*3) + ties;
    return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let numeros = [1,3,2,3,3,4,4,5,3];
  let maior = 0;
  let repeticao = 0;
  for (let contador=0;contador<=numeros.lenght;contador++){
if (numeros[contador]>maior){
  maior = numeros[contador];
}
  }
  for (let contador2=0;contador2<=numeros.lenght;contador2++){
    if(contador2===maior){
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(cat1,cat2,mouse) {
  mouse = 10;
  cat1 = 6;
  cat2 = 4;
if((mouse-cat1)<(mouse-cat2)){
return "cat1";
} else if ((mouse-cat1)>(mouse-cat2)){
return "cat2";
}else{
return "os gatos trombam e o rato foge"
}
}


// Desafio 8
function fizzBuzz(numbers) {
  let numbers = [1,2,3,4,5,6,7,8,9];
  for(let contador3=0;contador3<=numbers.lenght;contador3++){
if(numbers[contador3] % 3 === 0 && numbers[contador3] % 5 != 0){
  return "fizz"
}else if (numbers[contador3] % 5 === 0 && numbers[contador3] % 3 !=0) {
  return "buzz"
} else if (numbers[contador3] % 3 === 0 && numbers[contador3] % 5 === 0) {
  return "fizzBuzz"
} else {
return "bug!"
}
  }
 
}

// Desafio 9
// solução encontrada no stackoverflow
function encode(string) {
  let trocaLetras = { a: "1", e: "2", i: "3", o: "4", u: "5"};
  let resultado = "";
  resultado = string.replace(/[aeiou]/gi, (m) => trocaLetras[m]);
  return resultado;
}
function decode(string) {
  let trocaLetras = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  let resultado = "";
  resultado = string.replace(/[12345]/gi, (m) => trocaLetras[m]);
  return resultado;
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
