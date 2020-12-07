// Teste
// Desafio 1 OK
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2 OK
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(3, 8));

// Desafio 3
function splitSentence(string3) {
  let arrayString3 = string3.split(' ');
  return arrayString3;
}

// Desafio 4 OK
function concatName(frase4) {
  let answer = (frase4[frase4.length-1] + ", " + frase4[0]);
  return answer;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winpoint = 3;
  let result = (wins*winpoint)+ties;
  return result;
}

// Desafio 6
function highestNumber(array6) {
  let index = 0;
  let highest = array6[index];
  for (index = 0; index < array6.length; index=+ 1) {
    if (highest < array6[index]) {
      highest = array6[index];
    }
  }
  return highest;
  // teste
}
function highestCount(array6) {
  let index = 0;
  let counter = 0;
  for (index = 0; index < array6.length; index=+1) {
    if (highestNumber(array6) === array6[index]) {
      counter = counter + 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs((cat1 - mouse));
  let distance2 = Math.abs((cat2 - mouse));
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } 
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1, 2, 0));

// Desafio 8
function fizzBuzz(array8) {
  let index = 0
  for (index = 0; index < array8.length; index =+1) {
    if (array8[index] % 3 === 0 && array8[index] % 5 === 0) {
        array8[index] = "fizzBuzz";
    } else if (array8[index] % 3 === 0) {
      array8[index] = 'fizz';
    } else if (array8[index] % 5 === 0) {
      array8[index] = 'buzz';
    } else {
    array8[index] = 'bug!';
    }
  }
  return array8;
}


// Desafio 9
function encode(string9) {
  let object = { 'a':'1','e':'2','i':'3','o':'4','u':'5'};
  for (let key in object) {
    let substitute = key;
    let re = new RegExp(substitute, 'g');
    string9 = string9.replace(re, object[key]);
  }
  return string9;
}
// teste

function decode(string9) {
  let object = { '1':'a','2':'e','3':'i','4':'o','5':'u'};
  for (let key in object) {
    let substitute = key;
    let re = new RegExp(substitute,"g");
    string9 = string9.replace(re, object[key]);
  }
return string9;
}

// Desafio 10
let arraytech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let name = 'Felipe';
function techList(arraytech, name) {
// seu código aqui
  let arrayTech = [];
  arraytech.sort();
  for (let index = 0; index < arraytech.length; index += 1) {
    arrayTech.push({
      tech: arraytech[index],
      name,
      }
    );
  }
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  return arrayTech;
}

// Desafio 11
function generatePhoneNumber(arraytelephone) {
//   if (arraytelephone.length !== 10) {
//     console.log('Array com tamanho incorreto.');
//   } else {
//     for (let index=0; index < arraytelephone.length; index =+1){
//       if (arraytelephone[index] < 0 || arraytelephone[index] < 9){
//         console.log('tem negativo ou maior q 10');
//       }
//     }
//     for (let index=0; index < 8; index =+1){
//       if (arraytelephone[index] === arraytelephone[index+1] === arraytelephone[index+2]) {
//         console.log('não é possível gerar um número de telefone com esses valores');
//       }
//   }
//   return
}
// function generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7]);
// Desafio 12
// lineA = 15;
// lineB = -12
// lineC = 2
// let res = (Math.abs(lineB)- Math.abs(lineC));
//   console.log(res);
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // let result = false;
  // if (lineA*lineB*lineC != 0) {
  //   if (lineA > (lineB + lineC)) && (Math.abs(lineA) > (Math.abs(lineB)- Math.abs(lineC)));{
  //     result = true;
  //   }
  // }
  // return result
  // console.log(result);
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
