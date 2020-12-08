// Desafio 1
function compareTrue(valor1, valor2) {
  if ((valor1 === true) && (valor2 === true)) {
    return true;
  }  
    return false;
  
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
  let pontosTotais = vitoria + empate;
  return pontosTotais
}

// Desafio 6
function highestCount(array) {
  let high = 0;
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > high) {
      high = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === high) {
      result += 1;
    }
  } return result
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancemc1 = Math.abs(cat1 - mouse);
  let distancemc2 = Math.abs(cat2 - mouse);
  let mouseEscape = 'os gatos trombam e o rato foge';
  console.log(distancemc2)
  console.log(distancemc1)

  if (distancemc1 < distancemc2) {
      return 'cat1'
  } else if (distancemc2 < distancemc1) {
      return 'cat2'
  } else if (distancemc1 === distancemc2) {
      return mouseEscape
  } else {
      return 'Inválido'
  }

}

// Desafio 8
function fizzBuzz(numberArray) {
  let resultado = [];
  for (let i = 0; i < numberArray.length; i += 1) {
    if ((numberArray[i] % 3 === 0) && (numberArray[i] % 5 === 0)) {
      resultado.push('fizzBuzz');
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
function encode(letter) {
  let letters = letter.split('');
  let result = '';
  for (let i = 0; i < letters.length; i += 1) {
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
    result += letters[i];
  }
  return result
}

function decode(letter) {
  let letters = letter.split('');
  let result = '';
  for (let i = 0; i < letters.length; i += 1) {
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
    result += letters[i];
  }
  return result
}

// Desafio 10
function techList(tecnologia, name) {
  let resultado = [];
  let arrayOr = tecnologia.sort();

  if (tecnologia.length !== 0){
      for (let i in arrayOr) {
          let objeto = {
          tech: arrayOr[i],
          name: name
          }
      resultado.push(objeto);
      }
      return resultado
  }
  return 'Vazio!' 
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
