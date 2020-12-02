// Iniciando Projeto #02

// Desafio 1: JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2: Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
function calcArea(base, height) {
  let triangle = ((base * height) / 2);
  return triangle;
}

// Desafio 3: Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4: Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(array) {
  let firstIndex = array.shift();
  let lastIndex = array.pop();
  return `${lastIndex}, ${firstIndex}`;
}

// Desafio 5: Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato. Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}
console.log(footballPoints(2,2));

// Desafio 6: Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
function highestCount(numbers) {
  let highestNumber = 0;

  for (index in numbers) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
    let repetitionCounterOfHighestNumber = 0;
    for (index2 in numbers) {
      if (numbers[index2] === highestNumber) {
        repetitionCounterOfHighestNumber += 1;
      }
    }
    return repetitionCounterOfHighestNumber;
  }
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
