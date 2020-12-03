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
function encode(frase) {
  // seu código aqui
  nova = ''
  for (contador = 0; contador < frase.length; contador += 1){
    let letra = (frase[contador])
    if (letra != 'a' && letra != 'e' && letra != 'i' && letra != 'o' && letra != 'u'){
      nova = nova + letra
    } else if (letra == 'a'){
      nova = nova + '1'
    } else if (letra == 'e'){
      nova = nova + '2'
    } else if (letra == 'i'){
      nova = nova + '3'
    } else if (letra == 'o'){
      nova = nova + '4'
    } else if (letra == 'u'){
      nova = nova + '5'
    }
  }
return nova
}encode('hi there!')


function decode(frase2) {
  // seu código aqui
  nova2 = ''
  for (index = 0; index < frase2.length; index += 1){
    let letra2 = (frase2[index])
    if (letra2 != '1' && letra2 != '2' && letra2 != '3' && letra2 != '4' && letra2 != '5'){
      nova2 = nova2 + letra2
    } else if (letra2 == '1'){
      nova2 = nova2 + 'a'
    } else if (letra2 == '2'){
      nova2 = nova2 + 'e'
    } else if (letra2 == '3'){
      nova2 = nova2 + 'i'
    } else if (letra2 == '4'){
      nova2 = nova2 + 'o'
    } else if (letra2 == '5'){
      nova2 = nova2 + 'u'
    }
  }
return nova2
}decode("h3 th2r2!")

// Desafio 10
function techList(arrayTechs, name) {
  // seu código aqui
  arrayFinal = []
  arrayFinal2 = []
  for (contador = 0; contador < arrayTechs.length; contador += 1){
    arrayFinal.push(obj = {
      tech: arrayTechs[contador],
      name: name,
    })
  } if (arrayTechs === null){
    arrayFinal2 = 'Vazio!'
    console.log(arrayFinal2)
    return arrayFinal2
    
  } else {
    for (index = 1; index <= arrayFinal.length; index += 1){
      arrayFinal2.push(arrayFinal[arrayFinal.length - index])
    }
    console.log(arrayFinal2)
    return arrayFinal2
  } 
  
}techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Matheus")

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
