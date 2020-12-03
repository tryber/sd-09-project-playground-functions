// Desafio 1
function compareTrue( value1 , value2 ) {
  if ( value1 === true && value2 === true ) {
      return true;
}
      return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base , height) {
  return ((base * height) / 2);
}
console.log(calcArea(4, 5));

// Desafio 3
function splitSentence(stringArray) {
  for (var index = 0; index < stringArray.length; index += 1){
      var splitText = stringArray.split(" ")
      return splitText;
  }
}
console.log(splitSentence('Go trybe'));


// Desafio 4
function concatName(arrayString) {
  let result = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  return result;
}
console.log(concatName(['Toselli' , 'Henrique' , 'Pedro']));
//Utilizei o seguinte site como fonte de pesquisa : https://medium.com/@rodrigoum/3-maneiras-de-pegar-o-primeiro-e-%C3%BAltimo-elemento-de-um-array-com-javascript-56e92e6bf3f4


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties)
}
console.log(footballPoints(6, 6))

// Desafio 6 -Para resolução desse exercicio utilizei a ajuda de : Luciano lodi, jhonatas, christofer e Lucas Galdino!!!
// fonte de pesquisa: https://medium.com/@danvitoriano/ordenando-listas-com-javascript-array-sort-52446c25d94b

function highestCount(array) {
  let arraySort = array.sort();
  let arrayReverse = arraySort.reverse();
     let count = 1;
     for (let index = 0; index < arrayReverse.length; index += 1) {
         if (arrayReverse[index] === array[index +1]) {
             count += 1;
         }else {
             return count;
            }
        }
        return count
    }
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = mouse - cat1;
  let distanceMouseCat2 = mouse - cat2;
  let distanceCats = cat1 - cat2;

  if (distanceMouseCat1 < distanceMouseCat2) {
      return ('cat1');
  }else if (distanceMouseCat1 > distanceMouseCat2) {
      return ('cat2');
  }else if(distanceCats === 0) {
      return ('os gatos trombam e o rato foge');
  }
}
console.log(catAndMouse(5 , 3 , 8));

// Desafio 8
function fizzBuzz() {
    let arrayFizBu = [];
    for (let index =0; index < arrayNumber.length; index += 1) {
        if (arrayNumber[index] % 3 === 0) {
            arrayFizBu.push('fizz');
        } else if (arrayNumber[index] % 5 === 0) {
            arrayFizBu.push('buzz');
        } else if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
            arrayFizBu.push('fizzBuzz');
        } else {
            arrayFizBu.push('bug!');
        }
    }
    return arrayFizBu;
}
console.log(fizzBuzz([ 2 , 15 , 7 , 9 , 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(name, programList) {}

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
