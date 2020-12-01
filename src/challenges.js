// Desafio 1 - PASS
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true

} return false
}


// Desafio 2 - Verificação
function calcArea(base, height) {
  return (base * height) / 2

}

// Desafio 3 - PASS
function splitSentence(texto) {
  if ( typeof (texto) === "string") {
    return texto.split(' ')

}}

// Desafio 4 - PASS
function concatName(param) {
  return (`${param[param.length -1]}, ${param[0]}`)

}

// Desafio 5 - PASS
function footballPoints(wins, ties) {
  return (wins * 3) + ties

}

// Desafio 6 -- PASS
function highestCount(param) {
  let numerosOrdenados = param.sort((a, b) => a - b)
  let ultimoNumero = numerosOrdenados[param.length - 1]
  let qtdNumerosRepetidos = 0;

  //console.log( 'numero mais alto = ' + ultimoNumero )

  if (ultimoNumero === 0) {
    for (key in param) {
      //console.log(param[key])
      if (param[key] === ultimoNumero) {
        ++qtdNumerosRepetidos
}}

    //console.log( 'quantidade de números 0 = ' + qtdNumerosRepetidos )
  } else {

  for (let i = 0; i <= ultimoNumero; i++ ) {
    if (param[i] === ultimoNumero) {
      qtdNumerosRepetidos += 1

}}}

  return qtdNumerosRepetidos

}

//console.log( highestCount([9, 1, 2, 3, 9, 5, 7, 5, 4, 6, 9, 2, 9, 12, 9]) )
//console.log( highestCount([9, 1, 2, 3, 9, 5, 7]) )
//console.log( highestCount([0,0,0,0]) )

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
