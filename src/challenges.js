// Desafio 1
function compareTrue(value1, value2) {
  let resultado = ' ';
  if (value1 === true && value2 === true) {
    resultado = true
  } else {
    resultado = false
  }
  return resultado
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayResultado = sentence.split(' ')
  return arrayResultado;
}
console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(array) {
  let nome = `${array[array.length - 1]}, ${array[0]}`
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let numberOfRepeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > biggestNumber) {
      biggestNumber = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === biggestNumber) {
      numberOfRepeat += 1
    }
  }
  return numberOfRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = 0;
  let cat2Distance = 0;
  if(mouse > cat1){
    cat1Distance = mouse - cat1;
  } else {
    cat1Distance = cat1 - mouse;
  }
  if(mouse > cat2){
    cat2Distance = mouse - cat2;
  } else {
    cat2Distance = cat2 - mouse;
  }
  if(cat1Distance > cat2Distance) {
    hunte = 'cat2';
  } else if (cat2Distance > cat1Distance) {
    hunte = 'cat1';
  } else {
    hunte = 'os gatos trombam e o rato foge'
  }
  return hunte;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz')
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz')
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(array) {
  let divArray = [];
  for (let index = 0; index < array.length; index += 1) {
    divArray.push(array[index])
  } 
  let encoding = [];
  for (let index = 0; index < divArray.length; index += 1) {
    if(divArray[index] === 'a') {
      divArray[index] = 1;
    } else if(divArray[index] === 'e') {
      divArray[index] = 2;
    } else if(divArray[index] === 'i') {
      divArray[index] = 3;
    } else if(divArray[index] === 'o') {
      divArray[index] = 4;
    } else if(divArray[index] === 'u') {
      divArray[index] = 5;
    }
  }
  for (let index = 0; index < divArray.length; index += 1) {
    encoding += divArray[index]
  }
  return encoding;
}
function decode(array) {
  let divArray = [];
  for (let index = 0; index < array.length; index += 1) {
    divArray.push(array[index])
  }
  let decoding = [];
  for (let index = 0; index < divArray.length; index += 1) {
    if(divArray[index] == 1) {
      divArray[index] = 'a';
    } else if(divArray[index] == 2) {
      divArray[index] = 'e';
    } else if(divArray[index] == 3) {
      divArray[index] = 'i';
    } else if(divArray[index] == 4) {
      divArray[index] = 'o';
    } else if(divArray[index] == 5) {
      divArray[index] = 'u';
    }
  }
  for (let index = 0; index < divArray.length; index += 1) {
    decoding += divArray[index]
  }
  // seu código aqui
  return decoding
}

// Desafio 10
function techList(array, name) {
  let list = []
  let arrayOrd = array.sort();
  if (array == '') {
    list = 'Vazio!'
  } else {
      for (let index = 0; index < arrayOrd.length; index += 1){
      list.push({
          tech: arrayOrd[index],
          name: name
          })
      }
    }  
  return list;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Johne'));

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
