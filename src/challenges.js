// Desafio 1
function compareTrue(num1, num2) {
  if (num1 === true && num2 === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(frase) {
  let result = []
  result = frase.split(' ')
  return result
}

// Desafio 4
function concatName(name) {
  return name[name.length - 1] + ", " + name[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(number) {
  let highestrepeat = -999999999
  for (let index = 0; index < number.length; index += 1) {
    repeat = 0
    for (let position = 0; position < highestCount.length; position += 1) {
      if (highestCount[index] == highestCount[position]) {
        repeat += 1
      }
    }
    if (repeat > highestrepeat) {
      highestrepeat = repeat
    }
  }
  return highestrepeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = mouse - cat1
  let distcat2 = mouse - cat2
  let result

  if (cat1 == cat2) {
    result = "os gatos trombam e o rato foge"
  }
  else if (distcat1 < distcat2) {
    result = "cat1"
  }
  else if (distcat1 > distcat2) {
    result = "cat2"
  }
  return result
}


// Desafio 8
function fizzBuzz(numbers) {
  let result = []
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
      result.push("fizzBuzz")
    }
    else if (numbers[index] % 3 == 0) {
      result.push("fizz")
    }
    else if (numbers[index] % 5 == 0) {
      result.push("buzz")
    }
    else {
      result.push("bug!")
    }
  }
  return result
}

// Desafio 9
function encode(frase) {
  let code = ""
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] == "a") {
      code += "1"
    }
    else if (frase[index] == "e") {
      code += "2"
    }
    else if (frase[index] == "i") {
      code += "3"
    }
    else if (frase[index] == "o") {
      code += "4"
    }
    else if (frase[index] == "u") {
      code += "5"
    }
    else {
      code += frase[index]
    }
  }
  return code
}

function decode(frase) {
  let code = ""
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] == "1") {
      code += "a"
    }
    else if (frase[index] == "2") {
      code += "e"
    }
    else if (frase[index] == "3") {
      code += "i"
    }
    else if (frase[index] == "4") {
      code += "o"
    }
    else if (frase[index] == "5") {
      code += "u"
    }
    else {
      code += frase[index]
    }
  }
  return code
}

// Desafio 10
function techList(tech, name) {
  let result = []

  for (let index = 0; index < tech.length; index += 1) {
    result.push({ tech: tech[index], name: name })
  }
  return result
}

// Desafio 11
function generatePhoneNumber(numbearray) {
  let numberphone = ""
  if (numbearray.length !== 11) {
    numberphone += "Array com tamanho incorreto"
    return numberphone
  }
  else if (maxrepeat(numbearray) == false) {
    numberphone += "Array com tamanho incorreto numeros repetidos"
    return numberphone
  }

  for (let index = 0; index < numbearray.length; index += 1) {
    if (numbearray[index] < 0 || numbearray[index] > 9) {
      numberphone += "não é possível gerar um número de telefone com esses valores"
      break
    }
    else if (index == 0) {
      numberphone += "(" + numbearray[index]
    }
    else if (index == 1) {
      numberphone += numbearray[index] + ") "
    }
    else if (index == 6) {
      numberphone += numbearray[index] + "-"
    }
    else {
      numberphone += numbearray[index]
    }
  }
  return numberphone
}
function maxrepeat(numbers) {

  let maxrepeat = -10
  for (let index = 0; index < numbers.length; index += 1) {
    let repeat = 0
    for (let position = 0; position < numbers.length; position += 1) {
      if (numbers[index] == numbers[position]) {
        repeat += 1
      }
    }
    if (repeat > maxrepeat) {
      maxrepeat = repeat
    }
  }
  if (maxrepeat >= 3) {
    return false
  }
  else {
    return true
  }
}

console.log(generatePhoneNumber([5, 1, 3, 4, 5, 6, 7, 8, 9, 0, 1]))
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


//auxiliares


