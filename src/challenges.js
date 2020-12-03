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

  if (lastNum === 0) {
    for (let key in param) {
      if (param[key] === lastNum) {
        qtdNumRepeat += 1
      }
    }
  } else {
    for (let i = 0; i <= lastNum; i += 1) {
      if (param[i] === lastNum) {
        qtdNumRepeat += 1
      }
    }
  }
  return qtdNumRepeat
}

// Desafio 7 - PASS
function catAndMouse(mouse, cat1, cat2) {
  let rangeGato1 = 0
  let rangeGato2 = 0

  if (mouse > cat1) {
    for (let i = mouse; i > cat1; i -= 1) {
      rangeGato1 += 1;
    }
  } else if (mouse < cat1) {
    for (let i = mouse; i < cat1; i += 1) {
      rangeGato1 += 1;
    }
  }
  if (mouse > cat2) {
    for (let i = mouse; i > cat2; i -= 1) {
      rangeGato2 += 1;
    }
  } else if (mouse < cat2) {
    for (let i = mouse; i < cat2; i += 1) {
      rangeGato2 += 1;
    }
  }

  switch (mouse) {
    case ((mouse === cat1 && mouse === cat2) || (rangeGato1 === rangeGato2)):
      return 'os gatos trombam e o rato foge'
    case ((mouse === cat1 && mouse !== cat2) || (rangeGato2 > rangeGato1)):
      return 'cat1'
    case ((mouse === cat2 && mouse !== cat1) || (rangeGato1 > rangeGato2)):
      return 'cat2'
    default: return false
  }
}

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
  }

  return textos
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
