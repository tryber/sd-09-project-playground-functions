// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let splitted=phrase.split(' ')
  return splitted;
}

// Desafio 4
function concatName(namesArray) {
  // seu código aqui
  let received=[];
  let switched=[];
  for (i in namesArray){
    if (i==0){
      received.push(namesArray[i]);
    } else if (i==namesArray.length-1){
      received.push(namesArray[i]);
    }
  }
  switched.push(received[1]);
  switched.push(received[0]);
  let result=switched.join(', ');
  return result;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
let points = 3*wins + ties;
return points;
}

// Desafio 6
function highestCount(numbArray) {
  // seu código aqui
  let bigOne = 0;
  let counter = 0;
  for (i in numbArray){
    if (bigOne < numbArray[i]){
        bigOne = numbArray[i];
    }
  }
  for (j in numbArray){
    if (bigOne == numbArray[j]){
        counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let cat1D = 0;
  let cat2D = 0;
  
  cat1D=Math.abs(mouse-cat1);
  cat2D=Math.abs(mouse-cat2);

  if (cat1D==cat2D){
    return 'os gatos trombam e o rato foge';
  } else if (cat1D<cat2D){
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  //let results= [];
  //for (i in numbers){
    //if (numbers[i]%3=0){
      //results.push('fizzBuzz')
    //}
  //}
}

// Desafio 9
function encode(word) {
  // seu código aqui
  let wordArray=word.split('');
  for (i in wordArray){
    if(wordArray[i]=='a'){
      wordArray[i]=1;
    } else if (wordArray[i]=='e'){
      wordArray[i]=2;
    } else if (wordArray[i]=='i'){
      wordArray[i]=3;
    } else if (wordArray[i]=='o'){
      wordArray[i]=4;
    } else if (wordArray[i]=='u'){
      wordArray[i]=5;
    }
  }
  return wordArray.join('');
}
function decode(word) {
  // seu código aqui
  let wordArray=word.split('');
  for (i in wordArray){
    if(wordArray[i]==1){
      wordArray[i]='a';
    } else if (wordArray[i]==2){
      wordArray[i]='e';
    } else if (wordArray[i]==3){
      wordArray[i]='i';
    } else if (wordArray[i]==4){
      wordArray[i]='o';
    } else if (wordArray[i]==5){
      wordArray[i]='u';
    }
  }
  return wordArray.join('');
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
