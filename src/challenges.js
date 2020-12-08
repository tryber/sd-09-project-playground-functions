// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean && secondBoolean) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let text = string.split(' ');
  return text;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let max = 0;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(max < array[index]){
      max = array[index];
      contador = 1;
    }else if(array[index] === max) {
      contador += 1
    }
  }

return contador
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }else if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  if(distanceCat1 < distanceCat2){
    return 'cat1';

  }else if(distanceCat1 > distanceCat2){
    return 'cat2';

  }else if(distanceCat1 === distanceCat2){
    return 'os gatos trombam e o rato foge'
  }
}
// Desafio 8
function fizzBuzz(array) {  
  let fizzBuzzArray = [];
  for(index = 0; index < array.length; index += 1){
    if(array[index] %15 === 0){
      fizzBuzzArray.push('fizzbuzz')
  
    }else if(array[index] %5 === 0){
      fizzBuzzArray.push('buzz');
  
    }else if(array[index] %3 === 0){
      fizzBuzzArray.push('fizz');
  
    }else {
      fizzBuzzArray.push('bug!')
    }
  }
  return fizzBuzzArray
  }


// Desafio 9
function encode(string){
  let arrayCode = string.split('')
  for(index = 0; index < arrayCode.length; index += 1){
    if(arrayCode[index] === 'a'){
      arrayCode.splice(index, 1, '1');
    }if(arrayCode[index] === 'e'){
      arrayCode.splice(index, 1, '2');
    }if(arrayCode[index] === 'i'){
      arrayCode.splice(index, 1, '3');
    }if(arrayCode[index] === 'o'){
      arrayCode.splice(index, 1, '4');
    }if(arrayCode[index] === 'u'){
      arrayCode.splice(index, 1, '5');
    }
  }
  
  let codedTxt = arrayCode.join('');
  return codedTxt
  }

  function decode(string){
    let arrayUnCode = string.split('')
    for(index = 0; index < arrayUnCode.length; index += 1){
      if(arrayUnCode[index] === '1'){
        arrayUnCode.splice(index, 1, 'a');
      }if(arrayUnCode[index] === '2'){
        arrayUnCode.splice(index, 1, 'e');
      }if(arrayUnCode[index] === '3'){
        arrayUnCode.splice(index, 1, 'i');
      }if(arrayUnCode[index] === '4'){
        arrayUnCode.splice(index, 1, 'o');
      }if(arrayUnCode[index] === '5'){
        arrayUnCode.splice(index, 1, 'u');
      }
    }
    
    let codedTxt = arrayUnCode.join('');
    return codedTxt
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
