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

// Desafio 3 - Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original. Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
function splitSentence(stringToSplit) {
  let arraySplit = [];
  splitingString = '';
  for (let index = 0; index < stringToSplit.length; index += 1){
    if (stringToSplit[index] != ' '){
      splitingString += stringToSplit[index];
    } else {
      arraySplit.push(splitingString);
    }
  }
  console.log(arraySplit);
}
splitSentence('go Trybe');
// Desafio 4 - Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

function concatName(arrayNames) {
  let stringNamesFromArray = [];
  for (let index = arrayNames.length; index >= 0; index -= 1){
    if (index + arrayNames.length === arrayNames.length){
      stringNamesFromArray.push(arrayNames[index]);
    }
    else if (index + (arrayNames.length + 1) === arrayNames.length * 2){
      stringNamesFromArray.push(arrayNames[index]);
    }
  }
  return stringNamesFromArray.join();
}
let arrayExemplos =  ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(arrayExemplos);
// Desafio 5 - pontos no futebol
function footballPoints(wins, ties) {
  let calcWins = wins * 3;
  let calcTies = ties;
  let sumPoints  = calcWins + calcTies;
  return sumPoints;
}
footballPoints(5, 2)

// Desafio 6 - Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
function highestCount(arrayOfNumbers) {
  let highestNumber = 0;
  let contMumbTurns = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1){
    if (arrayOfNumbers[index] > highestNumber){
      highestNumber = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1){
    if (highestNumber === arrayOfNumbers[index]){
      contMumbTurns += 1;
    }
  }
  return contMumbTurns;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);
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
catAndMouse(3, 9, 17);

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
  return arrayFizzBuzz;
  console.log(arrayFizzBuzz);
}
let arrayNumbers = [2, 15, 7, 9, 45];
fizzBuzz(arrayNumbers);

// Desafio 9 - Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
/*
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/

function encode(stringtoChange) {
  let novaString = "";
  for (let index = 0; index<stringtoChange.length; index += 1){
    if (stringtoChange[index] === 'a'){
      novaString += '1';
    }
    else if (stringtoChange[index] === 'e'){
    novaString += '2';
    }
    else if (stringtoChange[index] === 'i'){
    novaString += '3';
    }  
    else if (stringtoChange[index] === 'o'){
      novaString += '4';
    }
    else if (stringtoChange[index] === 'u'){
      novaString += '5';
    } else {
      novaString += stringtoChange[index];
    }
  }
  return novaString;

}
encode('hi there!');

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

function decode(stringtoChange) {
  let novaString = "";
  for (let index = 0; index<stringtoChange.length; index += 1){
    if (stringtoChange[index] === '1'){
      novaString += 'a';
    }
    else if (stringtoChange[index] === '2'){
    novaString += 'e';
    }
    else if (stringtoChange[index] === '3'){
    novaString += 'i';
    }  
    else if (stringtoChange[index] === '4'){
      novaString += 'o';
    }
    else if (stringtoChange[index] === '5'){
      novaString += 'u';
    } else {
      novaString += stringtoChange[index];
    }
  }
  return novaString;
}
decode('h4j2 t2m p3zz1, v35!!!');
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
