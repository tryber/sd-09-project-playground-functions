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
    if(curr > maiorNumero){
      maiorNumero = curr;
      return 1
    }
    if(curr === maiorNumero) {
      return prev + 1
    }
    return prev
  },0)
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse)
  const distanceCat2 = Math.abs(cat2 - mouse)

  if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge'
  }
  return distanceCat1 < distanceCat2 ? 'cat1':'cat2'
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
