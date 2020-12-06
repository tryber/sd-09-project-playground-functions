// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
}

// Desafio 3
function splitSentence(string) {
  let newString = string.split(' ');
  return newString;
}

// Desafio 4
function concatName(strings) {
  let stringUl = strings[0];
  let stringRev = strings.reverse();
  console.log(stringRev[0] + '' + stringUl);
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let qtidade = 0;
  for (let key in array) {
    if (array[ḱey] > maior) {
      maior = array[key];
    } else if (maior === array[key]) {
      qtidade += 1;
    }
  } return qtidade;
}

// Desafio 7
function catAndMouse(dist1, dist2) {
  if (dist1 > dist2) {
    return 'cat2';
  } if (dist1 < dist2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(arrayNumbers) {
  for (let key = 0; key < arrayNumbers.length; key += 1) {
    if (arrayNumbers[key] % 3 === 0 && arrayNumbers[key] % 5 === 0) {
      console.log('fizzBuzz');
    } if (arrayNumbers[key] % 3 === 0) {
      console.log('fizz');
    } if (arrayNumbers[key] % 5 === 0) {
      console.log('buzz');
    }
    console.log('bug');
    }
}
// Desafio 9
function encode(param) {
 let newString = [];
   
 for (let key of param) {
   switch (key){
       case 'a':
          newString.push('1');
       break;
       case 'e':
          newString.push('2');
       break;
       case 'i':
          newString.push('3');
       break;
       case 'o':
          newString.push('4');
       break;
       case 'u':
          newString.push('5'); 
       break;
       default:
           newString.push(key);
       
   }
   
 }return newString.join(',').toString();
}

function decode(param) {
 let newString = [];
   
 for (let key of param) {
   switch (key){
       case '1':
          newString.push('a');
       break;
       case '2':
          newString.push('e');
       break;
       case '3':
          newString.push('i');
       break;
       case '4':
          newString.push('o');
       break;
       case '5':
          newString.push('u'); 
       break;
       default:
           newString.push(key);
       
   }
   
 }return newString.join(',');
  
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
