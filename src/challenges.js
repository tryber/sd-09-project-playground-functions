// Projeto
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  let result = text.split(' ');
  return result;
}

// Desafio 4
function concatName(array) {
  let result = `${array[(array.length - 1)]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let result = 0;
  let value = Math.max.apply(null, array);
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === value) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = 'os gatos trombam e o rato foge';
  let c1 = 0;
  let c2 = 0;
  if (mouse > cat1) {
    c1 = mouse - cat1;
  } else {
    c1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    c2 = mouse - cat2;
  } else {
    c2 = cat2 - mouse;
  }
  if (c1 < c2) {
    result = 'cat1';
  } else if (c2 < c1) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      result[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      result[index] = 'buzz';
    } else {
      result[index] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function encode(text) {
  let string = text;
  let vogais = ['a', 'e', 'i', 'o', 'u']
  for (let index = 0; index < string.length; index += 1) {
    for (let cont = 0; cont < vogais.length; cont += 1) {
      if (string[index] === vogais[cont]) {
        string = string.replace(string[index], (cont + 1));
      }
    }
  }
  return string;
}

function decode(text) {
  let string = text;
  let vogais = ['a', 'e', 'i', 'o', 'u']
  for (let index = 0; index < string.length; index += 1) {
    for (let cont = 0; cont < vogais.length; cont += 1) {
      if (string[index] == (cont+1)) {
        string = string.replace(string[index], vogais[cont]);
      }
    }
  }
  return string;
}

// Desafio 10
function techList(arrayTech, name) {
  let technologies = arrayTech;
  let selectName = name;
  let object = [];
  if (technologies.length !== 0) {
    technologies.sort();
    for (let index = 0; index < technologies.length; index += 1) {
      object.push({
        tech: technologies[index],
        name: selectName,
      })
    }
    return object;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let result = '';
  if (arrayNumber.length === 11) {
    for (let index = 0; index < arrayNumber; index += 1) {
      if (arrayNumber[index] < 0 || arrayNumber[index] > 9) {
        result = 'não é possível gerar um número de telefone com esses valores';
        return result;
      }
      if (index > 1) {
        for (let index2 = 2; index2 < arrayNumber; index2 += 1) {
          if (arrayNumber[index] === arrayNumber[index2]) {
            cont += 1;
          }
        }
        if (cont >= 3) {
          result = 'não é possível gerar um número de telefone com esses valores';
          return result;
        }
        cont = 0;
      }
    }
    let phoneNumber = arrayNumber.join('');
    let ddd = phoneNumber[0] + phoneNumber[1];
    let num1 = phoneNumber[2]+phoneNumber[3]+phoneNumber[4]+phoneNumber[5]+phoneNumber[6];
    let num2 = phoneNumber[7]+phoneNumber[8]+phoneNumber[9]+phoneNumber[10];
    result = `(${ddd}) ${num1}-${num2}`;
    return result;
  }
  result = 'Array com tamanho incorreto';
  return result;
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
