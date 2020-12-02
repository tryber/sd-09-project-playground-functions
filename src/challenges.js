// Desafio 1 - PASS
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true
  } return false
}


// Desafio 2 - PASS
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3 - PASS
function splitSentence(texto) {
  if (typeof (texto) === 'string') {
    return texto.split(' ')
  } return 0
}

// Desafio 4 - PASS
function concatName(param) {
  return (`${param[param.length - 1]}, ${param[0]}`)
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

  // console.log( 'numero mais alto = ' + ultimoNumero )

  if (ultimoNumero === 0) {
    for (let key in param) {
      // console.log(param[key])
      if (param[key] === ultimoNumero) {
        qtdNumerosRepetidos += 1
      }
    }
    // console.log('quantidade de números 0 = ' + qtdNumerosRepetidos)
  } else {
    for (let i = 0; i <= ultimoNumero; i += 1) {
      if (param[i] === ultimoNumero) {
        qtdNumerosRepetidos += 1
      }
    }
  }
  return qtdNumerosRepetidos
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 5, 4, 6, 9, 2, 9, 12, 9]))
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
console.log(highestCount([0,0,0,0]))

// Desafio 7 - PASS
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = 0
  let distanciaGato2 = 0

  if (mouse === cat1 && mouse === cat2) return 'os gatos trombam e o rato foge'
  if (mouse === cat1 && mouse !== cat2) return 'cat1'
  if (mouse === cat2 && mouse !== cat1) return 'cat2'
  if (mouse > cat1) {
    for (let i = mouse; i > cat1; i -= 1) {
      distanciaGato1 += 1;
    }
  } else if (mouse < cat1) {
    for (let i = mouse; i < cat1; i += 1) {
      distanciaGato1 += 1;
    }
  }
  // console.log('Distancia do Gato 1: ' + distanciaGato1)
  if (mouse > cat2) {
    for (let i = mouse; i > cat2; i -= 1) {
      distanciaGato2 += 1;
    }
  } else if (mouse < cat2) {
    for (let i = mouse; i < cat2; i += 1) {
      distanciaGato2 += 1;
    }
  }
  // console.log('Distancia do Gato 2: ' + distanciaGato2)
  if (distanciaGato1 > distanciaGato2) {
    return 'cat2'
  } else if (distanciaGato2 > distanciaGato1) {
    return 'cat1'
  } else if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge'
  }
}


// console.log( catAndMouse(4, 5, 1) )
// console.log( catAndMouse(1, 0, 2) ) //precisar ser igual
// console.log( catAndMouse(10, 4, 22) )
// console.log( catAndMouse(0, 3, 2) )

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
