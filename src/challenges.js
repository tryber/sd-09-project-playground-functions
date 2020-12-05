// #VQV

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
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maxRepeat = 0;
  let bigger = Math.max.apply(null, array);
  for (let number of array) {
    if (number === bigger) {
      maxRepeat += 1;
    }
  }
  return maxRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let codedString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      codedString += '1';
    } else if (string[i] === 'e') {
      codedString += '2';
    } else if (string[i] === 'i') {
      codedString += '3';
    } else if (string[i] === 'o') {
      codedString += '4';
    } else if (string[i] === 'u') {
      codedString += '5';
    } else {
      codedString += string[i];
    }
  }
  return codedString;
}

function decode(codedString) {
  let decodedString = '';
  for (let i = 0; i < codedString.length; i += 1) {
    if (codedString[i] === '1') {
      decodedString += 'a';
    } else if (codedString[i] === '2') {
      decodedString += 'e';
    } else if (codedString[i] === '3') {
      decodedString += 'i';
    } else if (codedString[i] === '4') {
      decodedString += 'o';
    } else if (codedString[i] === '5') {
      decodedString += 'u';
    } else {
      decodedString += codedString[i];
    }
  }
  return decodedString;
}

// Desafio 10
function techList(techs, name) {
  if (techs == '') {
    return 'Vazio!';
  }
  let techListName = [];
  techs.sort();
  for (let index = 0; index < techs.length; index += 1) {
    let newItem = { tech: techs[index], name };
    techListName.push(newItem);
  }
  return techListName;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  let storageArray = [];
  let repeatCount = 1
    for(let i = 0; i < array.length; i+=1){
    if(i == 0){
      if(phoneNumber.length == 0){
        phoneNumber+= ['(' + array[i]]
      }else{
        phoneNumber+= array[i]
      }
    }else if(i > 0 && i < 2){
      phoneNumber+= array[i]
    }else if(i == 2){
      if(phoneNumber.length == 3){
        phoneNumber+= [') ' + array[i]]
      }else{
        phoneNumber+= array[i]
      }
    }else if(i >= 3 && i < 7){
      phoneNumber+= array[i]
    }else if(i == 7){
      if(phoneNumber.length == 10){
        phoneNumber+= ['-' + array[i]]
      }else{
        phoneNumber+= array[i]
      }
    }else if(i>7){
      phoneNumber+=array[i]
    }
  }
    for(let i = 0; i <= array.length; i+=1){
      if(array[i] < 0 || array[i] > 9){
        phoneNumber = "não é possível gerar um número de telefone com esses valores"
      }else if(array[i]){
        if(storageArray.includes(array[i])){
          repeatCount+=1
        }else{
          storageArray+=array[i]
        }
      }if(repeatCount >= 3){
        phoneNumber = "não é possível gerar um número de telefone com esses valores"
      }
    }
    for (let i in array) {
      if(array.length !== 11){
        phoneNumber = "Array com tamanho incorreto."
        }else{
          phoneNumber = phoneNumber;
        }
    }
  return phoneNumber
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
};
