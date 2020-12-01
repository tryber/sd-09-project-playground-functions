// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true

  } else {
    return false

  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
  
}

// Desafio 3
function splitSentence(texto) {  
  if (typeof(texto) === `string` ) {
    return texto.split(' ')

  } else console.log('não é string')
    
}

// Desafio 4
function concatName(param) {
  return ( `${param[0]}, ${param[param.length -1]}`)
  
}

// Desafio 5
function footballPoints(wins, ties) {
  return (`\nPONTUAÇÃO\n` + `Vitórias: ` + wins * 3 + `pontos` + '\nEmpates: ' + ties + `pontos` )

}

// Desafio 6
function highestCount(param) {
  let ultimoNumero = param.sort((a, b) => a - b)[param.length - 1]
  let qtdNumerosRepetidos = 0;

  for (let i = 0; i <= ultimoNumero; i++ ) {
    if (param[i] === ultimoNumero) {
      qtdNumerosRepetidos += 1

    }
  }

  return qtdNumerosRepetidos
  
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let gato1Distancia, gato2Distancia;

  for (let i = mouse;i <= cat1; i += 1) {
    if (mouse <= cat1) gato1Distancia += 1;

    console.log(gato1Distancia)
    
  }
  
  /* for para gato 2

  compara distancia entre gato 1
  compara distancia entre gato 2

  conta quantos passos existem para alcançar o rato
   */
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
