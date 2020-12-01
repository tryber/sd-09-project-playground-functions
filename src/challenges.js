// Project 2

// Desafio 1
function compareTrue(firstValue, secondValue) {
  if ((firstValue === true) && (secondValue === true)) {
    return true
 }
 else {
   return false
  }
 }

// Desafio 2
function calcArea(value1, value2) {
  return value1 * value2/2
 }

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ')
 }

// Desafio 4
function concatName(nameString) {
  let name = '';
  name += nameString[nameString.length - 1] + ', ' + nameString[0];
  return name;
 }

// Desafio 5
function footballPoints(wins, ties) {
   let winspoints = wins *3;
   let tiespoints = ties;
   let totalPoints;
   return totalPoints = winspoints + tiespoints;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = numbers[0];
  let bigger2 = 0;
  for (let counter = 0; counter < numbers.length; counter += 1) {
     if (bigger < numbers[counter]) {
       bigger = numbers[counter];
     }
  }
  for (let index in numbers) {
    if (bigger === numbers[index]) {
      bigger2 += 1;
    }
  }
  return bigger2;
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2) ){
    return 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let sequence = [];
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
        sequence.push('fizzBuzz');
      } else if (numbers[index] % 5 == 0) {
        sequence.push('buzz');
      } else if (numbers[index] % 3 == 0) {
        sequence.push('fizz');

      }else {
        sequence.push('bug!');
      }
    }
  return sequence;
}

// Desafio 9
function encode(newphrase) {
  let encodePhrase = '';

  for (let key in newphrase) {
    if (newphrase[key] === 'a') {
      encodePhrase += '1';
    } else if (newphrase[key] === 'e') {
      encodePhrase += '2';
    } else if (newphrase[key] === 'i') {
      encodePhrase += '3';
    } else if (newphrase[key] === 'o') {
      encodePhrase += '4';
    } else if (newphrase[key] === 'u') {
      encodePhrase += '5';
    } else {
      encodePhrase += newphrase[key];
    }
  }
  return encodePhrase;
}
function decode(phrase) {
  let decodePhrase = '';

  for (let key in phrase) {
    if (phrase[key] === '1') {
      decodePhrase += 'a';
    } else if (phrase[key] === '2') {
      decodePhrase += 'e';
    } else if (phrase[key] === '3') {
      decodePhrase += 'i';
    } else if (phrase[key] === '4') {
      decodePhrase += 'o';
    } else if (phrase[key] === '5') {
      decodePhrase += 'u';
    } else {
      decodePhrase += phrase[key];
    }
  } 
  return decodePhrase;
}

// Desafio 10
function techList(tech, name) {
  let order = tech.sort();
  let result = [];
 
  if (tech.length > 0) {
    for (let key in order) {
      let object = {};
      object.tech = order[key];
      object.name = name;
      result.push(object);
    }
  } else {
    result = 'Vazio!';
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let phoneFormatt = '(xx) xxxxx-xxxx'
  let phoneFormatt = '(xx) xxxxx-xxxx'
  let comparador = numbers[0]
  let counter = 0;
  for (let y = 0; y < numbers.length; y++) {
  if (numbers[y] === comparador) {
      comparador = numbers[y];
      counter = 0;
      for(let x = 0; x < numbers.length; x++) {
          if (comparador === numbers[x]) {
              counter++;
              if (counter === 3) {
                  return 'não é possível gerar um número de telefone com esses valores'
              }
          }
      }
  }
  else if (numbers.length != 11) {
      return 'Array com tamanho incorreto'
  }
  else if (numbers[y] < 0) {
          return 'não é possível gerar um número de telefone com esses valores'
  }
}
  for (let i = 0; i < numbers.length; i++) {
    phoneFormatt=phoneFormatt.replace('x', numbers[i])
    
  }
  return phoneFormatt
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(pedido) {
  let total = pedido.split(' ');
  let counter = 0;
  for (let i = 0; i < total.length; i++) {
      if (total[i] > 0) {
          counter += parseInt(total[i]) 
      }
  }
  return counter + ' copos de agua'
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
