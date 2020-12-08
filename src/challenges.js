// #VQV
// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui

  if (bool1 == true && bool2 == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = base * height / 2;
  return area;
}

console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let sentence = str;

  return sentence.split(" ");
  
}
console.log(splitSentence('Go, Tryber'));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let str1 = '';
  let str2 = '';

  let frase = '';

  for(let iten1 = 0; iten1 < arr.length; iten1 += 1) {
    for(let iten2 = arr.length - 1; iten2 >= 0; iten2 -= 1) {
  
      str1 = arr[iten2];
    }
    str2 = arr[iten1];
  }
  frase = str2 + ', ' + str1;
  return frase;
}

console.log(concatName(['Lucas', 'Bola', 'Silva']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins * 3 + ties; 

  return totalPoints;

}

console.log(footballPoints(10, 5))

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let maior = 0;
  let cont = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === maior) {
      cont += 1;
    }
  }


  return cont;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Math.abs => transforma em valor absoluto
 let distCat1 = Math.abs(cat1 - mouse);
 let distCat2 = Math.abs(cat2 - mouse); 

 
  if (distCat1 === distCat2) {
    return "os gatos trombam e o rato foge";
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  }

}

console.log(catAndMouse(1, 3, 2));

// Desafio 8
function fizzBuzz(numerosArray) {
  // seu código aqui
  let arrayBuzz = []

  for(let index = 0; index < numerosArray.length; index += 1) {
    
    if(numerosArray[index] % 3 === 0 && numerosArray[index] % 5 === 0) {
      arrayBuzz.push('fizzBuzz');

    } else if (numerosArray[index] % 3 === 0) {
      arrayBuzz.push('fizz');

    } else if (numerosArray[index] % 5 === 0) {
      arrayBuzz.push('buzz');

    } else {
      arrayBuzz.push('bug!');
    }

  }
      
  return arrayBuzz
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(str) {
  // seu código aqui
  let encodeNumbers = '';

  encodeNumbers = str.replace(/a/g, '1')
  encodeNumbers = encodeNumbers.replace(/e/g, '2');
  encodeNumbers = encodeNumbers.replace(/i/g, '3');
  encodeNumbers = encodeNumbers.replace(/o/g, '4');
  encodeNumbers = encodeNumbers.replace(/u/g, '5');

  return encodeNumbers;

}   

function decode(encodeNumbers) {
  // seu código aqui
  let decodeNunbers = '';

  decodeNunbers = encodeNumbers.replace(/1/g, 'a');
  decodeNunbers = decodeNunbers.replace(/2/g, 'e');
  decodeNunbers = decodeNunbers.replace(/3/g, 'i');
  decodeNunbers = decodeNunbers.replace(/4/g, 'o');
  decodeNunbers = decodeNunbers.replace(/5/g, 'u');

  return decodeNunbers;
  
}


// Desafio 10
function techList(nameList, name) {
  // seu código aqui

  if(nameList.length > 0) {
    let listObject = [];

    listObject.sort();

    for (index = 0; index < nameList.length; index += 1) {

      listObject[index] = {
      tech: nameList[index],
      name: name
    }

    return listObject
  
  }
    return 'Vazio'
  }
  
  
  /*let list = nameList;
  list.push(name)
 
  return list*/

}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"))
//console.log(techList([{tech: "CSS"}], "Lucas"))


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
