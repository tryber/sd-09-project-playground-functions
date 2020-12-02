// Bora pra cima de mais um projeto :)
// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(vetor) {
  // return `${vetor[vetor.length - 1]}, ${vetor[0]}.`
  let resposta = vetor[vetor.length - 1];
  let resposta2 = vetor[0];
  return (resposta +', ' + resposta2);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let cont = 0;
  for (let index in array){
    if (maiorNumero < array[index]){
      maiorNumero = array[index]
    }
  }
  for (let index2 in array){
    if (maiorNumero === array[index2]){
      cont += 1
    }
  }
  return cont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if(Math.abs(distanciaCat1) < Math.abs(distanciaCat2)){
    return 'cat1'
  }else if (Math.abs(distanciaCat2) < Math.abs(distanciaCat1)){
    return 'cat2'
  }else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index in array){
    if (array[index]%3 === 0 && array[index]%5 === 0){
      newArray[index] = 'fizzBuzz'
    }else if (array[index]%3 === 0){
      newArray[index] = 'fizz'
    }else if (array[index]%5 === 0){
      newArray[index] = 'buzz'
    } else {
      newArray[index] = 'bug!'
    }
  }
  return newArray
}

// Desafio 9
function encode(frase) {
  let newCode = '';
  for (index in frase){
    switch (frase[index]){
      case 'a': 
        newCode += 1;
        break;
      case 'e':
        newCode += 2;
        break;
      case 'i':
        newCode += 3;
        break;  
      case 'o':
        newCode += 4;
        break;
      case 'u':
        newCode += 5;
        break;
      default:
        newCode += frase[index];
    }
  }
  return newCode
}

function decode(frase) {
  let oldCode = '';
  for (index in frase){
    switch (frase[index]){
      case '1': 
        oldCode += 'a';
        break;
      case '2':
        oldCode += 'e';
        break;
      case '3':
        oldCode += 'i';
        break;  
      case '4':
        oldCode += 'o';
        break;
      case '5':
        oldCode += 'u';
        break;
      default:
        oldCode += frase[index];
    }
  }
  return oldCode  
}

// Desafio 10
let vetor = [];
let pessoa = 'Lucas'
function techList(arrayTechs, name) {
  if (arrayTechs.length === 0){
    return 'Vazio!'
  }
  let listaComObjetos = [];
  for (let index = 0; index < arrayTechs.length; index += 1){
    listaComObjetos[index] = {
      Tech:arrayTechs[index], 
      nome: name,}
  }
  return listaComObjetos
}
console.log(techList(vetor, pessoa))

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
