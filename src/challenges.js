// Desafio 1 ===================================================================================================================
function compareTrue(B1, B2) {
  if((B1 == true) && (B2 == true)){
    return('true');
  } else {
    return('false');
  }
}
// Testes da função:--------------------------------------------------------------------------------------
console.log('Se Ambos os parâmetros forem verdadeiros, a função retorna: ' + compareTrue (true, true));
console.log('Se um ou ambos os parâmetros forem falsos, a função retorna: ' + compareTrue (true, false));
console.log('Se um ou ambos os parâmetros forem falsos, a função retorna: ' + compareTrue (false, true));
console.log('Se um ou ambos os parâmetros forem falsos, a função retorna: ' + compareTrue (false, false));
console.log('');

// Desafio 2 ===================================================================================================================
function calcArea(base, height) {
  return((base * height)/2);
  /*if(base > 0 && height > 0){
    return('Um triângulo de base = ' + base + ' e de altura = ' + height + ', possui área = ' + (base * height)/2 + ' u.a.');
  } else if((base <= 0) && (height > 0)){
    return('Não existe triângulo, com valor de base = ' + base);
  } else if((height <= 0) && (base > 0)){
    return('Não existe triângulo, com valor de altura = ' + height);
  } else {
    return('Não existe triângulo, com os respectivos valores de base e altura iguais a: ' + base + ' e ' + height);
  }*/
}
// Testes da função:----------
console.log(calcArea(6, 4));
console.log(calcArea(0, 4));
console.log(calcArea(6, 0));
console.log(calcArea(0, 0));
console.log('');

// Desafio 3 ===================================================================================================================
function splitSentence(sentence) {
  array = sentence.split(" ");
  return (array);
}
// Testes da função: ------------------
console.log(splitSentence("go Trybe"));
console.log('');

// Desafio 4 ===================================================================================================================
function concatName(sequence) {
  lastIndex = (sequence.length - 1);
  firstItem = sequence[0];
  lastItem = sequence[lastIndex];
  newSequence = (lastItem + ', ' + firstItem);
  return(newSequence);
}
// Testes da função: ------------------------------------------------
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log('');

// Desafio 5 ===================================================================================================================
function footballPoints(wins, ties) {
  if ((wins < 0) || (ties < 0)){
    return('Não existe vitória ou empate negativo!');
  }
  if ((wins >= 0) && (ties >= 0)){
    score = ((wins * 3) + (ties));
  }
  return('Total de pontos que o time marcou no campeonato = ' + score + '.');
}
// Testes da função: --------------
console.log(footballPoints(0, -1));
console.log(footballPoints(-1, 0));
console.log(footballPoints(0, 0));
console.log(footballPoints(1, 1));
console.log(footballPoints(3, 3));
console.log('');

// Desafio 6 ===================================================================================================================
function highestCount(sample) {
  compare = -10000000;
  cont = 0;
  for(index = 0 ; index < sample.length ; index = index + 1){
    if(sample[index] > compare){
      compare = sample[index];
    }
  }
  for(index = 0 ; index < sample.length ; index = index + 1){
    if(sample[index] === compare){
      cont = (cont + 1);
    }
  }
  if (cont > 1){
    return('O maior valor deste array é: '+ compare + '. Ele se repete '+ cont +' vezes dentro do array.');
  } else {
    return('O maior valor deste array é: '+ compare + '. Ele aparece apenas '+ cont +' vez dentro do array.');
  }
}
// Testes da função: -----------------------------
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([9, 1, 2, 3, 9, 51, 7]));
console.log('');

// Desafio 7 ===================================================================================================================
function catAndMouse(mouse, cat1, cat2) {
  getmouse1 = (mouse - cat1);
  getmouse2 = (mouse - cat2);
  if(getmouse1 == getmouse2){
    return("os gatos trombam e o rato foge");
  } else if (getmouse1 < getmouse2){
    return("cat1");
  } else if (getmouse2 < getmouse1){
    return("cat2");
  }
}
// Testes da função: --------------
console.log(catAndMouse(10, 8, 5));
console.log(catAndMouse(10, 1, 9));
console.log(catAndMouse(10, 9, 9));
console.log('');

// Desafio 8 ===================================================================================================================
function fizzBuzz(matriz) {
  newMatriz = [];
  for(index = 0 ; index < matriz.length ; index = index + 1){
    if((matriz[index] % 3 == 0) && (matriz[index] % 5 == 0)){
      newMatriz[index] = ('fizzBuzz');
    } else if ((matriz[index] % 3 != 0) && (matriz[index] % 5 != 0)){
      newMatriz[index] = ('bug!');
    } else if ((matriz[index] % 3 == 0) && (matriz[index] % 5 != 0)){
      newMatriz[index] = ('fizz');
    } else if ((matriz[index] % 3 != 0) && (matriz[index] % 5 == 0)){
      newMatriz[index] = ('buzz');
    }
  }
  return(newMatriz);
}
// Testes da função: --------------------
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log('');

// Desafio 9 ===================================================================================================================
function encode(stringIn) {
  afor1 = stringIn.replace(/a/g, "1");
  efor2 = afor1.replace(/e/g, "2");
  ifor3 = efor2.replace(/i/g, "3");
  ofor4 = ifor3.replace(/o/g, "4");
  ufor5 = ofor4.replace(/u/g, "5");
  allEncode = ufor5;
  return(allEncode); 
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
  return(allDecode); 
}
// Testes da função: ----------------
console.log(decode('1l2, l3x4 5m!'));
console.log('');

// Desafio 10 ===================================================================================================================
function techList(tech, name) {
  if(tech.length != 0){
    receive = [];
    for(index = 0 ; index < tech.length ; index = index +1){
      let object = {
      tech: tech[index],
      name: name
      }
      receive [index] = object;
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

// Desafio 11 ===================================================================================================================
function generatePhoneNumber(matriz) {
  cont = 0;
  checker1 = 0;
  checker2 = 9;
  inspector = 2;
  phoneNumber = [];
  comparator = matriz;
  // condição 1: array com número de elementos diferente de 11 -------------------------------
  if(matriz.length != 11){
    inspector = 0;
    phoneNumber = "Array com tamanho incorreto.";
  }
  // condição 2: (array[position] < 0) ou (array[position] > 9 -------------------------------
  if(matriz.length == 11){
    for(index = 0 ; index < matriz.length ; index = index + 1){
      if((matriz[index] < 0) || (matriz[index] > 9)){
        inspector = 1;
        index = (matriz.length - 1);
      }
    }
  }
  // condição 3: número repetido 3 vezes ou mais no array ------------------------------------
  for(item = 0 ; item < comparator.length ; item = item + 1){
    if(cont >= 3){
      inspector = 1;
      item = (comparator.length - 1);
    } else { 
        cont = 0;   
        for(index = 0 ; index < matriz.length ; index = index + 1){
          if(comparator[item] == matriz[index]){
            cont = cont + 1;
          }
        }
      }
  } 
  // condição 4: se tudo ok com o array, então retorna um número de telefone -----------------
  if(inspector == 1){
    phoneNumber = "não é possível gerar um número de telefone com esses valores";
  }
  if(inspector == 2){
    phoneNumber[0] = '(';
    phoneNumber[1] = matriz[0];
    phoneNumber[2] = matriz[1];
    phoneNumber[3] = ')';
    phoneNumber[4] = ' ';
    item = 5;
    for(index = 2 ; index < matriz.length ; index = index + 1){
      phoneNumber[item] = matriz[index];
      item = (item + 1);
      if (item == 10){
        phoneNumber[item] = '-';
        item = (item + 1);
      }
    }
    phoneNumber = phoneNumber.join('');
  }    
  return phoneNumber;
}
// Testes da função: ------------------------------------------------------------------------------------------------------------------
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); // deve retornar (12) 34567-8901
console.log('');
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1])); // "não é possível gerar um número de telefone com esses valores"
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1]));// "não é possível gerar um número de telefone com esses valores"
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 20]));// "não é possível gerar um número de telefone com esses valores"
console.log('');
console.log(generatePhoneNumber([]));// deve retornar: "Array com tamanho incorreto."
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));// deve retornar: "Array com tamanho incorreto."
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 7]));// deve retornar: "Array com tamanho incorreto."
console.log('');

// Desafio 12 ===================================================================================================================
function triangleCheck(lineA, lineB, lineC) {
  checkLineA = 0;
  checkLineB = 0;
  checkLineC = 0;
  possible = false;
  // condição-01: a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas
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
console.log(triangleCheck(10, 14, 800)); // deve retornar true
console.log('');

// Desafio 13 ===================================================================================================================
function hydrate(str) {
  soma = 0;
  var numbers = str.match(/\d+/g).map(Number);
  for(index = 0 ; index < numbers.length ; index = index + 1){
    soma = soma + numbers[index];
  }
  if(soma > 1){
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
