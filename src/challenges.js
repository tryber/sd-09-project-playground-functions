// Desafio 1 =====================================================================================
function compareTrue(b1, b2) {
  let out
  if ((b1 === true) && (b2 === true)) {
    out = (true);
  } else {
    out = (false);
  }
  return (out);
}
// Testes da função:--------------------------------------------------------------------
console.log('Se Ambos os parâmetros forem verdadeiros: ' + compareTrue(true, true));
console.log('Se um ou ambos os parâmetros forem falsos: ' + compareTrue(true, false));
console.log('Se um ou ambos os parâmetros forem falsos: ' + compareTrue(false, true));
console.log('Se um ou ambos os parâmetros forem falsos: ' + compareTrue(false, false));
console.log('');

// Desafio 2 =====================================================================================
function calcArea(base, height) {
  return ((base * height) / 2);
}
// Testes da função:----------
console.log(calcArea(6, 4));
console.log(calcArea(0, 4));
console.log(calcArea(6, 0));
console.log(calcArea(0, 0));
console.log('');

// Desafio 3 =====================================================================================
function splitSentence(sentence) {
  let array = sentence.split(' ');
  return (array);
}
// Testes da função: ------------------
console.log(splitSentence('go Trybe'));
console.log('');

// Desafio 4 =====================================================================================
function concatName(sequence) {
  let lastIndex = (sequence.length - 1);
  let firstItem = sequence[0];
  let lastItem = sequence[lastIndex];
  let newSequence = (lastItem + ', ' + firstItem);
  return (newSequence);
}
// Testes da função: ------------------------------------------------
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log('');

// Desafio 5 =====================================================================================
function footballPoints(wins, ties) {
  let score = 0;
  if ((wins < 0) || (ties < 0)) {
    return ('Não existe vitória ou empate negativo!');
  }
  if ((wins >= 0) && (ties >= 0)) {
    score = ((wins * 3) + (ties));
  }
  return (score);
  // Assim seria melhor: return('Pontos que o time marcou no campeonato = ' + score + '.');
}
// Testes da função: --------------
console.log(footballPoints(0, -1));
console.log(footballPoints(-1, 0));
console.log(footballPoints(0, 0));
console.log(footballPoints(1, 1));
console.log(footballPoints(3, 3));
console.log('');

// Desafio 6 =====================================================================================
function highestCount(sample) {
  let compare = -100000;
  let cont = 0;
  let index = 0;
  for (index = 0; index < sample.length; index = index + 1) {
    if (sample[index] > compare) {
      compare = sample[index];
    }
  }
  for (index = 0; index < sample.length; index = index + 1) {
    if (sample[index] === compare) {
      cont = (cont + 1);
    }
  }
  return (cont);
}
// Testes da função: -----------------------------
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([9, 1, 2, 3, 9, 51, 7]));
console.log('');

// Desafio 7 =====================================================================================
function catAndMouse(mouse, cat1, cat2) {
  let getmouse1 = Math.abs(mouse - cat1);
  let getmouse2 = Math.abs(mouse - cat2);
  let out = undefined;
  if (getmouse1 == getmouse2) {
    out = ("os gatos trombam e o rato foge");
  } else if (getmouse1 < getmouse2) {
    out = ("cat1");
  } else if (getmouse2 < getmouse1) {
    out = ("cat2");
  }
  return (out);
}
// Testes da função: --------------
console.log(catAndMouse(2, -1, 5));
console.log(catAndMouse(2, -1, 1));
console.log(catAndMouse(10, 8, 5));
console.log(catAndMouse(10, 1, 9));
console.log(catAndMouse(10, 9, 9));
console.log('');

// Desafio 8 =====================================================================================
function fizzBuzz(matriz) {
  let newMatriz = [];
  for (index = 0; index < matriz.length; index = index + 1) {
    if ((matriz[index] % 3 == 0) && (matriz[index] % 5 == 0)) {
      newMatriz[index] = ('fizzBuzz');
    } else if ((matriz[index] % 3 != 0) && (matriz[index] % 5 != 0)) {
      newMatriz[index] = ('bug!');
    } else if ((matriz[index] % 3 == 0) && (matriz[index] % 5 != 0)) {
      newMatriz[index] = ('fizz');
    } else if ((matriz[index] % 3 != 0) && (matriz[index] % 5 == 0)) {
      newMatriz[index] = ('buzz');
    }
  }
  return (newMatriz);
}
// Testes da função: --------------------
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log('');

// Desafio 9 =====================================================================================
function encode(stringIn) {
  afor1 = stringIn.replace(/a/g, "1");
  efor2 = afor1.replace(/e/g, "2");
  ifor3 = efor2.replace(/i/g, "3");
  ofor4 = ifor3.replace(/o/g, "4");
  ufor5 = ofor4.replace(/u/g, "5");
  allEncode = ufor5;
  return (allEncode);
}
// Testes da função: ----------------
console.log(encode('ale, lixo um!'));
// ----------------------------------

function decode(encodeIn) {
  change1a = encodeIn.replace(/1/g, "a");
  change2e = change1a.replace(/2/g, "e");
  change3i = change2e.replace(/3/g, "i");
  change4o = change3i.replace(/4/g, "o");
  change5u = change4o.replace(/5/g, "u");
  allDecode = change5u;
  return (allDecode);
}
// Testes da função: ----------------
console.log(decode('1l2, l3x4 5m!'));
console.log('');

// Desafio 10 ====================================================================================
function techList(tech, name) {
  tech.sort();
  let receive = [];
  if (tech.length != 0) {
    for (index = 0 ; index < tech.length ; index = index +1) {
      let object = {
      name: name,
      tech: tech[index],
      }
      receive[index] = object;
    }
  } else {
    receive = 'Vazio!';
    }
  return receive;
}
// Testes da função: -----------------------------------------------------------
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Lucas"));
console.log('');

// Desafio 11 ====================================================================================
function generatePhoneNumber(matriz) {
  let cont = 0;
  let inspector = 2;
  let phoneNumber = [];
  let comparator = matriz;
  // condição 1: array com número de elementos diferente de 11 -------------------------------
  if (matriz.length != 11) {
    inspector = 0;
    phoneNumber = "Array com tamanho incorreto.";
  }
  // condição 2: (array[position] < 0) ou (array[position] > 9 -------------------------------
  if (matriz.length == 11) {
    for (index = 0 ; index < matriz.length ; index = index + 1) {
      if ((matriz[index] < 0) || (matriz[index] > 9)) {
        inspector = 1;
        index = (matriz.length - 1);
      }
    }
  }
  // condição 3: número repetido 3 vezes ou mais no array ------------------------------------
  for (item = 0 ; item < comparator.length ; item = item + 1) {
    if (cont >= 3) {
      inspector = 1;
      item = (comparator.length - 1);
    } else {
        cont = 0;
        for(index = 0 ; index < matriz.length ; index = index + 1) {
          if(comparator[item] == matriz[index]) {
            cont = cont + 1;
          }
        }
      }
  }
  // condição 4: se tudo ok com o array, então retorna um número de telefone -----------------
  if (inspector == 1) {
    phoneNumber = "não é possível gerar um número de telefone com esses valores";
  }
  if (inspector == 2) {
    phoneNumber[0] = '(';
    phoneNumber[1] = matriz[0];
    phoneNumber[2] = matriz[1];
    phoneNumber[3] = ')';
    phoneNumber[4] = ' ';
    item = 5;
    for (index = 2 ; index < matriz.length ; index = index + 1) {
      phoneNumber[item] = matriz[index];
      item = (item + 1);
      if (item == 10) {
        phoneNumber[item] = '-';
        item = (item + 1);
      }
    }
    phoneNumber = phoneNumber.join('');
  }
  return phoneNumber;
}
// Testes da função: -----------------------------------------------------------------------------
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // retorna (12) 34567-8901
console.log('');
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1])); // "não gera um número"
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));// "não gera um número"
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 20]));// "não gera um número"
console.log('');
console.log(generatePhoneNumber([]));// deve retornar: "Array com tamanho incorreto."
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// "Tamanho incorreto."
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 7]));// "Tamanho incorreto."
console.log('');

// Desafio 12 ====================================================================================
function triangleCheck(lineA, lineB, lineC) {
  let checkLineA = 0;
  let checkLineB = 0;
  let checkLineC = 0;
  let possible = false;
  // condição-01: (l1 < l2 + l3) e (l1 > l2 - l3)---------------------------
  if (((lineA) < (lineB + lineC)) && ((lineA) > Math.abs(lineB - lineC))){
    checkLineA = 1;
  }
  if (((lineB) < (lineA + lineC)) && ((lineB) > Math.abs(lineA - lineC))){
    checkLineB = 1;
  }
  if (((lineC) < (lineB + lineA)) && ((lineC) > Math.abs(lineB - lineA))){
    checkLineC = 1;
  }
  if((checkLineA == 1) && (checkLineB == 1) && (checkLineB == 1)){
    possible = true;
  }
  return possible;
}
// Testes da função: -------------------------------------------
console.log(triangleCheck(10, 14, 8)); // deve retornar true
console.log(triangleCheck(1, 14, 8)); // deve retornar false
console.log(triangleCheck(10, 1400, 8)); // deve retornar false
console.log(triangleCheck(10, 14, 800)); // deve retornar false
console.log('');

// Desafio 13 ====================================================================================
function hydrate(str) {
  let soma = 0;
  let sugestion = ('');
  var numbers = str.match(/\d+/g).map(Number);
  for (index = 0; index < numbers.length; index = index + 1) {
    soma = soma + numbers[index];
  }
  if (soma > 1) {
    sugestion = (soma + " copos de água");
  } else {
    sugestion = (soma + " copo de água")
  }
  return sugestion;
}
// Testes da função: -------------------------------------------
console.log(hydrate('1 cachaça'));
console.log(hydrate('1 cachaça, 5 cervejas e 9 copo de vinho'));


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
