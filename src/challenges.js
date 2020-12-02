// Desafio 1
function compareTrue(primeiroParamentro, segundoParamentro) {
  return primeiroParamentro && segundoParamentro
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
/**
 *
 * @param {string} sentence
 */
function splitSentence(sentence) {
  return sentence.split(' ')
}

// Desafio 4
/**
 *
 * @param {Array<string>} items
 */
function concatName(items) {
  const [primeiroItem] = items
  const ultimoItem = items[items.length - 1]
  return `${ultimoItem}, ${primeiroItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
/**
 * @param {number[]} numbers
 */
function highestCount(numbers) {
  let maiorNumero = numbers[0]
  return numbers.reduce((prev, curr) => {
    if (curr > maiorNumero) {
      maiorNumero = curr;
      return 1
    }
    if (curr === maiorNumero) {
      return prev + 1
    }
    return prev
  }, 0)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse)
  const distanceCat2 = Math.abs(cat2 - mouse)

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge'
  }
  return distanceCat1 < distanceCat2 ? 'cat1' : 'cat2'
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz'
    }
    if (number % 3 === 0) {
      return 'fizz'
    }
    if (number % 5 === 0) {
      return 'buzz'
    }
    return 'bug!'
  })
}

// Desafio 9
/**
 * @param {String} string
 */
function encode(string) {
  let encryptedString = ''
  for (const char of string) {
    switch (char) {
      case 'a':
        encryptedString += '1'
        break;
      case 'e':
        encryptedString += '2'
        break;
      case 'i':
        encryptedString += '3'
        break;
      case 'o':
        encryptedString += '4'
        break;
      case 'u':
        encryptedString += '5'
        break;

      default:
        encryptedString += char
        break;
    }
  }
  return encryptedString
}
/**
 * @param {String} string
 */
function decode(string) {
  string = string.replace(/1/g, 'a')
  string = string.replace(/2/g, 'e')
  string = string.replace(/3/g, 'i')
  string = string.replace(/4/g, 'o')
  string = string.replace(/5/g, 'u')
  return string
}

/* Apos ver o codigo do Renato Feitosa me veio a ideia de refatorar esta parte */
/**
 * @param {string} fisrtString
 * @param {string} secondString
 * @return {[string, string]}
 */
function changePositionArray(fisrtString, secondString) {
  if (fisrtString > secondString)
    return [secondString, fisrtString]
  else
    return [fisrtString, secondString]
}

/**
 * @param {string[]} strings
 */
function ascOrderArrayString(strings) {
  for (let i = 0; i < strings.length; i += 1) {
    for (let j = i + 1; j < strings.length; j += 1) {
      const [firstString, secondString] = changePositionArray(strings[i], strings[j])
      strings[i] = firstString
      strings[j] = secondString
    }
  }
  return strings
}

// Desafio 10
/**
 *
 * @param {String[]} technologies
 * @param {String} name
 */
function techList(technologies, name) {
  if (!technologies.length) return 'Vazio!'
  const sortedTechnologies = ascOrderArrayString(technologies)
  return sortedTechnologies.map(tech => ({ tech, name }))
}

/**
 * @param {number} number
 * @param {number[]} arrayNumbers
 * @return {boolean}
 */
function numberRepeatMoreOrThan3(number, arrayNumbers) {
  let counter = 0
  for (const numberOfArray of arrayNumbers) {
    if (number === numberOfArray) {
      counter += 1
    }
    if (counter >= 3) {
      return true
    }
  }
  return false
}

// Desafio 11
/**
 * @param {number[]} numbers
 */
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.'
  if (!numbers.every(number => !numberRepeatMoreOrThan3(number, numbers))) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  if (!numbers.every(number => number >= 0 && number <= 9)) {
    return 'não é possível gerar um número de telefone com esses valores'
  }
  return `(${numbers.slice(0, 2).join('')}) ${numbers.slice(2, 7).join('')}-${numbers.slice(7, 11).join('')}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true
  }

  return false
}

// Desafio 13
/**
 * @param {string} bebidas
 */
function hydrate(bebidas) {
  const numbers = bebidas.match(/\d/g)
  const sum = numbers.reduce((prev, curr) => Number(curr) + Number(prev), 0)
  if (sum === 1) {
    return `${sum} copo de água`
  } else if (sum > 1) {
    return `${sum} copos de água`
  }
  return 'nenhum copo de água'
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
