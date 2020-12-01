// Projeto 02!!!! o/ Vamos que vamos...
// Desafio 1 - Usando o operador logico &&.
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true){
    return true;
  }
  return false
}
compareTrue(true, false);

// Desafio 2 - Calcular a area do triangulo.
function calcArea(base, height) {
  let areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
}
calcArea(10, 15);

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5 - pontos no futebol
function footballPoints(wins, ties) {
  let calcWins = wins * 3;
  let calcTies = ties;
  let sumPoints  = calcWins + calcTies;
  return sumPoints;
}
footballPoints(5, 2)

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7 - Caça ao rato.
function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1;
  let distanceFromCat2;
  if ( mouse > cat1){
    distanceFromCat1 = mouse - cat1;
  }
  else if (mouse < cat1){
    distanceFromCat1 = cat1 - mouse;
  }
  if ( mouse > cat2){
    distanceFromCat2 = mouse - cat1;
  }
  else if (mouse < cat2){
    distanceFromCat2 = cat2 - mouse;
  }
  if (distanceFromCat1 < distanceFromCat2){
    return 'cat1';
  }
  else if (distanceFromCat1 > distanceFromCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(3,9,17);

// Desafio 8
function fizzBuzz(arrayPassed) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayPassed.length; index += 1){
    if ((arrayPassed[index] % 3 === 0) && (arrayPassed[index] % 5 === 0)){
      arrayFizzBuzz.push("fizzBuzz");
    }
    else if (arrayPassed[index] % 3 === 0){
      arrayFizzBuzz.push("fizz");
    }
    else if (arrayPassed[index] % 5 === 0){
      arrayFizzBuzz.push("buzz");

    } else {
      arrayFizzBuzz.push("bug!")
    }
  }
  console.log(arrayFizzBuzz);
}
let arrayNumbers = [2, 15, 7, 9, 45];
fizzBuzz(arrayNumbers);
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
