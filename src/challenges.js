// Desafio 1
function compareTrue(trueOrFalse1, truOrFalse2) {
  // seu código aqui

  return ((trueOrFalse1) && (truOrFalse2));
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = ((base * height) / 2);

  return triangleArea;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let arrayForSentence = frase.split(' ');

  return arrayForSentence;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let tamanhoString = arrayStrings.length - 1;
  let ultimoString = arrayStrings[tamanhoString];
  let primeiraString = arrayStrings[0];
  let stringResultado = `${ultimoString}, ${primeiraString}`;
  return stringResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  totalPoints = ((wins * 3) + (ties * 1));
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros.reduce((a, b) => Math.max(a, b));
  let quantMaior = somaMaiorNumero(maiorNumero, arrayNumeros);

  return quantMaior;
}

function somaMaiorNumero(numero, arrayNumeros) {
  let qdt = 0;
  let tamanhoArray = arrayNumeros.length;
  for (let i = 0; i < tamanhoArray; i += 1) {
    if (arrayNumeros[i] === numero) {
      qdt += 1;
    }
  }
  return qdt;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = 0;
  let distCat2 = 0;
  let stringResponse1 = '';
  let stringResponse2 = '';
  let responseQuestion = '';

  distCat1 = distanceForMouse(mouse, cat1);
  distCat2 = distanceForMouse(mouse, cat2);

  stringResponse1 = distanceInCats1(distCat1, distCat2);
  stringResponse2 = cat1ToCat2(cat1, cat2);

  responseQuestion = stringLength(stringResponse1, stringResponse2);

  return responseQuestion;
}

function distanceForMouse(mouses, cats) {
  let dist = mouses - cats;
  dist = Math.abs(dist);
  return dist;
}

function distanceInCats1(distCat1, distCat2) {
  let retorno = '';
  if (distCat1 === distCat2) {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}

function cat1ToCat2(cat1, cat2) {
  let distanceCats = 0;
  let retornoString = '';
  if (cat1 < cat2) {
    retornoString = 'cat1';
  } else {
    retornoString = 'cat2';
  }
  return retornoString;
}

function stringLength(string1, string2) {
  let widthString = string1.length;
  let stringCats = string1;

  if (widthString <= 0) {
    stringCats = string2;
  };
  return stringCats;
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  // seu código aqui
  let resultado = [];
  let ehResto3;
  let ehResto5;
  let arrayTamanho = arrayNumeros.length;

  for (let ind = 0; ind < arrayTamanho; ind += 1) {
    frase = '';
    ehResto3 = restCalculateTree(arrayNumeros[ind]);
    ehResto5 = restCalculateFive(arrayNumeros[ind]);
    frase += retornoFizzBuzz(ehResto3, ehResto5, frase);
    frase += verificaEhFizEhBug(ehResto3, ehResto5, frase);

    resultado.push(frase);
  };

  return resultado;
}

function restCalculateTree(numberArrayTree) {
  return (numberArrayTree % 3 === 0);
}

function restCalculateFive(numberArrayFive) {
  return (numberArrayFive % 5 === 0);
}

function retornoFizzBuzz(boleanoA01, boleanoA02, texto) {

  let retorno = texto;
  if (boleanoA01 && boleanoA02) {
    retorno = "fizzBuzz";
  }
  return retorno;
}

function verificaEhFizEhBug(ehResto3, ehResto5, frase) {
  if (frase === '') {
    frase += retornaFizz(ehResto3, ehResto5, frase);
    frase += retornaBug(frase);
    return frase;
  }
  return '';
}

function retornaFizz(resto3, resto5, palavra) {

  palavraSaida = retornoFizz(resto3, resto5, palavra);
  if (palavraSaida === '') {
    palavraSaida = retornoBuzz(resto3, resto5, palavra);
  }
  return palavraSaida;
}

function retornoFizz(boleanoF01, boleanoF02, palavra) {
  let voltaFizz = palavra;

  if (boleanoF01 && !boleanoF02) {
    voltaFizz = "fizz";
  }
  return voltaFizz;
}

function retornoBuzz(bolB01, bolB02, palavra) {
  let voltaBuzz = palavra;
  if (!bolB01 && bolB02) {
    voltaBuzz = "buzz";
    return voltaBuzz;
  }
  return '';
}

function retornaBug(stringBug) {
  if (stringBug === '') {
    stringBug = "bug!";
    return stringBug;
  }
  return '';
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aquii
}


objetoTech = techList()
// Desafio 10
function techList(arrayTech, arrayTech) {
  // seu código aqui
  const arrayTechSort = arrayTecno.sort();
  let tamanhoTechSort = arrayTechSort.length;
  let objetoResultado = [];
  let obj;

  for (let index = 0; index < tamanhoTechSort; index += 1) {

    obj = criaObj(arrayTechSort[index], nameInterested);
    objetoResultado.push(obj);
  }
  return objetoResultado;
}

function criaObj(tecnologia, pesarrayTechsoa) {
  let objeto = `{tech: ${tecnologia}, name: ${arrayTech}}`
  return objeto;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  let lengthArrayPhone = arrayNumberPhone.length;
  let numberArray = 0;
  let numberString = ''
  let numberPhoneGenerate = '';
  if (lengthArrayPhone !== 11){
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < lengthArrayPhone; index += 1) {
    numberArray = arrayNumberPhone[index];

    if (numberArray < 0 || numberArray > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }

    numberString += numberArray.toString();
  }
  numberPhoneGenerate = phoneNumber(numberString);

  return numberPhoneGenerate;
}

function phoneNumber(numberString) {
  let ddd = numberString.substr(0,2);
  let primeiraParte = numberString.substr(2,5);
  let segundaParte = numberString.substr(7,4);
  let numeroFormatado = `(${ddd}) ${primeiraParte}-${segundaParte}`

  return numeroFormatado;  
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
  let somaLados = (lineB + lineC);
  let subsLados = (lineB - lineC);
  let absoluto = Math.abs(subsLados);

  if (lineA >= somaLados){
    return false;
  }

  if (lineA > absoluto){
    return true;
  }

  return false;
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
