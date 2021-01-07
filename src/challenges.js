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
function techList() {
  // seu código aqui
  
  
}


// Desafio 11

function generatePhoneNumber (array){
  if (array.length !== 11){
          
    return "Array com tamanho incorreto.";
  }

  for (let index = 0; index < array.length; index ++){
     
      if( array[index] < 0){
          return "não é possível gerar um número de telefone com esses valores";
      }
      if (array[index] > 9){
          return "não é possível gerar um número de telefone com esses valores";
      }
  }
  /*let indices = [];
  let elemento = 1;
  let contando = 0;
  let idx = array.indexOf(elemento);
  while (idx != -1){
      indices.push(idx);
      idx = array.indexOf(elemento, idx + 1);
      contando = contando + 1;*/

      let s = array;
      let contador = 0;
      for (let i = 0; i < array.length; i++){
        for (let j = 0; j < s.length; j++){
          if (array[i] === s[j]){
             contador = contador + 1;
          }
        }
      }
      
      
      if (contador >= 3){
        return  "não é possível gerar um número de telefone com esses valores";
      
  }
  ax = array.join('');
  let ddd = ax.slice(0,2);
  let tel = ax.slice(2,7);
  let tell = ax.slice(7,12);
  
  narray = `(${ddd}) ${tel}-${tell}`;
  
  return narray;
  
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

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
