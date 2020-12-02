// BORA PARA MAIS UM PROJETO!!
// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 && boolean2 === true){
    return true;
  } else {
    return false;
  }
} compareTrue(true,true)

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
} calcArea(4,8)

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
let arrayFrase = frase.split(" ")
return arrayFrase
} splitSentence('go Trybe')

// Desafio 4
function concatName(arrayString = []) {
  // seu código aqui
 return contrario = (arrayString[arrayString.length - 1] + ',' + ' ' + arrayString[0])
} concatName(['ovos', 'leite', 'pizza'])
console.log(contrario)

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui\
  wins = wins * 3
  return totalPontos = wins + ties
} footballPoints(4,3)


// Desafio 6
function highestCount(numeros = []) {
  // seu código aqui
  maiorValor = 0
  quantidade = 0
  for (contador = 0; contador < numeros.length; contador += 1){
    if (numeros[contador] > maiorValor){
      maiorValor = numeros[contador]
    }
  } for (index = 0; index < numeros.length; index += 1){
    if (numeros[index] === maiorValor){
      quantidade = quantidade + 1
    }
  } return quantidade
} highestCount([9, 1, 2, 3, 9, 5, 7, 9])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  distancia1 = Math.abs(mouse - cat1) 
  distancia2 = Math.abs(mouse - cat2)
  if (distancia1 < distancia2){
    return "cat1"
  } else if (distancia2 < distancia1){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
} catAndMouse(10,14,10)
  

// Desafio 8
function fizzBuzz(numeros = []) {
  // seu código aqui
  divisiveis = []
  for (contador = 0; contador < numeros.length; contador += 1){
    if (numeros[contador] % 3 === 0 && numeros[contador] % 5 > 0){
      divisiveis.push("fizz")
    } else if (numeros[contador] % 5 === 0 && numeros[contador] % 3 > 0){
      divisiveis.push("buzz")
    } else if (numeros[contador] % 5 === 0 && numeros[contador] % 3 === 0){
      divisiveis.push("fizzBuzz")
    } else if (numeros[contador] % 5 > 0 && numeros[contador] % 3 > 0) {
      divisiveis.push("bug!")
    }
  } 
  return divisiveis
}fizzBuzz([2, 15, 7, 9, 45])

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
