/* Projeto: Playground Functions;
   Aluno: Julio Henrique Thosi;
   Turma: 09; */
   
// Desafio 1
function compareTrue(vd1_1,vd1_2) {
  if(vd1_1 === true && vd1_2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(vd3) {
  return vd3.split(" ");
}

// Desafio 4
function concatName(vd4) {
  return vd4[vd4.length-1] + ', ' + vd4[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  let teamPoints = (wins*3) + ties;
  return teamPoints;
}

// Desafio 6
function highestCount(vd6) {
  let maior = 0;
  let qtdeMaior = 0;
  for(let index = 0; index < 8; index += 1){
    if(maior < vd6[index]){
      maior = vd6[index];
    }
  }
  for(index = 0; index < 8; index += 1){
    if(maior === vd6[index]){
      qtdeMaior += 1;
    }
  }
  return qtdeMaior;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distIgual = 'os gatos trombam e o rato foge';
  let cat1s = 'cat1';
  let cat2s = 'cat2';
  if(cat1 === cat2)
    return distIgual;
  else if ((mouse - cat1) < (mouse - cat2)
    return cat1s;
  else if ((mouse - cat) > (mouse - cat2))
    return cat2s;
}

// Desafio 8
function fizzBuzz(vd8) {
  let result;

  for(let index = 0; index < vd8.length; index += 1){
    if (vd8[index] % 3 === 0 && vd8[index] % 5 === 0)
    result.push = 'fizzBuzz';
    else if(vd8[index] % 3 === 0)
    result.push = 'fizz';
    else if (vd8[index] % 5 === 0)
    result.push = 'buzz';
    else
    result.push = 'bug!';
  }
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
