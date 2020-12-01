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
function concatName(x) {
  var y = [];
  container = x.split(' ').reverse()
  for(i = 0; i < container.length; i++) {
      if (i == 0) {
           y += container[i]+', '
      }
      else if (i == container.length -1) {
          y += container[i]
      }
  }
  return y
}

// Desafio 5
function footballPoints(wins, ties) {
  let winspoints = wins *3;
  let tiespoints = ties;
  let totalPoints;
   return totalPoints = winspoints + tiespoints;
}

// Desafio 6
function highestCount(n) {
  var contador = 0;
  var comparador;

    comparador = numberArray[0];
  for (i = 0; i < n.length; i++) {
    if (comparador < n[i]) {
        comparador = n[i]
    }
    for (i = 0; i < n.length; i++) {
        if (comparador == n[i]) {
            contador++
        }
    }
}
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1 , cat2) {
 let retorno = '';
 let counterCat1 = 0, counterCat2 = 0;

for (let i = 0; i < Math.abs(cat1 - mouse); i++) {
  counterCat1 = i + 1;
  for (let i = 0; i < Math.abs(cat2 - mouse); i++) {
      counterCat2 = i + 1;
  }
}

if (counterCat1 < counterCat2) {
  return 'Cat1 has catch the mouse';
}

else if (counterCat2 < counterCat1) {
return 'Cat2 has catch the mouse';
}

else {
  return 'Os gatos trombam e o rato foge'
}

}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let test = [];

  for (let i = 0; i < arrayNumbers.length; i++) {
    test[i] = 'Bug'
if ((arrayNumbers[i] % 3 === 0) && (arrayNumbers[i] % 5 === 0)) {
test[i] = `Posicion ${i} FizzBuzz`;
} 
else if (arrayNumbers[i] % 3 === 0) {
   test[i] = `Posicion ${i} Fizz`;
}
else if (arrayNumbers[i] % 5 === 0) {
   test[i] = `Posicion ${i} Buzz`
}
}

return test
}

// Desafio 9
function encode(a) {
  let b = [];
  let phrase = a.split('');
  for (let i = 0; i < phrase.length; i++){
      b += phrase[i]; 
  for(let i = 0; i < phrase.length; i++) {
      switch (phrase[i]) {
          case '1':
          phrase[i] = 'a'
          break;

          case '2':
          phrase[i] = 'e'
          break;

          case '3':
          phrase[i] = 'i'
          break;

          case '4':
          phrase[i] = 'o'
          break;

          case '5':
          phrase[i] = 'u'
          break;
      }
  }
}
  return b
}
function decode(a) {
  let b = [];
  let phrase = a.split('');
  for (let i = 0; i < phrase.length; i++){
      b += phrase[i]; 
  for(let i = 0; i < phrase.length; i++) {
      switch (phrase[i]) {
          case '1':
          phrase[i] = 'a'
          break;

          case '2':
          phrase[i] = 'e'
          break;

          case '3':
          phrase[i] = 'i'
          break;

          case '4':
          phrase[i] = 'o'
          break;

          case '5':
          phrase[i] = 'u'
          break;
      }
  }
}
  return b
}

// Desafio 10
function techList(techs, name) {
    
  let techB = techs.sort();

  let techD = [];
  if (techs.length > 0) {
  for (let i = 0; i < techs.length; i++ ) {
     let tech = techB[i]
      techD.push({
          tech,
          name
      })
  }
}
else {
  return 'vazio'
}
  
  return techD
}

// Desafio 11
function generatePhoneNumber(number) {
  let container = '';
  if (number.length === 11) {
      for (let i = 0; i < number.length; i++) {
          switch(true) {
              case i == 0:
              container += '('+number[i];
              break;

              case i == 1:
              container += number[i]+')';
              break;

              case i == 2:
              container += ' '+number[i];
              break;

              case i == 3:
              container += number[i];
              break;

              
              case i == 4:
              container += number[i];
              break;

              case i == 5:
              container += number[i];
              break;


              case i == 6:
              container += number[i]+'-';
              break;


              case i == 7:
              container += number[i];
              break;


              case i == 8:
              container += number[i];
              break;


              case i == 9:
              container += number[i];
              break;


              case i == 10:
              container += number[i];
              break;
          }
      }
  }
  else {
      return 'não é possível gerar um número de telefone com esses valores'
  }
  return container
}

// Desafio 12
function triangleCheck() {
  // seu 
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
  return counter + ' copos de água'
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
