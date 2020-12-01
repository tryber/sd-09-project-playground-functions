// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true){
    return true
  }
  else{
    return false
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(string1) {
  let final = string1.split(' ');
  return final
  // seu código aqui
}

// Desafio 4
function concatName(arrayN) {
  let ultPri = ""
  ultPri = arrayN[0] + ", " + arrayN[arrayN.length -1]
  return ultPri
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (i= 1; i<= wins; i++){
    points += 3
  }
  for (j = 1; j<= ties; j++){
    poins += 1
  }
  return points
  // seu código aqui
}

// Desafio 6
let teste = [9, 1, 2, 3, 9, 5, 7];
function highestCount(numbers) {
  let dicionario ={};
  let maiorN = 1;
  for (i in numbers){
        if (!(numbers[i] in dicionario)) {
            dicionario[numbers[i]] = 1
        }
        else {
            dicionario[numbers[i]] += 1
        }
    }
  for (j in dicionario){
        if (j > maiorN){
            maiorN = j
        }
    }
  return dicionario[maiorN];
  // seu código aqui
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let difCat1Mouse = Math.abs(cat1 - mouse)
  let difCat2Mouse = Math.abs(cat2 - mouse)
  if (difCat1Mouse < difCat2Mouse){
    return console.log('cat1')
  }
  else if (difCat2Mouse < difCat1Mouse){
    return console.log('cat2')
  }
  else{
    return console.log("os gatos trombam e o rato foge")
  }
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
