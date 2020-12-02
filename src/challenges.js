// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true){
    return true 
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  resultado = base * height / 2 
  return resultado
}


// Desafio 3
function splitSentence(string) {
  let  array = [];
  let separacao = '';
  for(i = 0; i < string.length; i = i + 1) {
    if(string[i] != ' ') {
      separacao = separacao + string[i];
    }else {
      array.push(separacao);
      separacao = '';
    } 
  }
  array.push(separacao);
  return array;
}

// Desafio 4
function concatName(arrs) {
  let concatenando = arrs[arrs.length -1]
  concatenando = concatenando +  ', ' + arrs[0];
  return concatenando
}



// Desafio 5
function footballPoints(wins, ties) {
 return wins * 3 + ties
  
  
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = 0
  let timesHighestNumber = 0
  for(i = 0; i < numeros.length; i = i + 1) { 
    if(numeros[i] > highestNumber) {
      highestNumber = numeros[i]
    }  

  } for(c = 0; c < numeros.length; c = c + 1) {
    if(numeros[c] === highestNumber){
      timesHighestNumber = timesHighestNumber + 1
    }
  } return timesHighestNumber
  
}



// Desafio 7

//Math.abs()

function catAndMouse(mouse, cat1, cat2) { //cat1 1, cat2 2
  let distcat1 = Math.abs(mouse - cat1)
  let distcat2 = Math.abs(mouse - cat2)
  if(distcat1 < distcat2) {
    return 'cat1'
  } else if(distcat2 < distcat1) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz(param) {
  let bug = []
  for(i = 0; i < param.length; i = i + 1)
  if (param[i] % 3 === 0 && param[i] % 5 === 0) { // 
     bug.push('fizzBuzz')
  }else if (param[i] % 5 === 0) {
     bug.push('buzz')
  } else if (param[i] % 3 === 0) {
    bug.push('fizz')
  } else if (param[i] % 3 !== 0 && param[i] % 5 !== 0) {
   bug.push('bug!') 
  }
  return bug
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
