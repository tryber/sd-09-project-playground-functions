// Desafio 1
function compareTrue(value1, value2) {
  let result = Boolean;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let word = '';
  for (let index in string) {
    if (string[index] === ' ') {
      array.push(word);
      word = '';
    } else if (index === String(string.length - 1)) {
      word += string[index];
      array.push(word);
    } else {
      word += string[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string =  `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Função retorna maior do array
function biggerInArray(array) {
  let bigger = null;
  if (array.length === 0) {
    console.log('Array Vazio');
  } else {
    bigger = array[0];
    for (let index in array) {
      if (array[index] > bigger) {
        bigger = array[index];
      }
    }
  }
  return bigger;
}

// Desafio 6
function highestCount(array) {
  let bigger = biggerInArray(array);
  let count = 0;
  for (let index in array) {
    if (array[index] === bigger) {
      count += 1;
    }
  }
  return count;
}

// Função retorna distacia positiva entre dois pontos
function distanceBetween(element1, element2) {
  let result = element1 - element2;
  let out = Number;
  if (result < 0) {
    out = result * -1;
  } else {
    out = result;
  }
  return out;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (distanceBetween(mouse, cat1) === distanceBetween(mouse, cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceBetween(mouse, cat1) > distanceBetween(mouse, cat2)) {
    return 'cat2';
  } else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (!(array[index] % 3 === 0) && !(array[index] % 5 === 0)) {
      result.push('bug!');
    } else if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      result.push('fizz');
    } else if (array[index] % 5 === 0) {
      result.push('buzz');
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let result = '';
  let table = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let index in string) {
    let status = false;
    for (let item in table) {
      if (string[index] === item) {
        result += table[item];
        status = true;
      }
    }
    if (status === false) {
      result += string[index];
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  let table = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let index in string) {
    let status = false;
    for (let item in table) {
      if (string[index] === item) {
        result += table[item];
        status = true;
      }
    }
    if (status === false) {
      result += string[index];
    }
  }
  return result;
}

// Função retorna ogjeto tec
function createNewTec(technology, name) {
  let tec = {};
  tec.tech = technology;
  tec.name = name;
  return tec;
}

// Função retorna array ordenado
function sortArrayObjects(array) {
  for (let index = 0;index < array.length - 1;index++) {
    for (let index2 = index + 1;index2 < array.length;index2++){
      if (array[index].tech > array[index2].tech) {
        let aux = createNewTec(array[index2].tech, array[index2].name);
        array[index2] = array[index];
        array[index] = aux;
      }
    }
  }
  return array;
}

// Desafio 10
function techList(technologies, name) {
  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
    let tecno = [];
    for (let index in technologies) {
      tecno.push(createNewTec(technologies[index], name));
    }
    return sortArrayObjects(tecno);
  }
}

// Funcão retorna quantidade de vezes que value aparece no array
function counterArray(array, value) {
  let count = 0;
  for (let index in array) {
    if (array[index] === value) {
      count++;
    }
  }
  return count;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  if ((array.length < 11) ||  (array.length > 11)) {
    return 'Array com tamanho incorreto.'
  }
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (counterArray(array, array[index]) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index in array) {
    if (index === '0') {
      phoneNumber = '(' + array[index];
    } else if (index === '1') {
      phoneNumber += array[index] + ')';
    } else if (index === '2') {
      phoneNumber += ' ' + array[index];
    } else if (index === '7') {
      phoneNumber += '-' + array[index];
    } else {
      phoneNumber += array[index];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineA > distanceBetween(lineB, lineC))) {
    if ((lineB < (lineA + lineC)) && (lineB > distanceBetween(lineA, lineC))) {
      if ((lineC < (lineB + lineA)) && (lineC > distanceBetween(lineB, lineA))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Função retorna a somatoria do array
function addArray(array) {
  let add = 0;
  let numbers = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }
  for (let item in array) {
    for (let number in numbers) {
      if (array[item] === number) {
        add += numbers[number];
      }
    }
  }
  return add;
}

// Função retorna true se caractere é numero e false se não for
function isNumeral(caractere) {
  for (let number = 1;number <= 9;number++) {
    if (caractere == number) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let count = [];
  let frase = '';
  for (let letra in string) {
    if (isNumeral(string[letra])) {
      count.push(string[letra]);
    }
  }
  if (addArray(count) > 1) {
    frase = addArray(count) + ' copos de água';
  } else {
    frase = addArray(count) + ' copo de água';
  }
  return frase;
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
