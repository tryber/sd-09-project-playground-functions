// Vamo Que Vamo!!!
// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(nome1) {
  let index = nome1.length - 1
  return nome1[index] + ', ' + nome1[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount(nums) {
  let maior = nums[0];
  let contagem = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > maior) {
      maior = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === maior) {
      contagem += 1;
    }
  }
  return contagem
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = 0
  let distancia2 = 0
  if (mouse > cat1) {
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse;
  }

  if (distancia1 < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(num1) {
  let arrayBuzz = [];
  for (let i = 0; i < num1.length; i++){
    if ((num1[i] % 3) == 0){
      arrayBuzz.push('fizz')
    } else if ((num1 % 5) == 0){
      arrayBuzz.push('buzz')
    } else if ((num1 % 3) == 0 && (num1 % 5) == 0){
      arrayBuzz.push('fizzBuzz')
    } else {
      arrayBuzz.push('bug!')
    }
  }
  return arrayBuzz;
}

// Desafio 9
function encode(frase) {
  for (let i = 0; i < frase.length; i++){
    frase = frase.replace('a' , '1');
    frase = frase.replace('e' , '2');
    frase = frase.replace('i' , '3');
    frase = frase.replace('o' , '4');
    frase = frase.replace('u' , '5');
  }
  return frase
}
function decode() {
  for (let i = 0; i < frase.length; i++){
    frase = frase.replace('1' , 'a');
    frase = frase.replace('2' , 'e');
    frase = frase.replace('3' , 'i');
    frase = frase.replace('4' , 'o');
    frase = frase.replace('5' , 'u');
  }
  return frase
}

// Desafio 10
function techList(tech, name) {
  let objetoTech = []
  if (tech === null){
    return 'Vazio!'
  } else {
    for (key in tech) {
      objetoTech.push(tech[key] + ' e ' + name);
    }
  }
}
// Desafio 11
function generatePhoneNumber() {
  
}

// Desafio 12
function triangleCheck() {
  
}

// Desafio 13
function hydrate() {
  
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
