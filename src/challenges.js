// Desafio 1
const compareTrue = (valor1, valor2) =>  {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
};

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

console.log(calcArea(5,4));
// Desafio 3
const splitSentence = (string) => string.split(' ');

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
  let repeat = 1;
  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
        array.sort().reverse()
      }
    }
  }    
  for (let index = 1; index < array.length; index += 1) {
    if (array[0] / array[index] === 1) {
      repeat +=1;
    }
  }
  return repeat;
}
highestCount([9, 1, 2, 3, 9, 9, 3]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distM1 = Math.abs(cat1 - mouse);
  let distM2 = Math.abs(cat2 - mouse);
  if (distM1 > distM2) {
    return 'cat2';
  }
  if (distM1 < distM2) {
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
      arrayResp[key] = 'fizz';
    } else if (arrayNumbers[key] % 5 === 0) {
      arrayResp[key] = 'buzz';
    } else {
      arrayResp[key] = 'bug!';
    }
  }
  return arrayResp;
}

// Desafio 9
function encode(param) {
  let newString = [];
  let stringNew = 0;
  for (let key of param) {
    switch (key) {
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
  }
  return newString.join('').toString();
};

function decode(param) {
  let newString = [];
  for (let key of param) {
    switch (key) {
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
  }
  return newString.join('').toString();
}

// Desafio 10
function techList(param, nome) {
  let paramSorted = param.sort();
  let lista = [];
  if (param.length === 0) {
    return 'Vazio!';
  } else {
    for (let i in param) {
      let listaInterna = {}
      listaInterna['tech'] = paramSorted[i];
      listaInterna['name'] = nome;
      i += 1;
      lista.push(listaInterna);
    }
    return lista;
  }
}

// Desafio 11
function generatePhoneNumber(array) {/*
let qtidade = 0;

  for (let i in array){
    let primeiroItem = array[0];
    if array[i] == array
  if (array.length > 11){
    return 'Array com tamanho incorreto';
  }else if(array[i] ==0 || array[0]>9){
    return 
  }
}*/
}

// Desafio 12
function triangleCheck(param1, param2, param3) {
  if ((param1 < param2 + param3) && (param1 > Math.abs(param2 - param3)) 
  || (param2 < param1 + param3) && (param2 > Math.abs(param1 - param3)) 
  || (param3 < param2 + param1) && (param3 > Math.abs(param2 - param1))) {
     return true;
  } else {
    return false;
  }
} 
console.log(triangleCheck(10, 14, 8));


        // Desafio 13
function hydrate(param) {
  let qtidade =0;
  
  
  let b = param.match(/(\d+)/g);
  
  for( let i = 0; i < b; i+=1 ){
   qtidade += b[i];
   return qtidade + " copos de agua"
  }

}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));


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