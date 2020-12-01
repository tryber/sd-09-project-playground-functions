// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(name) {
  return name.split(' ')
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + (1 * ties)
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  function distanceTwoPoints(a,b) {
    let quadrado 
    quadrado = (a-b)**2;
    return Math.sqrt(quadrado);
}
if (distanceTwoPoints(mouse, cat1) < distanceTwoPoints(mouse, cat2)){
    return 'cat1';
} else if (distanceTwoPoints(mouse, cat1) > distanceTwoPoints(mouse, cat2)) {
    return 'cat2';
} else {
    return "os gatos trombam e o rato foge"
} 
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
function triangleCheck(lineA, lineB, lineC) {
  if(lineA + lineC > lineB && Math.abs(lineA - lineC) < lineB){
    return true;
} else if((lineA + lineB) > lineC && Math.abs(lineA - lineB) < lineC){
    return true;
} else if((lineB + lineC) > lineA && Math.abs(lineB - lineC) < lineA){
    return true;
} else {
    return false;
}
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
