// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2) {
  return true
}
  return false
}
console.log(compareTrue(0, 2))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
    return area
}
console.log(calcArea(10, 5))

// Desafio 3
  function splitSentence(umaString) {
    return umaString.split(" ")
  }
  console.log(splitSentence("Estou aprendendo a programar com a Trybe"))

// Desafio 4
function concatName(umArray) {
  return umArray[umArray.length - 1] + ', ' + umArray[0]
}
console.log(concatName(['a', 'b', 'c', 'd']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3  + ties
}
console.log(footballPoints(3, 2))

// Desafio 6
function highestCount(numeros) {
  let numMaximo = numeros.reduce(function(a,b){ //reduce vai comparar o item um com o dois, ficar com o maior e comparar com o seguinte, e assim até terminar o array. Também funciona como a soma de Gauss. Fonte : https://developer.mozilla.org/
    return Math.max(a, b);
  })
  let contagemFinal = 0
  for (i = 0 ; i < numeros.length ; i++) {
    if (numeros[i] === numMaximo) {
    contagemFinal += 1
    }
  }
  return contagemFinal
  }
  console.log(highestCount([1, 2, 4, 2 , 4]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let dist1 = Math.abs(mouse - cat1)
let dist2 = Math.abs(mouse - cat2)

if ( dist1 > dist2){
return 'cat2'
} else if (dist1 < dist2) {
return 'cat1'
} else {
return 'os gatos trombam e o rato foge'
}
}
console.log(catAndMouse(-2,10,3))

// Desafio 8
function fizzBuzz(meuArray) {
  let res = []
  for (i = 0 ; i < meuArray.length; i++) {
    if (meuArray[i] % 5 === 0 && meuArray[i] % 3 === 0) {
          res.push('fizzBuzz')
    } else if (meuArray[i] % 3 === 0) {
          res.push('fizz')
    } else if (meuArray[i] % 5 === 0){
          res.push('buzz')
    } else {
          res.push('bug!')
    }
  }
  return res
}

console.log(fizzBuzz([5, 3, 4, 30]))


// Desafio 9
function encode() {
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
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
