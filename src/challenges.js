// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(value) {
  return value.split(' ')
}

// Desafio 4
function concatName(value) {
  const newArray = []
  const lastValue = `${value[value.length - 1]},`
  newArray.push(lastValue)
  const firstValue = `${value[0]}`
  newArray.push(firstValue)
  return newArray.join(' ')
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(valueArray) {
  const maxValue = valueArray.sort()[valueArray.length - 1]
  let count = 0
  for (let i = 0; i < valueArray.length; i += 1) {
    if (valueArray[i] === maxValue) {
      count += 1
    }
  }
  return count
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const mouseCat1Distance = Math.abs(cat1 - mouse)
  const mouseCat2Distance = Math.abs(cat2 - mouse)
  if (mouseCat1Distance < mouseCat2Distance) {
    return 'cat1'
  } else if (mouseCat2Distance < mouseCat1Distance) {
    return 'cat2'
  } else if (mouseCat1Distance === mouseCat2Distance) {
    return 'os gatos trombam e o rato foge'
  }
  return 'fails'
}

function selectFizzBuzz(value) {
  if (value % 3 === 0 && value % 5 !== 0) {
    return 'fizz'
  } else if (value % 5 === 0 && value % 3 !== 0) {
    return 'buzz'
  } else if (value % 3 === 0 && value % 5 === 0) {
    return 'fizzBuzz'
  }
  return 'bug!'
}

// Desafio 8
function fizzBuzz(valueArray) {
  const resultArray = []
  for (let i = 0; i < valueArray.length; i += 1) {
    resultArray.push(selectFizzBuzz(valueArray[i]))
  }
  return resultArray
}

function parse(value) {
  if (value === 'a') {
    return 1
  } else if (value === 'e') {
    return 2
  } else if (value === 'i') {
     return 3
  } else if (value === 'o') {
    return 4
  } else if (value === 'u') {
    return 5
  }
  return value
}

function unparse(value) {
  if (value === '1') {
    return 'a'
  } else if (value === '2') {
    return 'e'
  } else if (value === '3') {
    return 'i'
  } else if (value === '4') {
    return 'o'
  } else if (value === '5') {
    return 'u'
  }
  return value
}



// Desafio 9
function encode(value) {
  let valueArr = value.split('')
  for (let i = 0; i < valueArr.length; i += 1) {
    valueArr[i] = parse(valueArr[i])
  }
  return valueArr.join('')
}
function decode(value) {
  let valueArrDecode = value.split('')
  for (let i = 0; i < valueArrDecode.length; i += 1) {
    valueArrDecode[i] = unparse(valueArrDecode[i])
  }
  return valueArrDecode.join('')
}

// Desafio 10
function techList(techArr, name) {
  let arrayL = []
  if(techArr.length === 0){
    return "Vazio!"
  }
  const techSorted = techArr.sort()
  for (let i = 0; i < techArr.length; i += 1) {
    const objj = {
      tech: techSorted[i],
      name: name
    }
    arrayL.push(objj)
  }

  return arrayL
}

// Desafio 11
function generatePhoneNumber(value) {
  if (value.length > 11 || value.length < 11) {
    return "Array com tamanho incorreto."
  }
  for (let i = 0; i < value.length; i += 1) {
    let repeatTimes = 0
    for (let j = 0; j < value.length; j += 1) {
      if (value[i] === value[j]) {
        repeatTimes += 1
      }
    }
    if (value[i] < 0 || value[i] > 9 || repeatTimes >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  return `(${value[0]}${value[1]}) ${value.slice(2, 7).join('')}-${value.slice(7).join('')}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const differenceBC = lineB - lineC
  const differenceAC = lineA - lineC
  const differenceBA = lineB - lineA
  console.log(differenceBA)
  console.log(differenceAC)
  console.log(differenceBA)
  if (
    lineA > lineB + lineC ||
    lineC > lineB + lineA ||
    lineB > lineA + lineC
    &&
    lineA < Math.abs(differenceBC) ||
    lineB < Math.abs(differenceAC) ||
    lineC < Math.abs(differenceBA)
    ){
    return false
  }
  return true
}

console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(value) {
   const arr = value.split('')
    let drinkTimes = 0
   for (let i = 0; i < arr.length; i += 1) {
    if (
      arr[i] === '1' ||
      arr[i] === '2' ||
      arr[i] === '3' ||
      arr[i] === '4' ||
      arr[i] === '5' ||
      arr[i] === '6' ||
      arr[i] === '7' ||
      arr[i] === '8' ||
      arr[i] === '9' ||
      arr[i] === '0'
      ) {
      drinkTimes += parseInt(arr[i])
    }
  }
  if (drinkTimes === 1) {

  return `${drinkTimes} copo de água`
  }

  return `${drinkTimes} copos de água`
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
