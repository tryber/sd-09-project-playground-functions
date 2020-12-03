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
  let numOrdered = param.sort((a, b) => a - b)
  let lastNum = numOrdered[param.length - 1]
  let qtdNumRepeat = 0;

  // console.log( 'numero mais alto = ' + lastNum )

  if (lastNum === 0) {
    for (let key in param) {
      // console.log(param[key])
      if (param[key] === lastNum) {
        qtdNumRepeat += 1
      }
    }
    // console.log('quantidade de números 0 = ' + qtdNumRepeat)
  } else {
    for (let i = 0; i <= lastNum; i += 1) {
      if (param[i] === lastNum) {
        qtdNumRepeat += 1
      }
    }
  }
  return qtdNumRepeat
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 5, 4, 6, 9, 2, 9, 12, 9]))
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
// console.log(highestCount([0, 0, 0, 0]))

// Desafio 7 - PASS
function catAndMouse(mouse, cat1, cat2) {
  let rangeGato1 = 0
  let rangeGato2 = 0

  function distantCat(param1, param2, param3) {
    if (param1 === param2 && param1 === param3) {
      return 'os gatos trombam e o rato foge'
    } else if (param1 === param2 && param1 !== param3) {
      return 'cat1'
    } else if (param1 === param3 && param1 !== param2) {
      return 'cat2'
    } else {
      return false
    }
  }

  distantCat(mouse, cat1, cat2)

  if (mouse > cat1) {
    for (let i = mouse; i > cat1; i -= 1) {
      rangeGato1 += 1;
    }
  } else if (mouse < cat1) {
    for (let i = mouse; i < cat1; i += 1) {
      rangeGato1 += 1;
    }
  }
  // console.log('Distancia do Gato 1: ' + rangeGato1)
  if (mouse > cat2) {
    for (let i = mouse; i > cat2; i -= 1) {
      rangeGato2 += 1;
    }
  } else if (mouse < cat2) {
    for (let i = mouse; i < cat2; i += 1) {
      rangeGato2 += 1;
    }
  }
  // console.log('Distancia do Gato 2: ' + rangeGato2)

  function checkCat (param1, param2) {
    if (param1 > param2) {
      return 'cat2'
    } else if (param2 > param1) {
      return 'cat1'
    } else if (param1 === param2) {
      return 'os gatos trombam e o rato foge'
    } else {
      return false
    }
  }

  checkCat(rangeGato1, rangeGato2)
}


// console.log( catAndMouse(4, 5, 1) )
// console.log( catAndMouse(1, 0, 2) ) //precisar ser igual
// console.log( catAndMouse(10, 4, 22) )
// console.log( catAndMouse(0, 3, 2) )

// Desafio 8
function fizzBuzz(dividendo) {
  let textos = []

  function dividePor3e5(param) {
    if ((param % 3 === 0) && (param % 5 === 0)) {
      textos.push('fizzBuzz')
    } else if ((param % 3) === 0) {
      textos.push('fizz')
    } else if ((param % 5) === 0) {
      textos.push('buzz')
    } else textos.push('bug!')
  }

  for (let i = 0; i < dividendo.length; i += 1) {
    dividePor3e5(dividendo[i])
    // textos.push('bug!')
  }

  return textos
}

// ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]
// console.log(2 % 3, 15 % 3, 7 % 3, 9 % 3, 45 % 3)
// console.log(2 % 5, 15 % 5, 7 % 5, 9 % 5, 45 % 5)
// fizzBuzz([ 2, 15, 7, 9, 45])


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
