// #VQV
// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui

  if (num1 == num2 && num2 == num1) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = base * height / 2;
  return area;
}

console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let sentence = str;

  return sentence.split(" ");
  
}
console.log(splitSentence('Go, Tryber'));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let str1 = '';
  let str2 = '';

  let frase = '';

  for(let iten1 = 0; iten1 < arr.length; iten1 += 1) {
    for(let iten2 = arr.length - 1; iten2 >= 0; iten2 -= 1) {
  
      str1 = arr[iten2];
    }
    str2 = arr[iten1];
  }
  frase = str2 + ', ' + str1;
  return frase;
}

console.log(concatName(['Lucas', 'Bola', 'Silva']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins * 3 + ties; 

  return totalPoints;

}

console.log(footballPoints(10, 5))

// Desafio 6
function highestCount() {
  // seu código aqui
  
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui

   array = [2, 15, 7, 9, 45];

  for(index = 0; index < array.length; index += 1) {
    if(array[index] / 3 == 0) {
      console.log('fizz');
      
    }
    if(array[index] / 5 == 0) {
      console.log('buzz');
     
    }
    if(array[index] / 3 && array[index] / 5 == 0) {
      console.log('fizzBuzz')
      
    } else {
      console.log('bug!');
    }

  }

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
