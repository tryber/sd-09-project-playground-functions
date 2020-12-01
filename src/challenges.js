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
  let wins;
    let ties;
    let pointsWin= 3;
    let pointsTie= 1;
    let totalPoints= (wins*pointsWin) + (ties*pointsTie);
    return totalPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
