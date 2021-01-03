// Desafio 1
function compareTrue(today, date) {
  // seu código aqui
  if (today === true && date === true){
    return true;} 
  return false;
}
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return( base * heigth ) /2;
}
// Desafio 3
function splitSentence( phrase ) {
  // seu código aqui
  return phrase.split (" ");
}
// Desafio 4
function concatName(array) {
  
   let firstName = array[0];
     let lastName = array[array.length - 1];
     let resumo = lastName.concat(', ', firstName); 

  return resumo;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
      let pointsWins = 3;
      let totalPointsWins = (wins * pointsWins);
      let pointsTies = 1;
      let totalPointsTies = (ties * pointsTies);
      return (totalPointsWins + totalPointsTies);
    } 
  

// Desafio 6
function highestCount(matrix) {
  let number = matrix[0];
  let counter = 0;
  for (let index = 0; index < matrix.length; index += 1) {
    if (number < matrix[index])  {
        number = matrix[index];
    } 
  } 
  for (let index = 0; index < matrix.length; index += 1) {
    if (number === matrix[index])  {
        counter +=1 ;
    }
  }
  return counter;
}	

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1OfMouse = cat1 - mouse;
  let distanceCat2OfMouse = cat2 - mouse;

  if(distanceCat1OfMouse < 0){
    distanceCat1OfMouse = distanceCat1OfMouse * (-1);
  }
  if(distanceCat2OfMouse < 0){
    distanceCat2OfMouse = distanceCat2OfMouse * (-1);
  }

  if(distanceCat1OfMouse < distanceCat2OfMouse){
    return 'cat1';
  } else if(distanceCat2OfMouse < distanceCat1OfMouse){
    return 'cat2';
  } if(distanceCat1OfMouse === distanceCat2OfMouse){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8

function fizzBuzz(array) {
  
  let novoArray = [];
  for (let index = 0; index < array.length; index +=1) {
      if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
        novoArray.push('fizz');
      } else if (array[index] % 3 !== 0 && array[index] % 5 === 0) {
        novoArray.push('buzz');
      } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
        novoArray.push('fizzBuzz');
      } else {
        novoArray.push('bug!');
      }
  }
  return novoArray;
  
}

console.log(1,2,3,4,5,6,7,8,9,11);

// Desafio 9

function encode(a) {
  let m =a.replace(/a/g, '1');
      m = m.replace(/e/g, '2');
      m = m.replace(/i/g, '3');
      m = m.replace(/o/g, '4');
      m = m.replace(/u/g, '5');
      
      return m;
      }

function decode(m) {
let a =m.replace(/1/g, 'a');
a = a.replace(/2/g, 'e');
a = a.replace(/3/g, 'i');
a = a.replace(/4/g, 'o');
a = a.replace(/5/g, 'u');

return a;
}



// Desafio 10
function techList(aray) {
  // seu código aqui
  novaVar = [];
  
}
console.log([])

// Desafio 11
function generatePhoneNumber() {
  let novoAray = [];
      let contador = aray[0];
      let i =0;
      for (let index = 0; index < aray.length; index +=1){
          if(aray.length !== 11){
            novoAray = 'Array com tamanho incorreto.' 
            return novoAray;

          } else if (aray[index] < 0 || aray[index] > 9){
               novoAray =  'nao é possivel gerar um numero de telefone com esses valores.';
               return novoAray;
            } 
              else if (contador === aray[index]) {
                 i = i +1;
              } 
      }
      if (i >= 3){
        return 'nao é possivel gerar um numero de telefone com esses valores.';
      } else {
       
      novoAray = aray;
let k = '(' + novoAray[0] + novoAray[1] + ')' + ' ' + novoAray[2] + novoAray[3] + novoAray[4] + novoAray[5] + '-' + novoAray[6] + novoAray[7] + novoAray[8] + novoAray[9];
        return k;
      }
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
