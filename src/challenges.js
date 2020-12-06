// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
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
  let newString = string.split(' ');
  return newString;
}

// Desafio 4
function concatName(array) {
  let arrayFirst = array[0];
  let arrayLast = array.reverse()[0];
  return (arrayLast + ', ' + arrayFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
    arraySorted = array.sort();
    arrayReverse = arraySorted.reverse();
    maior = arrayReverse[0];
    let qtidade = 1;
  for (let i = 1; i < array.length; i += 1) {
    if (arrayReverse[i] > maior) {
      maior = arrayReverse[i];
    } else if (arrayReverse[i] < maior) {
        maior = maior;
    } else {
     qtidade += 1;
   }
  } return qtidade;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distM1 = Math.abs(cat1 - mouse);
  let distM2 = Math.abs(cat2 -mouse);
  if (distM1 > distM2) {
    return 'cat2';
  } if (distM1 < distM2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayResp = [];
  for (let key in arrayNumbers) {
    if (arrayNumbers[key] % 3 === 0 && arrayNumbers[key] % 5 === 0) {
      arrayResp[key] = 'fizzBuzz';
   } else if (arrayNumbers[key] % 3 === 0) {
       arrayResp[key] ='fizz';
    } else if (arrayNumbers[key] % 5 === 0) {
        arrayResp[key]= 'buzz';
     } else {
         arrayResp[key] = 'bug!';
       }
  } 
return arrayResp;
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
function techList(param,nome) {
  let paramSorted = param.sort();
  let lista = []; 
  if (param.length === 0){
    return 'Vazio!';
  }else {
    for  ( let i in param ){
    let listaInterna = {}
    listaInterna['tech']=paramSorted[i];
    listaInterna['name'] = nome;
    i +=1;
    lista[i]= listaInterna
  }
  return lista;
  } 
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
