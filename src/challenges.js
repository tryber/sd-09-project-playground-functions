// Desafio 1
function compareTrue(bol1, bol2) {
  // seu código aqui
  if (bol1 && bol2) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let stringArray = []
  stringArray = string.split(' ')
  return stringArray
}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  let firstItem = stringArray.shift()
  let lastItem = stringArray.pop()
  let stringConcat = `${lastItem}, ${firstItem}`
  return stringConcat
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins * 3) + ties
  return points
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maior = 0
  let quantidade = 0

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index]
      quantidade = 1
    } else if (array[index] === maior) {
      quantidade += 1
    }
  }
  return quantidade
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz'
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz'
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz'
    } else {
      array[index] = 'bug!'
    }
  }
  return array
}

// Desafio 9
function encode() {
  // seu código aqui
  let string = 'Boa tarde, iluminados!'
  let stringAux = ''
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      stringAux += '1'
    } else if (string[index] === 'e') {
      stringAux += '2'
    } else if (string[index] === 'i') {
      stringAux += '3'
    } else if (string[index] === 'o') {
      stringAux += '4'
    } else if (string[index] === 'u') {
      stringAux += '5'
    } else {
      stringAux += string[index]
    }
  }
  return stringAux
}
function decode(numbers) {
  // seu código aqui
  let stringAux = ''
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === '1') {
      stringAux += 'a'
    } else if (numbers[index] === '2') {
      stringAux += 'e'
    } else if (numbers[index] === '3') {
      stringAux += 'i'
    } else if (numbers[index] === '4') {
      stringAux += 'o'
    } else if (numbers[index] === '5') {
      stringAux += 'u'
    } else {
      stringAux += numbers[index]
    }
  }
  return stringAux
}

// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let rawArray = []
  for (let index = 0; index < techArray.length; index += 1) {
    let techObject = {}
    techObject.tech = techArray[index]
    techObject.name = name
    rawArray.push(techObject)
  }
  if (rawArray.length === 0) {
    console.log('Vazio!')
  } else {
    console.log(sortList(rawArray))
  }

  function sortList(arr) {
    let sortedArray = arr.sort(function (a, b) {
      var techA = a.tech.toUpperCase();
      var techB = b.tech.toUpperCase();
      if (techA < techB) {
        return -1;
      }
      if (techA > techB) {
        return 1;
      }
      return 0;
    })
    return sortedArray
  }
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
