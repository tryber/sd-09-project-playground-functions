// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true){
    return true
  } else {
    return false 
  }
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area; 
}

// Desafio 3
function splitSentence(string) {
    let stringSplit = string.split(' ');
    return stringSplit;
}

// Desafio 4
function concatName(array) {
  let newString =`${array[array.length - 1]}, ${array[0]}`;
    return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  let pontosEmpates = ties * 1;
  let pontosTotais = pontosVitorias + pontosEmpates;
  return pontosTotais;
}

// Desafio 6
function highestCount(array) {
  function findHighestNumber(){
    let highestNumber = 0;
    for (let index in array){
      if (array[index] > highestNumber){
      highestNumber = array[index]
      }
    }
    return highestNumber
  } 
  let highestNumber = findHighestNumber(array);
  
  function timesRepeat (parm1){
    let howManyTimesRepeat = 0
    for (let index in array){
      if (array[index] === parm1){
        howManyTimesRepeat += 1
      }
    }
    return howManyTimesRepeat
  }

  let howManyTimesRepeat = timesRepeat(highestNumber)
  return howManyTimesRepeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);

  if (distancia1 < distancia2){
    return 'cat1';
  } else if (distancia1 > distancia2) {
    return 'cat2';
  } else if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
    for (let index in array){
      if (array[index] % 3 === 0 && array[index] % 5 !== 0){
        newArray.push('fizz')
      } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
        newArray.push('buzz')
      } else if (array[index] % 3 === 0 && array[index] % 5 === 0){
        newArray.push('fizzBuzz')
      } else {
        newArray.push('bug!')
      }
    }
    return newArray
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
