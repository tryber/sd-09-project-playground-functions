/** RAFAEL GERONIMO | TRYBE | #VQV */
// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let words = [];
  return words = phrase.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = "";
  return firstAndLast = firstAndLast.concat(names[names.length -1] + ', ' + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  return points = wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = numbers.reduce(function(a, b) {
  	return Math.max(a, b);
  })
  for(let index = 0; index < numbers.length; index += 1){
  	if(numbers[index] === highestNumber){
    	count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.max(mouse, cat1) - Math.min(mouse, cat1);
  let cat2Dist = Math.max(mouse, cat2) - Math.min(mouse, cat2);
  if(cat1Dist < cat2Dist){
  	return "cat1";
  } else if(cat1Dist > cat2Dist) {
  	return "cat2";
  } else {
  	return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzz = [];
  for(let index = 0; index < numbers.length; index += 1){
  	if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
    	fizzBuzz = fizzBuzz.concat("fizzBuzz");
    } else if (numbers[index] % 3 != 0 && numbers[index] === 0){
    	fizzBuzz = fizzBuzz.concat("buzz");
    } else if (numbers[index] % 3 === 0 && numbers[index] != 0) {
    	fizzBuzz = fizzBuzz.concat("fizz");
    } else {
    	fizzBuzz = fizzBuzz.concat("bug!");
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
