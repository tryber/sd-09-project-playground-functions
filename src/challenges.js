// Desafio 1
function compareTrue(value1, value2) {
  return (value1 === true && value2 === true) ?true :false;
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
    if (string[index] == ' ') {
      array.push(word);
      word = '';
    }else if (index == string.length-1){
      word += string[index];
      array.push(word);
    }else {
      word += string[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let string =  array[array.length-1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + (ties*1);
}

// Função retorna maior do array
function biggerInArray(array) {
  let bigger = null;
  if (array.length == 0) {
    console.log('Array Vazio');
  }else {
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
      if (array[index] == bigger) {
        count++;
      }
  }
  return count;
}

//Função retorna distacia positiva entre dois pontos
function distanceBetween(element1, element2) {
  let result = element1 - element2;
  if (result < 0) {
    return result * -1;
  }else {
    return result;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (distanceBetween(mouse, cat1) == distanceBetween(mouse, cat2)) {
    return 'os gatos trombam e o gato foge';
  }else if (distanceBetween(mouse, cat1) > distanceBetween(mouse, cat2)) {
    return 'cat2';
  }else {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index in array) {
    if (!(array[index] % 3 == 0) && !(array[index] % 5 == 0)) {
      result.push('bug!');
    }else if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
      result.push('fizzbuzz');
    }else if (array[index] % 3 == 0) {
      result.push('fizz');
    }else if (array[index] % 5 == 0) {
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
    string = string.toLowerCase();
    let status = false;
    for (let item in table) {
      if (string[index] == item) {
        result += table[item];
        status = true;
      }
    }
    if (status == false) {
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
    string = string.toLowerCase();
    let status = false;
    for (let item in table) {
      if (string[index] == item) {
        result += table[item];
        status = true;
      }
    }
    if (status == false) {
      result += string[index];
    }

  }
  return result;
}

//Função retorna ogjeto tec
function createNewTec(technology, name) {
  let tec = {};
  tec.tech = technology;
  tec.name = name;
  return tec;
}

//Função retorna array ordenado
function sortArrayObjects(array) {
  for (let index = 0 ; index < array.length-1 ; index++) {
    for (let index2 = index+1 ; index2 < array.length; index2++){
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
  let tecno = [];
  for (let index in technologies) {
    tecno.push(createNewTec(technologies[index],name));
  }
  return sortArrayObjects(tecno);
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

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],'Rafael'));
