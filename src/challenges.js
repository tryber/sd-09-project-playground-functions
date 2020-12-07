// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaT = 0;
  areaT = (base * height) / 2;
  return areaT
}

// Desafio 3
function splitSentence(string) {
  let splitvar = string.split(' ');
  return splitvar
}

// Desafio 4
function concatName(array) {
  let arrayCom = 0;
  let arrayCom1 = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === array[0]) {
      arrayCom = array[i];
    }
    if (array[i] === array[(array.length - 1)]) {
      arrayCom1 = array[i];
    }
  }
  let final = `${arrayCom1}, ${arrayCom}`;
  return final;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = 3 * wins;
  let empate = 1 * ties;
  let postosTotais = vitoria + empate;
  return pontosTotais
}

// Desafio 6
function highestCount() {
  let high = 0;
  let result = 0;
  for (let i = 0; i <= highestCount.length; i += 1) {
    if (highestCount[i] === high) {
      high = highestCount;
    }
  }
  for (let j = 0; j <= highestCount.length; j += 1) {
    if (highestCount[j] === high) {
      result += 1;
    }
  } return result
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat = 0;
  if (cat1 < cat2) {
    cat = 'cat2';
  } else {
    cat = 'cat1';
  }
  if (cat1 === cat2) {
    let gatos = 'os gatos trombam e o rato foge';
    return gatos
  }
  return cat
}

// Desafio 8
function fizzBuzz(numberArray) {
  let resultado = [];
  for (let i = 0; i <= numberArray.length; i += 1) {
    if ((numberArray[i] % 3 === 0) && (numberArray[i] % 5 === 0)) {
      resultado.push('fizz', 'buzz');
    } else if ((numberArray[i] % 3 === 0)) {
      resultado.push('fizz');
    } else if ((numberArray[i] % 5 === 0)) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado
}

// Desafio 9
function encode(letters) {

  console.log(letter);
  for (let i = 0; i <= letters.length; i += 1) {
    switch (letters[i]) {
      case 'a':
        letters[i] = '1';
        break;
      case 'e':
        letters[i] = '2';
        break;
      case 'i':
        letters[i] = '3';
        break;
      case 'o':
        letters[i] = '4';
        break;
      case 'u':
        letters[i] = '5';
        break;
      default:
        console.log('Repita o processo');
    }
  }
  return letters
}

function decode(letter) {
  let letters = letter.split('');
  console.log(letter);
  for (let i = 0; i <= letters.length; i += 1) {
    switch (letters[i]) {
      case '1':
        letters[i] = 'a';
        break;
      case '2':
        letters[i] = 'e';
        break;
      case '3':
        letters[i] = 'i';
        break;
      case '4':
        letters[i] = 'o';
        break;
      case '5':
        letters[i] = 'u';
        break;
      default:
        console.log('Repita o processo')
    }
  }
  return letters
}

// Desafio 10
function techList(tecnologia, name) {
  let resultado = []
  for (let i in tecnologia) {
    let objeto = {
      tecnologia: tecnologia[i],
      nome: name,
    }
    resultado.push(objeto);
  }
  return resultado
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
