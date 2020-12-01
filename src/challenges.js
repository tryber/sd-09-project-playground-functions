// PASS
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true

  } else false
}

// FAIL
function calcArea(base, height) {
  /* if (((base * height) / 2) <=  ) {
    return true

  } */

}

// PASS
function splitSentence(texto) {
  if ( typeof (texto) === "string") {
    return texto.split(' ')
}
}

// PASS
function concatName(param) {
  return (`${param[param.length -1]}, ${param[0]}`)

}

// Verificar
function footballPoints(wins, ties) {
  return (wins * 3) + ties

}

// Desafio 6
function highestCount(param) {
  let ultimoNumero = param.sort((a, b) => a - b)[param.length - 1]
  let qtdNumerosRepetidos = 0;

  console.log( 'numero mais alto = ' + ultimoNumero )

  for (let i = 0; i <= ultimoNumero; i++ ) {
    if (param[i] === ultimoNumero) {
      qtdNumerosRepetidos += 1

    }
  }

  return qtdNumerosRepetidos

}

//console.log( highestCount([9, 1, 2, 3, 9, 5, 7, 5, 4, 6, 9, 2, 9, 12, 9]) )
//console.log( highestCount([9, 1, 2, 3, 9, 5, 7]) )

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1Distancia = 0, gato2Distancia = 0;

  for (let i = mouse;i <= cat1; i += 1) {
    if (i >= cat1) gato1Distancia += 1;

    //console.log(gato1Distancia)

  }

  /* for para gato 2

  compara distancia entre gato 1
  compara distancia entre gato 2

  conta quantos passos existem para alcançar o rato
   */
}

//catAndMouse(3, 5)

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
